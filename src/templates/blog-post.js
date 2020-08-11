import React, { useEffect } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { graphql } from 'gatsby';
import 'prismjs/themes/prism-solarizedlight.css';
import { legalName } from 'Data';

import { Layout, SEO, Container } from '../components/common';
import { Header } from '../components/theme';

export default function Template({ data }) {
  const { markdownRemark: post } = data;

  useEffect(() => {
    let deviceId = localStorage.getItem('device-id');
    if (!deviceId) {
      deviceId = uuid();
      localStorage.setItem('device-id', deviceId);
    }
    axios.post('/.netlify/functions/view', {
      device_id: deviceId,
      referrer: document.referrer,
      post: post.frontmatter.title,
    });
  }, [post]);

  return (
    <Layout>
      <SEO
        title={`${post.frontmatter.title} - ${legalName}`}
        description={post.excerpt}
      />
      <Header />
      <Container>
        <div>
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
      excerpt(pruneLength: 250)
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`;
