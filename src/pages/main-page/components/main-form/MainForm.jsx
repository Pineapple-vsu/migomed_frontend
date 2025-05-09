import { ButtonBlackSmall } from "../../../../components";
import styles from "./main-form.module.css";
import { Link } from "react-router";

export const MainForm = () => {
  return (
    <section className={styles.form_block}>
      <h2>Остались вопросы? Напишите нам!</h2>

      <form className={styles.form_content}>
        <div className={styles.form_row}>
          <input type="text" placeholder="Ваше имя" />
          <input type="tel" placeholder="Номер телефона" />
        </div>
        <textarea type="text" placeholder="Введите, пожалуйста, Ваш вопрос" />

        <div className={styles.form_agree}>
          <input type="checkbox" id="agree" className={styles.check} />
          <label htmlFor="agree">
            Я согласен на обработку&nbsp;
            <Link to="polisy" className={styles.link}>
              Персональных данных
            </Link>
          </label>
        </div>
        <div className={styles.form_button}>
          <button type="submit">
            <ButtonBlackSmall>Отправить</ButtonBlackSmall>
          </button>
        </div>
      </form>
      {/* {isSend ? isTrue ? <ModalTrue /> : <ModalFalse /> : <Error />} */}
    </section>
  );
};
