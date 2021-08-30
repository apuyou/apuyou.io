const UAParserJs = require('ua-parser-js');
const { v4: uuid } = require('uuid');

const get = (url) => fetch(url).then((resp) => resp.json());

const post = (url, data) =>
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
  }).then((resp) => resp.json());

export default async function handler(req, res) {
  const ipAddress = req.headers['x-forwarded-for'];
  if (!ipAddress) {
    res.status(200).json({ status: 'skip' });
    return;
  }

  const parsedBody = req.body;
  const uuidMatcher =
    /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
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
          event_type: 'view page',
          event_properties: parsedBody.pathname
            ? {
                pathname: parsedBody.pathname,
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
    if (req.headers['user-agent']) {
      const ua = UAParserJs(req.headers['user-agent']);
      amplitudeData.events[0].os_name = ua.browser.name;
      amplitudeData.events[0].os_version = ua.browser.version;
      amplitudeData.events[0].device_model = ua.os.name;
    }

    console.log('Sending data to Amplitude', amplitudeData);
    const data = await post(
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

    const dataIpdata = await get(URL);
    console.log('Received data from Ipdata for IP', ipAddress, dataIpdata);

    const slackData = {
      text: `New page view by device ${deviceId} from IP ${ipAddress} (${dataIpdata.city}, ${dataIpdata.region}, ${dataIpdata.country_name} ${dataIpdata.emoji_flag}) owned by ${dataIpdata.asn.name} (${dataIpdata.asn.domain})`,
      username: 'Statbot',
      icon_emoji: ':mag:',
    };
    const dataSlack = await post(process.env.SLACK_WEBHOOK_URL, slackData);
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

  res.status(200).json({ status });
}
