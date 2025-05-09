import styles from "./service-slider.module.css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
// import { useRef, useEffect } from "react";
import { ServiceSlide } from "../service-slide/ServiceSlide";
import {
  analyzesbanner,
  gynecologybanner,
  ultrasaundbanner,
} from "../../../../assets";

export const ServiceSlider = () => {
  return (
    <section className={styles.service_slider}>
      <div className={styles.main}>
        <div className={styles.wrapper}>
          <Swiper
            className={styles.swiper}
            modules={[Navigation]}
            autoHeight={true}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <ServiceSlide
                slideLink="analyzes"
                backgroundUrl={analyzesbanner}
                description="Медицинский центр «МИГОМЕД» — официальный партнёр ведущей лаборатории Беларуси Helix. В перечне услуг более 1500 анализов."
              >
                Медицинские анализы
              </ServiceSlide>
            </SwiperSlide>

            <SwiperSlide>
              <ServiceSlide
                slideLink="gynecology"
                backgroundUrl={gynecologybanner}
                description="Мы предлагаем полный спектр гинекологической помощи, УЗИ диагностику и консультацию."
              >
                Гинекология
              </ServiceSlide>
            </SwiperSlide>

            <SwiperSlide>
              <ServiceSlide
                slideLink="ultrasaund"
                backgroundUrl={ultrasaundbanner}
                description="УЗИ в медицинском центре «МИГОМЕД» — это доступные цены, неинвазивность и безопасность исследования."
              >
                Ультразвуковая диагностика
              </ServiceSlide>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
