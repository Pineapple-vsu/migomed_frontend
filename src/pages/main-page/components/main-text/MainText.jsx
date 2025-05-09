import styles from "./main-text.module.css";
import { Link } from "react-router";

export const MainText = () => {
  return (
    <section>
      <div className={styles.main}>
        <h2>Медицинский центр «МИГОМЕД»</h2>
        <p>
          6 сентября 2024 года в Горках открыли первый медицинский центр
          «МИГОМЕД». С 7 сентября 2024 года он принимает своих клиентов, которым
          доступны услуги по гинекологии, ультразвуковой диагностике и
          медицинским анализам.
        </p>
      </div>
    </section>
  );
};
