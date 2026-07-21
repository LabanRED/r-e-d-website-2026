import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const formData = await readMultipartFormData(event);

  if (!formData) {
    throw createError({ statusCode: 400, statusMessage: 'No form data received.' });
  }

  let name = '';
  let email = '';
  let portfolio = '';
  let motivation = '';
  let file: any = null;

  for (const field of formData) {
    if (field.name === 'name') name = field.data.toString();
    else if (field.name === 'email') email = field.data.toString();
    else if (field.name === 'portfolio') portfolio = field.data.toString();
    else if (field.name === 'motivation') motivation = field.data.toString();
    else if (field.name === 'file' && field.filename) file = field;
  }

  if (!name || !email) {
    throw createError({ statusCode: 400, statusMessage: 'Name and email are required.' });
  }

  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: parseInt(config.smtpPort || '587'),
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
  });

  const attachments = [];
  if (file) {
    attachments.push({
      filename: file.filename,
      content: file.data,
      contentType: file.type
    });
  }

  const mailOptions = {
    from: `"${name}" <${config.smtpUser || 'no-reply@r-e-d.co.za'}>`,
    replyTo: email,
    to: config.leadDeskEmail,
    subject: `New Career Application from ${name}`,
    html: `
      <h2>New Career Application</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Portfolio/LinkedIn:</strong> ${portfolio}</p>
      <br />
      <p><strong>Motivation:</strong></p>
      <p>${motivation}</p>
    `,
    attachments,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Application sent successfully' };
  } catch (error: any) {
    console.error('Error sending career email:', error);
    throw createError({ statusCode: 500, statusMessage: 'Failed to send application.' });
  }
});
