import nodemailer from 'nodemailer';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  const { name, phone, email, service, message } = body;

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

  const mailOptions = {
    from: `"${name}" <${config.smtpUser || 'no-reply@r-e-d.co.za'}>`,
    replyTo: email,
    to: config.leadDeskEmail,
    subject: `New Lead: ${service} from ${name}`,
    html: `
      <h2>New Lead Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Service Requested:</strong> ${service}</p>
      <br />
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Email sent successfully' };
  } catch (error: any) {
    console.error('Error sending email:', error);
    throw createError({ statusCode: 500, statusMessage: 'Failed to send email.' });
  }
});
