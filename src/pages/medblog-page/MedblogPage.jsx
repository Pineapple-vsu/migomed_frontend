// import {} from "./components";

import { medblogbanner } from "../../assets";
import { Banner } from "../../components";
import { Video } from "../../components/video/Video";

// import { ServiceText } from "./components";

// import styles from "./main-page.module.css";

export const MedblogPage = () => {
  return (
    <>
      <Banner backgroundImg={medblogbanner} textColor={"#000"}>
        Medblog+
      </Banner>
      <section>{/* slider */}</section>
    </>
  );
};
