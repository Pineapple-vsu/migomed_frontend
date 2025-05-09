import { Children } from "react";
import styles from "./button-black-small.module.css";
import { Link } from "react-router";

export const ButtonBlackSmall = ({ children }) => {
  return <div className={styles.button_black_small}>{children}</div>;
};
