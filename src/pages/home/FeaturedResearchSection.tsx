import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import SectionHeader from "../../components/SectionHeader";

export default function FeaturedResearchSection() {
  const navigate = useNavigate();
  return (
    <section className="section-pad-lg home-section delay-4" style={{ background: "#fff" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
        className="grid-2"
      >
        <div
          style={{
            background: "linear-gradient(135deg, var(--deep-blue) 0%, #0f2847 100%)",
            height: 360,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: 40,
            borderRadius: 2,
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              padding: "32px 40px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                color: "rgba(255,255,255,0.7)",
                fontFamily: "'Oswald', sans-serif",
                fontSize: 11,
                letterSpacing: 3,
                marginBottom: 12,
              }}
            >
              FLAGSHIP PUBLICATION
            </div>
            <div
              style={{
                color: "#fff",
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                fontWeight: 700,
                lineHeight: 1.3,
              }}
            >
              National Crime Survey 2024
            </div>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginTop: 8 }}>47 Counties | Kenya</div>
            <div style={{ width: 40, height: 2, background: "rgba(255,255,255,0.5)", margin: "16px auto" }} />
            <div style={{ fontSize: 40 }}>📊</div>
          </div>
        </div>
        <div>
          <SectionHeader label="Featured Research" title="National Crime Survey 2024" />
          <p className="section-sub">
            Our flagship annual survey delivers the most comprehensive, county-level analysis of crime patterns,
            security perceptions, and institutional responsiveness across all 47 counties of Kenya. The 2024 edition
            incorporates qualitative community assessments and cross-border dimension analysis.
          </p>
          <div style={{ display: "flex", gap: 16, marginTop: 32, flexWrap: "wrap" }}>
            <Button variant="primary" onClick={() => navigate("/publications")}>
              Download Full Report
            </Button>
            <Button variant="navy" onClick={() => navigate("/publications")}>
              View All Publications
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
