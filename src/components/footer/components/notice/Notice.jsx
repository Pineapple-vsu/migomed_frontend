import styles from "./notice.module.css";
import { Link } from "react-router";

export const Notice = () => {
  return (
    <div className={styles.notice}>
      <p className={styles.name}>© 2025 Медицинский центр «МИГОМЕД»</p>
      <div className={styles.info}>
        <Link to="/polisy" className={styles.confid}>
          Политика конфиденциальности
        </Link>
        <p className={styles.spliter}> | </p>
        <Link to="/polisy" className={styles.personality}>
          Согласие на обработку персональных данных
        </Link>
      </div>
    </div>
  );
};
