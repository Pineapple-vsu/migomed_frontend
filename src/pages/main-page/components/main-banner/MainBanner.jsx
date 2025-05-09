import { ButtonBlackSmall } from "../../../../components";
import styles from "./main-banner.module.css";
import { Link } from "react-router";
import { women } from "../../../../assets";

export const MainBanner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.banner_left}>
        <div className={styles.banner_left_content}>
          <h1>
            Медицинский центр <br />
            «МИГОМЕД»
          </h1>
          <h4>
            “МИГОМЕД” — это индивидуальный комплексный подход. Мы предоставляем
            профессиональную медицинскую помощь в полном объеме.
          </h4>
        </div>
        <Link to="/about">
          <ButtonBlackSmall>Подробнее</ButtonBlackSmall>
        </Link>
      </div>
      <div className={styles.banner_right}>
        <img src={women} alt="women" />
      </div>
    </section>
  );
};
