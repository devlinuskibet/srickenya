import SEO from "../components/SEO";
import Button from "../components/Button";
import PageHero from "../components/PageHero";

export default function InternshipsPage() {
  return (
    <div>
      <SEO
        title="Internships"
        description="Learn more about Internships at SRIC - Security Research & Information Centre."
      />

      <PageHero title="Internships" subtitle="Get Involved" breadcrumb="Get Involved / Internships" />
      <section className="section-pad-md" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="section-label">The Program</div>
          <h2 className="section-heading">Build Your Career in Security Research</h2>
          <div className="divider-gold" />
          <p className="section-sub">
            SRIC internship program offers graduates the opportunity to contribute to security research. Duration 6-12
            months. Apply below.
          </p>
          <div style={{ background: "var(--grey-light)", padding: "40px", marginTop: 40 }}>
            <label className="form-label">Full Name</label>
            <input className="form-input" style={{ marginBottom: 16 }} />
            <label className="form-label">Email</label>
            <input className="form-input" style={{ marginBottom: 16 }} />
            <label className="form-label">Area of Interest</label>
            <select className="form-input" style={{ marginBottom: 24 }}>
              <option>Crime Trends</option>
              <option>Arms Control</option>
              <option>Peacebuilding</option>
            </select>
            <Button variant="primary" fullWidth>
              Submit Application
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
