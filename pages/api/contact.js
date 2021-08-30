export default async function handler(req, res) {
  const { CONTACT_EMAIL } = process.env;
  const { sender, message } = req.body;

  if (!sender || !message) {
    res.status(400).json({ error: 'Invalid data' });
    return;
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
    res.status(400).json({ error: 'Sending email failed' });
    return;
  }

  res.status(200).json({ success: true });
}
