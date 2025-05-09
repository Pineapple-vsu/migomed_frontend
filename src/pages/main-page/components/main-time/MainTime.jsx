import { ButtonBlackSmall } from "../../../../components";
import styles from "./main-time.module.css";
import { Link } from "react-router";

export const MainTime = () => {
  return (
    <div className={styles.component_time}>
      <h3>Время работы</h3>
      <div className={styles.items}>
        <div className={styles.row}>
          <h4>Понедельник</h4>
          <div className={styles.bl}>
            <h4 className={styles.line}></h4>
            <h4 className={styles.time}>7:00-19:00</h4>
          </div>
        </div>
        <div className={styles.row}>
          <h4>Вторник</h4>
          <div className={styles.bl}>
            <h4 className={styles.line}></h4>
            <h4 className={styles.time}>7:00-19:00</h4>
          </div>
        </div>

        <div className={styles.row}>
          <h4>Среда</h4>
          <div className={styles.bl}>
            <h4 className={styles.line}></h4>
            <h4 className={styles.time}>7:00-19:00</h4>
          </div>
        </div>
        <div className={styles.row}>
          <h4>Четверг</h4>
          <div className={styles.bl}>
            <h4 className={styles.line}></h4>
            <h4 className={styles.time}>7:00-19:00</h4>
          </div>
        </div>
        <div className={styles.row}>
          <h4>Пятница</h4>
          <div className={styles.bl}>
            <h4 className={styles.line}></h4>
            <h4 className={styles.time}>7:00-19:00</h4>
          </div>
        </div>
        <div className={styles.row}>
          <h4>Суббота</h4>
          <div className={styles.bl}>
            <h4 className={styles.line}></h4>
            <h4 className={styles.time}>7:30-17:00</h4>
          </div>
        </div>
        <div className={styles.row}>
          <h4>Воскресенье</h4>
          <div className={styles.bl}>
            <h4 className={styles.line}></h4>
            <h4 className={styles.time}>7:30-14:00</h4>
          </div>
        </div>
      </div>
    </div>
  );
};
