import PageHero from "../components/PageHero";

type PartnerUsPageProps = { navigate: (page: string) => void };

const types = [
  { title: "Institutional Partnerships", desc: "Co-design research programs with SRIC." },
  { title: "Technical Partnerships", desc: "Provide expertise and tools." },
  { title: "Knowledge Partnerships", desc: "Joint publications and training." },
  { title: "Financial Support", desc: "Fund surveys and peace programs." },
];

export default function PartnerUsPage(_props: PartnerUsPageProps) {
  return (
    <div>
      <PageHero title="Partner With SRIC" subtitle="Collaborate for Impact" breadcrumb="Get Involved / Partner With Us" />
      <section className="section-pad-md" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }} className="grid-2">
            <div>
              <div className="section-label">Invest in Security</div>
              <h2 className="section-heading">Invest in a Safer Tomorrow</h2>
              <div className="divider-gold" />
              <p className="section-sub">Your partnership with SRIC amplifies evidence-based research and drives policy change across Kenya and the region.</p>
              <div style={{ marginTop: 40 }}>
                {types.map(({ title, desc }) => (
                  <div key={title} style={{ marginBottom: 28, paddingBottom: 28, borderBottom: "1px solid var(--grey-mid)" }}>
                    <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, color: "var(--navy)", marginBottom: 6 }}>{title}</h4>
                    <p style={{ fontSize: 13, color: "var(--text-mid)", lineHeight: 1.7 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ background: "var(--grey-light)", padding: "40px 36px" }}>
                <div className="section-label">Get in Touch</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "var(--navy)", marginBottom: 24 }}>Explore Partnership</h3>
                {["Organization Name", "Contact Person", "Email", "Phone"].map((f) => (
                  <div key={f} style={{ marginBottom: 16 }}>
                    <label className="form-label">{f}</label>
                    <input className="form-input" placeholder={f} />
                  </div>
                ))}
                <div style={{ marginBottom: 16 }}>
                  <label className="form-label">Partnership Type</label>
                  <select className="form-input">
                    <option>Institutional</option>
                    <option>Financial</option>
                    <option>Technical</option>
                    <option>Knowledge</option>
                  </select>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label className="form-label">Message</label>
                  <textarea className="form-input" rows={4} style={{ resize: "vertical" }} />
                </div>
                <button className="btn-primary" style={{ width: "100%", textAlign: "center" }}>Submit Inquiry</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
