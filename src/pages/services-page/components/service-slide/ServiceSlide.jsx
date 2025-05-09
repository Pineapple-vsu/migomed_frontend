import { ButtonWhite } from "../../../../components/buttons";
import styles from "./service-slide.module.css";
import { Link } from "react-router";

export const ServiceSlide = ({
  children,
  description,
  backgroundUrl,
  slideLink,
}) => {
  return (
    <div
      className={styles.content}
      style={{
        backgroundImage: `url(${backgroundUrl})`,
      }}
    >
      <h2> {children}</h2>
      <div>
        <p>{description}</p>
      </div>
      <Link to={slideLink}>
        <ButtonWhite>Подробнее</ButtonWhite>
      </Link>
    </div>
  );
};
