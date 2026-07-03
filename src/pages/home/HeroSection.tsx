import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import sricLogo from "../../assets/logos/sric.png";
import { heroSlides } from "../../data";

export default function HeroSection() {
  const navigate = useNavigate();
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const current = heroSlides[slide];

  return (
    <section
      className="hero-min-h home-section delay-0"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: 600,
        background: current.bg,
        display: "flex",
        alignItems: "center",
        transition: "background 1s",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -100,
          top: -100,
          width: 500,
          height: 500,
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: -50,
          top: -50,
          width: 300,
          height: 300,
          border: "1px solid rgba(255,255,255,0.04)",
          borderRadius: "50%",
        }}
      />
      <div style={{ position: "absolute", left: "55%", bottom: 80, fontSize: 120, opacity: 0.04 }}>{current.icon}</div>

      <div
        key={slide}
        className="hero-slide hero-inner hero-entrance"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          width: "100%",
        }}
      >
        <div style={{ maxWidth: 680 }}>
          <img
            src={sricLogo}
            alt="SRIC - Security Research & Information Centre"
            style={{
              height: 56,
              width: "auto",
              maxWidth: 320,
              objectFit: "contain",
              marginBottom: 28,
              filter: "brightness(1.05)",
            }}
          />
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(32px, 5vw, 62px)",
              fontWeight: 900,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: 28,
            }}
          >
            {current.title}
          </h1>
          <div style={{ width: 80, height: 3, background: "var(--gold)", marginBottom: 36 }} />
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <Button variant="primary" onClick={() => navigate(current.page)}>
              {current.cta}
            </Button>
            <Button variant="outline" onClick={() => navigate("/publications")}>
              Read Our Research
            </Button>
          </div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 10,
        }}
      >
        {heroSlides.map((_, i) => (
          <div
            key={i}
            role="button"
            tabIndex={0}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setSlide(i)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSlide(i);
              }
            }}
            style={{
              width: i === slide ? 32 : 10,
              height: 4,
              background: i === slide ? "var(--accent)" : "rgba(255,255,255,0.3)",
              borderRadius: 2,
              cursor: "pointer",
              transition: "all 0.4s",
            }}
          />
        ))}
      </div>
    </section>
  );
}
