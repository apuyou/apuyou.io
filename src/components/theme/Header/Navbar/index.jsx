import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Container } from 'Common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query SiteNavbarQuery {
      site {
        siteMetadata {
          legalName
        }
      }
    }
  `);
  return (
    <Wrapper as={Container}>
      <Link to="/">{data.site.siteMetadata.legalName}</Link>
      <NavbarLinks desktop />
    </Wrapper>
  );
};
export default Navbar;
