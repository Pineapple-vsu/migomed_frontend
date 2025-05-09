import styles from "./banner.module.css";
import { Link } from "react-router";

export const Banner = ({ backgroundImg, textColor, children }) => {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${backgroundImg}` }}
    >
      <span style={{ color: textColor }}>{children}</span>
    </div>
  );
};
