const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

let transporter;

// Create a test SMTP account automatically (no signup needed)
nodemailer.createTestAccount().then((testAccount) => {
  transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
  console.log('Ethereal test account ready:', testAccount.user);
});

app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const info = await transporter.sendMail({
      from: `"Portfolio Contact Form" <contact@portfolio-demo.com>`,
      to: 'syed@example.com',
      replyTo: email,
      subject: `New message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    console.log('Preview URL:', nodemailer.getTestMessageUrl(info));
    res.json({ success: true, previewUrl: nodemailer.getTestMessageUrl(info) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));