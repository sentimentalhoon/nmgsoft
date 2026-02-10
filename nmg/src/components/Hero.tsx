import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.badge}>Established 2026</div>
      <h1 className={styles.title}>
        Simplicity.<br />
        Dignity.<br />
        Excellence.
      </h1>
      <p className={styles.subtitle}>
        We craft premium digital experiences for the modern world. Web, App, and Software Solutions.
      </p>
      <div className={styles.scrollIndicator}></div>
    </section>
  );
}
