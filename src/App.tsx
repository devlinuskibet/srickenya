import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/common/PageTransition";
import ScrollToTop from "./components/common/ScrollToTop";
import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { injectStyles } from "./styles/globalStyles";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
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
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <HomePage />
                </PageTransition>
              }
            />
            <Route
              path="/our-story"
              element={
                <PageTransition>
                  <OurStoryPage />
                </PageTransition>
              }
            />
            <Route
              path="/mission"
              element={
                <PageTransition>
                  <MissionPage />
                </PageTransition>
              }
            />
            <Route
              path="/values"
              element={
                <PageTransition>
                  <ValuesPage />
                </PageTransition>
              }
            />
            <Route
              path="/governance"
              element={
                <PageTransition>
                  <GovernancePage />
                </PageTransition>
              }
            />
            <Route
              path="/theory"
              element={
                <PageTransition>
                  <TheoryPage />
                </PageTransition>
              }
            />
            <Route
              path="/research"
              element={
                <PageTransition>
                  <ProgramPage {...researchProgram} />
                </PageTransition>
              }
            />
            <Route
              path="/arms"
              element={
                <PageTransition>
                  <ProgramPage {...armsProgram} />
                </PageTransition>
              }
            />
            <Route
              path="/peacebuilding"
              element={
                <PageTransition>
                  <ProgramPage {...peacebuildingProgram} />
                </PageTransition>
              }
            />
            <Route
              path="/ssr"
              element={
                <PageTransition>
                  <ProgramPage {...ssrProgram} />
                </PageTransition>
              }
            />
            <Route
              path="/crime"
              element={
                <PageTransition>
                  <ProgramPage {...crimeProgram} />
                </PageTransition>
              }
            />
            <Route
              path="/impact"
              element={
                <PageTransition>
                  <ImpactPage />
                </PageTransition>
              }
            />
            <Route
              path="/publications"
              element={
                <PageTransition>
                  <PublicationsPage />
                </PageTransition>
              }
            />
            <Route
              path="/media"
              element={
                <PageTransition>
                  <MediaPage />
                </PageTransition>
              }
            />
            <Route
              path="/partnerships"
              element={
                <PageTransition>
                  <PartnershipsPage />
                </PageTransition>
              }
            />
            <Route
              path="/careers"
              element={
                <PageTransition>
                  <CareersPage />
                </PageTransition>
              }
            />
            <Route
              path="/internships"
              element={
                <PageTransition>
                  <InternshipsPage />
                </PageTransition>
              }
            />
            <Route
              path="/partner-us"
              element={
                <PageTransition>
                  <PartnerUsPage />
                </PageTransition>
              }
            />
            <Route
              path="/contact"
              element={
                <PageTransition>
                  <ContactPage />
                </PageTransition>
              }
            />
            <Route
              path="*"
              element={
                <PageTransition>
                  <NotFoundPage />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
