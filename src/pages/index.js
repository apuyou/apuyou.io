import React, { useEffect } from 'react';
import { Layout, SEO } from '../components/common';
import { Intro, Skills, Contact, Projects } from '../components/landing';
import axios from 'axios';

export default () => {
  useEffect(() => {
    if (window.analytics) {
      window.analytics.track('View homepage');
    }
    axios.get('/.netlify/functions/view');
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
