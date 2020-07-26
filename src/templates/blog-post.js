import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import 'prismjs/themes/prism-solarizedlight.css';
import { legalName } from 'Data';

import { Layout, SEO, Container } from '../components/common';
import { Header } from '../components/theme';

export default function Template({ data }) {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO />
      <Header />
      <Container>
        <div>
          <Helmet title={`${post.frontmatter.title} - ${legalName}`} />
          <div className="blog-post">
            <h1>{post.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
