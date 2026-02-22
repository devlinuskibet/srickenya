import { useState, useEffect } from "react";
import { navItems } from "../data";

type NavBarProps = {
  currentPage: string;
  navigate: (page: string) => void;
};

export default function NavBar({ currentPage, navigate }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 999,
      background: scrolled ? "rgba(13,46,30,0.98)" : "var(--navy-dark)",
      backdropFilter: "blur(12px)",
      boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.3)" : "none",
      transition: "all 0.3s",
      borderBottom: "1px solid rgba(46,158,91,0.2)",
    }}>
      <div className="top-utility-bar" style={{ background: "rgba(0,0,0,0.25)", padding: "5px 40px", display: "flex", justifyContent: "flex-end", gap: 20 }}>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, letterSpacing: 1 }}>sric@srickenya.org</span>
        <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, letterSpacing: 1 }}>+254 720 338336</span>
      </div>

      <div className="nav-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", height: 72 }}>
        <div onClick={() => navigate("home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 44, height: 44, background: "linear-gradient(135deg, var(--gold), var(--gold-light))",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20, fontWeight: 900, color: "var(--navy-dark)", fontFamily: "'Playfair Display', serif",
            borderRadius: 4,
          }}>S</div>
          <div>
            <div style={{ color: "#fff", fontFamily: "'Oswald', sans-serif", fontSize: 16, letterSpacing: 2, fontWeight: 600 }}>SRIC</div>
            <div className="logo-subtitle" style={{ color: "rgba(255,255,255,0.5)", fontSize: 9, letterSpacing: 1.5, textTransform: "uppercase" }}>Security Research & Information Centre</div>
          </div>
        </div>

        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {navItems.map((item) => (
            <div key={item.label} className="nav-item" style={{ position: "relative" }}>
              <button onClick={() => item.page && navigate(item.page)} style={{
                background: "none", border: "none", color: currentPage === item.page ? "var(--gold)" : "rgba(255,255,255,0.85)",
                fontFamily: "'Oswald', sans-serif", fontSize: 13, letterSpacing: 1.2, textTransform: "uppercase",
                padding: "8px 12px", cursor: "pointer", display: "flex", alignItems: "center", gap: 4,
                transition: "color 0.2s",
              }}>
                {item.label} {item.sub && <span style={{ fontSize: 10, opacity: 0.7 }}>▾</span>}
              </button>
              {item.sub && (
                <div className="nav-dropdown">
                  {item.sub.map((s) => (
                    <div key={s.label} className="nav-dropdown-item" onClick={() => navigate(s.page)} style={{ cursor: "pointer" }}>{s.label}</div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="mobile-menu" onClick={() => setMobileOpen(!mobileOpen)} style={{
          background: "none", border: "none", color: "#fff", fontSize: 24, cursor: "pointer",
        }}>☰</button>
      </div>

      {mobileOpen && (
        <div style={{ background: "var(--navy-dark)", borderTop: "1px solid rgba(255,255,255,0.1)", padding: "16px 0", maxHeight: "80vh", overflowY: "auto" }}>
          {navItems.map((item) => (
            <div key={item.label}>
              <div onClick={() => {
                if (item.page) { navigate(item.page); setMobileOpen(false); }
                else setMobileExpanded(mobileExpanded === item.label ? null : item.label);
              }} style={{
                color: "#fff", padding: "12px 24px", fontFamily: "'Oswald', sans-serif", letterSpacing: 1.5,
                fontSize: 13, textTransform: "uppercase", cursor: "pointer", display: "flex", justifyContent: "space-between",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}>
                {item.label} {item.sub && <span>{mobileExpanded === item.label ? "▴" : "▾"}</span>}
              </div>
              {item.sub && mobileExpanded === item.label && item.sub.map((s) => (
                <div key={s.label} onClick={() => { navigate(s.page); setMobileOpen(false); }} style={{
                  color: "var(--gold)", padding: "10px 40px", fontSize: 12, letterSpacing: 1, cursor: "pointer",
                  borderBottom: "1px solid rgba(255,255,255,0.03)",
                }}>{s.label}</div>
              ))}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
