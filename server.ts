import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';
import nodemailer from 'nodemailer';

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Middleware to parse JSON
  server.use(express.json());

  // Email sending endpoint
  server.post('/api/send-email', async (req, res): Promise<void> => {
    try {
      const { name, email, phone, subject, message } = req.body;

      // Validate required fields
      if (!name || !email || !message) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
      }

      // Create transporter - configure with your email service
      // For Gmail, use an App Password: https://myaccount.google.com/apppasswords
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env['EMAIL_USER'] || 'your-email@gmail.com',
          pass: process.env['EMAIL_PASSWORD'] || 'your-app-password'
        }
      });

      // Email to send to your inbox
      const mailOptions = {
        from: process.env['EMAIL_USER'] || 'noreply@vmfuturetech.com',
        to: 'mallikharjuna485@gmail.com',
        subject: `New Contact Form Submission from VM Future Tech Pvt Ltd: ${subject || 'No Subject'}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${subject || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <p><em>This is an automated message from VM Future Tech Pvt Ltd website contact form.</em></p>
        `
      };

      // Send email
      await transporter.sendMail(mailOptions);

      res.json({ 
        success: true, 
        message: 'Email sent successfully!' 
      });

    } catch (error) {
      console.error('Email sending error:', error);
      res.status(500).json({ 
        error: 'Failed to send email',
        message: error instanceof Error ? error.message : 'Unknown error'
      });
    }
  });

  // Serve static files from /browser
  server.get('*.*', express.static(browserDistFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Angular engine
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
