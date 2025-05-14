import React from "react";
import { ButtonBlackSmall } from "../../../../components";
import styles from "./main-form.module.css";
import { Link } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Определяем схему валидации
const schema = yup.object().shape({
  name: yup
    .string()
    .required("Введите Ваше имя")
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(20, "Имя не может превышать 20 символов")
    .matches(/^[^\d]+$/, "В имени нельзя использовать цифры"),
  phone: yup
    .string()
    .required("Введите номер телефона")
    .matches(
      /^\+[0-9]{9,19}$/,
      "Номер должен начинаться с плюса и содержать 10-20 символов"
    ),
  question: yup.string().required("Введите Ваш вопрос"),
  agree: yup
    .boolean()
    .oneOf([true], "Необходимо согласие на обработку персональных данных"),
});

export const MainForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Данные формы:", data);
    // Здесь можно вызвать API или выполнить другие действия после успешной валидации
  };

  return (
    <section className={styles.form_block}>
      <h2>Остались вопросы? Напишите нам!</h2>
      <form className={styles.form_content} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form_row}>
          <div className={styles.input_group}>
            <input type="text" placeholder="Ваше имя" {...register("name")} />
            {errors.name && (
              <p className={styles.error}>{errors.name.message}</p>
            )}
          </div>
          <div className={styles.input_group}>
            <input
              type="tel"
              placeholder="Номер телефона"
              {...register("phone")}
            />
            {errors.phone && (
              <p className={styles.error}>{errors.phone.message}</p>
            )}
          </div>
        </div>
        <div className={styles.input_full}>
          <textarea
            placeholder="Введите, пожалуйста, Ваш вопрос"
            {...register("question")}
          />
          {errors.question && (
            <p className={styles.error}>{errors.question.message}</p>
          )}
        </div>
        <div className={styles.form_agree}>
          <input
            type="checkbox"
            id="agree"
            className={styles.check}
            {...register("agree")}
          />
          <label htmlFor="agree">
            Я согласен на обработку&nbsp;
            <Link to="polisy" className={styles.link}>
              Персональных данных
            </Link>
          </label>
          {errors.agree && (
            <p className={styles.error}>{errors.agree.message}</p>
          )}
        </div>
        <div className={styles.form_button}>
          <button type="submit">
            <ButtonBlackSmall>Отправить</ButtonBlackSmall>
          </button>
        </div>
      </form>
    </section>
  );
};
