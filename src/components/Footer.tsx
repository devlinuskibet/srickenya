import { useState } from "react";

type FooterProps = {
  navigate: (page: string) => void;
};

export default function Footer({ navigate }: FooterProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const setLinkColor = (el: EventTarget | null, color: string) => {
    if (el && "style" in el) (el as HTMLElement).style.color = color;
  };

  return (
    <footer style={{ background: "var(--navy-dark)", color: "rgba(255,255,255,0.8)", borderTop: "3px solid var(--gold)" }}>
      <div className="footer-inner" style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px 40px" }}>
        <div className="footer-grid" style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <div style={{ width: 40, height: 40, background: "var(--gold)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 900, color: "var(--navy-dark)", fontFamily: "'Playfair Display', serif", borderRadius: 3 }}>S</div>
              <div style={{ color: "#fff", fontFamily: "'Oswald', sans-serif", fontSize: 15, letterSpacing: 2 }}>SRIC KENYA</div>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>
              Building peace through evidence. Security Research and Information Centre is an independent regional think tank advancing human security across Kenya, the Great Lakes, and the Horn of Africa.
            </p>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 2 }}>
              <div>📍 New Waumini House, 2nd Floor, Chiromo Road, Westlands, Nairobi</div>
              <div>📞 +254 720 338336</div>
              <div>✉️ sric@srickenya.org</div>
              <div>🌐 www.srickenya.org</div>
            </div>
          </div>

          <div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>Quick Links</div>
            {["home", "our-story", "impact", "publications", "media", "contact"].map((p, i) => (
              <div key={p} onClick={() => navigate(p)} style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 8, cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={e => setLinkColor(e.target, "var(--gold)")} onMouseLeave={e => setLinkColor(e.target, "rgba(255,255,255,0.6)")}>
                {["Home", "About", "Impact", "Publications", "Media", "Contact"][i]}
              </div>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>Our Programs</div>
            {[["research", "Research & Info"], ["arms", "Arms Control"], ["peacebuilding", "Peacebuilding"], ["ssr", "Security Sector Reform"], ["crime", "Crime Analysis"]].map(([p, l]) => (
              <div key={p} onClick={() => navigate(p)} style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, marginBottom: 8, cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={e => setLinkColor(e.target, "var(--gold)")} onMouseLeave={e => setLinkColor(e.target, "rgba(255,255,255,0.6)")}>
                {l}
              </div>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>Stay Updated</div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 16 }}>Subscribe to our newsletter for the latest research, events, and policy updates.</p>
            {subscribed ? (
              <div style={{ color: "var(--gold)", fontSize: 13 }}>✓ Thank you for subscribing!</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" style={{ padding: "10px 14px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 13, fontFamily: "'Lato', sans-serif", outline: "none" }} />
                <button className="btn-primary" onClick={() => setSubscribed(true)} style={{ width: "100%", textAlign: "center" }}>Subscribe</button>
              </div>
            )}

            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              {["in", "𝕏", "f", "▶"].map((icon, i) => (
                <div key={i} style={{ width: 36, height: 36, border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 14, color: "rgba(255,255,255,0.5)", transition: "all 0.2s", borderRadius: 2 }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}>
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>© 2024 Security Research and Information Centre. All rights reserved.</div>
          <div style={{ display: "flex", gap: 24, fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
            {["Privacy Policy", "Terms of Use", "Accessibility", "Cookies Policy"].map(l => (
              <span key={l} style={{ cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={e => setLinkColor(e.target, "var(--gold)")} onMouseLeave={e => setLinkColor(e.target, "rgba(255,255,255,0.4)")}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
