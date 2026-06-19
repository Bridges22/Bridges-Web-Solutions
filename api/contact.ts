import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Handle GET request for testing
  if (req.method === 'GET') {1
    return res.status(200).json({
      message: 'Contact API is working (Vercel Function)',
      timestamp: new Date().toISOString(),
      hasResendKey: !!process.env.RESEND_API_KEY
    });
  }

  // Handle POST request
  if (req.method === 'POST') {
    const { name, email, phone, business, website, projectType, budget, timeline, message } = req.body;

    // Validate required fields
    if (!name || !email || !business || !projectType || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // If no Resend API key, use fallback
    if (!process.env.RESEND_API_KEY) {
      console.log('=== CONTACT FORM SUBMISSION (Vercel Function) ===');
      console.log(JSON.stringify({
        timestamp: new Date().toISOString(),
        name, email, phone, business, website, projectType, budget, timeline, message
      }, null, 2));
      console.log('==========================================');
      
      return res.status(200).json({
        message: 'Your message has been received! We will contact you within 24 hours.',
        success: true,
        fallback: true
      });
    }

    // Send email with Resend
    try {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);

      const { data, error } = await resend.emails.send({
        from: 'Bridges Web Solutions <onboarding@resend.dev>',
        to: 'bridges.cybersec@gmail.com',
        subject: `🚀 New Project Inquiry: ${business} - ${projectType}`,
        replyTo: email,
        html: `
          <h2>New Project Inquiry</h2>
          <h3>Contact Information:</h3>
          <ul>
            <li><strong>Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone:</strong> ${phone || 'Not provided'}</li>
            <li><strong>Business:</strong> ${business}</li>
            <li><strong>Website:</strong> ${website || 'None'}</li>
          </ul>
          <h3>Project Details:</h3>
          <ul>
            <li><strong>Project Type:</strong> ${projectType}</li>
            <li><strong>Budget:</strong> ${budget || 'Not specified'}</li>
            <li><strong>Timeline:</strong> ${timeline || 'Not specified'}</li>
          </ul>
          <h3>Message:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><small>Submitted: ${new Date().toISOString()}</small></p>
        `,
        text: `New Project Inquiry from ${name}\n\nContact: ${email}\nPhone: ${phone || 'N/A'}\nBusiness: ${business}\n\nProject Type: ${projectType}\nMessage: ${message}`
      });

      if (error) {
        console.error('Resend error:', error);
        return res.status(500).json({ error: 'Failed to send email', details: error.message });
      }

      return res.status(200).json({ message: 'Email sent successfully', success: true, id: data?.id });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  }

  // Method not allowed
  return res.status(405).json({ error: 'Method not allowed' });
}
