/** @jsxImportSource theme-ui */

'use client';

export default function GridItem({ children }) {
  return (
    <div
      sx={{
        borderColor: 'secondary',
        borderWidth: 1,
        borderStyle: 'solid',
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {children}
    </div>
  );
}
