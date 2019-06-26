import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Container } from 'Common';
import { Wrapper, Flex, Links } from './styles';
import { FaLinkedin, FaGithub, FaProductHunt, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query SiteSocialQuery {
      site {
        siteMetadata {
          socialLinks {
            twitter
            linkedin
            github
            producthunt
          }
        }
      }
    }
  `);
  const { socialLinks } = data.site.siteMetadata;

  return (
    <Wrapper>
      <Flex as={Container}>
        <Links>
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            title="Github"
          >
            <FaGithub color="#ebf3fe" size="24" alt="Github" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin color="#ebf3fe" size="24" alt="LinkedIn" />
          </a>
          <a
            href={socialLinks.producthunt}
            target="_blank"
            rel="noopener noreferrer"
            title="Product Hunt"
          >
            <FaProductHunt color="#ebf3fe" size="24" alt="Product Hunt" />
          </a>
          <a
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
          >
            <FaTwitter color="#ebf3fe" size="24" alt="Twitter" />
          </a>
        </Links>
      </Flex>
    </Wrapper>
  );
};
