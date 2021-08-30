/** @jsxImportSource theme-ui */
import { useState } from 'react';
import { FaLink, FaGithub, FaProductHunt } from 'react-icons/fa';
import { useThemeUI, Button } from 'theme-ui';
import Image from 'next/image';

import Grid from 'components/grid';
import GridItem from 'components/griditem';

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
      <h2 id="projects">Projects</h2>
      <Grid>
        {visibleProjects.map((project) => (
          <GridItem key={project.id}>
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
                <Image src={project.icon} width={50} height={50} alt="" />
              </div>
              <div>
                <h3 sx={{ margin: 0 }}>{project.name}</h3>
                <h4 sx={{ margin: 0 }}>{project.period}</h4>
              </div>
            </div>
            <div sx={{ marginBottom: 3 }}>{project.description}</div>
            <div sx={{ marginBottom: 3 }}>
              {project.tags.map((t) => `#${t} `)}
            </div>
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
          </GridItem>
        ))}
      </Grid>
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
