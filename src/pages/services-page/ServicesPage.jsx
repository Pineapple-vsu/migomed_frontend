// import {} from "./components";

import { servicesimg } from "../../assets";
import { Banner, Record } from "../../components";
// import { Record } from "../../components/record/Record";
import { ServiceSlider, ServiceText } from "./components";

// import styles from "./main-page.module.css";

export const ServicePage = () => {
  return (
    <>
      <Banner backgroundImg={servicesimg} textColor={"#000"}>
        Услуги
      </Banner>
      <ServiceText></ServiceText>
      <ServiceSlider></ServiceSlider>
      <Record></Record>
    </>
  );
};
