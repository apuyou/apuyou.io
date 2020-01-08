const axios = require('axios');
const UAParserJs = require('ua-parser-js');
const uuid = require('uuid/v4');

exports.handler = async function(event, context) {
  const ipAddress = event.headers['client-ip'];
  if (!ipAddress) {
    return {
      statusCode: error.response.status,
      body: JSON.stringify({ status: 'skip' }),
    };
  }

  let status = 'ok';
  const deviceId = uuid();

  // Send hit to Amplitude
  try {
    const amplitudeData = {
      api_key: process.env.AMPLITUDE_API_KEY,
      events: [
        {
          device_id: deviceId,
          event_type: 'view homepage',
          ip: ipAddress,
          platform: 'Web',
          insert_id: uuid(),
        },
      ],
    };
    if (event.headers['user-agent']) {
      const ua = UAParserJs(event.headers['user-agent']);
      amplitudeData.events[0].os_name = ua.browser.name;
      amplitudeData.events[0].os_version = ua.browser.version;
      amplitudeData.events[0].device_model = ua.os.name;
    }

    console.log('Sending data to Amplitude', amplitudeData);
    const { data } = await axios.post(
      'https://api.amplitude.com/2/httpapi',
      amplitudeData
    );
    console.log('Received data from Amplitude', data);
  } catch (error) {
    if (error.response) {
      console.error(
        'Request Amplitude failed',
        error.response.status,
        error.response.data
      );
    } else {
      console.error(error);
    }
    status = 'error';
  }

  // Resolve IP details and post to Slack
  try {
    const { IPDATA_API_KEY } = process.env;
    const URL = `https://api.ipdata.co/${ipAddress}?api-key=${IPDATA_API_KEY}`;
    console.log('IPData URL', URL);

    const { data: dataIpdata } = await axios.get(URL);
    console.log('Received data from Ipdata for IP', ipAddress, dataIpdata);

    const slackData = {
      text: `New page view by device ${deviceId} from IP ${ipAddress} (${dataIpdata.city}, ${dataIpdata.region}, ${dataIpdata.country_name} ${dataIpdata.emoji_flag}) owned by ${dataIpdata.asn.name} (${dataIpdata.asn.domain})`,
      username: 'Statbot',
      icon_emoji: ':mag:',
    };
    const { data: dataSlack } = axios.post(
      process.env.SLACK_WEBHOOK_URL,
      slackData
    );
    console.log('Received data from Slack', dataSlack);
  } catch (error) {
    if (error.response) {
      console.error(
        'Request Ipdata/Slack failed',
        error.response.status,
        error.response.data
      );
    } else {
      console.error(error);
    }
    status = 'error';
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ status }),
  };
};
