import { ButtonBlackSmall } from "../buttons/button-black-small/ButtonBlackSmall";
import styles from "./record.module.css";
import { Link } from "react-router";
import { useState } from "react";
import { Modal } from "../Modal/Modal";

export const Record = () => {
  const [isRecordModalOpen, setRecordModalOpen] = useState(false);
  return (
    <section className={styles.record}>
      <div className={styles.content}>
        <h2>Запишитесь на приём!</h2>
        <p>
          Оставьте свои контактные данные, и мы перезвоним Вам для уточнения
          удобной даты и времени посещения нашей клиники.
        </p>
      </div>
      <div onClick={() => setRecordModalOpen(true)}>
        <ButtonBlackSmall>Записаться</ButtonBlackSmall>
      </div>
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
            <Link to="/polisy" className={styles.link}>
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
