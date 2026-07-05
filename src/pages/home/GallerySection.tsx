import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import SectionHeader from "../../components/ui/SectionHeader";
import { galleryItems } from "../../data";

export default function GallerySection() {
  const navigate = useNavigate();
  return (
    <section className="section-pad-lg home-section delay-6" style={{ background: "#fff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 48,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <SectionHeader label="Visual Impact" title="In Action" />
          </div>
          <Button variant="navy" onClick={() => navigate("/media")}>
            View Full Gallery
          </Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }} className="grid-4">
          {galleryItems.map((item) => (
            <div key={item.label} className="gallery-card" style={{ borderRadius: 2, overflow: "hidden" }}>
              <div
                style={{
                  height: 200,
                  background: item.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 48,
                  position: "relative",
                }}
              >
                {item.emoji}
                <div className="gallery-overlay">
                  <div style={{ color: "#fff", fontFamily: "'Oswald', sans-serif", fontSize: 13, letterSpacing: 1 }}>
                    {item.label}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, marginTop: 4 }}>
                    {item.location} • {item.year}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
