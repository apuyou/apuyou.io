import React from 'react';

import Layout from 'components/layout';

export default function HomePage() {
  // useEffect(() => {
  //   let deviceId = localStorage.getItem('device-id');
  //   if (!deviceId) {
  //     deviceId = uuid();
  //     localStorage.setItem('device-id', deviceId);
  //   }
  //   axios.post('/.netlify/functions/view', {
  //     device_id: deviceId,
  //     referrer: document.referrer,
  //   });
  // }, []);

  return <Layout>Hi</Layout>;
}
