import styles from "./service-info.module.css";

export const ServiceInfo = ({ serviceHeader, children }) => {
  return (
    <section className={styles.info}>
      <h2>{serviceHeader}</h2>
      <div className={styles.content}>{children}</div>
    </section>
  );
};
