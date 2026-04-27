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

    // Build user confirmation email based on type
    let userSubject = '';
    let userHtml = '';

    if (type === 'careers') {
      const jobTitleMatch = message.match(/Position: (.+?)(?:\n|$)/);
      const jobTitle = jobTitleMatch ? jobTitleMatch[1] : 'your application';
      userSubject = `Confirmation: Application Received`;
      userHtml = `
        <p>Hi ${name},</p>
        <p>Thank you for reaching out to Requsyol regarding the ${jobTitle} position. My name is Queency Rodrigues, and I am confirming that we have received your profile for review.</p>
        <p>Please be advised that due to the high volume of candidates we are currently processing, we are unable to provide individual feedback or status updates for every applicant. Furthermore, receipt of your application does not create an obligation for Requsyol to move forward with an interview or offer of employment.</p>
        <p>If your qualifications align with our current needs, a member of our team will contact you directly to discuss the next steps. We appreciate your interest in Requsyol and thank you for your understanding regarding our review process.</p>
        <p>Best regards,<br /><br />Queency Rodrigues</p>
      `;
    } else if (type === 'contact') {
      userSubject = `Confirmation: Message Received`;
      userHtml = `
        <p>Hi ${name},</p>
        <p>Thank you for getting in touch with us. My name is Loyster Pascoal, and I am confirming that I have received your message.</p>
        <p>Our team will review the information provided and, depending on the criteria of the message, we will try to consider this on high priority. We will contact you as soon as possible to discuss the next steps.</p>
        <p>We appreciate your interest in Requsyol and look forward to connecting with you.</p>
        <p>Best regards,<br /><br />Loyster Pascoal</p>
      `;
    } else if (type === 'candidate') {
      userSubject = `Confirmation: Registration Received`;
      userHtml = `
        <p>Hi ${name},</p>
        <p>Thank you for registering with Requsyol. My name is Queency Rodrigues, and I am confirming that we have received your profile for review.</p>
        <p>Please be advised that due to the high volume of candidates we are currently processing, we are unable to provide individual feedback or status updates for every applicant. Furthermore, receipt of your registration does not create an obligation for Requsyol to move forward with an interview or offer of employment.</p>
        <p>If your qualifications align with our current needs, a member of our team will contact you directly to discuss the next steps. We appreciate your interest in Requsyol and thank you for your understanding regarding our review process.</p>
        <p>Best regards,<br /><br />Queency Rodrigues</p>
      `;
    } else if (type === 'inquiry') {
      userSubject = `Confirmation: Inquiry Received`;
      userHtml = `
        <p>Hi ${name},</p>
        <p>Thank you for your inquiry. My name is Loyster Pascoal, and I am confirming that we have received your message.</p>
        <p>Our team will review your staffing requirements and get back to you as soon as possible to discuss the next steps and how we can support your organization.</p>
        <p>We appreciate your interest in Requsyol and look forward to connecting with you.</p>
        <p>Best regards,<br /><br />Loyster Pascoal</p>
      `;
    }

    const userMailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: userSubject,
      html: userHtml,
    };

    // Send notification email to client (with attachments)
    let clientSubject = '';
    let clientHtml = '';

    if (type === 'careers') {
      clientSubject = `New CV Submission - ${name}`;
      const detailsMessage = message.replace(/Name: .+?\n/, '').replace(/\n/g, '<br>');
      clientHtml = `
        <h3>New CV Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${detailsMessage}</p>
        ${attachments.length > 0 ? `<p><strong>CV Attached</strong></p>` : ''}
      `;
    } else if (type === 'candidate') {
      clientSubject = `New Candidate Registration - ${name}`;
      clientHtml = `
        <h3>New Candidate Registration</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${message.match(/Phone: (.+?)(?:\n|$)/) ? message.match(/Phone: (.+?)(?:\n|$)/)[1] : 'Not provided'}</p>
        <hr />
        ${attachments.length > 0 ? `<p><strong>Resume Attached</strong></p>` : '<p><em>No resume attached</em></p>'}
      `;
    } else if (type === 'contact') {
      clientSubject = `New Contact Form Submission - ${name}`;
      clientHtml = `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `;
    } else if (type === 'inquiry') {
      clientSubject = `New Employer Inquiry - ${name}`;
      const detailsMessage = message.replace(/Contact Person: .+?\n/, '').replace(/\n/g, '<br>');
      clientHtml = `
        <h3>New Employer Inquiry</h3>
        <p><strong>Contact Person:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p><strong>Details:</strong></p>
        <p>${detailsMessage}</p>
        ${attachments.length > 0 ? `<p><strong>Job Description Attached</strong></p>` : ''}
      `;
    }

    const clientMailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: clientSubject,
      html: clientHtml,
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
