import styles from 'components/header.module.css';
import Link from 'components/link';

export default function Header() {
  return (
    <nav className={styles.header}>
      <div className={styles.title}>
        <Link href="/">Arthur Puyou</Link>
      </div>
      <ul className={styles.menu}>
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
