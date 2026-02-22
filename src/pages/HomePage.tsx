import { useState, useEffect, useRef } from "react";
import { heroSlides, programs, stats, publications, galleryItems, partners } from "../data";

type HomePageProps = {
  navigate: (page: string) => void;
};

export default function HomePage({ navigate }: HomePageProps) {
  const [slide, setSlide] = useState(0);
  const [countersVisible, setCountersVisible] = useState(false);
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e?.isIntersecting) setCountersVisible(true); }, { threshold: 0.3 });
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const current = heroSlides[slide];

  return (
    <div>
      <section className="hero-min-h" style={{ position: "relative", height: "100vh", minHeight: 600, background: current.bg, display: "flex", alignItems: "center", transition: "background 1s", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -100, top: -100, width: 500, height: 500, border: "1px solid rgba(46,158,91,0.15)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", right: -50, top: -50, width: 300, height: 300, border: "1px solid rgba(46,158,91,0.1)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", left: "55%", bottom: 80, fontSize: 120, opacity: 0.05 }}>{current.icon}</div>

        <div className="hero-slide hero-inner" style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "0 40px", width: "100%" }}>
          <div style={{ maxWidth: 680 }}>
            <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 12, letterSpacing: 5, textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>Security Research and Information Centre</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 5vw, 62px)", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: 28 }}>{current.title}</h1>
            <div style={{ width: 80, height: 3, background: "var(--gold)", marginBottom: 36 }} />
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={() => navigate(current.page)}>{current.cta}</button>
              <button className="btn-outline" onClick={() => navigate("publications")}>Read Our Research</button>
            </div>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 10 }}>
          {heroSlides.map((_, i) => (
            <div key={i} onClick={() => setSlide(i)} style={{ width: i === slide ? 32 : 10, height: 4, background: i === slide ? "var(--gold)" : "rgba(255,255,255,0.3)", borderRadius: 2, cursor: "pointer", transition: "all 0.4s" }} />
          ))}
        </div>
      </section>

      <section className="section-pad-lg" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="grid-2">
          <div>
            <div className="section-label">Who We Are</div>
            <h2 className="section-heading">Independent Research. Regional Impact.</h2>
            <div className="divider-gold" />
            <p className="section-sub">Security Research and Information Centre is an independent regional think tank dedicated to advancing human security, evidence-based policy, and conflict transformation across Kenya, the Great Lakes, and the Horn of Africa.</p>
            <p style={{ fontSize: 16, color: "var(--text-mid)", lineHeight: 1.8, marginTop: 16 }}>Through rigorous research, technical expertise, and strategic partnerships, SRIC bridges data and decision-making to build resilient and peaceful societies. Our work spans community peace structures, arms governance, security sector reform, and emerging crime analysis.</p>
            <div style={{ marginTop: 32 }}>
              <button className="btn-navy" onClick={() => navigate("our-story")}>Learn About SRIC</button>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div className="about-img-box" style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)", height: 400, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 80, borderRadius: 4 }}>🏛️</div>
            <div style={{ position: "absolute", bottom: -20, right: -20, background: "var(--gold)", padding: "20px 24px", color: "var(--navy-dark)", fontFamily: "'Playfair Display', serif" }}>
              <div style={{ fontSize: 40, fontWeight: 900, lineHeight: 1 }}>20+</div>
              <div style={{ fontSize: 12, fontFamily: "'Oswald', sans-serif", letterSpacing: 2 }}>YEARS OF RESEARCH</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad-lg" style={{ background: "var(--grey-light)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="section-label">What We Do</div>
            <h2 className="section-heading">Our Areas of Work</h2>
            <div className="divider-gold-center" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }} className="grid-5">
            {programs.map((p) => (
              <div key={p.title} className="prog-card card-hover" onClick={() => navigate(p.page)}>
                <div className="prog-icon">{p.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: "var(--navy)", marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: 13, color: "var(--text-mid)", lineHeight: 1.7 }}>{p.desc}</p>
                <div style={{ marginTop: 20, fontSize: 12, color: "var(--gold)", fontFamily: "'Oswald', sans-serif", letterSpacing: 1 }}>LEARN MORE →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={statsRef} className="section-pad-lg" style={{ background: "var(--navy)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div className="section-label">Our Impact</div>
            <h2 className="section-heading-white">Measuring What Matters</h2>
            <div className="divider-gold-center" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 20 }} className="grid-4">
            {stats.map((s, i) => (
              <div key={s.label} className="stat-card" style={{ animationDelay: `${i * 0.1}s`, opacity: countersVisible ? 1 : 0, transition: `all 0.6s ${i * 0.1}s` }}>
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <button className="btn-primary" onClick={() => navigate("impact")}>View Full Impact Report</button>
          </div>
        </div>
      </section>

      <section className="section-pad-lg" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="grid-2">
          <div style={{ background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 100%)", height: 360, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 40, borderRadius: 2 }}>
            <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(46,158,91,0.3)", padding: "32px 40px", textAlign: "center" }}>
              <div style={{ color: "var(--gold)", fontFamily: "'Oswald', sans-serif", fontSize: 11, letterSpacing: 3, marginBottom: 12 }}>FLAGSHIP PUBLICATION</div>
              <div style={{ color: "#fff", fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, lineHeight: 1.3 }}>National Crime Survey 2024</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginTop: 8 }}>47 Counties | Kenya</div>
              <div style={{ width: 40, height: 2, background: "var(--gold)", margin: "16px auto" }} />
              <div style={{ fontSize: 40 }}>📊</div>
            </div>
          </div>
          <div>
            <div className="section-label">Featured Research</div>
            <h2 className="section-heading">National Crime Survey 2024</h2>
            <div className="divider-gold" />
            <p className="section-sub">Our flagship annual survey delivers the most comprehensive, county-level analysis of crime patterns, security perceptions, and institutional responsiveness across all 47 counties of Kenya. The 2024 edition incorporates qualitative community assessments and cross-border dimension analysis.</p>
            <div style={{ display: "flex", gap: 16, marginTop: 32, flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={() => navigate("publications")}>Download Full Report</button>
              <button className="btn-outline" style={{ color: "var(--navy)", borderColor: "var(--navy)" }} onClick={() => navigate("publications")}>View All Publications</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad-lg" style={{ background: "var(--grey-light)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div className="section-label">Latest Research</div>
              <h2 className="section-heading">Publications & Resources</h2>
              <div className="divider-gold" />
            </div>
            <button className="btn-navy" onClick={() => navigate("publications")}>Browse All Publications</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="grid-4">
            {publications.map((pub) => (
              <div key={pub.title} className="pub-card card-hover">
                <div className="pub-thumb"><span style={{ fontSize: 48 }}>📄</span></div>
                <div style={{ padding: "20px 20px 24px" }}>
                  <span className="pub-tag">{pub.tag}</span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: "var(--navy)", lineHeight: 1.4, marginBottom: 10 }}>{pub.title}</h3>
                  <p style={{ fontSize: 12, color: "var(--text-mid)", lineHeight: 1.7, marginBottom: 16 }}>{pub.desc}</p>
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

      <section className="section-pad-lg" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div className="section-label">Visual Impact</div>
              <h2 className="section-heading">In Action</h2>
              <div className="divider-gold" />
            </div>
            <button className="btn-navy" onClick={() => navigate("media")}>View Full Gallery</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }} className="grid-4">
            {galleryItems.map((item) => (
              <div key={item.label} className="gallery-card" style={{ borderRadius: 2, overflow: "hidden" }}>
                <div style={{ height: 200, background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48, position: "relative" }}>
                  {item.emoji}
                  <div className="gallery-overlay">
                    <div style={{ color: "var(--gold)", fontFamily: "'Oswald', sans-serif", fontSize: 13, letterSpacing: 1 }}>{item.label}</div>
                    <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 11, marginTop: 4 }}>{item.location} • {item.year}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad-md" style={{ background: "var(--grey-light)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div className="section-label">Our Network</div>
            <h2 className="section-heading">Strategic Partners</h2>
            <div className="divider-gold-center" />
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
            {partners.map((p) => (
              <div key={p.name} className="partner-logo card-hover">
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 16, fontWeight: 600, color: "var(--navy)" }}>{p.name}</div>
                  <div style={{ fontSize: 9, color: "var(--text-light)", marginTop: 3 }}>{p.full}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad-lg" style={{ background: "var(--navy)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -100, top: -100, width: 400, height: 400, border: "1px solid rgba(46,158,91,0.1)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", left: -50, bottom: -50, width: 250, height: 250, border: "1px solid rgba(46,158,91,0.08)", borderRadius: "50%" }} />
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div className="section-label">Join the Mission</div>
          <h2 className="section-heading-white">Partner With Us to Advance Human Security</h2>
          <div className="divider-gold-center" />
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: 40 }}>SRIC collaborates with governments, regional bodies, civil society organizations, and development partners to design evidence-driven solutions for complex security challenges across East Africa.</p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-primary" onClick={() => navigate("partner-us")}>Partner With Us</button>
            <button className="btn-outline" onClick={() => navigate("careers")}>Get Involved</button>
          </div>
        </div>
      </section>
    </div>
  );
}
