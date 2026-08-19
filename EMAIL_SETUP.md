# Email Service Setup Guide

This guide explains how to configure the contact form email service to send messages to your inbox.

## Prerequisites

The application uses **Gmail** as the email service provider via Nodemailer. To enable email sending, you need to:

1. Have a Gmail account
2. Generate an App Password (not your regular Gmail password)

## Step-by-Step Setup

### 1. Generate Gmail App Password

1. Go to your Google Account: [myaccount.google.com](https://myaccount.google.com)
2. Click on **Security** in the left sidebar
3. Enable **2-Step Verification** if not already enabled:
   - Scroll down and find "2-Step Verification"
   - Click it and follow Google's instructions
4. Generate an **App Password**:
   - Go back to Security
   - Scroll down to find **App Passwords** (only appears after 2-Step Verification is on)
   - Select **Mail** and **Windows Computer** (or your OS)
   - Google will generate a 16-character password (e.g., `abcd efgh ijkl mnop`)
   - Copy this password

### 2. Configure Environment Variables

Create a `.env` file in the root of your project with the following content:

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

Replace:
- `your-gmail@gmail.com` with your actual Gmail address
- `abcd efgh ijkl mnop` with the 16-character app password you generated

**Important**: Never commit the `.env` file to version control. Add it to `.gitignore`:

```
.env
.env.local
```

### 3. How the Email Service Works

- **Form Submitted**: User fills out the "Send Us a Message" form on the Contact page
- **Backend Process**: The form data is sent to the `/api/send-email` endpoint on the server
- **Email Sent**: Your Gmail account sends an email to: `mallikharjuna485@gmail.com`
- **Email Contents**: The email includes:
  - Visitor's name
  - Visitor's email address
  - Visitor's phone number (if provided)
  - Subject line
  - Full message content

### 4. Run the Application

```bash
npm start
```

The application will:
1. Start the Angular development server on `http://localhost:4200`
2. Start the Express backend on `http://localhost:4000`

### 5. Test the Email Service

1. Navigate to the Contact page
2. Fill out the form with test data
3. Click "Send Message"
4. You should see a success message: "Thank you! We've received your message and will get back to you soon."
5. Check your email (mallikharjuna485@gmail.com) for the received message

## Troubleshooting

### Email Not Sending

- **Check Environment Variables**: Verify `.env` file exists and has correct Gmail credentials
- **2-Step Verification**: Ensure 2-Step Verification is enabled on your Google account
- **App Password**: Verify you're using the correct 16-character App Password (not your regular Gmail password)
- **Server Logs**: Check the terminal running the server for error messages

### Common Errors

**INVALID_LOGIN_401**: 
- The email or password is incorrect
- The App Password was not generated correctly
- Regular Gmail password was used instead of App Password

**Failed to send email**:
- Check internet connection
- Verify Gmail account is not locked
- Check if less secure apps need to be enabled (shouldn't be needed with App Password)

## Production Deployment

For production environments:

1. Use environment variables provided by your hosting platform (Heroku, Vercel, AWS, etc.)
2. Set `EMAIL_USER` and `EMAIL_PASSWORD` in your platform's environment variables
3. Never commit `.env` to version control

## Alternative Email Services

If you want to use a different email service instead of Gmail, update the transporter configuration in `server.ts`:

```typescript
const transporter = nodemailer.createTransport({
  service: 'gmail', // Change this to: 'outlook', 'yahoo', etc.
  auth: {
    user: process.env['EMAIL_USER'],
    pass: process.env['EMAIL_PASSWORD']
  }
});
```

Or for custom SMTP servers, use:

```typescript
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env['EMAIL_USER'],
    pass: process.env['EMAIL_PASSWORD']
  }
});
```

## Support

For more information on Nodemailer configuration:
- [Nodemailer Documentation](https://nodemailer.com/)
- [Gmail App Passwords Help](https://support.google.com/accounts/answer/185833)
