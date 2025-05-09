import styles from "./services-link.module.css";
import { Link } from "react-router";

export const ServicesLink = ({ children, imgSrc }) => {
  return (
    <div className={styles.ser_block}>
      <div className={styles.row}>
        <h4 className={styles.name}>{children}</h4>
      </div>
      <div className={styles.service_img}>
        <img src={imgSrc} alt={children} />
      </div>
    </div>
  );
};
