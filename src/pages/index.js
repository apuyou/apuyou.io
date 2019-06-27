import React, { useEffect } from 'react';
import { Layout, SEO } from '../components/common';
import { Intro, Skills, Contact, Projects } from '../components/landing';

export default () => {
  useEffect(() => {
    import('amplitude-js').then(amplitude => {
      amplitude.getInstance().init('65f3ee7b7b7d7190d21c96c3c84ba07b', null, {
        includeUtm: true,
        includeReferrer: true,
      });
      amplitude.getInstance().logEvent('View homepage');
    });
  }, []);

  return (
    <Layout>
      <SEO />
      <Intro />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
};
