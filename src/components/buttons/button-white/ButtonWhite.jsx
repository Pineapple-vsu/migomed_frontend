import { Children } from "react";
import styles from "./button-white.module.css";
import { Link } from "react-router";

export const ButtonWhite = ({ children }) => {
  return <div className={styles.white}>{children}</div>;
};
