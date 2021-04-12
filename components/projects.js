/** @jsxImportSource theme-ui */

export default function Projects({ projects }) {
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
