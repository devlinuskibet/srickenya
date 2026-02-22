import { useState } from "react";
import PageHero from "../components/PageHero";
import { publications } from "../data";

const extraPubs = [
  { tag: "Crime Survey", title: "Crime Survey Mombasa 2023", desc: "Analysis of crime patterns in Mombasa.", year: "2023" },
  { tag: "Policy Brief", title: "Community Policing Reform", desc: "Policy recommendations.", year: "2023" },
  { tag: "Research Report", title: "VE in the Horn Regional Scan", desc: "Comparative analysis of VE trends.", year: "2023" },
  { tag: "Journal Article", title: "Gender and SSR in Kenya", desc: "Academic analysis.", year: "2022" },
];
const allPubs = [...publications, ...extraPubs];
const categories = ["All", "Research Report", "Policy Brief", "VE Analysis", "Journal Article", "Crime Survey"];

export default function PublicationsPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? allPubs : allPubs.filter((p) => p.tag === filter);
  return (
    <div>
      <PageHero title="Publications & Resources" subtitle="Research Library" breadcrumb="Publications" />
      <section className="section-pad-md" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)} style={{ padding: "8px 20px", background: filter === cat ? "var(--navy)" : "#fff", color: filter === cat ? "#fff" : "var(--navy)", border: "1px solid var(--navy)", fontFamily: "'Oswald', sans-serif", fontSize: 12, letterSpacing: 1, textTransform: "uppercase", cursor: "pointer" }}>{cat}</button>
            ))}
          </div>
          <input className="form-input" placeholder="Search" style={{ maxWidth: 500, marginBottom: 48 }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="grid-4">
            {filtered.map((pub) => (
              <div key={pub.title} className="pub-card card-hover">
                <div className="pub-thumb" />
                <div style={{ padding: "20px" }}>
                  <span className="pub-tag">{pub.tag}</span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: "var(--navy)", marginBottom: 10 }}>{pub.title}</h3>
                  <p style={{ fontSize: 12, color: "var(--text-mid)", lineHeight: 1.7, marginBottom: 20 }}>{pub.desc}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: 11, color: "var(--text-light)" }}>{pub.year}</span>
                    <button className="btn-primary" style={{ fontSize: 11, padding: "6px 14px" }}>Download</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
