// import styles from "./app.module.css";
import { Route, Routes } from "react-router";
import { Header, Footer } from "./components";
import {
  GynecologyPage,
  MainPage,
  MedblogPage,
  PhotoPage,
  PolisyPage,
  ServicePage,
  UltrasaundPage,
} from "./pages";
import { AboutPage } from "./pages/about-page/AboutPage";
import { AnalyzesPage } from "./pages/analyzes-page/AnalyzesPage";
import { ContactsPage } from "./pages/contacts-page/ContactsPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/services" element={<ServicePage></ServicePage>} />
        <Route path="/record-form" element={<div>Форма записи к врачу</div>} />

        <Route
          path="/services/gynecology"
          element={<GynecologyPage></GynecologyPage>}
        />
        <Route
          path="/services/ultrasaund"
          element={<UltrasaundPage></UltrasaundPage>}
        />
        <Route
          path="/services/analyzes"
          element={<AnalyzesPage></AnalyzesPage>}
        />

        <Route path="/about" element={<AboutPage></AboutPage>} />
        <Route path="/about/photo" element={<PhotoPage></PhotoPage>} />

        <Route path="/contacts" element={<ContactsPage />} />

        <Route path="/medblog" element={<MedblogPage></MedblogPage>} />

        <Route path="/polisy" element={<PolisyPage></PolisyPage>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
