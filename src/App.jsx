// import styles from "./app.module.css";
import { Route, Routes } from "react-router";
import { Header, Footer } from "./components";
import {
  GynecologyPage,
  MainPage,
  MedblogPage,
  NewsPage,
  PersonalPage,
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
        <Route path="/services" element={<ServicePage />} />
        {/* <Route path="/record-form" element={<div>Форма записи к врачу</div>} /> */}

        <Route path="/services/gynecology" element={<GynecologyPage />} />
        <Route path="/services/ultrasaund" element={<UltrasaundPage />} />
        <Route path="/services/analyzes" element={<AnalyzesPage />} />

        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/photo" element={<PhotoPage />} />

        <Route path="/contacts" element={<ContactsPage />} />

        <Route path="/medblog" element={<MedblogPage />} />
        <Route path="/medblog/:id" element={<NewsPage />} />

        <Route path="/polisy" element={<PolisyPage />} />

        <Route path="/personal" element={<PersonalPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
