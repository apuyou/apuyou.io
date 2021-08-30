import NextLink from 'next/link';

export function A({ children, ...rest }) {
  return (
    <a
      sx={{
        color: 'text',
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      }}
      {...rest}
    >
      {children}
    </a>
  );
}

export default function Link({ children, ...rest }) {
  return (
    <NextLink {...rest} passHref>
      <A>{children}</A>
    </NextLink>
  );
}
