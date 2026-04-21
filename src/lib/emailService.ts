interface SendEmailData {
  email: string;
  name: string;
  message: string;
  type: 'contact' | 'careers' | 'inquiry' | 'candidate';
}

export async function sendEmail(data: SendEmailData) {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to send email');
    }

    return await response.json();
  } catch (error) {
    console.error('Email service error:', error);
    throw error;
  }
}
