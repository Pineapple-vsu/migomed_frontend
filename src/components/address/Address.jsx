import styles from "./address.module.css";

export const Address = () => {
  return (
    <a
      href="https://yandex.by/maps/org/migomed/147893265700/?ll=30.997309%2C54.272469&z=18"
      target="link"
      className={styles.component_address}
    >
      <h3>Адрес</h3>
      <div className={styles.icon}></div>
    </a>
  );
};
