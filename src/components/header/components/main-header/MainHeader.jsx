import { Link } from "react-router";
import { logo } from "../../../../assets";
import styles from "./main-header.module.css";
import { useState } from "react";
import { ButtonBlackSmall } from "../../../buttons/button-black-small/ButtonBlackSmall";
import { Modal } from "../../../Modal/Modal";
import { TwoModalButtons } from "../../../buttons";

export const MainHeader = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRecordModalOpen, setRecordModalOpen] = useState(false);
  const [isOutModalOpen, setOutModalOpen] = useState(false);

  return (
    <section className={styles.main}>
      <div className={styles.logo}>
        <img src={logo} alt="логотип" className={styles.logo_img} />
      </div>
      <div className={styles.info}>
        <div className={`${styles.info__item} ${styles.addres}`}>
          <a href="https://yandex.by/maps/26774/gorki/?from=api-maps&ll=30.995111%2C54.283234&mode=routes&origin=jsapi_2_1_79&rtext=~54.273072%2C30.996665&rtt=auto&ruri=~ymapsbm1%3A%2F%2Fgeo%3Fdata%3DIgoNLPn3QRWgF1lC&z=14">
            г. Горки, ул. Вокзальная 34Б
          </a>
        </div>
        <div className={`${styles.info__item} ${styles.time}`}>
          <p>пн-пт: 7:00-19:00</p>
          <p>сб: 7:30-17:00</p>
          <p>вс: 7:30-14:00</p>
        </div>
        <div className={`${styles.info__item} ${styles.mobile}`}>
          <a href="tel:+375447644422">+375 (44) 764-44-22</a>
        </div>
        <div className={`${styles.info__item} ${styles.home}`}>
          <a href="tel:78009">78009 (городской)</a>
        </div>
      </div>
      <div className={styles.buttons}>
        <div className={styles.personal}>
          <div
            className={`${styles.button} ${styles.button_black} ${styles.enter}`}
            onClick={() => setLoginModalOpen(true)}
          >
            Вход
          </div>

          <div
            className={`${styles.button} ${styles.button_black} ${styles.exit}`}
            onClick={() => setOutModalOpen(true)}
          >
            Выход
          </div>

          <div className={styles.person__info}>
            <div
              onClick={() => setLoginModalOpen(true)}
              className={`${styles.button} ${styles.button_green}`}
            >
              <div className={styles.person_icon}></div>
              <p>Личный кабинет</p>
            </div>

            <div
              className={`${styles.button} ${styles.button_green}`}
              onClick={() => setRecordModalOpen(true)}
            >
              <div className={styles.record_icon}></div>
              <p>Записаться</p>
            </div>
          </div>
        </div>
        <div className={styles.special}>
          <Link
            to="/"
            className={`${styles.button} ${styles.button_black}  ${styles.button_special}`}
          >
            <div className={styles.special_icon}></div>
          </Link>
        </div>
      </div>
      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        modalHeader="Вход"
      >
        <div className={styles.module}>
          <label htmlFor="surname">Фамилия</label>
          <input
            type="text"
            name="surname"
            id="surname"
            placeholder="Фамилия"
          />
        </div>
        <div className={styles.module}>
          <label htmlFor="name">Имя</label>
          <input type="text" name="name" id="name_login" placeholder="Имя" />
        </div>
        <div className={styles.module}>
          <label htmlFor="firstname">Отчество</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Отчество"
          />
        </div>
        <div className={styles.module}>
          <label htmlFor="patronymic">Номер паспорта</label>
          <input
            type="text"
            name="patronymic"
            id="patronymic"
            placeholder="AA0000000"
          />
        </div>
        <Link to="/" onClick={() => setLoginModalOpen(false)}>
          <ButtonBlackSmall>Войти</ButtonBlackSmall>
        </Link>
      </Modal>
      <Modal
        isOpen={isOutModalOpen}
        onClose={() => setOutModalOpen(false)}
        modalHeader="Вход"
      >
        <h4 className={styles.center}>Вы уверены, что хотите выйти?</h4>
        <TwoModalButtons>
          <Link to="/" onClick={() => setOutModalOpen(false)}>
            <ButtonBlackSmall>Да</ButtonBlackSmall>
          </Link>
          <Link to="/" onClick={() => setOutModalOpen(false)}>
            <ButtonBlackSmall>Нет</ButtonBlackSmall>
          </Link>
        </TwoModalButtons>
      </Modal>

      <Modal
        isOpen={isRecordModalOpen}
        onClose={() => setRecordModalOpen(false)}
        modalHeader="Запись на приём"
      >
        <div className={styles.module}>
          <label htmlFor="specialist">Выберите специалиста</label>
          <input
            type="text"
            name="specialist"
            id="specialist"
            placeholder="Фамилия Имя Отчество"
          />
        </div>
        <div className={styles.module}>
          <label htmlFor="user">Введите Ваше ФИО</label>
          <input
            type="text"
            name="user"
            id="user"
            placeholder="Фамилия Имя Отчество"
          />
        </div>

        <div className={styles.module}>
          <label htmlFor="phone">Введите Ваш номер телефона</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="+375 29 000 00 00"
          />
        </div>
        <div className={styles.module}>
          <label htmlFor="date">На какую дату Вы бы хотели записаться?</label>
          <input type="date" name="date" id="date" />
        </div>
        <span>
          Мы с Вами свяжемся для уточнения наиболее удобного для Вас времени
        </span>
        <div className={styles.form_agree}>
          <input type="checkbox" id="agree" className={styles.check} />
          <label htmlFor="agree">
            Я согласен на обработку&nbsp;
            <Link
              to="/polisy"
              className={styles.link}
              onClick={() => setRecordModalOpen(false)}
            >
              Персональных данных
            </Link>
          </label>
        </div>
        <Link to="/" onClick={() => setRecordModalOpen(false)}>
          <ButtonBlackSmall>Отправить</ButtonBlackSmall>
        </Link>
        {/* при отправке написать получилось или нет */}
      </Modal>
    </section>
  );
};
