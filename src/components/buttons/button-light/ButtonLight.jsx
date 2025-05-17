import styles from "./button-light.module.css";

export const ButtonLight = ({ children, isActive }) => {
  return (
    <div className={`${styles.light} ${isActive ? styles.dark : ""}`}>
      <p>{children}</p>
    </div>
  );
};
