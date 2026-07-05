import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import SectionHeader from "../../components/ui/SectionHeader";
import { publications } from "../../data";

export default function LatestResearchSection() {
  const navigate = useNavigate();
  return (
    <section className="section-pad-lg home-section delay-5" style={{ background: "var(--grey-light)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 48,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <SectionHeader label="Latest Research" title="Publications & Resources" />
          </div>
          <Button variant="navy" onClick={() => navigate("/publications")}>
            Browse All Publications
          </Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="grid-4">
          {publications.map((pub) => (
            <div key={pub.title} className="pub-card card-hover">
              <div className="pub-thumb">
                <span style={{ fontSize: 48 }}>📄</span>
              </div>
              <div style={{ padding: "20px 20px 24px" }}>
                <span className="pub-tag">{pub.tag}</span>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 15,
                    fontWeight: 700,
                    color: "var(--navy)",
                    lineHeight: 1.4,
                    marginBottom: 10,
                  }}
                >
                  {pub.title}
                </h3>
                <p style={{ fontSize: 12, color: "var(--text-mid)", lineHeight: 1.7, marginBottom: 16 }}>{pub.desc}</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 11, color: "var(--text-light)" }}>{pub.year}</span>
                  <Button variant="primary" style={{ fontSize: 11, padding: "6px 14px" }}>
                    Download
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
