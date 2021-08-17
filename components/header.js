/** @jsxImportSource theme-ui */

import Link from 'next/link';

export default function Header() {
  return (
    <nav
      sx={{
        display: 'flex',
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
        <Link href="/">
          <a>Arthur Puyou</a>
        </Link>
      </div>
      <ul
        sx={{
          display: 'flex',
          listStyleType: 'none',
          padding: 0,
          margin: 0,
          marginLeft: 'auto',
          li: {
            marginLeft: 2,
          },
        }}
      >
        <li>
          <Link href="/#blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/#projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
