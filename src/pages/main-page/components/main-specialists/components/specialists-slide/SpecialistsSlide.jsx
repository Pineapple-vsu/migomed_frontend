import styles from "./specialists-slide.module.css";
import { Link } from "react-router";

export const SpecialistsSlide = ({ full_name, post, category, experience }) => {
  return (
    <div className={styles.content}>
      <h4 className={styles.name}> {full_name}</h4>
      <div>
        <p>{post}</p>
        <ul className={styles.list}>
          <li>{category}</li>
          <li>{experience}</li>
        </ul>
      </div>
    </div>
  );
};
