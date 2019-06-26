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
          social {
            icon
            name
            url
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Flex as={Container}>
        <Links>
          {data.site.siteMetadata.social.map(({ icon, name, url }) => (
            <a
              key={icon}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`follow me on ${icon}`}
            >
              {icon === 'linkedin' && (
                <FaLinkedin color="#ebf3fe" size="24" alt={name} />
              )}
              {icon === 'github' && (
                <FaGithub color="#ebf3fe" size="24" alt={name} />
              )}
              {icon === 'producthunt' && (
                <FaProductHunt color="#ebf3fe" size="24" alt={name} />
              )}
              {icon === 'twitter' && (
                <FaTwitter color="#ebf3fe" size="24" alt={name} />
              )}
            </a>
          ))}
        </Links>
      </Flex>
    </Wrapper>
  );
};
