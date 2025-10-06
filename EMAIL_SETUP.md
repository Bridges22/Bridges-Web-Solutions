# Email Setup Instructions

## Problem Fixed
Your contact form was only showing a fake success message but not actually sending emails. I've implemented a real email system.

## What I Changed
1. **Created API route** (`/app/api/contact/route.ts`) to handle form submissions
2. **Updated contact form** to send real data to the API
3. **Added error handling** with proper user feedback
4. **Integrated Nodemailer** for email sending

## Setup Required

### 1. Install Dependencies
Run this command in your project directory:
```bash
npm install
```

### 2. Configure Email Settings
Create a `.env.local` file in your project root with these settings:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=bridges.cybersec@gmail.com
SMTP_PASS=your-app-password-here
```

### 3. Gmail Setup (Recommended)
Since you're using `bridges.cybersec@gmail.com`, follow these steps:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this 16-character password as `SMTP_PASS`

### 4. Alternative Email Providers
If you prefer other providers:

**Outlook/Hotmail:**
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

**Custom SMTP:**
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_USER=your-email@domain.com
SMTP_PASS=your-password
```

## Testing
1. Start your development server: `npm run dev`
2. Go to `/contact` page
3. Fill out and submit the form
4. Check your email inbox for the message

## Troubleshooting
- **"Failed to send email"**: Check your SMTP credentials
- **Gmail not working**: Ensure you're using an App Password, not your regular password
- **Port issues**: Try port 465 with `secure: true` for some providers

## Security Notes
- Never commit `.env.local` to version control
- Use App Passwords instead of regular passwords
- Consider using services like SendGrid or Resend for production
