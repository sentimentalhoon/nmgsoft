import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about}>
      <h3 className={styles.heading}>Who We Are</h3>
      <p className={styles.text}>
        Defining the standard of digital craftsmanship.
      </p>
      <p className={styles.description}>
        NMyeongGa Soft is a premier software development studio dedicated to creating elegant, robust, and scalable digital solutions. We believe in the power of simplicity and the impact of great design.
      </p>
    </section>
  );
}
