// import {} from "./components";
// import styles from "./gallery.module.css";

// export const Gallery = () => {
//   return <section className={styles.gallery}></section>;
// };
import styles from "./gallery.module.css";

export const Gallery = ({ children }) => {
  return <div className={styles.gallery}>{children}</div>;
};
