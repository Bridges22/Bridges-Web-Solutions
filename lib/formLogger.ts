// Form submission logger for production environments
// This helps track form submissions even when email fails

interface FormSubmission {
  timestamp: string;
  name: string;
  email: string;
  phone?: string;
  business: string;
  website?: string;
  projectType: string;
  budget?: string;
  timeline?: string;
  message: string;
  source: string;
  status: string;
  userAgent?: string;
  ip?: string;
}

export class FormLogger {
  // Log to console with structured format
  static logSubmission(data: FormSubmission) {
    console.log('=== CONTACT FORM SUBMISSION ===');
    console.log('Timestamp:', data.timestamp);
    console.log('Name:', data.name);
    console.log('Email:', data.email);
    console.log('Phone:', data.phone || 'Not provided');
    console.log('Business:', data.business);
    console.log('Website:', data.website || 'None');
    console.log('Project Type:', data.projectType);
    console.log('Budget:', data.budget || 'Not specified');
    console.log('Timeline:', data.timeline || 'Not specified');
    console.log('Message:', data.message);
    console.log('Status:', data.status);
    console.log('================================');
  }

  // Send to webhook service (optional)
  static async sendToWebhook(data: FormSubmission, webhookUrl?: string) {
    if (!webhookUrl) return;

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log('Form data sent to webhook successfully');
      } else {
        console.error('Failed to send to webhook:', response.statusText);
      }
    } catch (error) {
      console.error('Webhook error:', error);
    }
  }

  // Create WhatsApp message for manual follow-up
  static createWhatsAppMessage(data: FormSubmission): string {
    return `Hi ${data.name}! Thanks for your interest in our web development services. I received your inquiry about ${data.projectType} for ${data.business}. Let me help you with your project. When would be a good time to discuss your requirements?`;
  }

  // Generate follow-up email template
  static createFollowUpEmail(data: FormSubmission): string {
    return `
Subject: Re: Your Web Development Inquiry - ${data.business}

Hi ${data.name},

Thank you for reaching out to Bridges Web Solutions! I received your inquiry about ${data.projectType} for ${data.business}.

Here's what I understood from your message:
- Project Type: ${data.projectType}
- Budget Range: ${data.budget || 'To be discussed'}
- Timeline: ${data.timeline || 'To be discussed'}
- Current Website: ${data.website || 'None'}

Your message: "${data.message}"

I'd love to discuss your project in detail and show you how we can help ${data.business} succeed online. 

Would you be available for a quick call this week? I can also provide you with:
- A detailed project proposal
- Portfolio examples relevant to your industry
- Timeline and pricing information

You can reach me directly at:
- WhatsApp: +254104613770
- Email: bridges.cybersec@gmail.com
- Phone: +254104613770

Looking forward to working with you!

Best regards,
Bridges Mwashighadi
Founder & Lead Developer
Bridges Web Solutions
    `.trim();
  }
}

// Export for use in API routes
export default FormLogger;
