/** @jsxImportSource theme-ui */

import Head from 'next/head';

import Intro from 'components/intro';
import Posts from 'components/posts';
import Projects from 'components/projects';
import projectsData from 'data/projects.json';
import { getPosts } from 'data/posts';

export default function HomePage({ posts, projects }) {
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
      <Head>
        <title>Arthur Puyou – Freelance Developer &amp; Project Manager</title>
      </Head>
      <Intro />
      <Posts posts={posts} />
      <Projects projects={projects} />
    </>
  );
}

export async function getStaticProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
      projects: projectsData,
    },
  };
}
