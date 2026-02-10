import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        NMyeongGa Soft
      </div>
      <button className={styles.menuButton} aria-label="Menu">
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
    </header>
  );
}
