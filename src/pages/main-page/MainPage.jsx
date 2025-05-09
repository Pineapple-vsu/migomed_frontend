import {
  MainBanner,
  MainText,
  MainServices,
  MainInfo,
  MainForm,
  MainSpecialists,
  MainQuestions,
} from "./components";
// import styles from "./main-page.module.css";

export const MainPage = () => {
  return (
    <>
      <MainBanner>Услуги</MainBanner>
      <MainText></MainText>
      <MainServices></MainServices>
      <MainInfo></MainInfo>
      <MainSpecialists></MainSpecialists>

      <MainQuestions></MainQuestions>
      <MainForm></MainForm>
    </>
  );
};
