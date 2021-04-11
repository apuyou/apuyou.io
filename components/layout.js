/** @jsxImportSource theme-ui */

export default function Layout({ children }) {
  return (
    <div
      sx={theme => ({
        maxWidth: theme.breakpoints[theme.breakpoints.length - 1],
        marginX: 'auto',
      })}
    >
      <div>Header</div>
      {children}
    </div>
  );
}
