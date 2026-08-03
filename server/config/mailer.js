const nodemailer = require('nodemailer');

function getTransporter() {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) return null;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
}

// Fire-and-forget: never throws, so a broken SMTP config never breaks a lead submission.
async function notifyNewLead(lead) {
  try {
    const transporter = getTransporter();
    if (!transporter) return;
    await transporter.sendMail({
      from: `"JK Chaat Cafe Website" <${process.env.SMTP_USER}>`,
      to: process.env.NOTIFY_EMAIL || process.env.SMTP_USER,
      subject: `New ${lead.type.replace('_', ' ')} lead — ${lead.name}`,
      html: `
        <h3>New lead from the website</h3>
        <p><b>Type:</b> ${lead.type}</p>
        <p><b>Name:</b> ${lead.name}</p>
        <p><b>Phone:</b> ${lead.phone}</p>
        <p><b>Email:</b> ${lead.email || '-'}</p>
        <p><b>City:</b> ${lead.city || '-'}</p>
        <p><b>Package:</b> ${lead.package || '-'}</p>
        <p><b>Budget:</b> ${lead.budget || '-'}</p>
        <p><b>Message:</b> ${lead.message || '-'}</p>
      `,
    });
  } catch (err) {
    console.error('Email notification failed (non-fatal):', err.message);
  }
}

module.exports = { notifyNewLead };
