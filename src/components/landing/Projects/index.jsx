import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Card } from '../../common';
import Img from 'gatsby-image';
import { Wrapper, Grid, Item, Content, Description } from './styles';

export const Projects = () => {
  const data = useStaticQuery(graphql`
    query GetProjects {
      allProjectsJson {
        nodes {
          id
          description
          name
          url
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
          <Item
            key={node.id}
            as="a"
            href={node.url}
            target="_blank"
            rel="noopener noreferrer"
          >
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
              <Description>{node.description}</Description>
            </Card>
          </Item>
        ))}
      </Grid>
    </Wrapper>
  );
};
