/** @jsxImportSource theme-ui */
import { useState } from 'react';
import { FaLink, FaGithub, FaProductHunt } from 'react-icons/fa';
import { useThemeUI, Button } from 'theme-ui';
import Image from 'next/image';

function ExternalUrl({ url, icon, title }) {
  const { theme } = useThemeUI();
  const Icon = icon;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      sx={{ marginRight: 2 }}
    >
      <Icon color={theme.colors.text} size="16" alt={title} />
    </a>
  );
}

export default function Projects({ projects }) {
  const [expanded, setExpanded] = useState(false);

  const visibleProjects = expanded ? projects : projects?.slice(0, 4);

  return (
    <>
      <h2>Projects</h2>
      <div
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: ['1fr', 'repeat(2, 1fr)'],
          gridGap: 2,
        }}
      >
        {visibleProjects.map(project => (
          <div
            key={project.id}
            sx={{
              borderColor: 'secondary',
              borderWidth: 1,
              borderStyle: 'solid',
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 2,
              }}
            >
              <div
                sx={{
                  width: 50,
                  height: 50,
                  flexShrink: 0,
                  marginRight: 2,
                }}
              >
                <Image src={project.icon} width={50} height={50} />
              </div>
              <h3 sx={{ margin: 0 }}>{project.name}</h3>
            </div>
            <div sx={{ marginBottom: 3 }}>{project.description}</div>
            <div sx={{ marginTop: 'auto' }}>
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
      {!expanded && (
        <div
          sx={{
            marginTop: 3,
            display: 'flex',
            justifyContent: 'center',
            marginX: 'auto',
          }}
        >
          <Button onClick={() => setExpanded(true)}>View all</Button>
        </div>
      )}
    </>
  );
}
