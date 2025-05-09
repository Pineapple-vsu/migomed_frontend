import styles from "./news-slide.module.css";
import { Link } from "react-router";

export const NewsSlide = ({ link, image, date, children, short }) => {
  return (
    <a href={link}>
      <div
        className={styles.content}
        style={{ backgroundImage: `url(${image})` }}
      >
        <h4 className={styles.name}> {children}</h4>
        <small>{date}</small>
        <p>{short}</p>
        <p>читать </p>
      </div>
    </a>
  );
};
