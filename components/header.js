/** @jsxImportSource theme-ui */

import Link from 'components/link';

export default function Header() {
  return (
    <nav
      sx={{
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        paddingY: 3,
        borderBottomStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: 'text',
        marginX: -2,
        paddingX: 2,
        top: 0,
        backgroundColor: 'background',
        zIndex: 10,
      }}
    >
      <div
        sx={{
          fontSize: 4,
          fontWeight: 'bold',
        }}
      >
        <Link href="/">Arthur Puyou</Link>
      </div>
      <ul
        sx={{
          display: 'flex',
          listStyleType: 'none',
          padding: 0,
          margin: 0,
          marginTop: 1,
          marginLeft: 'auto',
          li: {
            marginLeft: 2,
          },
        }}
      >
        <li>
          <Link href="/#blog">Blog</Link>
        </li>
        <li>
          <Link href="/#projects">Projects</Link>
        </li>
        <li>
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
