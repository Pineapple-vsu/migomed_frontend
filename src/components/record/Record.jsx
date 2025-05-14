import { ButtonBlackSmall } from "../buttons/button-black-small/ButtonBlackSmall";
import styles from "./record.module.css";
import { Link } from "react-router";
import { useState } from "react";
import { Modal } from "../Modal/Modal";

export const Record = () => {
  const [isRecordModalOpen, setRecordModalOpen] = useState(false);
  return (
    <section className={styles.record}>
      <div className={styles.content}>
        <h2>Запишитесь на приём!</h2>
        <p>
          Оставьте свои контактные данные, и мы перезвоним Вам для уточнения
          удобной даты и времени посещения нашей клиники.
        </p>
      </div>
      <div onClick={() => setRecordModalOpen(true)}>
        <ButtonBlackSmall>Записаться</ButtonBlackSmall>
      </div>
      <Modal
        isOpen={isRecordModalOpen}
        onClose={() => setRecordModalOpen(false)}
        modalHeader="Запись на приём"
      >
        <div className={styles.module}>
          <label htmlFor="specialist">Выберите специалиста</label>
          <input
            type="text"
            name="specialist"
            id="specialist"
            placeholder="Фамилия Имя Отчество"
          />
        </div>
        <div className={styles.module}>
          <label htmlFor="user">Введите Ваше ФИО</label>
          <input
            type="text"
            name="user"
            id="user"
            placeholder="Фамилия Имя Отчество"
          />
        </div>

        <div className={styles.module}>
          <label htmlFor="phone">Введите Ваш номер телефона</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="+375 29 000 00 00"
          />
        </div>
        <div className={styles.module}>
          <label htmlFor="date">На какую дату Вы бы хотели записаться?</label>
          <input type="date" name="date" id="date" />
        </div>
        <span>
          Мы с Вами свяжемся для уточнения наиболее удобного для Вас времени
        </span>
        <div className={styles.form_agree}>
          <input type="checkbox" id="agree" className={styles.check} />
          <label htmlFor="agree">
            Я согласен на обработку&nbsp;
            <Link
              to="/polisy"
              className={styles.link}
              onClick={() => setRecordModalOpen(false)}
            >
              Персональных данных
            </Link>
          </label>
        </div>
        <Link to="/" onClick={() => setRecordModalOpen(false)}>
          <ButtonBlackSmall>Отправить</ButtonBlackSmall>
        </Link>
        {/* при отправке написать получилось или нет */}
      </Modal>
    </section>
  );
};

// import { ButtonBlackSmall } from "../buttons/button-black-small/ButtonBlackSmall";
// import styles from "./record.module.css";
// import { Link } from "react-router";
// import { useState } from "react";
// import { Modal } from "../Modal/Modal";

// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// // Определяем схему валидации
// const schema = yup.object().shape({
//   specialist: yup.string().required("Выберите специалиста"),
//   user: yup.string().required("Введите Ваше ФИО"),
//   phone: yup
//     .string()
//     .required("Введите Ваш номер телефона")
//     .matches(
//       /^\+[0-9]{9,19}$/,
//       "Номер должен начинаться с плюса и содержать 10-20 символов (включая плюс)"
//     ),
//   date: yup
//     .date()
//     .required("Укажите дату записи")
//     .min(new Date(), "Дата не может быть в прошлом"),
//   agree: yup
//     .boolean()
//     .oneOf([true], "Необходимо согласие на обработку персональных данных"),
// });

// export const Record = () => {
//   const [isRecordModalOpen, setRecordModalOpen] = useState(false);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = (data) => {
//     console.log("Данные формы записи:", data);
//     // Здесь нужно вызвать API или иную логику при успешной валидации
//     setRecordModalOpen(false);
//   };

//   return (
//     <section className={styles.record}>
//       <div className={styles.content}>
//         <h2>Запишитесь на приём!</h2>
//         <p>
//           Оставьте свои контактные данные, и мы перезвоним Вам для уточнения
//           удобной даты и времени посещения нашей клиники.
//         </p>
//       </div>
//       <div onClick={() => setRecordModalOpen(true)}>
//         <ButtonBlackSmall>Записаться</ButtonBlackSmall>
//       </div>
//       <Modal
//         isOpen={isRecordModalOpen}
//         onClose={() => setRecordModalOpen(false)}
//         modalHeader="Запись на приём"
//       >
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className={styles.module}>
//             <label htmlFor="specialist">Выберите специалиста</label>
//             <input
//               type="text"
//               id="specialist"
//               placeholder="Фамилия Имя Отчество"
//               {...register("specialist")}
//             />
//             {errors.specialist && (
//               <p className={styles.error}>{errors.specialist.message}</p>
//             )}
//           </div>
//           <div className={styles.module}>
//             <label htmlFor="user">Введите Ваше ФИО</label>
//             <input
//               type="text"
//               id="user"
//               placeholder="Фамилия Имя Отчество"
//               {...register("user")}
//             />
//             {errors.user && (
//               <p className={styles.error}>{errors.user.message}</p>
//             )}
//           </div>
//           <div className={styles.module}>
//             <label htmlFor="phone">Введите Ваш номер телефона</label>
//             <input
//               type="tel"
//               id="phone"
//               placeholder="+375 29 000 00 00"
//               {...register("phone")}
//             />
//             {errors.phone && (
//               <p className={styles.error}>{errors.phone.message}</p>
//             )}
//           </div>
//           <div className={styles.module}>
//             <label htmlFor="date">На какую дату Вы бы хотели записаться?</label>
//             <input type="date" id="date" {...register("date")} />
//             {errors.date && (
//               <p className={styles.error}>{errors.date.message}</p>
//             )}
//           </div>
//           <small>
//             Мы с Вами свяжемся для уточнения наиболее удобного для Вас времени
//           </small>
//           <div className={styles.form_agree}>
//             <input
//               type="checkbox"
//               id="agree"
//               className={styles.check}
//               {...register("agree")}
//             />
//             <label htmlFor="agree">
//               Я согласен на обработку&nbsp;
//               <Link
//                 to="/polisy"
//                 className={styles.link}
//                 onClick={() => setRecordModalOpen(false)}
//               >
//                 Персональных данных
//               </Link>
//             </label>
//             {errors.agree && (
//               <p className={styles.error}>{errors.agree.message}</p>
//             )}
//           </div>
//           <ButtonBlackSmall type="submit">Отправить</ButtonBlackSmall>
//         </form>
//       </Modal>
//     </section>
//   );
// };
