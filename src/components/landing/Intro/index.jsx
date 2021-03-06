import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { useStaticQuery, graphql } from 'gatsby';
import { Container, Button } from '../../common';
import maker from '../../../../static/illustrations/maker.svg';
import { Header } from '../../theme';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const data = useStaticQuery(graphql`
    query SiteDescriptionQuery {
      site {
        siteMetadata {
          description
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details>
          <h1>Hi!</h1>
          <h4>{data.site.siteMetadata.description}</h4>
          <Button as={AnchorLink} to="/#contact">
            Contact me
          </Button>
        </Details>
        <Thumbnail>
          <img src={maker} alt="Illustration of a man launching a rocket" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
