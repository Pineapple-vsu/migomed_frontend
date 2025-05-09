import styles from "./answer.module.css";
import { Link } from "react-router";

export const Answer = ({ answer }) => {
  return <div className={styles.block}>{answer}</div>;
};
