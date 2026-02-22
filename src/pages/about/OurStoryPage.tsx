import PageHero from "../../components/PageHero";

export default function OurStoryPage() {
  return (
    <div>
      <PageHero title="Our Story" subtitle="About SRIC" breadcrumb="About / Our Story" />
      <section className="section-pad-md" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }} className="grid-2">
          <div>
            <div className="section-label">Founding Context</div>
            <h2 className="section-heading" style={{ marginBottom: 16 }}>Two Decades of Advancing Human Security</h2>
            <div className="divider-gold" />
            <p className="section-sub">Security Research and Information Centre was established in response to the pressing need for reliable, locally-grounded security intelligence in Kenya and across the East Africa region. At its founding, the Centre recognized a critical gap between security policymakers and the communities most affected by violence, arms proliferation, and institutional failure.</p>
            <p style={{ fontSize: 16, color: "var(--text-mid)", lineHeight: 1.8, marginTop: 20 }}>Over two decades, SRIC has evolved from a Kenya-focused research entity into a multidisciplinary regional think tank with programmatic reach across the Great Lakes and the Horn of Africa. Our work has shaped national legislation, informed regional security protocols, and directly strengthened the capacities of thousands of practitioners and community actors.</p>
            <div className="section-label" style={{ marginTop: 40 }}>Institutional Growth</div>
            <p style={{ fontSize: 16, color: "var(--text-mid)", lineHeight: 1.8 }}>From our base in Nairobi, SRIC has built a network of field researchers, policy advisors, and community-level practitioners working across diverse security environments. Our independence from government and partisan interests ensures that our findings remain credible, actionable, and trusted by a wide range of stakeholders.</p>
          </div>
          <div>
            <div style={{ background: "linear-gradient(135deg, var(--navy), var(--navy-mid))", height: 350, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 80, borderRadius: 2, marginBottom: 24 }}>📜</div>
            <div style={{ background: "var(--grey-light)", padding: 32, borderLeft: "4px solid var(--gold)" }}>
              <div className="section-label">Today</div>
              <p style={{ fontSize: 15, color: "var(--text-mid)", lineHeight: 1.8 }}>SRIC stands as one of the region's most credible independent security think tanks—publishing flagship national surveys, informing regional arms control frameworks, and building sustainable peace infrastructure at the community level.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad-md" style={{ background: "var(--grey-light)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <div className="section-label">Regional Reach</div>
          <h2 className="section-heading">Programmatic Footprint</h2>
          <div className="divider-gold-center" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 48 }} className="grid-3">
            {[["🇰🇪", "Kenya", "Primary operational base. Country-wide research, surveys, and community programs across all 47 counties."],
              ["🌍", "Great Lakes Region", "Cross-border dialogue, arms governance, and conflict transformation programming in Uganda, Rwanda, and DRC."],
              ["🌐", "Horn of Africa", "Regional security analysis, extremism monitoring, and SSR advisory engagement with IGAD member states."]].map(([flag, region, desc]) => (
              <div key={region} style={{ background: "#fff", padding: 32, boxShadow: "0 2px 12px rgba(13,46,30,0.07)" }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>{flag}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: "var(--navy)", marginBottom: 12 }}>{region}</h3>
                <p style={{ fontSize: 14, color: "var(--text-mid)", lineHeight: 1.8 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
