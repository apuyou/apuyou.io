import Footer from 'components/footer';
import Header from 'components/header';
import styles from 'components/layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
