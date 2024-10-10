// src/lib/nodemailer.js
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.GMAIL_APP_USERNAME,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export default transporter;
