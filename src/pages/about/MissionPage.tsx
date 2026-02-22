import PageHero from "../../components/PageHero";

export default function MissionPage() {
  return (
    <div>
      <PageHero title="Mission & Vision" subtitle="Our Purpose" breadcrumb="About / Mission & Vision" />
      <section className="section-pad-lg" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <div className="section-label">Our Vision</div>
            <blockquote style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700, color: "var(--navy)", lineHeight: 1.4, fontStyle: "italic", maxWidth: 780, margin: "0 auto" }}>
              "A peaceful and secure region where evidence-driven policies strengthen institutions and empower communities."
            </blockquote>
            <div className="divider-gold-center" style={{ marginTop: 32 }} />
          </div>

          <div style={{ background: "var(--navy)", padding: "56px 64px", borderRadius: 2, marginBottom: 80 }}>
            <div className="section-label" style={{ color: "var(--gold)" }}>Our Mission</div>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#fff", lineHeight: 1.7, fontWeight: 400 }}>To generate credible research, inform policy, and strengthen institutional and community capacity in addressing human security challenges through collaboration, innovation, and accountability.</p>
          </div>

          <div className="section-label">Strategic Objectives</div>
          <h2 className="section-heading">How We Pursue Our Mission</h2>
          <div className="divider-gold" />
          <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="grid-2">
            {["Produce rigorous, independent security research that guides national and regional policy decisions.",
              "Strengthen arms governance frameworks to prevent illicit proliferation and support compliance.",
              "Support conflict transformation through evidence-based community peace programs.",
              "Enhance institutional accountability and effectiveness in security sector governance.",
              "Inform and shape regional policy dialogue through evidence synthesis and stakeholder engagement.",
            ].map((obj, i) => (
              <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "20px 24px", background: "var(--grey-light)", borderLeft: "3px solid var(--gold)" }}>
                <div style={{ minWidth: 32, height: 32, background: "var(--navy)", color: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Oswald', sans-serif", fontSize: 14, fontWeight: 600, flexShrink: 0 }}>0{i + 1}</div>
                <p style={{ fontSize: 15, color: "var(--text-mid)", lineHeight: 1.7 }}>{obj}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
