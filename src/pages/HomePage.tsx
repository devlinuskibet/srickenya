import SEO from "../components/common/SEO";
import HeroSection from "./home/HeroSection";
import AboutSection from "./home/AboutSection";
import ProgramsSection from "./home/ProgramsSection";
import StatsSection from "./home/StatsSection";
import FeaturedResearchSection from "./home/FeaturedResearchSection";
import LatestResearchSection from "./home/LatestResearchSection";
import GallerySection from "./home/GallerySection";
import PartnersSection from "./home/PartnersSection";
import CTASection from "./home/CTASection";

export default function HomePage() {
  return (
    <div className="page-load">
      <SEO title="Home" description="Learn more about Home at SRIC - Security Research & Information Centre." />
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <StatsSection />
      <FeaturedResearchSection />
      <LatestResearchSection />
      <GallerySection />
      <PartnersSection />
      <CTASection />
    </div>
  );
}
