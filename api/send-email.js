import nodemailer from 'nodemailer';
import formidable from 'formidable';
import fs from 'fs/promises';

// Initialize nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD,
  },
});

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const startTime = Date.now();
  try {
    const form = formidable();
    const [fields, files] = await form.parse(req);

    // Extract fields (formidable returns arrays, so take the first element)
    const email = fields.email?.[0] || '';
    const name = fields.name?.[0] || '';
    const message = fields.message?.[0] || '';
    const type = fields.type?.[0] || '';

    console.log(`[${new Date().toISOString()}] Email request received`);

    if (!email || !name || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Prepare attachments
    const attachments = [];
    if (files.file && files.file.length > 0) {
      const fileArray = files.file;
      for (const file of fileArray) {
        const fileContent = await fs.readFile(file.filepath);
        attachments.push({
          filename: file.originalFilename,
          content: fileContent,
        });
      }
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
      clientSubject = `Recruitment Enquiry`;
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
        retryAfter: 300
      });
    }

    return res.status(500).json({
      error: 'Failed to send email',
      details: errorMessage
    });
  }
}
