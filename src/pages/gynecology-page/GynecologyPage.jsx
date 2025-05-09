// import {} from "./components";

import { gynecologybanner } from "../../assets";
import { Banner, Record } from "../../components";
import { Video } from "../../components/video/Video";

// import { ServiceText } from "./components";

// import styles from "./main-page.module.css";

export const GynecologyPage = () => {
  return (
    <>
      <Banner backgroundImg={gynecologybanner} textColor={"#fff"}>
        Гинекология
      </Banner>
      <section>
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
      <Record></Record>
    </>
  );
};
