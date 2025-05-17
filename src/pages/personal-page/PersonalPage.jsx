import styles from "./personal-page.module.css";
// import React, { useState } from "react";
import { ButtonLight } from "../../components/buttons";

export const PersonalPage = () => {
  return (
    <section>
      <h2>Фамилия Имя Отчество</h2>
      <h4>Пол: </h4>
      <h4>Номер паспорта: AA0000000 </h4>
      <h4>Номер телефона: +375 29 000 00 00 </h4>
      <small>
        ! При смене личных данных, пожалуйста, обратитесь к администратору
      </small>
      <div className={styles.buttons}>
        <ButtonLight>Анализы</ButtonLight>
        <ButtonLight isActive={true}>Назначения</ButtonLight>
        <ButtonLight>Посещение специалистов</ButtonLight>
      </div>
    </section>
  );
};
