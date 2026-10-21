import styles from 'components/grid.module.css';

export default function GridItem({ children }) {
  return <div className={styles.item}>{children}</div>;
}
