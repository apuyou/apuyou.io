import NextLink from 'next/link';

import styles from 'components/link.module.css';

export function A({ children, ...rest }) {
  return (
    <a className={styles.link} {...rest}>
      {children}
    </a>
  );
}

export default function Link({ children, ...rest }) {
  return (
    <NextLink className={styles.link} {...rest}>
      {children}
    </NextLink>
  );
}
