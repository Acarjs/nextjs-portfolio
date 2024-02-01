'use server';

import { Resend } from 'resend';
import { validateString, getErrorMessage } from '@/lib/utils';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid Email',
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  new Error('message');

  let data;
  try {
    data = await resend.emails.send({
      from: 'Portfolio Website Form <onboarding@resend.dev>',
      to: 'ostravba@gmail.com',
      subject: "Message from portfolio website's form",
      reply_to: senderEmail as string,
      text: message as string,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
