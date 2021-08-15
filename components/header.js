/** @jsxImportSource theme-ui */

export default function Header() {
  return (
    <div
      sx={{
        display: 'flex',
        position: 'sticky',
        paddingY: 3,
        borderBottomStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: 'text',
        marginX: [-2, 0],
        paddingX: [2, 0],
        top: 0,
        backgroundColor: 'background',
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
