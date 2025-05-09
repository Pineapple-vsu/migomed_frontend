import { gynecology, analyzes, ultrasaund } from "../../../../assets";
import { ServicesLink } from "../services-links/ServicesLink";
import styles from "./main-services.module.css";
import { Link } from "react-router";

export const MainServices = () => {
  return (
    <section className={styles.services}>
      <div className={styles.service}>
        <h2>Услуги высокого качества для Вас</h2>
        <div className={styles.service_list}>
          <Link to="/services/gynecology" className={styles.service_item}>
            <ServicesLink imgSrc={gynecology}>Гинекология</ServicesLink>
          </Link>
          <Link to="/services/ultrasaund" className={styles.service_item}>
            <ServicesLink imgSrc={ultrasaund}>
              Ультразвуковая <br />
              диагностика
            </ServicesLink>
          </Link>
          <Link to="/services/analyzes" className={styles.service_item}>
            <ServicesLink imgSrc={analyzes}>
              Медицинские <br />
              анализы
            </ServicesLink>
          </Link>
        </div>
      </div>
    </section>
  );
};
