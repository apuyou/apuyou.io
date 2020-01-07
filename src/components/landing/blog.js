import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Container, Card, Button } from '../common';
import Img from 'gatsby-image';
import {
  Wrapper,
  Grid,
  Item,
  Content,
  Links,
  Header,
  ShowAllContainer,
} from './Projects/styles';

export default function Blog() {
  const data = useStaticQuery(graphql`
    query IndexQuery {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            excerpt(pruneLength: 250)
            id
            frontmatter {
              title
              date(formatString: "DD MMMM YYYY")
              slug
            }
          }
        }
      }
      file(name: { eq: "project" }, extension: { eq: "png" }) {
        id
        childImageSharp {
          fixed(width: 64, height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const { edges: posts } = data.allMarkdownRemark;

  return (
    <Wrapper as={Container} id="blog">
      <h2>Blog</h2>
      <Grid>
        {posts.map(({ node: post }) => (
          <Item key={post.id}>
            <Card>
              <Content>
                <Header>
                  <div>
                    <Img fixed={data.file.childImageSharp.fixed} />
                  </div>
                  <div>
                    <h3>{post.frontmatter.title}</h3>
                    <p>{post.frontmatter.date}</p>
                    <p>
                      {/* {node.tags.map(tag => (
                        <span key={tag}>#{tag}</span>
                      ))} */}
                    </p>
                  </div>
                </Header>
                <p>{post.excerpt}</p>
                <Links>
                  <Link to={`blog/${post.frontmatter.slug}`}>Read →</Link>
                </Links>
              </Content>
            </Card>
          </Item>
        ))}
      </Grid>
      {!posts.length > 4 && (
        <ShowAllContainer>
          <Button onClick={() => true}>Show more</Button>
        </ShowAllContainer>
      )}
    </Wrapper>
  );
}
