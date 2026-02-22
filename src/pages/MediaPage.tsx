import { useState } from "react";
import PageHero from "../components/PageHero";
import { galleryItems } from "../data";

export default function MediaPage() {
  const [tab, setTab] = useState("photos");
  const photoItems = [...galleryItems, ...galleryItems.slice(0, 4)];

  return (
    <div>
      <PageHero title="Media Gallery" subtitle="Photography & Video" breadcrumb="Media" />
      <section className="section-pad-md" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 0, marginBottom: 48, borderBottom: "2px solid var(--grey-mid)" }}>
            <button
              onClick={() => setTab("photos")}
              style={{
                padding: "12px 32px",
                background: "none",
                border: "none",
                borderBottom: tab === "photos" ? "3px solid var(--gold)" : "3px solid transparent",
                color: tab === "photos" ? "var(--navy)" : "var(--text-light)",
                fontFamily: "'Oswald', sans-serif",
                fontSize: 14,
                letterSpacing: 1,
                textTransform: "uppercase",
                cursor: "pointer",
                marginBottom: -2,
              }}
            >
              Photo Gallery
            </button>
            <button
              onClick={() => setTab("videos")}
              style={{
                padding: "12px 32px",
                background: "none",
                border: "none",
                borderBottom: tab === "videos" ? "3px solid var(--gold)" : "3px solid transparent",
                color: tab === "videos" ? "var(--navy)" : "var(--text-light)",
                fontFamily: "'Oswald', sans-serif",
                fontSize: 14,
                letterSpacing: 1,
                textTransform: "uppercase",
                cursor: "pointer",
                marginBottom: -2,
              }}
            >
              Video Library
            </button>
          </div>

          {tab === "photos" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }} className="grid-4">
              {photoItems.map((item, i) => (
                <div key={i} className="gallery-card" style={{ borderRadius: 2, overflow: "hidden" }}>
                  <div style={{ height: i % 3 === 0 ? 260 : 200, background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, position: "relative" }}>
                    {item.emoji}
                    <div className="gallery-overlay">
                      <div style={{ color: "var(--gold)", fontFamily: "'Oswald', sans-serif", fontSize: 13, letterSpacing: 1 }}>{item.label}</div>
                      <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, marginTop: 4 }}>{item.location} • {item.year}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {tab === "videos" && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="grid-3">
              {[
                ["SRIC National Crime Survey Launch 2024", "2024", "Documentary"],
                ["Cross-Border Arms Dialogue: Panel Discussion", "2023", "Panel"],
                ["Community Peace Dialogue: Turkana", "2024", "Field Recording"],
                ["SSR Policy Roundtable: Highlights", "2023", "Event Coverage"],
                ["Violent Extremism Trends Webinar", "2024", "Webinar"],
                ["SRIC at IGAD Security Dialogue", "2023", "Conference"],
              ].map(([title, year, type]) => (
                <div key={title} className="card-hover" style={{ background: "var(--grey-light)", overflow: "hidden", boxShadow: "0 2px 12px rgba(13,46,30,0.07)" }}>
                  <div style={{ height: 180, background: "linear-gradient(135deg, var(--navy-dark), var(--navy))", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 60, height: 60, background: "rgba(46,158,91,0.9)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>▶</div>
                  </div>
                  <div style={{ padding: "16px 20px" }}>
                    <div style={{ fontSize: 10, color: "var(--gold)", fontFamily: "'Oswald', sans-serif", letterSpacing: 1.5, marginBottom: 6 }}>{type} • {year}</div>
                    <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, color: "var(--navy)", lineHeight: 1.4 }}>{title}</h4>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
