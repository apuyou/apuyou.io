/** @jsxImportSource theme-ui */

import Footer from 'components/footer';
import Header from 'components/header';

export default function Layout({ children }) {
  return (
    <div
      sx={(theme) => ({
        maxWidth: theme.breakpoints[theme.breakpoints.length - 1],
        marginX: [2, 'auto'],
      })}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
}
