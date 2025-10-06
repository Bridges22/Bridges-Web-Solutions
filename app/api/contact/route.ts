import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, business, website, projectType, budget, timeline, message } = body;

    // Validate required fields
    if (!name || !email || !business || !projectType || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter (you'll need to configure this with your email provider)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your email
        pass: process.env.SMTP_PASS, // Your email password or app password
      },
      debug: true, // Enable debug output
      logger: true // Log to console
    });

    // Email content
    const emailContent = `
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
    `.trim();

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: 'bridges.cybersec@gmail.com', // Your email address
      subject: `New Project Inquiry from ${name} - ${business}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
      replyTo: email, // Allow you to reply directly to the client
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    console.error('SMTP Config:', {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      passLength: process.env.SMTP_PASS?.length
    });
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
