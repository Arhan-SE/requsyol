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
  try {
    const { email, name, message, type } = req.body;

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

    // Send both emails
    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(clientMailOptions);

    return res.status(200).json({
      success: true,
      message: 'Emails sent successfully'
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({
      error: 'Failed to send email',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

app.listen(port, () => {
  console.log(`Dev API server running on http://localhost:${port}`);
});
