import SEO from "../components/common/SEO";
import Button from "../components/ui/Button";
import { useState } from "react";
import PageHero from "../components/layout/PageHero";
import { useToast } from "../components/ui/Toast";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", dept: "General", message: "" });
  const { showToast } = useToast();

  const contactDetails = [
    ["Address", "New Waumini House, 2nd Floor\nChiromo Road, Westlands\nNairobi, Kenya"],
    ["Phone", "+254 720 338336"],
    ["Email", "sric@srickenya.org"],
    ["Website", "www.srickenya.org"],
  ];

  return (
    <div>
      <SEO title="Contact" description="Learn more about Contact at SRIC - Security Research & Information Centre." />

      <PageHero title="Get in Touch" subtitle="Contact Us" breadcrumb="Contact" />
      <section className="section-pad-md" style={{ background: "#fff" }}>
        <div
          style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64 }}
          className="contact-form-grid grid-2"
        >
          <div>
            <div className="section-label">Contact Information</div>
            <h2 className="section-heading">Reach Out to SRIC</h2>
            <div className="divider-gold" />
            <div style={{ marginTop: 40 }}>
              {contactDetails.map(([label, val], idx) => {
                const icons = ["📍", "📞", "✉️", "🌐"];
                return (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      gap: 20,
                      marginBottom: 32,
                      paddingBottom: 32,
                      borderBottom: "1px solid var(--grey-mid)",
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        background: "var(--navy)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 20,
                        flexShrink: 0,
                        borderRadius: 2,
                      }}
                    >
                      {icons[idx]}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Oswald', sans-serif",
                          fontSize: 12,
                          letterSpacing: 2,
                          textTransform: "uppercase",
                          color: "var(--text-light)",
                          marginBottom: 4,
                        }}
                      >
                        {label}
                      </div>
                      <div
                        style={{
                          fontSize: 15,
                          color: "var(--navy)",
                          fontWeight: 600,
                          lineHeight: 1.6,
                          whiteSpace: "pre-line",
                        }}
                      >
                        {val}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              style={{
                height: 220,
                background: "linear-gradient(135deg, var(--navy-dark), var(--navy))",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 12 }}>Map</div>
              <div style={{ color: "var(--gold)", fontFamily: "'Oswald', sans-serif", fontSize: 13, letterSpacing: 2 }}>
                INTERACTIVE MAP
              </div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 11, marginTop: 6 }}>Westlands, Nairobi</div>
            </div>
          </div>

          <div className="contact-form-inner" style={{ background: "var(--grey-light)", padding: "48px 40px" }}>
            <div className="section-label">Send a Message</div>
            <h3
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, color: "var(--navy)", marginBottom: 32 }}
            >
              How Can We Help?
            </h3>

            {sent ? (
              <div style={{ textAlign: "center", padding: "48px 24px" }}>
                <div style={{ fontSize: 48, marginBottom: 20 }}>OK</div>
                <h4
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 24,
                    color: "var(--navy)",
                    marginBottom: 12,
                  }}
                >
                  Message Received
                </h4>
                <p style={{ fontSize: 15, color: "var(--text-mid)", marginBottom: 32 }}>
                  Thank you for reaching out. A member of our team will respond within 2 business days.
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", subject: "", dept: "General", message: "" });
                  }}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!form.name || !form.email || !form.message) {
                    showToast("Please fill in all required fields", "error");
                    return;
                  }
                  setIsLoading(true);
                  setTimeout(() => {
                    setIsLoading(false);
                    setSent(true);
                    showToast("Message sent successfully!", "success");
                  }, 1500);
                }}
              >
                <div
                  className="form-row"
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginBottom: 20 }}
                >
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input
                      className="form-input"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className="form-input"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label className="form-label">Department</label>
                  <select
                    className="form-input"
                    value={form.dept}
                    onChange={(e) => setForm({ ...form, dept: e.target.value })}
                  >
                    <option>General Inquiry</option>
                    <option>Research & Publications</option>
                    <option>Media & Communications</option>
                    <option>Partnerships</option>
                    <option>Careers & Internships</option>
                  </select>
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label className="form-label">Subject *</label>
                  <input
                    className="form-input"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Message subject"
                    required
                  />
                </div>
                <div style={{ marginBottom: 32 }}>
                  <label className="form-label">Message *</label>
                  <textarea
                    className="form-input"
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Please describe your inquiry in detail..."
                    style={{ resize: "vertical" }}
                    required
                  />
                </div>
                <Button
                  variant="primary"
                  fullWidth
                  style={{ padding: "14px 28px", opacity: isLoading ? 0.7 : 1 }}
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
                <p style={{ fontSize: 11, color: "var(--text-light)", marginTop: 12, textAlign: "center" }}>
                  Your message is confidential and will only be shared with relevant SRIC team members.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
