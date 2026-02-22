import PageHero from "../../components/PageHero";

export type ProgramPageProps = {
  title: string;
  icon: string;
  subtitle: string;
  framing: string;
  areas: string[];
  flagship: { title: string; desc: string };
};

export default function ProgramPage({ title, icon, subtitle, framing, areas, flagship }: ProgramPageProps) {
  return (
    <div>
      <PageHero title={title} subtitle={subtitle} breadcrumb={`Our Work / ${title}`} />
      <section className="section-pad-md" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 64, alignItems: "start", marginBottom: 64 }} className="grid-2">
            <div>
              <div className="section-label">Strategic Framing</div>
              <h2 className="section-heading">{title}</h2>
              <div className="divider-gold" />
              <p className="section-sub">{framing}</p>
            </div>
            <div style={{ background: "linear-gradient(135deg, var(--navy), var(--navy-mid))", height: 280, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 80, borderRadius: 2 }}>{icon}</div>
          </div>

          <div style={{ background: "var(--grey-light)", padding: "48px 48px", marginBottom: 48, borderTop: "3px solid var(--navy)" }}>
            <div className="section-label">Focus Areas</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "var(--navy)", marginBottom: 32 }}>Key Focus Areas</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }} className="grid-2">
              {areas.map((area, i) => (
                <div key={area} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "16px 20px", background: "#fff", borderLeft: "3px solid var(--gold)" }}>
                  <span style={{ color: "var(--gold)", fontFamily: "'Oswald', sans-serif", fontSize: 16, fontWeight: 700, minWidth: 28 }}>0{i + 1}</span>
                  <span style={{ fontSize: 14, color: "var(--text-mid)", lineHeight: 1.7 }}>{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "var(--navy)", padding: "48px 56px", marginBottom: 48, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="grid-2">
            <div>
              <div className="section-label" style={{ color: "var(--gold)" }}>Flagship Initiatives</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "#fff", marginBottom: 16 }}>{flagship.title}</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>{flagship.desc}</p>
            </div>
            <div>
              <button className="btn-primary" style={{ display: "block", marginBottom: 16, width: "100%", textAlign: "center" }}>View Publications</button>
              <button className="btn-outline" style={{ display: "block", width: "100%", textAlign: "center" }}>Contact Program Team</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
