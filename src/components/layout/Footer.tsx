import Button from "../components/ui/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import sricLogo from "../assets/logos/sric.png";
import { useToast } from "../components/ui/Toast";

export default function Footer() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { showToast } = useToast();

  const setLinkColor = (el: EventTarget | null, color: string) => {
    if (el && "style" in el) (el as HTMLElement).style.color = color;
  };

  return (
    <footer
      className="footer-black"
      style={{
        background: "var(--black)",
        color: "rgba(255,255,255,0.85)",
        borderTop: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <div className="footer-inner" style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 40px 40px" }}>
        <div
          className="footer-grid"
          style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: 48, marginBottom: 48 }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <img
                src={sricLogo}
                alt="SRIC Kenya"
                loading="lazy"
                style={{ height: 44, width: "auto", maxWidth: 180, objectFit: "contain" }}
              />
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>
              Building peace through evidence. Security Research and Information Centre is an independent regional think
              tank advancing human security across Kenya, the Great Lakes, and the Horn of Africa.
            </p>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 2 }}>
              <div>📍 New Waumini House, 2nd Floor, Chiromo Road, Westlands, Nairobi</div>
              <div>📞 +254 720 338336</div>
              <div>✉️ sric@srickenya.org</div>
              <div>🌐 www.srickenya.org</div>
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: 20,
              }}
            >
              Quick Links
            </div>
            {["/", "/our-story", "/impact", "/publications", "/media", "/contact"].map((p, i) => (
              <div
                key={p}
                role="button"
                tabIndex={0}
                aria-label={["Home", "About", "Impact", "Publications", "Media", "Contact"][i]}
                onClick={() => navigate(p)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") navigate(p);
                }}
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: 13,
                  marginBottom: 8,
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => setLinkColor(e.target, "var(--accent)")}
                onMouseLeave={(e) => setLinkColor(e.target, "rgba(255,255,255,0.7)")}
              >
                {["Home", "About", "Impact", "Publications", "Media", "Contact"][i]}
              </div>
            ))}
          </div>

          <div>
            <div
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 20,
              }}
            >
              Our Programs
            </div>
            {[
              ["/research", "Research & Info"],
              ["/arms", "Arms Control"],
              ["/peacebuilding", "Peacebuilding"],
              ["/ssr", "Security Sector Reform"],
              ["/crime", "Crime Analysis"],
            ].map(([p, l]) => (
              <div
                key={p}
                role="button"
                tabIndex={0}
                aria-label={l}
                onClick={() => navigate(p)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") navigate(p);
                }}
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 13,
                  marginBottom: 8,
                  cursor: "pointer",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => setLinkColor(e.target, "var(--gold)")}
                onMouseLeave={(e) => setLinkColor(e.target, "rgba(255,255,255,0.6)")}
              >
                {l}
              </div>
            ))}
          </div>

          <div>
            <div
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
                marginBottom: 20,
              }}
            >
              Stay Updated
            </div>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginBottom: 16 }}>
              Subscribe to our newsletter for the latest research, events, and policy updates.
            </p>
            {subscribed ? (
              <div style={{ color: "var(--accent)", fontSize: 13 }}>✓ Thank you for subscribing!</div>
            ) : (
              <form
                style={{ display: "flex", flexDirection: "column", gap: 8 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!email.includes("@")) {
                    showToast("Please enter a valid email address", "error");
                    return;
                  }
                  setIsLoading(true);
                  setTimeout(() => {
                    setIsLoading(false);
                    setSubscribed(true);
                    showToast("Successfully subscribed to newsletter!", "success");
                  }, 1200);
                }}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  style={{
                    padding: "10px 14px",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#fff",
                    fontSize: 13,
                    fontFamily: "'Lato', sans-serif",
                    outline: "none",
                  }}
                />
                <Button
                  variant="primary"
                  type="submit"
                  disabled={isLoading}
                  style={{ width: "100%", textAlign: "center", opacity: isLoading ? 0.7 : 1 }}
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </Button>
              </form>
            )}

            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              {["in", "𝕏", "f", "▶"].map((icon, i) => (
                <div
                  key={i}
                  style={{
                    width: 36,
                    height: 36,
                    border: "1px solid rgba(255,255,255,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: 14,
                    color: "rgba(255,255,255,0.6)",
                    transition: "all 0.2s",
                    borderRadius: 2,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#fff";
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="footer-bottom"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
            © 2024 Security Research and Information Centre. All rights reserved.
          </div>
          <div style={{ display: "flex", gap: 24, fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
            {["Privacy Policy", "Terms of Use", "Accessibility", "Cookies Policy"].map((l) => (
              <span
                key={l}
                style={{ cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={(e) => setLinkColor(e.target, "#fff")}
                onMouseLeave={(e) => setLinkColor(e.target, "rgba(255,255,255,0.45)")}
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
