/** @jsxImportSource theme-ui */

import NextLink from 'next/link';

const linkStyle = {
  color: 'text',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
};

export function A({ children, ...rest }) {
  return (
    <a sx={linkStyle} {...rest}>
      {children}
    </a>
  );
}

export default function Link({ children, ...rest }) {
  return (
    <NextLink sx={linkStyle} {...rest}>
      {children}
    </NextLink>
  );
}
