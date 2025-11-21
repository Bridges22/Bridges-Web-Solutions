# Web3Forms Setup Guide

Your contact form has been configured to use **Web3Forms** for email notifications. Follow these simple steps to complete the setup.

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Your Web3Forms Access Key

1. Visit [https://web3forms.com](https://web3forms.com)
2. Click **"Get Started for Free"**
3. Enter the email address where you want to receive form submissions (e.g., `bridges.cybersec@gmail.com`)
4. Check your email inbox for the access key
5. Copy the access key (it looks like: `a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6`)

### Step 2: Add Access Key to Your Environment

#### For Local Development:

Create a `.env.local` file in your project root and add:

```env
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

#### For Production (Vercel/Netlify):

Add the environment variable to your hosting platform:

**Vercel:**
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` = `your_access_key_here`
4. Redeploy your site

**Netlify:**
1. Go to Site settings → Environment variables
2. Add: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` = `your_access_key_here`
3. Redeploy your site

### Step 3: Test Your Form

1. Start your development server: `npm run dev`
2. Navigate to the contact page
3. Fill out and submit the form
4. Check your email for the notification

## ✨ What You Get

- ✅ **Email notifications** sent directly to your inbox
- ✅ **Unlimited form submissions** (free tier)
- ✅ **Built-in spam protection** with honeypot and reCAPTCHA support
- ✅ **No backend code required** - works directly from the frontend
- ✅ **No credit card required**

## 📧 Email Format

You'll receive beautifully formatted emails with:
- Contact information (name, email, phone)
- Business details
- Project type, budget, and timeline
- Full message content
- Automatic subject line with project details

## 🔧 Customization Options

### Change Notification Email

To change where notifications are sent:
1. Get a new access key from Web3Forms with the new email
2. Update your environment variable with the new key

### Add Custom Fields

The form currently sends these fields:
- `name`, `email`, `phone`
- `business`, `website`
- `projectType`, `budget`, `timeline`
- `message`

### Enable reCAPTCHA (Optional)

Add Google reCAPTCHA for extra spam protection:
1. Get a reCAPTCHA site key from Google
2. Add to your form data:
```javascript
recaptcha_response: 'your-recaptcha-token'
```

## 🐛 Troubleshooting

### Form Not Sending?

1. **Check your access key**: Make sure it's correctly added to `.env.local`
2. **Restart dev server**: After adding environment variables, restart with `npm run dev`
3. **Check console**: Open browser DevTools and look for any error messages
4. **Verify email**: Make sure the email address associated with your access key is correct

### Not Receiving Emails?

1. **Check spam folder**: Web3Forms emails might be filtered
2. **Verify access key**: Log in to Web3Forms dashboard to check if submissions are being received
3. **Email whitelist**: Add `noreply@web3forms.com` to your contacts

## 📊 Monitoring Submissions

View all form submissions:
1. Go to [https://web3forms.com/platforms](https://web3forms.com/platforms)
2. Log in with your email
3. See all submissions in your dashboard

## 🔒 Security

- Access key is public-safe (starts with `NEXT_PUBLIC_`)
- Built-in spam protection
- No sensitive backend configuration needed
- GDPR compliant

## 📚 Additional Resources

- [Web3Forms Documentation](https://docs.web3forms.com)
- [Web3Forms Dashboard](https://web3forms.com/platforms)
- [Support](https://web3forms.com/contact)

---

**Need Help?** If you encounter any issues, check the browser console for error messages or visit the Web3Forms documentation.
