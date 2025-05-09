import styles from "./main-specialists.module.css";
import { SpecialistsSlide } from "../specialists-slide/SpecialistsSlide";
import { Link } from "react-router";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { useRef, useEffect } from "react";
import { SPECIALISTS } from "./specialists-data";

export const MainSpecialists = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const swiperInstance = document.querySelector(".swiper")?.swiper;
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <section>
      <div className={styles.main}>
        <h2>Наши специалисты</h2>
        <div className={styles.wrapper}>
          <Swiper
            modules={[Navigation]}
            autoHeight={false}
            spaceBetween={50}
            slidesPerView={3}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {/* {SPECIALISTS.map((full_name, post, category, experience, index) => (
              <SwiperSlide>
                <SpecialistsSlide
                  key={index}
                  post={post}
                  category={category}
                  experience={experience}
                >
                  {full_name}
                </SpecialistsSlide>
              </SwiperSlide>
            ))} */}
            <SwiperSlide>
              <SpecialistsSlide
                post={"Врач акушер-гинеколог"}
                category={"Первая категория"}
                experience={"Стаж 14 лет"}
              >
                Шляхтицева Ольга Леонидовна
              </SpecialistsSlide>
            </SwiperSlide>
            <SwiperSlide>
              <SpecialistsSlide
                post={"Врач ультразвуковой диагностики"}
                category={"Первая категория"}
                experience={"Стаж 30 лет"}
              >
                Жодик Наталья Александровна
              </SpecialistsSlide>
            </SwiperSlide>
            <SwiperSlide>
              <SpecialistsSlide
                post={"Врач ультразвуковой диагностики"}
                category={"Первая категория"}
                experience={"Стаж 14 лет"}
              >
                Куприянова Марина Дмитриевна
              </SpecialistsSlide>
            </SwiperSlide>
            <SwiperSlide>
              <SpecialistsSlide>Мы в поиске новых сотрудников</SpecialistsSlide>
            </SwiperSlide>
          </Swiper>
          <div
            ref={prevRef}
            className={`swiper-button-prev ${styles.custom_left}`}
          ></div>
          <div
            ref={nextRef}
            className={`swiper-button-next ${styles.custom_right}`}
          ></div>
        </div>
      </div>
    </section>
  );
};
