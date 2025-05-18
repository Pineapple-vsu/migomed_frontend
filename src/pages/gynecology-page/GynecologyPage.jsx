// import {} from "./components";

import { gynecologybanner } from "../../assets";
import { Banner, Loader, Record, ServiceInfo } from "../../components";
import { TableService } from "../../components";
import { Video } from "../../components/video/Video";
import { useState, useEffect } from "react";
import styles from "./gynecology-page.module.css";

export const GynecologyPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "/api/services/search?section=Гинекология"
        );
        if (!response.ok) {
          throw new Error("Ошибка при получении данных сервисов");
        }
        const data = await response.json();
        setServices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);
  return (
    <>
      <Banner backgroundImg={gynecologybanner} textColor={"#fff"}>
        Гинекология
      </Banner>
      <section className={styles.gynecology}>
        <Video
          title={"Для чего нужна консультация гинеколога?"}
          videolink={
            "https://youtube.com/shorts/-vW_qpACnt8?si=DVm7sFla-geBlrGg"
          }
          firstparagraph={
            "Женское здоровье — это важная и многогранная сфера, которая требует постоянного внимания и заботы. Регулярные визиты к врачу-гинекологу играют ключевую роль в поддержании здоровья и профилактике заболеваний."
          }
          secondparagraph={
            "Обращаться к гинекологу следует не только при наличии симптомов, таких как болезненные менструации, необычные выделения или дискомфорт в области таза, но и для профилактических осмотров. Эти осмотры помогают выявить потенциальные проблемы на ранних стадиях, что значительно увеличивает шансы на успешное лечение."
          }
          thirdparagraph={
            "Профилактика включает в себя не только осмотры, но и вакцинацию против вируса папилломы человека (ВПЧ), что может снизить риск развития рака шейки матки. Гинеколог также может предложить рекомендации по контрацепции и планированию семьи, что особенно важно для женщин, которые хотят контролировать свое репродуктивное здоровье."
          }
        ></Video>
      </section>
      <ServiceInfo serviceHeader="Как подготовиться к приёму?">
        <p>
          Обязательно берем всю имеющуюся медицинскую документацию, а также
          записи о предыдущих беременностях, если они велись в другом месте.
          Если во время визита предстоит сделать ультразвуковую диагностику,
          стоит ознакомиться с подготовкой к этой процедуре. Кроме того:
        </p>
        <ul>
          <li>
            за сутки до посещения врача следует отказаться от половых контактов;
          </li>

          <li>вечером накануне приема следует принять душ;</li>

          <li>
            на консультацию следует надеть удобную одежду, которую можно легко и
            быстро снять для проведения осмотра;
          </li>

          <li>
            волосы с лобка сбривать не обязательно, так как осмотру они не
            мешают;
          </li>

          <li>
            на прием следует взять с собой менструальный календарь (особенно
            если у Вас постоянно возникают сбои цикла).
          </li>
        </ul>
      </ServiceInfo>
      <section>
        {loading && <Loader />}
        {error && <div>Ошибка: {error}</div>}
        {!loading && !error && <TableService services={services} />}
      </section>
      <Record></Record>
    </>
  );
};
