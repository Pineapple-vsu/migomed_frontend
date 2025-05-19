// import styles from "./personal-page.module.css";
// // import React, { useState } from "react";
// import { ButtonLight } from "../../components/buttons";

// export const PersonalPage = () => {
//   return (
//     <section>
//       <h2>Фамилия Имя Отчество</h2>
//       <h4>Пол: </h4>
//       <h4>Номер паспорта: AA0000000 </h4>
//       <h4>Номер телефона: +375 29 000 00 00 </h4>
//       <small>
//         ! При смене личных данных, пожалуйста, обратитесь к администратору
//       </small>
//       <div className={styles.buttons}>
//         <ButtonLight>Анализы</ButtonLight>
//         <ButtonLight isActive={true}>Назначения</ButtonLight>
//         <ButtonLight>Посещение специалистов</ButtonLight>
//       </div>
//     </section>
//   );
// };
import React, { useState } from "react";
import styles from "./personal-page.module.css";
import { ButtonLight } from "../../components/buttons";

export const PersonalPage = () => {
  // Состояние, хранящее активную секцию: "analyses", "assignments", "visits" или пустая строка
  const [activeSection, setActiveSection] = useState("");

  // Функция-тоггл: если нажата активная уже секция – деактивировать её,
  // иначе установить выбранную секцию.
  const toggleSection = (section) => {
    setActiveSection((prev) => (prev === section ? "" : section));
  };

  return (
    <section>
      <h2>Фамилия Имя Отчество</h2>
      <h4>Пол:</h4>
      <h4>Номер паспорта: AA0000000</h4>
      <h4>Номер телефона: +375 29 000 00 00</h4>
      <small>
        ! При смене личных данных, пожалуйста, обратитесь к администратору
      </small>

      <div className={styles.buttons}>
        <ButtonLight
          isActiveButton={activeSection === "analyses"}
          onClick={() => toggleSection("analyses")}
        >
          Анализы
        </ButtonLight>
        <ButtonLight
          isActiveButton={activeSection === "assignments"}
          onClick={() => toggleSection("assignments")}
        >
          Назначения
        </ButtonLight>
        <ButtonLight
          isActiveButton={activeSection === "visits"}
          onClick={() => toggleSection("visits")}
        >
          Посещение специалистов
        </ButtonLight>
      </div>

      {activeSection === "analyses" && (
        <div className={styles.sectionContent}>
          <h3>Информация по анализам</h3>
          <p>
            Здесь отображаются результаты анализов и другая релевантная
            информация.
          </p>
        </div>
      )}

      {activeSection === "assignments" && (
        <div className={styles.sectionContent}>
          <h3>Информация по назначениям</h3>
          <p>Здесь можно увидеть список назначений, рекомендации и прочее.</p>
        </div>
      )}

      {activeSection === "visits" && (
        <div className={styles.sectionContent}>
          <h3>Информация о посещениях специалистов</h3>
          <p>Здесь находится информация о посещениях к специалистам.</p>
        </div>
      )}
    </section>
  );
};
