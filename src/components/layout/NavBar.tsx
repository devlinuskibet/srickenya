import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navItems } from "@/data";
import type { NavItem } from "@/types";
import sricLogo from "../assets/logos/sric.png";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const currentPage = location.pathname;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="nav-deep-blue"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        background: scrolled ? "rgba(10,22,40,0.88)" : "rgba(10,22,40,0.75)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.4)" : "none",
        transition: "background 0.3s, box-shadow 0.3s",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        className="top-utility-bar"
        style={{
          background: "rgba(0,0,0,0.2)",
          padding: "5px 40px",
          display: "flex",
          justifyContent: "flex-end",
          gap: 20,
        }}
      >
        <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, letterSpacing: 1 }}>sric@srickenya.org</span>
        <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, letterSpacing: 1 }}>+254 720 338336</span>
      </div>

      <div
        className="nav-inner"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 40px",
          height: 72,
        }}
      >
        <div
          role="button"
          tabIndex={0}
          aria-label="Home"
          onClick={() => navigate("/")}
          onKeyDown={(e) => {
            if (e.key === "Enter") navigate("/");
          }}
          style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}
        >
          <img
            src={sricLogo}
            alt="SRIC - Security Research & Information Centre"
            style={{ height: 48, width: "auto", maxWidth: 200, objectFit: "contain" }}
          />
        </div>

        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {navItems.map((item: NavItem) => (
            <div key={item.label} className="nav-item" style={{ position: "relative" }}>
              <button
                onClick={() => item.page && navigate(item.page)}
                style={{
                  background: "none",
                  border: "none",
                  color: currentPage === item.page ? "var(--accent)" : "rgba(255,255,255,0.85)",
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: 13,
                  letterSpacing: 1.2,
                  textTransform: "uppercase",
                  padding: "8px 12px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  transition: "color 0.2s",
                }}
              >
                {item.label} {item.sub && <span style={{ fontSize: 10, opacity: 0.8 }}>▾</span>}
              </button>
              {item.sub && (
                <div className="nav-dropdown">
                  {item.sub.map((s: NavItem) => (
                    <div
                      key={s.label}
                      className="nav-dropdown-item"
                      role="button"
                      tabIndex={0}
                      aria-label={s.label}
                      onClick={() => { if (s.page) navigate(s.page); }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && s.page) navigate(s.page);
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      {s.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          className="mobile-menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: 24,
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              background: "var(--navy-dark)",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              padding: "16px 0",
              maxHeight: "80vh",
              overflowY: "auto",
              overflowX: "hidden",
            }}
          >
            {navItems.map((item: NavItem) => (
              <div key={item.label}>
                <div
                  role="button"
                  tabIndex={0}
                  aria-label={item.label}
                  onClick={() => {
                    if (item.page) {
                      navigate(item.page);
                      setMobileOpen(false);
                    } else setMobileExpanded(mobileExpanded === item.label ? null : item.label);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      if (item.page) {
                        navigate(item.page);
                        setMobileOpen(false);
                      } else setMobileExpanded(mobileExpanded === item.label ? null : item.label);
                    }
                  }}
                  style={{
                    color: "#fff",
                    padding: "12px 24px",
                    fontFamily: "'Oswald', sans-serif",
                    letterSpacing: 1.5,
                    fontSize: 13,
                    textTransform: "uppercase",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {item.label} {item.sub && <span>{mobileExpanded === item.label ? "▴" : "▾"}</span>}
                </div>
                <AnimatePresence>
                  {item.sub && mobileExpanded === item.label && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      style={{ overflow: "hidden" }}
                    >
                      {item.sub.map((s: NavItem) => (
                        <div
                          key={s.label}
                          role="button"
                          tabIndex={0}
                          aria-label={s.label}
                          onClick={() => {
                            if (s.page) navigate(s.page);
                            setMobileOpen(false);
                          }}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              if (s.page) navigate(s.page);
                              setMobileOpen(false);
                            }
                          }}
                          style={{
                            color: "rgba(255,255,255,0.9)",
                            padding: "10px 40px",
                            fontSize: 12,
                            letterSpacing: 1,
                            cursor: "pointer",
                            borderBottom: "1px solid rgba(255,255,255,0.03)",
                          }}
                        >
                          {s.label}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
