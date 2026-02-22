import PageHero from "../components/PageHero";

const jobs = [
  ["Senior Research Officer – Crime Trends", "Research & Information", "Nairobi", "Full-time"],
  ["Program Officer – Arms Control", "Arms Control & Management", "Nairobi", "Full-time"],
  ["Communications & Media Manager", "Executive Office", "Nairobi", "Full-time"],
  ["Research Associate – SSR", "Security Sector Reform", "Nairobi", "Contract (12 months)"],
];

const benefits = ["Multidisciplinary research teams", "Direct policy influence", "Regional and international exposure", "Professional development support", "Collaborative and inclusive culture", "Evidence-driven institutional culture"];

export default function CareersPage() {
  return (
    <div>
      <PageHero title="Join Our Mission" subtitle="Careers at SRIC" breadcrumb="Get Involved / Careers" />
      <section className="section-pad-md" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 64 }} className="grid-2">
            <div>
              <div className="section-label">Current Openings</div>
              <h2 className="section-heading">Career Opportunities</h2>
              <div className="divider-gold" />
              <p className="section-sub">SRIC brings together exceptional researchers, policy analysts, and program specialists committed to advancing human security across East Africa. We are currently reviewing applications for the following positions.</p>
              <div style={{ marginTop: 40 }}>
                {jobs.map(([title, dept, loc, type]) => (
                  <div key={title} style={{ padding: "24px 28px", border: "1px solid var(--grey-mid)", marginBottom: 16, display: "flex", justifyContent: "space-between", alignItems: "center", transition: "all 0.2s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--grey-mid)"; }}>
                    <div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, color: "var(--navy)", marginBottom: 6 }}>{title}</h3>
                      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 12, color: "var(--text-light)" }}>Dept: {dept}</span>
                        <span style={{ fontSize: 12, color: "var(--text-light)" }}>Location: {loc}</span>
                        <span style={{ fontSize: 12, color: "var(--gold)", fontFamily: "'Oswald', sans-serif", letterSpacing: 0.5 }}>{type}</span>
                      </div>
                    </div>
                    <button className="btn-primary" style={{ fontSize: 12, padding: "8px 16px", whiteSpace: "nowrap" }}>Apply Now</button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ background: "var(--grey-light)", padding: "32px 28px", marginBottom: 24 }}>
                <div className="section-label">Why SRIC?</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "var(--navy)", marginBottom: 20 }}>A Culture of Excellence</h3>
                {benefits.map((v) => (
                  <div key={v} style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12, fontSize: 13, color: "var(--text-mid)" }}>
                    <span style={{ color: "var(--gold)", fontWeight: 700 }}>✓</span> {v}
                  </div>
                ))}
              </div>
              <div style={{ background: "var(--navy)", padding: "28px", textAlign: "center" }}>
                <div style={{ fontSize: 12, color: "var(--gold)", fontFamily: "'Oswald', sans-serif", letterSpacing: 1.5, marginBottom: 12 }}>DON'T SEE A FIT?</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", marginBottom: 20 }}>Send us your CV for future consideration.</p>
                <button className="btn-outline" style={{ width: "100%", textAlign: "center" }}>Submit CV</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
