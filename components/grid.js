/** @jsxImportSource theme-ui */

export default function Grid({ children }) {
  return (
    <div
      sx={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: ['1fr', 'repeat(2, 1fr)'],
        gridGap: 2,
      }}
    >
      {children}
    </div>
  );
}
