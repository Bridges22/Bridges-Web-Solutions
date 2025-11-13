import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// CORS headers for production
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

// Handle preflight requests
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, { status: 200, headers: corsHeaders });
}

export async function POST(request: NextRequest) {
  console.log('=== Contact Form API Called ===');
  
  try {
    const body = await request.json();
    const { name, email, phone, business, website, projectType, budget, timeline, message } = body;

    // Validate required fields
    if (!name || !email || !business || !projectType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400, headers: corsHeaders }
      );
    }

    // Check if Resend API key is available
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY not found - using fallback');
      
      // Fallback: Log the contact and return success
      const fallbackData = {
        timestamp: new Date().toISOString(),
        name, email, phone, business, website, projectType, budget, timeline, message,
        source: 'website_contact_form',
        status: 'email_service_unavailable'
      };
      
      console.log('=== CONTACT FORM SUBMISSION (FALLBACK) ===');
      console.log(JSON.stringify(fallbackData, null, 2));
      console.log('==========================================');
      
      return NextResponse.json(
        { 
          message: 'Your message has been received! We will contact you via WhatsApp or phone within 24 hours.',
          fallback: true,
          success: true
        },
        { status: 200, headers: corsHeaders }
      );
    }

    // Initialize Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Email HTML content
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <div style="background-color: #f6f9fc; padding: 40px 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
      <!-- Header -->
      <div style="background: linear-gradient(135deg, #3b82f6 0%, #1e40af 100%); padding: 30px; text-align: center;">
        <h1 style="margin: 0; color: white; font-size: 24px;">New Project Inquiry</h1>
        <p style="margin: 10px 0 0; color: rgba(255,255,255,0.9); font-size: 14px;">from ${business}</p>
      </div>
      
      <!-- Content -->
      <div style="padding: 30px;">
        <!-- Contact Info -->
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="margin: 0 0 15px; color: #1e293b; font-size: 18px; font-weight: 600;">
            📋 Contact Information
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Name:</td>
              <td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 500;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Phone:</td>
              <td style="padding: 8px 0; color: #1e293b; font-size: 14px;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Business:</td>
              <td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 500;">${business}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Website:</td>
              <td style="padding: 8px 0; color: #1e293b; font-size: 14px;">${website || 'None'}</td>
            </tr>
          </table>
        </div>
        
        <!-- Project Details -->
        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="margin: 0 0 15px; color: #1e293b; font-size: 18px; font-weight: 600;">
            🚀 Project Details
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Project Type:</td>
              <td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 500;">${projectType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Budget:</td>
              <td style="padding: 8px 0; color: #1e293b; font-size: 14px;">${budget || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Timeline:</td>
              <td style="padding: 8px 0; color: #1e293b; font-size: 14px;">${timeline || 'Not specified'}</td>
            </tr>
          </table>
        </div>
        
        <!-- Message -->
        <div style="background-color: #fefce8; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="margin: 0 0 15px; color: #1e293b; font-size: 18px; font-weight: 600;">
            💬 Message
          </h2>
          <p style="margin: 0; color: #475569; font-size: 14px; line-height: 1.6;">
            ${message.replace(/\n/g, '<br>')}
          </p>
        </div>
        
        <!-- Quick Actions -->
        <div style="background-color: #e0f2fe; padding: 20px; border-radius: 8px; text-align: center;">
          <p style="margin: 0 0 15px; color: #0369a1; font-size: 14px; font-weight: 600;">Quick Actions</p>
          <div style="display: inline-block;">
            <a href="mailto:${email}?subject=Re: ${projectType} Project Inquiry" 
               style="display: inline-block; padding: 10px 20px; margin: 0 5px; background-color: #3b82f6; color: white; text-decoration: none; border-radius: 5px; font-size: 14px;">
              Reply to ${name}
            </a>
            ${phone ? `<a href="tel:${phone}" style="display: inline-block; padding: 10px 20px; margin: 0 5px; background-color: #10b981; color: white; text-decoration: none; border-radius: 5px; font-size: 14px;">Call ${name}</a>` : ''}
          </div>
        </div>
      </div>
      
      <!-- Footer -->
      <div style="padding: 20px; background-color: #f8fafc; text-align: center; border-top: 1px solid #e2e8f0;">
        <p style="margin: 0; color: #64748b; font-size: 12px;">
          This inquiry was submitted via your website contact form<br>
          <strong>${new Date().toLocaleString('en-US', { timeZone: 'Africa/Nairobi' })} EAT</strong>
        </p>
      </div>
    </div>
  </div>
</body>
</html>
    `;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Bridges Web Solutions <onboarding@resend.dev>', // You'll need to verify your domain
      to: 'bridges.cybersec@gmail.com',
      subject: `🚀 New Project Inquiry: ${business} - ${projectType}`,
      replyTo: email,
      html: emailHtml,
      text: `New Project Inquiry from ${name}\n\nContact Information:\n- Name: ${name}\n- Email: ${email}\n- Phone: ${phone || 'Not provided'}\n- Business: ${business}\n- Website: ${website || 'None'}\n\nProject Details:\n- Project Type: ${projectType}\n- Budget: ${budget || 'Not specified'}\n- Timeline: ${timeline || 'Not specified'}\n\nMessage:\n${message}\n\n---\nSubmitted: ${new Date().toISOString()}`
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { 
          error: 'Failed to send email',
          message: 'There was an error sending your message. Please contact us via WhatsApp.',
          details: error.message
        },
        { status: 500, headers: corsHeaders }
      );
    }

    console.log('Email sent successfully:', data);

    return NextResponse.json(
      { 
        message: 'Email sent successfully',
        success: true,
        id: data?.id
      },
      { status: 200, headers: corsHeaders }
    );

  } catch (error) {
    console.error('API Route Error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        message: 'There was an error processing your request. Please contact us via WhatsApp.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500, headers: corsHeaders }
    );
  }
}

// GET endpoint for testing
export async function GET() {
  return NextResponse.json(
    { 
      message: 'Contact API is working',
      timestamp: new Date().toISOString(),
      environment: {
        hasResendKey: !!process.env.RESEND_API_KEY,
        nodeEnv: process.env.NODE_ENV || 'production'
      }
    },
    { status: 200, headers: corsHeaders }
  );
}
