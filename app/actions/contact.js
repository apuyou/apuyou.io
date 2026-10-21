'use server';

import { checkBotId } from 'botid/server';

export async function sendContactMessage({ sender, message }) {
  const { isBot } = await checkBotId();
  if (isBot) {
    return { error: 'Access denied' };
  }

  const { CONTACT_EMAIL } = process.env;

  if (
    typeof sender !== 'string' ||
    typeof message !== 'string' ||
    !sender ||
    !message
  ) {
    return { error: 'Invalid data' };
  }

  const data = {
    From: CONTACT_EMAIL,
    To: CONTACT_EMAIL,
    Subject: 'Contact on apuyou.io',
    TextBody: message,
    ReplyTo: sender,
    MessageStream: 'outbound',
  };

  const response = await fetch('https://api.postmarkapp.com/email', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Postmark-Server-Token': process.env.POSTMARK_SERVER_TOKEN,
    },
  });

  const responseData = await response.json();
  console.log('Sent message to Postmark:', responseData);

  if (responseData.ErrorCode) {
    return { error: 'Sending email failed' };
  }

  return { success: true };
}
