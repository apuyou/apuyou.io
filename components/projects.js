/** @jsxImportSource theme-ui */
import { FaLink, FaGithub, FaProductHunt } from 'react-icons/fa';
import { useThemeUI } from 'theme-ui';

function ExternalUrl({ url, icon, title }) {
  const { theme } = useThemeUI();
  const Icon = icon;
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" title={title}>
      <Icon color={theme.colors.text} size="16" alt={title} />
    </a>
  );
}

export default function Projects({ projects }) {
  return (
    <>
      <h2>Projects</h2>
      <div
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: 2,
        }}
      >
        {projects.map(project => (
          <div
            key={project.id}
            sx={{
              borderColor: 'text',
              borderWidth: 1,
              borderStyle: 'solid',
              borderRadius: 5,
              padding: 1,
            }}
          >
            <h3>{project.name}</h3>
            <div>{project.description}</div>
            <div sx={{}}>
              {project.url && (
                <ExternalUrl
                  url={project.url}
                  title="Project URL"
                  icon={FaLink}
                />
              )}
              {project.githubUrl && (
                <ExternalUrl
                  url={project.githubUrl}
                  title="Project Github repository"
                  icon={FaGithub}
                />
              )}
              {project.producthuntUrl && (
                <ExternalUrl
                  url={project.producthuntUrl}
                  title="Project Product Hunt page"
                  icon={FaProductHunt}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
