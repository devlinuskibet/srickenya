import PageHero from "../../components/PageHero";
import { coreValues } from "../../data";

export default function ValuesPage() {
  return (
    <div>
      <PageHero title="Core Values" subtitle="What We Stand For" breadcrumb="About / Core Values" />
      <section className="section-pad-md" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ fontSize: 17, color: "var(--text-mid)", lineHeight: 1.8, maxWidth: 700, margin: "0 auto" }}>Our values are not aspirational statements—they are the operational principles that guide every research study, policy engagement, and partnership we undertake.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="grid-3">
            {coreValues.map((v) => (
              <div key={v.title} className="value-card card-hover">
                <div style={{ fontSize: 36, marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "var(--navy)", marginBottom: 12 }}>{v.title}</h3>
                <p style={{ fontSize: 14, color: "var(--text-mid)", lineHeight: 1.8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
