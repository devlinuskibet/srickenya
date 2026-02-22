import PageHero from "../../components/PageHero";

const stages = [
  { label: "Inputs", color: "#0d2e1e", items: ["Research expertise", "Strategic partnerships", "Technical capacity", "Funding support"] },
  { label: "Activities", color: "#1a4731", items: ["Research & surveys", "Policy dialogues", "Capacity building", "Community engagement"] },
  { label: "Outputs", color: "#22623f", items: ["Reports & briefs", "Data tools", "Trained stakeholders", "Policy frameworks"] },
  { label: "Outcomes", color: "#2e9e5b", items: ["Improved policy decisions", "Stronger institutions", "Reduced insecurity drivers", "Greater community resilience"] },
  { label: "Impact", color: "#1b7a42", items: ["Enhanced human security", "Accountable governance", "Resilient communities", "Sustainable peace"] },
];

export default function TheoryPage() {
  return (
    <div>
      <PageHero title="Theory of Change" subtitle="Our Strategic Logic" breadcrumb="About / Theory of Change" />
      <section className="section-pad-md" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", maxWidth: 780, margin: "0 auto 72px" }}>
            <p style={{ fontSize: 17, color: "var(--text-mid)", lineHeight: 1.9 }}>SRIC's Theory of Change articulates how evidence generation, institutional strengthening, and community engagement contribute to sustainable peace and human security across Kenya and the region.</p>
          </div>

          <div style={{ display: "flex", gap: 4, marginBottom: 64, overflow: "auto", paddingBottom: 16 }}>
            {stages.map((stage, i) => (
              <div key={stage.label} style={{ flex: 1, minWidth: 160 }}>
                <div style={{ background: stage.color, padding: "20px 16px", color: "#fff", minHeight: 220 }}>
                  <div style={{ fontFamily: "'Oswald', sans-serif", fontSize: 13, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 16 }}>{stage.label}</div>
                  {stage.items.map((item) => (
                    <div key={item} style={{ fontSize: 12, color: "rgba(255,255,255,0.85)", lineHeight: 1.6, marginBottom: 8, paddingLeft: 8, borderLeft: "2px solid rgba(255,255,255,0.2)" }}>{item}</div>
                  ))}
                </div>
                {i < stages.length - 1 && (
                  <div style={{ textAlign: "center", color: "var(--navy)", fontSize: 20, padding: "8px 0", display: "none" }}>→</div>
                )}
              </div>
            ))}
          </div>

          <div style={{ background: "var(--grey-light)", padding: "48px 56px", borderTop: "4px solid var(--navy)" }}>
            <div className="section-label">Strategic Maturity</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, color: "var(--navy)", marginBottom: 24 }}>Assumptions & Risk Factors</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }} className="grid-3">
              {[["Political Environment", "Our work assumes a minimum level of institutional stability sufficient for policy engagement and community access. Where this is absent, we adapt our approach to minimize exposure while maximizing research integrity."],
                ["Stakeholder Cooperation", "Effective implementation depends on the willingness of governments, communities, and partners to engage constructively. We mitigate this through multi-stakeholder design processes and adaptive programming."],
                ["Resource Sustainability", "Long-term impact requires sustained investment. SRIC diversifies its funding base and builds institutional systems that sustain programmatic continuity across funding cycles."],
              ].map(([title, desc]) => (
                <div key={title}>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, color: "var(--navy)", marginBottom: 12 }}>{title}</h4>
                  <p style={{ fontSize: 13, color: "var(--text-mid)", lineHeight: 1.8 }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
