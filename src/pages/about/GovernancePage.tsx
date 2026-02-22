import PageHero from "../../components/PageHero";

const board = [
  { name: "Prof. Jane Kamau", title: "Chairperson, Board of Directors", bio: "Emeritus Professor of Security Studies, University of Nairobi. 30 years in peace and conflict research." },
  { name: "Mr. David Ochieng", title: "Board Member", bio: "Former Director, Kenya National Commission on Human Rights. Expert in institutional governance." },
  { name: "Dr. Amina Hassan", title: "Board Member", bio: "Regional Director, East Africa Security Dialogue. Specialist in cross-border conflict dynamics." },
  { name: "Ms. Rose Mwangi", title: "Board Member", bio: "Senior Advisor, International Peace Support Training Centre. 20 years in SSR programming." },
];

const leadership = [
  { name: "[Executive Director]", title: "Executive Director", bio: "Placeholder — please provide the Executive Director's details and photo." },
  { name: "[Program Director, Research]", title: "Director of Research & Information", bio: "Placeholder — please provide details and photo." },
  { name: "[Program Director, SSR]", title: "Director of SSR & Governance", bio: "Placeholder — please provide details and photo." },
  { name: "[Director, Arms Control]", title: "Director of Arms Control", bio: "Placeholder — please provide details and photo." },
];

export default function GovernancePage() {
  return (
    <div>
      <PageHero title="Governance & Leadership" subtitle="Transparency & Accountability" breadcrumb="About / Governance" />
      <section className="section-pad-md" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ background: "var(--grey-light)", padding: "40px 48px", borderLeft: "4px solid var(--gold)", marginBottom: 64 }}>
            <div className="section-label">Governance Framework</div>
            <p style={{ fontSize: 16, color: "var(--text-mid)", lineHeight: 1.8 }}>SRIC operates under a Board of Directors that provides strategic oversight, financial governance, and institutional accountability. An Executive Leadership Team manages daily operations, program delivery, and research quality assurance.</p>
          </div>

          <div className="section-label">Board of Directors</div>
          <h2 className="section-heading">Board of Directors</h2>
          <div className="divider-gold" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 40, marginBottom: 72 }} className="grid-4">
            {board.map((m) => (
              <div key={m.name} className="team-card card-hover">
                <div className="team-photo"><span style={{ fontSize: 56 }}>👤</span></div>
                <div style={{ padding: "20px 20px 24px" }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: "var(--navy)", marginBottom: 4 }}>{m.name}</h3>
                  <div style={{ fontSize: 11, color: "var(--gold)", fontFamily: "'Oswald', sans-serif", letterSpacing: 1, textTransform: "uppercase", marginBottom: 10 }}>{m.title}</div>
                  <p style={{ fontSize: 12, color: "var(--text-mid)", lineHeight: 1.7 }}>{m.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="section-label">Executive Leadership</div>
          <h2 className="section-heading">Senior Leadership Team</h2>
          <div className="divider-gold" />
          <p style={{ fontSize: 14, color: "var(--text-light)", marginTop: 8, marginBottom: 32, fontStyle: "italic" }}>Note: Replace placeholder cards with actual staff photos and biographies.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="grid-4">
            {leadership.map((m) => (
              <div key={m.name} className="team-card card-hover">
                <div className="team-photo" style={{ background: "linear-gradient(135deg, var(--navy-mid), var(--navy-mid))" }}><span style={{ fontSize: 56 }}>👤</span></div>
                <div style={{ padding: "20px 20px 24px" }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: "var(--navy)", marginBottom: 4 }}>{m.name}</h3>
                  <div style={{ fontSize: 11, color: "var(--gold)", fontFamily: "'Oswald', sans-serif", letterSpacing: 1, textTransform: "uppercase", marginBottom: 10 }}>{m.title}</div>
                  <p style={{ fontSize: 12, color: "var(--text-mid)", lineHeight: 1.7, fontStyle: "italic" }}>{m.bio}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: "var(--navy)", padding: "48px 56px", marginTop: 72, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="grid-2">
            <div>
              <div className="section-label" style={{ color: "var(--gold)" }}>Institutional Accountability</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "#fff", marginBottom: 16 }}>Ethical Standards & Transparency</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>SRIC adheres to the highest standards of research ethics, financial accountability, and independent governance. All research outputs undergo rigorous peer review, and institutional finances are subject to independent annual audit.</p>
            </div>
            <div>
              <button className="btn-primary" style={{ marginBottom: 16, display: "block" }}>Download Annual Report</button>
              <button className="btn-outline" style={{ display: "block" }}>Research Ethics Policy</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
