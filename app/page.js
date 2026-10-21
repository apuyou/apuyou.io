import Contact from 'components/contact';
import Intro from 'components/intro';
import Posts from 'components/posts';
import Projects from 'components/projects';
import Skills from 'components/skills';
import projectsData from 'data/projects.json';
import { getPosts } from 'data/posts';

export default function HomePage() {
  return (
    <>
      <Intro />
      <Posts posts={getPosts().filter((p) => !p.metadata.draft)} />
      <Projects projects={projectsData} />
      <Skills />
      <Contact />
    </>
  );
}
