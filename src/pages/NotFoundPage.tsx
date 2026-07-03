import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import SEO from "../components/SEO";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div
      className="page-load"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        textAlign: "center",
        padding: "0 20px",
      }}
    >
      <SEO title="Page Not Found" description="The page you are looking for does not exist." />
      <div style={{ maxWidth: 500 }}>
        <h1
          style={{
            fontSize: 120,
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            color: "var(--navy)",
            lineHeight: 1,
          }}
        >
          404
        </h1>
        <h2 style={{ fontSize: 24, fontFamily: "'Playfair Display', serif", marginBottom: 16 }}>Page Not Found</h2>
        <p style={{ color: "var(--text-mid)", marginBottom: 32, lineHeight: 1.6 }}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Button variant="primary" onClick={() => navigate("/")}>
          Return to Homepage
        </Button>
      </div>
    </div>
  );
}
