import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import SectionHeader from "../../components/ui/SectionHeader";
import { stats } from "../../data";

export default function StatsSection() {
  const navigate = useNavigate();
  const [countersVisible, setCountersVisible] = useState(false);
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) setCountersVisible(true);
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={statsRef} className="section-pad-lg home-section delay-3" style={{ background: "var(--deep-blue)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader
          label="Our Impact"
          title="Measuring What Matters"
          align="center"
          theme="light"
          labelColor="var(--accent)"
        />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 20 }} className="grid-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="stat-card"
              style={{
                animationDelay: `${i * 0.1}s`,
                opacity: countersVisible ? 1 : 0,
                transition: `all 0.6s ${i * 0.1}s`,
              }}
            >
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <Button variant="primary" onClick={() => navigate("/impact")}>
            View Full Impact Report
          </Button>
        </div>
      </div>
    </section>
  );
}
