/** @jsxImportSource theme-ui */

import NextLink from 'next/link';

export default function Link({ children, ...rest }) {
  return (
    <NextLink {...rest} passHref>
      <a
        sx={{
          color: 'text',
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
          },
        }}
      >
        {children}
      </a>
    </NextLink>
  );
}
