export async function POST(request) {
  const { CONTACT_EMAIL } = process.env;
  const { sender, message } = await request.json().catch(() => ({}));

  if (!sender || !message) {
    return Response.json({ error: 'Invalid data' }, { status: 400 });
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
    return Response.json({ error: 'Sending email failed' }, { status: 400 });
  }

  return Response.json({ success: true });
}
