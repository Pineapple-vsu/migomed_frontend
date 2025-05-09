import { about } from "../../assets";
import { Banner } from "../../components";
import { Gallery } from "./components";

export const PhotoPage = () => {
  return (
    <>
      <Banner backgroundImg={about} textColor={"#000"}>
        Фотогалерея
      </Banner>
      <Gallery></Gallery>
    </>
  );
};
