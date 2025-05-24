import styles from "./gallery.module.css";

export const Gallery = ({ children }) => {
  return <div className={styles.gallery}>{children}</div>;
};
