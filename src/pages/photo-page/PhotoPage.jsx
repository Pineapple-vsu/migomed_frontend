import { about } from "../../assets";
import { Banner } from "../../components";
import { BASE_URL } from "../../config";
import { Gallery } from "./components/gallery/Gallery";
import styles from "./photo-page.module.css";
import { useEffect, useState } from "react";

export const PhotoPage = () => {
  const [photos, setPhotos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("/api/photos/search?section=gallery");
        if (!response.ok) {
          throw new Error("Ошибка загрузки фотографий");
        }
        const data = await response.json();
        setPhotos(data);
      } catch (err) {
        console.error("Ошибка:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <>
      <Banner backgroundImg={about} textColor={"#000"}>
        Фотогалерея
      </Banner>
      <section>
        {loading ? (
          <div className={styles.content}>
            <span className={styles.loader}></span>
          </div>
        ) : error ? (
          <p>{error}</p>
        ) : photos.length > 0 ? (
          <div className={styles.gallery}>
            {photos.map((photo) => (
              <Gallery key={photo.id}>
                <img
                  src={`${BASE_URL}/${photo.photoPath}`}
                  alt="Фото"
                  className={styles.photo}
                />
              </Gallery>
            ))}
          </div>
        ) : (
          <p>Фотографии не найдены</p>
        )}
      </section>
    </>
  );
};
