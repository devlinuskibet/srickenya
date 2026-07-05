import SectionHeader from "../../components/ui/SectionHeader";
import { partners } from "../../data";

export default function PartnersSection() {
  return (
    <section className="section-pad-md home-section delay-7" style={{ background: "var(--grey-light)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader label="Our Network" title="Strategic Partners" align="center" />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
          {partners.map((p) => (
            <div key={p.name} className="partner-logo card-hover">
              <div style={{ textAlign: "center" }}>
                <div
                  style={{ fontFamily: "'Oswald', sans-serif", fontSize: 16, fontWeight: 600, color: "var(--navy)" }}
                >
                  {p.name}
                </div>
                <div style={{ fontSize: 9, color: "var(--text-light)", marginTop: 3 }}>{p.full}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
