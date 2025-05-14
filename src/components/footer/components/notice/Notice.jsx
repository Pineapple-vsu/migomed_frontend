import styles from "./notice.module.css";
import { Link } from "react-router";

export const Notice = () => {
  return (
    <div className={styles.notice}>
      <p className={styles.name}>© 2025 Медицинский центр «МИГОМЕД»</p>
      <div className={styles.info}>
        <Link to="/polisy">
          Политика конфиденциальности | Согласие на обработку персональных
          данных
        </Link>
      </div>
    </div>
  );
};
