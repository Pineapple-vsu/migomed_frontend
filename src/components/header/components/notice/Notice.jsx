import styles from "./notice.module.css";

export const Notice = () => {
  return (
    <div className={styles.notice}>
      <div className={styles.info}>
        <p className={styles.info__text}>
          Новый медицинский центр в Горках для всей семьи
        </p>
      </div>
      <div className={styles["social-media"]}>
        <a
          href="viber://chat?number=%2B375447644422"
          className={`${styles.viber} ${styles.icon}`}
        ></a>
        <a
          href="https://www.instagram.com/migomed_gorki/"
          className={`${styles.instagram} ${styles.icon}`}
        ></a>
        <a
          href="https://telegram.me/migo_med"
          className={`${styles.tg} ${styles.icon}`}
        ></a>
        <a
          href="mailto:info@migomed.by"
          className={`${styles.mail} ${styles.icon}`}
        ></a>
      </div>
    </div>
  );
};
