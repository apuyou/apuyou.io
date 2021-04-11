/** @jsxImportSource theme-ui */

import projects from 'data/projects.json';

export default function Projects() {
  return (
    <>
      <h2>Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </>
  );
}
