import styles from 'components/grid.module.css';

export default function Grid({ children }) {
  return <div className={styles.grid}>{children}</div>;
}
