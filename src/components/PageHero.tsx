type PageHeroProps = {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
};

export default function PageHero({ title, subtitle, breadcrumb }: PageHeroProps) {
  return (
    <div className="page-hero page-hero-pad">
      <div style={{ position: "relative", zIndex: 1, maxWidth: 900 }}>
        {breadcrumb && (
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 20 }}>
            Home / <span style={{ color: "var(--gold)" }}>{breadcrumb}</span>
          </div>
        )}
        <div className="section-label" style={{ color: "var(--gold)" }}>{subtitle || "SRIC Kenya"}</div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 700, color: "#fff", lineHeight: 1.2, maxWidth: 700 }}>{title}</h1>
        <div style={{ width: 64, height: 3, background: "var(--gold)", marginTop: 24 }} />
      </div>
    </div>
  );
}
