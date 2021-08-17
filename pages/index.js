/** @jsxImportSource theme-ui */

import Intro from 'components/intro';
import Posts from 'components/posts';
import Projects from 'components/projects';
import projectsData from 'data/projects.json';
import { getPosts } from 'data/posts';

export default function HomePage({ posts, projects }) {
  return (
    <>
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
