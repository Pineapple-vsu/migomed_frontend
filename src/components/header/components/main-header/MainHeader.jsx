import { Link } from "react-router";
import { logo } from "../../../../assets";
import styles from "./main-header.module.css";
import { useState } from "react";
import { ButtonBlackSmall } from "../../../buttons/button-black-small/ButtonBlackSmall";
import { TwoModalButtons } from "../../../buttons";
import { NavLink } from "react-router";
import { Modal } from "../../../modal/Modal";
import { useForm } from "react-hook-form";

export const MainHeader = () => {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isRecordModalOpen, setRecordModalOpen] = useState(false);
  const [isOutModalOpen, setOutModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit } = useForm();

  const handleLogin = async (data) => {
    console.log("Отправляемые данные:", data);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Ошибка входа. Проверьте введенные данные.");
      }

      const result = await response.text();
      console.log("Успешный вход:", result);
      setIsLoggedIn(true);
      setLoginModalOpen(false);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleLogout = () => {
    setOutModalOpen(false);
    setIsLoggedIn(false);
  };

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
        <div
          className={styles.burger}
          onClick={() => setIsBurgerOpen((prev) => !prev)}
        ></div>
        <div className={styles.personal}>
          {!isLoggedIn ? (
            <div
              className={`${styles.button} ${styles.button_black} ${styles.enter}`}
              onClick={() => setLoginModalOpen(true)}
            >
              Вход
            </div>
          ) : (
            <div
              className={`${styles.button} ${styles.button_black} ${styles.exit}`}
              onClick={() => setOutModalOpen(true)}
            >
              Выход
            </div>
          )}

          <div className={styles.person__info}>
            <Link
              to="/personal"
              className={`${styles.button} ${styles.button_green}`}
            >
              <div className={styles.person_icon}></div>
              <p>Личный кабинет</p>
            </Link>

            <div
              className={`${styles.button} ${styles.button_green} `}
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
      {isBurgerOpen && (
        <div className={styles.burger_menu}>
          <div className={styles.burger_menu__header}>
            <img
              src={logo}
              alt="логотип"
              className={styles.burger_menu__logo}
            />
            <div
              className={styles.burger_menu__close}
              onClick={() => setIsBurgerOpen(false)}
            ></div>
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

          <div className={styles.pages}>
            <h4>Информация</h4>
            <NavLink to="/" onClick={() => setIsBurgerOpen(false)}>
              Главная
            </NavLink>
            <NavLink to="/services" onClick={() => setIsBurgerOpen(false)}>
              Услуги
            </NavLink>
            <NavLink to="/about" onClick={() => setIsBurgerOpen(false)}>
              О нас
            </NavLink>
            <NavLink to="/medblog" onClick={() => setIsBurgerOpen(false)}>
              MEDBLOG+
            </NavLink>
            <NavLink to="/contacts" onClick={() => setIsBurgerOpen(false)}>
              Контакты
            </NavLink>
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
        </div>
      )}
      <Modal
        isOpen={isLoginModalOpen}
        onClose={() => setLoginModalOpen(false)}
        modalHeader="Вход"
      >
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className={styles.module}>
            <label htmlFor="surname">Фамилия</label>
            <input
              type="text"
              name="surname"
              id="surname"
              {...register("surname")}
              placeholder="Фамилия"
            />
          </div>
          <div className={styles.module}>
            <label htmlFor="password">Номер паспорта</label>
            <input
              type="text"
              name="password"
              id="password"
              placeholder="AA0000000"
              {...register("password")}
            />
          </div>
          {errorMessage && <p className={styles.error}>{errorMessage}</p>}
          <button type="submit" className={styles.button_modal}>
            <ButtonBlackSmall>Войти</ButtonBlackSmall>
          </button>
        </form>
      </Modal>
      <Modal
        isOpen={isOutModalOpen}
        onClose={() => setOutModalOpen(false)}
        modalHeader="Выход"
      >
        <h4 className={styles.center}>Вы уверены, что хотите выйти?</h4>
        <TwoModalButtons>
          <button onClick={handleLogout}>
            <ButtonBlackSmall>Да</ButtonBlackSmall>
          </button>
          <button onClick={() => setOutModalOpen(false)}>
            <ButtonBlackSmall>Нет</ButtonBlackSmall>
          </button>
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
            placeholder="ФИО врача"
          />
        </div>
        <div className={styles.module}>
          <label htmlFor="user">Введите Ваше ФИО</label>
          <input type="text" name="user" id="user" placeholder="ФИО" />
        </div>

        <div className={styles.module}>
          <label htmlFor="phone">Введите Ваш номер телефона</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="+375290000000"
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
