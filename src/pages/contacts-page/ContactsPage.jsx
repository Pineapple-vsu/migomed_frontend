import { contacts } from "../../assets";
import { Banner } from "../../components";
import { Address } from "../../components/address/Address";
import styles from "./contavts-page.module.css";

export const ContactsPage = () => {
  return (
    <>
      <Banner backgroundImg={contacts} textColor={"#000"}>
        Контакты
      </Banner>
      <section>
        <div className={styles.main}>
          <h2>Контакты медицинского центра в Горках</h2>
          <p>
            Медицинский центр МИГОМЕД — Ваш лучший выбор в Горках. К нам удобно
            добраться: Дрибин, Мстиславль, Ректа, Матюты, Паршино, Горы,
            Каменка, Ходоровка, Добрая, Овсянка, Маслаки, Городище, Белая,
            Михеевка, Ленино, Староселье и из других населённых пунктов
            Горецкого, Дрибинского, Оршанского, Шкловского и Дубровенского
            районов.
          </p>
          <h2>Свяжитесь с нами</h2>
          <div className={styles.info}>
            <div className={styles.left}>
              <h4>Контактные телефоны</h4>
              <a href="tel:+375447644422">+375 (44) 764-44-22</a>
              <a href="tel:78009">78009 (городской)</a>
              <h4>Электронная почта</h4>
              <a href="mailto:info@migomed.by">info@migomed.by</a>
              <h4>Адрес медицинского центра</h4>
              <a href="https://yandex.by/maps/org/migomed/147893265700/?ll=30.997309%2C54.272469&z=18">
                г. Горки, ул Вокзальная 34Б
              </a>
              <h4>График работы</h4>
              <p>пн-пт: 7:00-19:00 сб: 7:30-17:00 вс: 7:30-14:00</p>
              <h4>График сбора анализов</h4>
              <p>пн-пт: 7:00-10:00 сб-вс: 7:30-10:00 </p>
            </div>

            <Address></Address>
          </div>
        </div>
      </section>
    </>
  );
};
