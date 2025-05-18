import { ultrasaundbanner } from "../../assets";
import { Banner, Loader, Record, ServiceInfo } from "../../components";
import { TableService } from "../../components";
import { Video } from "../../components/video/Video";
import styles from "./ultrasaund-page.module.css";
import { useState, useEffect } from "react";

export const UltrasaundPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "/api/services/search?section=Ультразвуковая"
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
      <Banner backgroundImg={ultrasaundbanner} textColor={"#fff"}>
        Ультразвуковая <br />
        диагностика
      </Banner>
      <section className={styles.ultrasaund}>
        <Video
          title={"Что такое УЗИ?"}
          videolink={
            "https://youtube.com/shorts/NW_S7UogBZA?si=M14oeYnci8Jh50mP"
          }
          firstparagraph={
            "УЗИ (ультразвуковая диагностика) — это неинвазивный и безопасный метод медицинского обследования, который использует отражение звуковых волн в безвредном для организма диапазоне. Этот процесс позволяет получить точное изображение тканей организма в реальном времени, что делает УЗИ незаменимым инструментом в диагностике различных заболеваний."
          }
          secondparagraph={
            "Во время ультразвукового исследования создается естественный контраст, обусловленный различной структурой и толщиной тканей. Это позволяет врачу четко визуализировать органы и системы, выявлять аномалии, кисты, опухоли и другие патологии."
          }
          thirdparagraph={
            "Регулярные ультразвуковые обследования помогают контролировать состояние здоровья и выявлять возможные проблемы на ранних стадиях, что значительно увеличивает шансы на успешное лечение. Заботьтесь о своем здоровье и не забывайте о важности регулярных медицинских обследований! "
          }
        ></Video>
      </section>
      <ServiceInfo serviceHeader="Как подготовиться к УЗИ?">
        <p>
          Перед приёмом врача ультразвуковой диагностики обязательно берём всю
          имеющуюся медицинскую документацию и результаты предыдущих
          исследований! При этом стоит помнить, что УЗИ органов малого таза у
          женщин проводится:
        </p>
        <ul>
          <li>
            Трансабдоминальным методом: при полном мочевом пузыре. Для
            наполнения мочевого пузыря надо выпить не менее 1 литра простой воды
            (не сока и не газированной воды!) за 2-3 часа до исследования.
            Мочевой пузырь перед исследованием не опорожнять! Желательно
            проводить данное исследование на 5-10 день менструального цикла или
            8-12 день.
          </li>

          <li>
            Трансвагинальны методом: специальной подготовки к исследованию не
            требуется. Исследование проводится при опорожненном мочевом пузыре.
            Желательно проводить данное исследование на 5-10 день менструального
            цикла. Для мониторинга фолликулогенеза (при планировании
            беременности и в других случаях) проводят трансвагинальное УЗИ на
            пятый, девятый и 14-17 дни менструального цикла. Возможны сдвиги
            сроков проведения в конкретных случаях, в зависимости от
            продолжительности цикла.
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
