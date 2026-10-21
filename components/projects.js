'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaLink, FaGithub, FaProductHunt } from 'react-icons/fa';

import Button from 'components/button';
import styles from 'components/card.module.css';
import Grid from 'components/grid';
import GridItem from 'components/griditem';

function ExternalUrl({ url, icon, title }) {
  const Icon = icon;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className={styles.link}
    >
      <Icon color="var(--color-text)" size="16" alt={title} />
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
            <div className={styles.header}>
              <div className={styles.icon}>
                <Image
                  src={project.icon}
                  width={50}
                  height={50}
                  alt=""
                  className={styles.image}
                />
              </div>
              <div>
                <h3 className={styles.title}>{project.name}</h3>
                <h4 className={styles.title}>{project.period}</h4>
              </div>
            </div>
            <div className={styles.text}>{project.description}</div>
            <div className={styles.text}>
              {project.tags.map((t) => `#${t} `)}
            </div>
            <div className={styles.links}>
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
        <div className={styles.more}>
          <Button onClick={() => setExpanded(true)}>View all</Button>
        </div>
      )}
    </>
  );
}
