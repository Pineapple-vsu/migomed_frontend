import React, { useState } from "react";
import { ButtonBlackSmall } from "../../../../components";
import styles from "./main-form.module.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Введите Ваше ФИО")
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
  const [submissionStatus, setSubmissionStatus] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const payload = {
      fullName: data.name,
      phoneNumber: data.phone,
      questionText: data.question,
    };

    try {
      const response = await fetch("/api/questions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmissionStatus("success");
      } else {
        setSubmissionStatus("error");
      }
    } catch (error) {
      console.error("Ошибка выполнения запроса:", error);
      setSubmissionStatus("error");
    }
  };

  // Успех
  if (submissionStatus === "success") {
    return (
      <section className={styles.block}>
        <div className={styles.content}>
          <div className={styles.success_icon}></div>
          <h2>Ваш вопрос отправлен!</h2>
        </div>
      </section>
    );
  }

  // Ошибка
  if (submissionStatus === "error") {
    return (
      <section className={styles.block}>
        <div className={styles.content}>
          <div className={styles.error_icon}></div>
          <h2>Извините, произошла ошибка</h2>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.form_block}>
      <h2>Остались вопросы? Напишите нам!</h2>
      <form className={styles.form_content} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.form_row}>
          <div className={styles.input_group}>
            <input type="text" placeholder="Ваше ФИО" {...register("name")} />
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
