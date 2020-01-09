import React, { useEffect } from 'react';
import { Layout, SEO } from '../components/common';
import { Intro, Skills, Contact, Projects } from '../components/landing';
import axios from 'axios';
import uuid from 'uuid/v4';

export default () => {
  useEffect(() => {
    let deviceId = localStorage.getItem('device-id');
    if (!deviceId) {
      deviceId = uuid();
      localStorage.setItem('device-id', deviceId);
    }
    axios.post('/.netlify/functions/view', { device_id: deviceId });
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
