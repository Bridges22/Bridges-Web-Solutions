import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  console.log('=== API ROUTE CALLED ===');
  
  try {
    console.log('Attempting to parse request body...');
    const body = await request.json();
    console.log('Request body parsed successfully:', body);
    
    const { name, email, phone, business, website, projectType, budget, timeline, message } = body;

    // Debug logging
    console.log('=== EMAIL API DEBUG ===');
    console.log('Environment variables check:', {
      SMTP_USER: process.env.SMTP_USER ? 'SET' : 'MISSING',
      SMTP_PASS: process.env.SMTP_PASS ? 'SET' : 'MISSING',
      SMTP_HOST: process.env.SMTP_HOST ? 'SET' : 'MISSING',
      SMTP_PORT: process.env.SMTP_PORT ? 'SET' : 'MISSING',
      NODE_ENV: process.env.NODE_ENV
    });
    console.log('SMTP_USER value:', process.env.SMTP_USER);
    console.log('SMTP_HOST value:', process.env.SMTP_HOST);

    // Validate required fields
    if (!name || !email || !business || !projectType || !message) {
      console.log('Validation failed - missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check if environment variables are available
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('Missing SMTP environment variables - using fallback system');
      console.error('Available env vars:', Object.keys(process.env).filter(key => key.startsWith('SMTP')));
      
      // ALWAYS use fallback system when SMTP is unavailable
      const fallbackData = {
        timestamp: new Date().toISOString(),
        name, email, phone, business, website, projectType, budget, timeline, message,
        source: 'website_contact_form',
        status: 'smtp_unavailable'
      };
      
      // Log the submission data
      console.log('=== CONTACT FORM SUBMISSION (FALLBACK) ===');
      console.log('Timestamp:', fallbackData.timestamp);
      console.log('Name:', fallbackData.name);
      console.log('Email:', fallbackData.email);
      console.log('Phone:', fallbackData.phone || 'Not provided');
      console.log('Business:', fallbackData.business);
      console.log('Project Type:', fallbackData.projectType);
      console.log('Message:', fallbackData.message);
      console.log('Status:', fallbackData.status);
      console.log('==========================================');
      
      // ALWAYS return success to user
      return NextResponse.json(
        { 
          message: 'Your message has been received! We will contact you via WhatsApp or phone within 24 hours.',
          fallback: true,
          success: true
        },
        { status: 200 }
      );
    }

    // Create transporter with better error handling
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Email service temporarily unavailable. Please contact us via WhatsApp.' },
        { status: 500 }
      );
    }

    // Email content with better formatting
    const emailContent = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #1e40af; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
    New Project Inquiry from ${name}
  </h2>
  
  <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3 style="color: #374151; margin-top: 0;">Contact Information:</h3>
    <ul style="list-style: none; padding: 0;">
      <li style="margin: 8px 0;"><strong>Name:</strong> ${name}</li>
      <li style="margin: 8px 0;"><strong>Email:</strong> ${email}</li>
      <li style="margin: 8px 0;"><strong>Phone:</strong> ${phone || 'Not provided'}</li>
      <li style="margin: 8px 0;"><strong>Business:</strong> ${business}</li>
      <li style="margin: 8px 0;"><strong>Current Website:</strong> ${website || 'None'}</li>
    </ul>
  </div>

  <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3 style="color: #374151; margin-top: 0;">Project Details:</h3>
    <ul style="list-style: none; padding: 0;">
      <li style="margin: 8px 0;"><strong>Project Type:</strong> ${projectType}</li>
      <li style="margin: 8px 0;"><strong>Budget Range:</strong> ${budget || 'Not specified'}</li>
      <li style="margin: 8px 0;"><strong>Timeline:</strong> ${timeline || 'Not specified'}</li>
    </ul>
  </div>

  <div style="background-color: #fefce8; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3 style="color: #374151; margin-top: 0;">Message:</h3>
    <p style="line-height: 1.6; color: #4b5563;">${message}</p>
  </div>

  <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
    <p style="color: #6b7280; font-size: 14px;">
      This message was sent from your website contact form.<br>
      <strong>Reply directly to this email to respond to ${name}</strong>
    </p>
  </div>
</div>
    `;

    // Plain text version
    const textContent = `
New Project Inquiry from ${name}

Contact Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone || 'Not provided'}
- Business: ${business}
- Current Website: ${website || 'None'}

Project Details:
- Project Type: ${projectType}
- Budget Range: ${budget || 'Not specified'}
- Timeline: ${timeline || 'Not specified'}

Message:
${message}

---
This message was sent from your website contact form.
Reply directly to this email to respond to ${name}.
    `.trim();

    // Send email with improved configuration
    await transporter.sendMail({
      from: `"${name} via Bridges Web Solutions" <${process.env.SMTP_USER}>`,
      to: 'bridges.cybersec@gmail.com',
      subject: `🚀 New Project Inquiry: ${business} - ${projectType}`,
      text: textContent,
      html: emailContent,
      replyTo: email, // Direct replies go to the client
    });

    // Log successful email submission
    const successData = {
      timestamp: new Date().toISOString(),
      name, email, phone, business, website, projectType, budget, timeline, message,
      source: 'website_contact_form',
      status: 'email_sent_successfully',
      userAgent: request.headers.get('user-agent') || 'Unknown',
      ip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'Unknown'
    };
    
    // Log successful submission
    console.log('=== CONTACT FORM SUBMISSION (SUCCESS) ===');
    console.log('Timestamp:', successData.timestamp);
    console.log('Name:', successData.name);
    console.log('Email:', successData.email);
    console.log('Business:', successData.business);
    console.log('Project Type:', successData.projectType);
    console.log('Status:', successData.status);
    console.log('=========================================');

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('=== CRITICAL ERROR IN API ROUTE ===');
    console.error('Error type:', typeof error);
    console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    console.error('Environment check:', {
      hasSmtpUser: !!process.env.SMTP_USER,
      hasSmtpPass: !!process.env.SMTP_PASS,
      smtpUser: process.env.SMTP_USER,
      nodeEnv: process.env.NODE_ENV
    });
    console.error('=====================================');

    // Always return a valid JSON response
    return NextResponse.json(
      { 
        error: 'API Error occurred',
        message: 'There was an error processing your request. Please contact us via WhatsApp.',
        details: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}

// Add a GET endpoint for testing
export async function GET() {
  console.log('=== GET REQUEST TO CONTACT API ===');
  
  try {
    return NextResponse.json(
      { 
        message: 'Contact API is working',
        timestamp: new Date().toISOString(),
        environment: {
          hasSmtpUser: !!process.env.SMTP_USER,
          hasSmtpPass: !!process.env.SMTP_PASS,
          hasSmtpHost: !!process.env.SMTP_HOST,
          hasSmtpPort: !!process.env.SMTP_PORT,
          nodeEnv: process.env.NODE_ENV
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in GET endpoint:', error);
    return NextResponse.json(
      { 
        error: 'GET endpoint failed',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
