import Image from 'next/image';

import styles from 'components/intro.module.css';

export default function Intro() {
  return (
    <div className={styles.intro}>
      <div className={styles.outer}>
        <div className={styles.inner}>
          <Image
            src="/apuyou.jpg"
            width="300"
            height="300"
            alt="Arthur Puyou Headshot"
            className={styles.image}
          />
        </div>
      </div>
      <h1 className={styles.title}>
        Hi! 👋
        <br />
        I’m Arthur and I’m a maker!
      </h1>
    </div>
  );
}
