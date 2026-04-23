interface SendEmailData {
  email: string;
  name: string;
  message: string;
  type: 'contact' | 'careers' | 'inquiry' | 'candidate';
}

export function sendEmail(data: SendEmailData) {
  const subject = `New ${data.type || 'inquiry'} from ${data.name}`;
  const body = `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
  const mailtoLink = `mailto:hr@requsyol.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  window.location.href = mailtoLink;

  return Promise.resolve({ success: true });
}
