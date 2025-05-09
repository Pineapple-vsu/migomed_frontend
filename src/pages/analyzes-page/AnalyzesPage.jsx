//
// import {} from "./components";

import { analyzesbanner } from "../../assets";
import { Banner, Record } from "../../components";
import { Video } from "../../components/video/Video";

export const AnalyzesPage = () => {
  return (
    <>
      <Banner backgroundImg={analyzesbanner} textColor={"#fff"}>
        Медицинские анализы
      </Banner>
      <section>
        <Video
          title={"Медицинский центр «МИГОМЕД»"}
          videolink={
            "https://youtube.com/shorts/NJ2IXgJqxp0?si=HmuMB9hkz4W3chHn"
          }
          firstparagraph={
            "Медицинский центр «МИГОМЕД» — официальный партнер HELIX (Хеликс) по лабораторной диагностике в Горках. Взятие биоматериала производится по живой очереди, согласно графику забора анализов (подробнее в разделе Контакты). Полный перечень услуг и цен смотрите на сайте helix.by в разделе “Анализы”."
          }
          secondparagraph={
            "Ниже представлен пример перечня анализов с ценами по состоянию на 25.10.2024."
          }
          thirdparagraph={
            "Материалы, размещенные на данной странице, носят информационный характер. Посетители сайта НЕ должны использовать их в качестве медицинских рекомендаций. Определение диагноза и выбор методики лечения остается исключительной прерогативой вашего лечащего врача.  Указанные цены НЕ являются публичной офертой и носят исключительно информационный характер."
          }
        ></Video>
      </section>
      <Record></Record>
    </>
  );
};
