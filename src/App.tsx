import { useState, useEffect } from "react";
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
import { researchProgram, armsProgram, peacebuildingProgram, ssrProgram, crimeProgram } from "./pages/work/programConfig";
import ImpactPage from "./pages/ImpactPage";
import PublicationsPage from "./pages/PublicationsPage";
import MediaPage from "./pages/MediaPage";
import PartnershipsPage from "./pages/PartnershipsPage";
import CareersPage from "./pages/CareersPage";
import InternshipsPage from "./pages/InternshipsPage";
import PartnerUsPage from "./pages/PartnerUsPage";
import ContactPage from "./pages/ContactPage";

export type PageId = string;

export default function App() {
  const [page, setPage] = useState<PageId>("home");

  useEffect(() => {
    injectStyles();
  }, []);

  const navigate = (p: PageId) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (page) {
      case "home":
        return <HomePage navigate={navigate} />;
      case "our-story":
        return <OurStoryPage />;
      case "mission":
        return <MissionPage />;
      case "values":
        return <ValuesPage />;
      case "governance":
        return <GovernancePage />;
      case "theory":
        return <TheoryPage />;
      case "research":
        return <ProgramPage {...researchProgram} />;
      case "arms":
        return <ProgramPage {...armsProgram} />;
      case "peacebuilding":
        return <ProgramPage {...peacebuildingProgram} />;
      case "ssr":
        return <ProgramPage {...ssrProgram} />;
      case "crime":
        return <ProgramPage {...crimeProgram} />;
      case "impact":
        return <ImpactPage />;
      case "publications":
        return <PublicationsPage />;
      case "media":
        return <MediaPage />;
      case "partnerships":
        return <PartnershipsPage navigate={navigate} />;
      case "careers":
        return <CareersPage />;
      case "internships":
        return <InternshipsPage />;
      case "partner-us":
        return <PartnerUsPage navigate={navigate} />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div style={{ minHeight: "100vh", width: "100%", display: "flex", flexDirection: "column", overflowX: "hidden" }}>
      <NavBar currentPage={page} navigate={navigate} />
      <main className={page === "home" ? "" : "content-offset"} style={{ paddingTop: page === "home" ? 0 : 112, flex: 1, width: "100%", minWidth: 0 }}>
        {renderPage()}
      </main>
      <Footer navigate={navigate} />
    </div>
  );
}
