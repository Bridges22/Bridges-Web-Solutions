import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
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
      console.error('Missing SMTP environment variables');
      console.error('Available env vars:', Object.keys(process.env).filter(key => key.startsWith('SMTP')));
      return NextResponse.json(
        { 
          error: 'Email service not configured. Please contact us via WhatsApp.',
          debug: {
            hasSmtpUser: !!process.env.SMTP_USER,
            hasSmtpPass: !!process.env.SMTP_PASS,
            envKeys: Object.keys(process.env).filter(key => key.startsWith('SMTP'))
          }
        },
        { status: 500 }
      );
    }

    // Create transporter with better error handling
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use Gmail service for better compatibility
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // Remove debug and logger for production
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
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

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    
    // More detailed error logging for debugging
    console.error('Environment check:', {
      hasSmtpUser: !!process.env.SMTP_USER,
      hasSmtpPass: !!process.env.SMTP_PASS,
      smtpUser: process.env.SMTP_USER,
    });

    return NextResponse.json(
      { 
        error: 'Failed to send email. Please contact us directly via WhatsApp.',
        details: process.env.NODE_ENV === 'development' ? (error instanceof Error ? error.message : 'Unknown error') : undefined
      },
      { status: 500 }
    );
  }
}
