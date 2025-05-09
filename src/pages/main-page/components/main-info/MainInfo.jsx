import styles from "./main-info.module.css";
import { Link } from "react-router";
import { MainTime } from "../../components";
import { Address } from "../../../../components";

export const MainInfo = () => {
  return (
    <section className={styles.info}>
      <MainTime></MainTime>
      <Address></Address>
    </section>
  );
};
