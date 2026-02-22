import PageHero from "../components/PageHero";
import { partners } from "../data";

type PartnershipsPageProps = {
  navigate: (page: string) => void;
};

const categories = [
  { cat: "International", orgs: [{ name: "IANSA", desc: "International Action Network on Small Arms" }, { name: "Control Arms", desc: "Control Arms Coalition" }] },
  { cat: "Regional", orgs: [{ name: "RECSA", desc: "Regional Centre on Small Arms" }, { name: "IGAD", desc: "Intergovernmental Authority on Development" }] },
  { cat: "Government & Institutional", orgs: [{ name: "IPSTC", desc: "International Peace Support Training Centre" }, { name: "KANSA", desc: "Kenya Action Network on Small Arms" }] },
  { cat: "Community & Civil Society", orgs: [{ name: "Community Partners", desc: "Peace committees and grassroots networks across Kenya" }] },
];

export default function PartnershipsPage({ navigate }: PartnershipsPageProps) {
  return (
    <div>
      <PageHero title="Strategic Partnerships" subtitle="Our Network" breadcrumb="Partnerships" />
      <section className="section-pad-md" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64, maxWidth: 700, margin: "0 auto 64px" }}>
            <p style={{ fontSize: 17, color: "var(--text-mid)", lineHeight: 1.8 }}>SRIC's impact is amplified through strategic partnerships with leading international, regional, governmental, and civil society organizations. These collaborations enable us to scale evidence and extend influence across policy environments.</p>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center", marginBottom: 80 }}>
            {partners.map((p) => (
              <div key={p.name} className="partner-logo card-hover" style={{ width: 160 }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 15, fontWeight: 600, color: "var(--navy)" }}>{p.name}</div>
                  <div style={{ fontSize: 9, color: "var(--text-light)", marginTop: 3, lineHeight: 1.4 }}>{p.full}</div>
                </div>
              </div>
            ))}
          </div>

          {categories.map((cat) => (
            <div key={cat.cat} style={{ marginBottom: 56 }}>
              <div className="section-label">{cat.cat}</div>
              <div style={{ height: 2, background: "var(--grey-mid)", marginBottom: 24 }} />
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }} className="grid-2">
                {cat.orgs.map((org) => (
                  <div key={org.name} style={{ padding: "24px 28px", background: "var(--grey-light)", borderLeft: "4px solid var(--gold)", display: "flex", alignItems: "center", gap: 20 }}>
                    <div style={{ width: 56, height: 56, background: "var(--navy)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Oswald', sans-serif", fontSize: 14, color: "var(--gold)", fontWeight: 600, flexShrink: 0 }}>{org.name.slice(0, 2)}</div>
                    <div>
                      <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, color: "var(--navy)", marginBottom: 4 }}>{org.name}</h4>
                      <p style={{ fontSize: 13, color: "var(--text-mid)" }}>{org.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div style={{ background: "var(--navy)", padding: "64px 56px", textAlign: "center", marginTop: 40 }}>
            <div className="section-label" style={{ color: "var(--gold)" }}>Collaborate</div>
            <h2 className="section-heading-white" style={{ marginBottom: 20 }}>Become a Partner</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", lineHeight: 1.8, maxWidth: 600, margin: "0 auto 36px" }}>We welcome partnerships with organizations that share our commitment to evidence-based human security. Reach out to explore collaboration opportunities.</p>
            <button className="btn-primary" onClick={() => navigate("contact")}>Contact Partnership Team</button>
          </div>
        </div>
      </section>
    </div>
  );
}
