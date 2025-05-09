import { Notice, MainHeader, Navigation } from "./components";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Notice />
      <MainHeader />
      <Navigation />
    </header>
  );
};
