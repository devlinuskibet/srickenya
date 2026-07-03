import { useNavigate } from "react-router-dom";
import SectionHeader from "../../components/SectionHeader";
import { programs } from "../../data";

export default function ProgramsSection() {
  const navigate = useNavigate();
  return (
    <section className="section-pad-lg home-section delay-2" style={{ background: "var(--grey-light)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader label="What We Do" title="Our Areas of Work" align="center" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }} className="grid-5">
          {programs.map((p) => (
            <div
              key={p.title}
              className="prog-card card-hover"
              role="button"
              tabIndex={0}
              aria-label={`Learn more about ${p.title}`}
              onClick={() => navigate(p.page)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  navigate(p.page);
                }
              }}
            >
              <div className="prog-icon">{p.icon}</div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 16,
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: 10,
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: 13, color: "var(--text-mid)", lineHeight: 1.7 }}>{p.desc}</p>
              <div
                style={{
                  marginTop: 20,
                  fontSize: 12,
                  color: "var(--text-dark)",
                  fontFamily: "'Oswald', sans-serif",
                  letterSpacing: 1,
                }}
              >
                LEARN MORE →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
