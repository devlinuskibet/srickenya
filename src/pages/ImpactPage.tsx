import PageHero from "../components/PageHero";
import { stats } from "../data";

export default function ImpactPage() {
  const extendedStats = [...stats, { num: "15+", label: "Partner Organizations" }, { num: "3", label: "Regional Bodies Advised" }, { num: "5K+", label: "Community Members Reached" }];

  return (
    <div>
      <PageHero title="Measuring Our Impact" subtitle="From Field to Policy" breadcrumb="Impact" />
      <section className="section-pad-md" style={{ background: "var(--navy)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="section-label" style={{ color: "var(--gold)" }}>By the Numbers</div>
            <h2 className="section-heading-white">Our Impact in Numbers</h2>
            <div className="divider-gold-center" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }} className="grid-3">
            {extendedStats.map((s) => (
              <div key={s.label} style={{ background: "rgba(255,255,255,0.05)", padding: "40px 24px", textAlign: "center", borderRight: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad-md" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="section-label">Case Studies</div>
          <h2 className="section-heading">Impact Stories</h2>
          <div className="divider-gold" />
          <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1fr", gap: 32 }}>
            {[["Turkana Peace Infrastructure", "Turkana County, Kenya", "2023–2024", "SRIC's community peace committee strengthening program trained 120 local peace monitors across 8 sub-counties, establishing functional early warning systems that contributed to a measurable reduction in cattle-rustling incidents and inter-communal violence.", "🤝"],
              ["National Crime Survey 2024", "47 Counties, Kenya", "2024", "SRIC's flagship survey delivered county-level crime data to the National Police Service, informing resource allocation decisions and contributing to evidence-based policing reforms in 12 high-crime counties.", "📊"],
              ["Cross-Border Arms Dialogue", "Kenya-Uganda Border", "2023", "A regional multi-stakeholder workshop facilitated by SRIC brought together security officials from Kenya and Uganda to align arms marking protocols, directly supporting RECSA compliance frameworks.", "🛡️"],
            ].map(([title, loc, year, desc, icon]) => (
              <div key={title} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, padding: 32, background: "var(--grey-light)", alignItems: "center" }} className="grid-2">
                <div style={{ width: 100, height: 100, background: "var(--navy)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40, borderRadius: 2, flexShrink: 0 }}>{icon}</div>
                <div>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 11, color: "var(--gold)", letterSpacing: 2, marginBottom: 6 }}>{loc} • {year}</div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "var(--navy)", marginBottom: 12 }}>{title}</h3>
                  <p style={{ fontSize: 14, color: "var(--text-mid)", lineHeight: 1.8 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
