import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: VercelRequest, res: VercelResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, name, message, type } = req.body;

    // Validate required fields
    if (!email || !name || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send confirmation email to user
    const userEmailResult = await resend.emails.send({
      from: 'arhan@scalexai.tech',
      to: email,
      subject: 'We received your inquiry',
      html: `
        <h2>Thank you, ${name}!</h2>
        <p>We've received your ${type || 'inquiry'} and will get back to you shortly.</p>
        <p>Our team typically responds within 24 hours.</p>
        <br />
        <p>Best regards,<br />The Requsyol Team</p>
      `,
    });

    // Send notification email to client
    const clientEmailResult = await resend.emails.send({
      from: 'arhan@scalexai.tech',
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
};
