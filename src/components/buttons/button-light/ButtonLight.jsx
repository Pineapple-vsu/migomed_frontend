// import styles from "./button-light.module.css";

// export const ButtonLight = ({ children, isActiveButton }) => {
//   return (
//     <div className={`${styles.light} ${isActiveButton ? styles.dark : ""}`}>
//       <p>{children}</p>
//     </div>
//   );
// };
import styles from "./button-light.module.css";

export const ButtonLight = ({ children, isActiveButton, onClick }) => {
  return (
    <div
      className={`${styles.light} ${isActiveButton ? styles.dark : ""}`}
      onClick={onClick}
    >
      <p>{children}</p>
    </div>
  );
};
