//
// import {} from "./components";

import { analyzesbanner } from "../../assets";
import { Banner, Loader, Record } from "../../components";
import { Video } from "../../components/video/Video";
import styles from "./analyzes-page.module.css";
import { useState, useEffect } from "react";
import { TableService } from "../../components";

export const AnalyzesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch("/api/services/search?section=Анализы");
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
      <Banner backgroundImg={analyzesbanner} textColor={"#fff"}>
        Медицинские анализы
      </Banner>
      <section className={styles.analyzes}>
        <Video
          title={"Медицинский центр «МИГОМЕД»"}
          videolink={
            "https://youtube.com/shorts/NJ2IXgJqxp0?si=HmuMB9hkz4W3chHn"
          }
          firstparagraph={
            "Медицинский центр «МИГОМЕД» — официальный партнер HELIX (Хеликс) по лабораторной диагностике в Горках. Взятие биоматериала производится по живой очереди, согласно графику забора анализов (подробнее в разделе Контакты). Полный перечень услуг и цен смотрите на сайте helix.by в разделе “Анализы”."
          }
          secondparagraph={
            "Ниже представлен пример перечня анализов с ценами по состоянию на 25.10.2024."
          }
          thirdparagraph={
            "Материалы, размещенные на данной странице, носят информационный характер. Посетители сайта НЕ должны использовать их в качестве медицинских рекомендаций. Определение диагноза и выбор методики лечения остается исключительной прерогативой вашего лечащего врача.  Указанные цены НЕ являются публичной офертой и носят исключительно информационный характер."
          }
        ></Video>
        {loading && <Loader />}
        {error && <div>Ошибка: {error}</div>}
        {!loading && !error && <TableService services={services} />}
      </section>
      <Record></Record>
    </>
  );
};
