import styles from './Services.module.css';

export default function Services() {
  const services = [
    {
      title: "Web Development",
      desc: "Responsive, high-performance websites built with Next.js and modern technologies.",
      icon: "🌐"
    },
    {
      title: "App Development",
      desc: "Native and cross-platform mobile applications that provide intuitive user experiences.",
      icon: "📱"
    },
    {
      title: "Custom Software",
      desc: "Tailored software solutions designed to optimize your business operations and workflow.",
      icon: "⚡"
    }
  ];

  return (
    <section className={styles.services}>
      <h2 className={styles.sectionTitle}>What We Do</h2>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <span className={styles.icon}>{service.icon}</span>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDesc}>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
