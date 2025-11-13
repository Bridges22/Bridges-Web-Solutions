# Email Setup Guide for Vercel Deployment

## Quick Fix for Contact Form Emails

Your contact form is currently showing a 405 error because the email service isn't configured on Vercel. Follow these steps to fix it:

## Option 1: Resend (Recommended - 5 minutes setup)

### Step 1: Sign up for Resend
1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account (100 emails/month free)
3. Verify your email address

### Step 2: Get your API Key
1. Once logged in, go to **API Keys** section
2. Click **"Create API Key"**
3. Give it a name like "Bridges Web Solutions"
4. Copy the API key (starts with `re_`)

### Step 3: Add to Vercel Environment Variables
1. Go to your Vercel dashboard: [https://vercel.com](https://vercel.com)
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add a new variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** Your API key from Resend (e.g., `re_123abc...`)
   - **Environment:** Select all (Production, Preview, Development)
5. Click **Save**

### Step 4: Redeploy your site
1. Go to the **Deployments** tab in Vercel
2. Find your latest deployment
3. Click the three dots menu → **Redeploy**
4. Wait for deployment to complete

### Step 5: (Optional) Use Custom Domain Email
To send from your own domain instead of `onboarding@resend.dev`:
1. In Resend dashboard, go to **Domains**
2. Add your domain (e.g., bridgeswebsolutions.com)
3. Follow their DNS verification steps
4. Update line 167 in `/app/api/contact/route.ts`:
   ```typescript
   from: 'Bridges Web Solutions <contact@bridgeswebsolutions.com>',
   ```

## Option 2: Alternative Solutions

### Use EmailJS (No backend required)
If Resend doesn't work, you can use EmailJS:
1. Sign up at [https://www.emailjs.com](https://www.emailjs.com)
2. Get 200 emails/month free
3. No server-side code needed

### Use Formspree
Simple form backend service:
1. Sign up at [https://formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update the contact form to POST directly to Formspree

## Testing Your Contact Form

After setup, test your form:
1. Go to your live site
2. Fill out the contact form with test data
3. Check your email at `bridges.cybersec@gmail.com`
4. The email should arrive within 1-2 minutes

## Troubleshooting

### Still getting 405 error?
- Make sure you added the environment variable to Vercel
- Redeploy after adding the variable
- Check the function logs in Vercel dashboard

### Emails not arriving?
- Check spam folder
- Verify the API key is correct
- Check Resend dashboard for sent emails log

### Need immediate help?
The form has a fallback system - even if email fails, submissions are logged to the Vercel console. You can view these in:
**Vercel Dashboard → Functions → Logs**

## Current Status
✅ API route is updated and ready
✅ Fallback system active (logs submissions if email fails)
✅ Beautiful HTML email template configured
⏳ Waiting for: Resend API key to be added to Vercel

## Support
If you need help with setup:
- Check Resend documentation: https://resend.com/docs
- Vercel environment variables: https://vercel.com/docs/environment-variables

---

**Note:** The contact form will show success to users even if email fails (fallback mode), so you won't lose any inquiries. They're logged in Vercel's function logs.
