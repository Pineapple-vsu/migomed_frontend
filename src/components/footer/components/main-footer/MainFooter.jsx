import styles from "./main-footer.module.css";
import { Link } from "react-router";

export const MainFooter = () => {
  return (
    <section className={styles.main}>
      <div className={styles.more}>
        <div className={styles.more__text}>
          <h4>Подробнее о центре</h4>
          <p>
            Медицинский центр «МИГОМЕД» – это современное диагностическое
            оборудование, качественный сервис и уютная атмосфера. «МИГОМЕД» –
            выбор, достойный Вас!
          </p>
        </div>
        <div className={styles.social_media}>
          <a
            href="viber://chat?number=%2B375447644422"
            className={`${styles.viber} ${styles.icon}`}
          ></a>
          <a
            href="https://www.instagram.com/migomed_gorki/"
            className={`${styles.instagram} ${styles.icon}`}
          ></a>
          <a
            href="https://telegram.me/migo_med"
            className={`${styles.tg} ${styles.icon}`}
          ></a>
          <a
            href="mailto:info@migomed.by"
            className={`${styles.mail} ${styles.icon}`}
          ></a>
        </div>
      </div>
      <div className={styles.info}>
        <h4>Информация</h4>
        <Link to="/">Главная</Link>
        <Link to="/">Услуги</Link>
        <Link to="/">О нас</Link>
        <Link to="/">MEDBLOG+</Link>
        <Link to="/">Контакты</Link>
      </div>
      <div className={styles.contacts}>
        <h4>Наши контакты</h4>
        <div className={`${styles.contact__item} ${styles.addres}`}>
          <a href="https://yandex.by/maps/26774/gorki/?from=api-maps&ll=30.995111%2C54.283234&mode=routes&origin=jsapi_2_1_79&rtext=~54.273072%2C30.996665&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DIgoNLPn3QRWgF1lC&z=14">
            г. Горки, ул. Вокзальная 34Б
          </a>
        </div>
        <div className={`${styles.contact__item} ${styles.time}`}>
          <p>
            пн-пт: 7:00-19:00 <br />
            сб: 7:30-17:00 <br />
            вс: 7:30-14:00
          </p>
        </div>

        <div className={`${styles.contact__item} ${styles.mobile}`}>
          <a href="tel:%20+375447644422">+375 (44) 764-44-22</a>
        </div>
        <div className={`${styles.contact__item} ${styles.home}`}>
          <a href="tel:78009">78009 (городской)</a>
        </div>
      </div>
    </section>
  );
};
