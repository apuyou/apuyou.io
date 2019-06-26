import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
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
          intro
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
          <h4>{data.site.siteMetadata.intro}</h4>
          <Button as={AnchorLink} href="#contact">
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
