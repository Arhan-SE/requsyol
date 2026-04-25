interface SendEmailData {
  email: string;
  name: string;
  message: string;
  type: 'contact' | 'careers' | 'inquiry' | 'candidate';
  file?: File;
}

export async function sendEmail(data: SendEmailData) {
  try {
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('name', data.name);
    formData.append('message', data.message);
    formData.append('type', data.type);
    if (data.file) {
      formData.append('file', data.file);
    }

    const response = await fetch('/api/send-email', {
      method: 'POST',
      body: formData,
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
