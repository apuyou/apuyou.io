import React from 'react';
import { AnchorLink } from 'gatsby-plugin-anchor-links';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink to="/#blog">Blog</AnchorLink>
    <AnchorLink to="/#projects">Projects</AnchorLink>
    <AnchorLink to="/#skills">Skills</AnchorLink>
    <AnchorLink to="/#contact">Contact</AnchorLink>
  </Wrapper>
);

export default NavbarLinks;
