import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Card } from '../../common';
import Img from 'gatsby-image';
import { Wrapper, Grid, Item, Content, Links } from './styles';
import { FaLink, FaGithub, FaProductHunt } from 'react-icons/fa';

export const Projects = () => {
  const data = useStaticQuery(graphql`
    query GetProjects {
      allProjectsJson {
        nodes {
          id
          description
          name
          url
          githubUrl
          producthuntUrl
          period
          tags
          icon {
            childImageSharp {
              fixed(width: 64, height: 64) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>
        {data.allProjectsJson.nodes.map(node => (
          <Item key={node.id}>
            <Card>
              <Content>
                <div>
                  <Img fixed={node.icon.childImageSharp.fixed} />
                </div>
                <div>
                  <h3>{node.name}</h3>
                  <p>{node.period}</p>
                  <p>
                    {node.tags.map(tag => (
                      <span key={tag}>#{tag}</span>
                    ))}
                  </p>
                </div>
              </Content>
              <p>{node.description}</p>
              <Links>
                {node.url && (
                  <a
                    href={node.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Project URL"
                  >
                    <FaLink color="#404040" size="16" alt="Link" />
                  </a>
                )}
                {node.githubUrl && (
                  <a
                    href={node.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Project Github repository"
                  >
                    <FaGithub color="#404040" size="16" alt="Github" />
                  </a>
                )}
                {node.producthuntUrl && (
                  <a
                    href={node.producthuntUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Project Product Hunt page"
                  >
                    <FaProductHunt
                      color="#404040"
                      size="16"
                      alt="Product Hunt"
                    />
                  </a>
                )}
              </Links>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
