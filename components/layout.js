/** @jsxImportSource theme-ui */

import Header from 'components/header';

export default function Layout({ children }) {
  return (
    <div
      sx={theme => ({
        maxWidth: theme.breakpoints[theme.breakpoints.length - 1],
        marginX: 'auto',
      })}
    >
      <Header />
      {children}
    </div>
  );
}
