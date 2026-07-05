import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import SectionHeader from "../../components/ui/SectionHeader";

export default function AboutSection() {
  const navigate = useNavigate();
  return (
    <section className="section-pad-lg home-section delay-1" style={{ background: "#fff" }}>
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
        <div>
          <SectionHeader label="Who We Are" title="Independent Research. Regional Impact." />
          <p className="section-sub">
            Security Research and Information Centre is an independent regional think tank dedicated to advancing human
            security, evidence-based policy, and conflict transformation across Kenya, the Great Lakes, and the Horn of
            Africa.
          </p>
          <p style={{ fontSize: 16, color: "var(--text-mid)", lineHeight: 1.8, marginTop: 16 }}>
            Through rigorous research, technical expertise, and strategic partnerships, SRIC bridges data and
            decision-making to build resilient and peaceful societies. Our work spans community peace structures, arms
            governance, security sector reform, and emerging crime analysis.
          </p>
          <div style={{ marginTop: 32 }}>
            <Button variant="navy" onClick={() => navigate("/our-story")}>
              Learn About SRIC
            </Button>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <div
            className="about-img-box"
            style={{
              background: "linear-gradient(135deg, var(--deep-blue) 0%, #0f2847 100%)",
              height: 400,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 80,
              borderRadius: 4,
            }}
          >
            🏛️
          </div>
          <div
            style={{
              position: "absolute",
              bottom: -20,
              right: -20,
              background: "var(--black)",
              padding: "20px 24px",
              color: "var(--white)",
              fontFamily: "'Playfair Display', serif",
            }}
          >
            <div style={{ fontSize: 40, fontWeight: 900, lineHeight: 1 }}>20+</div>
            <div style={{ fontSize: 12, fontFamily: "'Oswald', sans-serif", letterSpacing: 2 }}>YEARS OF RESEARCH</div>
          </div>
        </div>
      </div>
    </section>
  );
}
