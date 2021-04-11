/** @jsxImportSource theme-ui */

import Intro from 'components/intro';
import Projects from 'components/projects';

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
    <>
      <Intro />
      <Projects />
    </>
  );
}
