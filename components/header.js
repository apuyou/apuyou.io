/** @jsxImportSource theme-ui */

export default function Header() {
  return (
    <div
      sx={{
        display: 'flex',
        paddingY: 3,
        borderBottomStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: 'text',
      }}
    >
      <div>Arthur Puyou</div>
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
        <li>Blog</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}
