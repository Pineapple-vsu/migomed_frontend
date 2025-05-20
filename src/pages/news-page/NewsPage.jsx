// import styles from "./news-page.module.css";
// // import { Link } from "react-router";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { BASE_URL } from "../../config";
// import { Loader } from "../../components";

// export const NewsPage = () => {
//   const { id } = useParams();
//   const [newsData, setNewsData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchNewsItem = async () => {
//       try {
//         const response = await fetch(`/api/news/${id}`);
//         if (!response.ok) {
//           throw new Error("Ошибка при получении данных новости");
//         }
//         const data = await response.json();
//         setNewsData(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNewsItem();
//   }, [id]);

//   if (loading) return <Loader />;
//   if (error) return <div>Ошибка: {error}</div>;
//   const formattedDate = new Date(newsData.publicationDate).toLocaleString(
//     "ru-RU",
//     {
//       year: "numeric",
//       month: "2-digit",
//       day: "2-digit",
//       hour: "2-digit",
//       minute: "2-digit",
//     }
//   );

//   return (
//     <section>
//       <div className={styles.content}>
//         <h1>{newsData.headline}</h1>
//         <small>{formattedDate}</small>
//         <p>{newsData.content}</p>
//       </div>
//       <p>Следите за своим здоровьем с медицинским центром “Мигомед”!</p>
//     </section>
//   );
// };

//------------------------------------------------------------------------------------------!!!

import styles from "./news-page.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../config";
import { Loader } from "../../components";

export const NewsPage = () => {
  const { id } = useParams();
  const [newsData, setNewsData] = useState(null);
  const [htmlContent, setHtmlContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        const response = await fetch(`/api/news/${id}`);
        if (!response.ok) {
          throw new Error("Ошибка при получении данных новости");
        }
        const data = await response.json();
        setNewsData(data);

        // Если поле content указывает на HTML-страницу, формируем полный путь и загружаем HTML
        if (data.content && data.content.endsWith(".html")) {
          const fullPath = `${BASE_URL}/${data.content}`;
          const htmlResponse = await fetch(fullPath);
          if (!htmlResponse.ok) {
            throw new Error("Ошибка загрузки HTML страницы");
          }
          const htmlText = await htmlResponse.text();
          setHtmlContent(htmlText);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsItem();
  }, [id]);

  if (loading) return <Loader />;
  if (error) return <div>Ошибка: {error}</div>;

  const formattedDate = new Date(newsData.publicationDate).toLocaleString(
    "ru-RU",
    {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  return (
    <section>
      <div className={styles.content}>
        <h1>{newsData.headline}</h1>
        <small>{formattedDate}</small>
        {htmlContent ? (
          <div
            className={styles.info}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        ) : (
          <p>{newsData.content}</p>
        )}
      </div>
      <p>Следите за своим здоровьем с медицинским центром “Мигомед”!</p>
    </section>
  );
};
