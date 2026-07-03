import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { injectStyles } from "./styles/globalStyles";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import OurStoryPage from "./pages/about/OurStoryPage";
import MissionPage from "./pages/about/MissionPage";
import ValuesPage from "./pages/about/ValuesPage";
import GovernancePage from "./pages/about/GovernancePage";
import TheoryPage from "./pages/about/TheoryPage";
import ProgramPage from "./pages/work/ProgramPage";
import {
  researchProgram,
  armsProgram,
  peacebuildingProgram,
  ssrProgram,
  crimeProgram,
} from "./pages/work/programConfig";
import ImpactPage from "./pages/ImpactPage";
import PublicationsPage from "./pages/PublicationsPage";
import MediaPage from "./pages/MediaPage";
import PartnershipsPage from "./pages/PartnershipsPage";
import CareersPage from "./pages/CareersPage";
import InternshipsPage from "./pages/InternshipsPage";
import PartnerUsPage from "./pages/PartnerUsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  const location = useLocation();

  useEffect(() => {
    injectStyles();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <NavBar />
      <main
        className={location.pathname === "/" ? "" : "content-offset"}
        style={{
          paddingTop: location.pathname === "/" ? 0 : 112,
          flex: 1,
          width: "100%",
          minWidth: 0,
        }}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/our-story" element={<OurStoryPage />} />
          <Route path="/mission" element={<MissionPage />} />
          <Route path="/values" element={<ValuesPage />} />
          <Route path="/governance" element={<GovernancePage />} />
          <Route path="/theory" element={<TheoryPage />} />
          <Route path="/research" element={<ProgramPage {...researchProgram} />} />
          <Route path="/arms" element={<ProgramPage {...armsProgram} />} />
          <Route path="/peacebuilding" element={<ProgramPage {...peacebuildingProgram} />} />
          <Route path="/ssr" element={<ProgramPage {...ssrProgram} />} />
          <Route path="/crime" element={<ProgramPage {...crimeProgram} />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/partnerships" element={<PartnershipsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/internships" element={<InternshipsPage />} />
          <Route path="/partner-us" element={<PartnerUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
