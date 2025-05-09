import styles from "./service-text.module.css";
import { Link } from "react-router";

export const ServiceText = () => {
  return (
    <section>
      <div className={styles.main}>
        <h2>Медицинский центр «МИГОМЕД»</h2>
        <p>
          Здесь Вы найдёте всю интересующую Вас информацию о наших услугах и
          услугах наших партнёров*
        </p>
      </div>
    </section>
  );
};
