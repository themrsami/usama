// src/services/sendMail.js
import transporter from '@/lib/nodemailer';

export default async function sendEmail({ subject, text, to }) {
  const mailOptions = {
    from: process.env.GMAIL_APP_USERNAME,
    to: process.env.RECIEVER_EMAIL,
    subject,
    text,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        return reject('Unable to send email');
      }
      const message = `Message delivered to ${info.accepted}`;
      console.log(message);
      return resolve(message);
    });
  });
}
