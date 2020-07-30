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

  const parsedBody = JSON.parse(event.body);
  const uuidMatcher = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
  const deviceId =
    parsedBody &&
    parsedBody.device_id &&
    parsedBody.device_id.match(uuidMatcher)
      ? parsedBody.device_id
      : uuid();

  let status = 'ok';

  // Send hit to Amplitude
  try {
    const amplitudeData = {
      api_key: process.env.AMPLITUDE_API_KEY,
      events: [
        {
          device_id: deviceId,
          event_type: parsedBody.post ? 'view post' : 'view homepage',
          event_properties: parsedBody.post
            ? {
                title: parsedBody.post,
              }
            : {},
          user_properties: parsedBody.referrer
            ? {
                referrer: parsedBody.referrer,
              }
            : {},
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
    const { data: dataSlack } = await axios.post(
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
