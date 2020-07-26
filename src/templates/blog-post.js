import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import 'prismjs/themes/prism-solarizedlight.css';

import { Layout, SEO, Container } from '../components/common';
import { Header } from '../components/theme';

export default function Template({ data }) {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO />
      <Header />
      <Container>
        <div className="blog-post-container">
          <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
          <div className="blog-post">
            <h1>{post.frontmatter.title}</h1>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
