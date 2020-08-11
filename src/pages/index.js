import React, { useEffect } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

import { Layout, SEO } from '../components/common';
import { Intro, Skills, Contact, Projects } from '../components/landing';
import Blog from '../components/landing/blog';

export default () => {
  useEffect(() => {
    let deviceId = localStorage.getItem('device-id');
    if (!deviceId) {
      deviceId = uuid();
      localStorage.setItem('device-id', deviceId);
    }
    axios.post('/.netlify/functions/view', {
      device_id: deviceId,
      referrer: document.referrer,
    });
  }, []);

  return (
    <Layout>
      <SEO />
      <Intro />
      <Blog />
      <Projects />
      <Skills />
      <Contact />
    </Layout>
  );
};
