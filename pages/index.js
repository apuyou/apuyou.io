/** @jsxImportSource theme-ui */

import Layout from 'components/layout';
import Intro from 'components/intro';

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

  return (
    <Layout>
      <Intro />
    </Layout>
  );
}
