// src/app/api/send-email/route.js
import sendEmail from '@/services/sendMail';

export async function POST(request) {
  const { to, subject, text } = await request.json();

  try {
    const response = await sendEmail({ subject, text, to });
    return new Response(JSON.stringify({ message: 'Email sent!' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Something went wrong!' }), { status: 503 });
  }
}
