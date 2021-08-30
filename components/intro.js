import Image from 'next/image';

export default function Intro() {
  return (
    <div
      sx={{
        display: 'flex',
        height: ['70vh', '90vh'],
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: ['column', 'row'],
        marginX: 'auto',
        marginTop: [5, 0],
      }}
    >
      <div
        sx={{
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: 'secondary',
          borderRadius: 158,
          height: [186, 316],
          width: [186, 316],
          marginRight: [0, 5],
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          sx={{
            borderRadius: 150,
            overflow: 'hidden',
            height: [170, 300],
            width: [170, 300],
          }}
        >
          <Image
            src="/apuyou.jpg"
            width="300"
            height="300"
            alt="Arthur Puyou Headshot"
          />
        </div>
      </div>
      <h1
        sx={{
          lineHeight: '2em',
        }}
      >
        Hi! 👋
        <br />
        I’m Arthur and I’m a maker!
      </h1>
    </div>
  );
}
