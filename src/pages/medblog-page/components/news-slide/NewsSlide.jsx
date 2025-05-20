import styles from "./news-slide.module.css";
import { Link } from "react-router";

export const NewsSlide = ({ link, image, date, headline }) => {
  const formattedDate = new Date(date).toLocaleString("ru-RU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <Link to={link} className={styles.content}>
      <div className={styles.top}>
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <small>{formattedDate}</small>
        <h4 className={styles.name}> {headline}</h4>
      </div>

      <p className={styles.read}>читать </p>
    </Link>
  );
};
