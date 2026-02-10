import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <span className={styles.label}>Contact Us</span>
        <a href="mailto:contact@nmgsoft.com" className={styles.email}>contact@nmgsoft.com</a>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} NMyeongGa Soft. All rights reserved.
      </div>
    </footer>
  );
}
