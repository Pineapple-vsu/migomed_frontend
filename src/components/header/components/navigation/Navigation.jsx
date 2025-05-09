import { NavLink } from "react-router";
import styles from "./navigation.module.css";

export const Navigation = () => {
  return (
    <section className={styles.navigation}>
      <NavLink to="/" className={({ isActive }) => (isActive ? "actie" : "")}>
        Главная
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) => (isActive ? "actie" : "")}
      >
        <div className={styles.item}>
          Услуги <div className={styles.arrow_down}></div>
          <div className={styles.droped}>
            <NavLink to="/services/gynecology">Гинекология</NavLink>
            <NavLink to="/services/ultrasaund">
              Ультразвуковая диагностика
            </NavLink>
            <NavLink to="/services/analyzes">Медицинские анализы</NavLink>
          </div>
        </div>
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "actie" : "")}
      >
        <div className={styles.item}>
          О нас<div className={styles.arrow_down}></div>
          <div className={styles.droped}>
            <NavLink to="/about/photo">Фотогалерея</NavLink>
          </div>
        </div>
      </NavLink>
      <NavLink
        to="/medblog"
        className={({ isActive }) => (isActive ? "actie" : "")}
      >
        MEDBLOG+
      </NavLink>
      <NavLink
        to="/contacts"
        className={({ isActive }) => (isActive ? "actie" : "")}
      >
        Контакты
      </NavLink>
    </section>
  );
};
