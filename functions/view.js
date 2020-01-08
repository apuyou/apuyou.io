const axios = require('axios');

exports.handler = async function(event, context) {
  const ipAddress = event.headers['client-ip'];
  if (!ipAddress) {
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ status: 'skip' }),
    };
  }

  let status = 'ok';

  // Send hit to Amplitude
  try {
    // TODO send to Amplitude
  } catch (error) {
    console.error(
      'Failed sending to Amplitude',
      error.response.status,
      error.response.data
    );
    status = 'error';
  }

  // Resolve IP details and post to Slack
  try {
    const { IPDATA_API_KEY } = process.env;
    const URL = `https://api.ipdata.co/${ipAddress}?api-key=${IPDATA_API_KEY}`;
    console.log('IPData URL', URL);

    const { data } = await axios.get(URL);
    console.log('Received data for IP', ipAddress, data);

    // TODO send to slack
  } catch (error) {
    console.error(
      'IPData query failed',
      error.response.status,
      error.response.data
    );
    status = 'error';
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ status }),
  };
};
