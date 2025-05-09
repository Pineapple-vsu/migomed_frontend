import styles from "./two-modal-buttons.module.css";

export const TwoModalButtons = ({ children }) => {
  return <div className={styles.two_buttons}>{children}</div>;
};
