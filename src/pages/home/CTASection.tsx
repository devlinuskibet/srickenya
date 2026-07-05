import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import SectionHeader from "../../components/ui/SectionHeader";

export default function CTASection() {
  const navigate = useNavigate();
  return (
    <section
      className="section-pad-lg home-section delay-8"
      style={{ background: "var(--deep-blue)", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          right: -100,
          top: -100,
          width: 400,
          height: 400,
          border: "1px solid rgba(255,255,255,0.05)",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: -50,
          bottom: -50,
          width: 250,
          height: 250,
          border: "1px solid rgba(255,255,255,0.03)",
          borderRadius: "50%",
        }}
      />
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
        <SectionHeader
          label="Join the Mission"
          title="Partner With Us to Advance Human Security"
          align="center"
          theme="light"
          labelColor="var(--accent)"
        />
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.75)", lineHeight: 1.8, marginBottom: 40 }}>
          SRIC collaborates with governments, regional bodies, civil society organizations, and development partners to
          design evidence-driven solutions for complex security challenges across East Africa.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Button variant="primary" onClick={() => navigate("/partner-us")}>
            Partner With Us
          </Button>
          <Button variant="outline" onClick={() => navigate("/careers")}>
            Get Involved
          </Button>
        </div>
      </div>
    </section>
  );
}
