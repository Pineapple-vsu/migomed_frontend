import styles from "./news-slider.module.css";
// import { SpecialistsSlide } from "../specialists-slide/SpecialistsSlide";
import { Link } from "react-router";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { useRef, useEffect, useState } from "react";
import { NewsSlide } from "../news-slide/NewsSlide";
import { BASE_URL } from "../../../../config";
import { Loader } from "../../../../components";
// import { SPECIALISTS } from "./specialists-data";

export const NewsSlider = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/news");
        if (!response.ok) {
          throw new Error("Ошибка при получении новостей");
        }
        const data = await response.json();
        setLoading(false);
        setNews(data);
      } catch (error) {
        console.error("Ошибка получения новостей:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const swiperInstance = document.querySelector(".swiper")?.swiper;
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [news]);

  if (loading) {
    return <Loader />;
  }
  return (
    // <section>
    <div className={styles.main}>
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
          {news.map((newsItem, index) => (
            <SwiperSlide key={newsItem.id || index}>
              <NewsSlide
                link={`${newsItem.id}`}
                image={`${BASE_URL}/${newsItem.photos[0].photoPath}`}
                date={newsItem.publicationDate}
                headline={newsItem.headline}
              />
            </SwiperSlide>
          ))}
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
    // </section>
  );
};
