const axios = require('axios');

exports.handler = async function(event, context) {
  const { API_KEY } = process.env;
  const ipAddress = '2601:8:be00:cf20:ca60:ff:fe09:35b5';
  const URL = `https://api.ipdata.co/${ipAddress}?api-key=${API_KEY}`;

  console.log('Constructed URL is ...', URL);

  try {
    const { data } = await axios.get(URL);
    console.log('Received data for IP', ipAddress, data);

    return {
      statusCode: 200,
      body: JSON.stringify({ status: 'ok' }),
    };
  } catch (error) {
    console.error('IPData query failed', JSON.stringify(error.response));
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ status: 'error' }),
    };
  }
};
