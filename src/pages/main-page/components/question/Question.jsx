import styles from "./question.module.css";
import { Link } from "react-router";

export const Question = ({ onClick, question, isOpen }) => {
  return (
    <div className={styles.block} onClick={onClick}>
      <div
        className={`${styles.icon} ${isOpen ? styles.plus : styles.crose}`}
        onClick={onClick}
      ></div>

      <p>{question}</p>
    </div>
  );
};
