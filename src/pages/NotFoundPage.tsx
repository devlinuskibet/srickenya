import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import SEO from "../components/common/SEO";
import { motion } from "framer-motion";

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
        <motion.h1
          initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
          style={{
            fontSize: 120,
            fontFamily: "'Playfair Display', serif",
            fontWeight: 900,
            color: "var(--navy)",
            lineHeight: 1,
            display: "inline-block",
          }}
        >
          404
        </motion.h1>
        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          <h2 style={{ fontSize: 24, fontFamily: "'Playfair Display', serif", marginBottom: 16 }}>Page Not Found</h2>
          <p style={{ color: "var(--text-mid)", marginBottom: 32, lineHeight: 1.6 }}>
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button variant="primary" onClick={() => navigate("/")}>
            Return to Homepage
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
