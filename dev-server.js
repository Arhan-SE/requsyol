import express from 'express';
import fileUpload from 'express-fileupload';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3001;

app.use(express.json());
app.use(fileUpload());

// Configure nodemailer with Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

app.post('/api/send-email', async (req, res) => {
  const startTime = Date.now();
  try {
    const { email, name, message, type } = req.body;
    console.log(`[${new Date().toISOString()}] Email request received`);

    if (!email || !name || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Prepare attachments
    const attachments = [];
    if (req.files && req.files.file) {
      const file = req.files.file;
      attachments.push({
        filename: file.name,
        content: file.data,
      });
    }

    // Send confirmation email to user
    const userMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: `Confirmation: We received your ${type || 'inquiry'}`,
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>We've received your ${type || 'inquiry'} and will get back to you shortly.</p>
        <p>Our team typically responds within 24 hours.</p>
        <br />
        <p>Best regards,<br />The Requsyol Team</p>
      `,
    };

    // Send notification email to client (with attachments)
    const clientMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `New ${type || 'inquiry'} from ${name}`,
      html: `
        <h3>New Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Type:</strong> ${type || 'General Inquiry'}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      attachments,
    };

    // Send both emails in parallel
    await Promise.all([
      transporter.sendMail(userMailOptions),
      transporter.sendMail(clientMailOptions)
    ]);

    const duration = Date.now() - startTime;
    console.log(`[${new Date().toISOString()}] Emails sent successfully in ${duration}ms`);

    return res.status(200).json({
      success: true,
      message: 'Emails sent successfully'
    });
  } catch (error) {
    const duration = Date.now() - startTime;
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`[${new Date().toISOString()}] Email sending error after ${duration}ms:`, error);

    // Check for rate limiting errors
    const isRateLimited =
      errorMessage.includes('Too many login attempts') ||
      errorMessage.includes('Please try again later') ||
      errorMessage.includes('421') ||
      errorMessage.includes('429') ||
      errorMessage.includes('throttled');

    if (isRateLimited) {
      return res.status(429).json({
        error: 'Service temporarily unavailable',
        message: 'Too many emails sent. Please try again in a few minutes.',
        retryAfter: 300 // 5 minutes in seconds
      });
    }

    return res.status(500).json({
      error: 'Failed to send email',
      details: errorMessage
    });
  }
});

app.listen(port, () => {
  console.log(`Dev API server running on http://localhost:${port}`);
});
