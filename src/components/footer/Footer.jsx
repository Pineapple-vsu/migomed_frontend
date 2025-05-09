import { MainFooter, Notice } from "./components";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <MainFooter />
      <Notice />
    </footer>
  );
};
