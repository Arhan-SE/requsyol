import express from 'express';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3001;

app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/send-email', async (req, res) => {
  try {
    const { email, name, message, type } = req.body;

    if (!email || !name || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const userEmailResult = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'arhan.se.dev@gmail.com',
      subject: `Confirmation: We received your inquiry from ${name}`,
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>We've received your ${type || 'inquiry'} from ${email} and will get back to you shortly.</p>
        <p>Our team typically responds within 24 hours.</p>
        <br />
        <p>Best regards,<br />The Requsyol Team</p>
      `,
    });

    const clientEmailResult = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'arhan.se.dev@gmail.com',
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
    });

    if (userEmailResult.error || clientEmailResult.error) {
      return res.status(500).json({
        error: 'Failed to send emails',
        details: userEmailResult.error || clientEmailResult.error
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Emails sent successfully'
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

app.listen(port, () => {
  console.log(`Dev API server running on http://localhost:${port}`);
});
