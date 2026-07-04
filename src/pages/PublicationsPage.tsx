import SEO from "../components/SEO";
import Button from "../components/Button";
import { useState } from "react";
import PageHero from "../components/PageHero";
import { publications } from "../data";
import { useDataFetch } from "../hooks/useDataFetch";

const extraPubs = [
  {
    tag: "Crime Survey",
    title: "Crime Survey Mombasa 2023",
    desc: "Analysis of crime patterns in Mombasa.",
    year: "2023",
  },
  { tag: "Policy Brief", title: "Community Policing Reform", desc: "Policy recommendations.", year: "2023" },
  {
    tag: "Research Report",
    title: "VE in the Horn Regional Scan",
    desc: "Comparative analysis of VE trends.",
    year: "2023",
  },
  { tag: "Journal Article", title: "Gender and SSR in Kenya", desc: "Academic analysis.", year: "2022" },
];
const allPubs = [...publications, ...extraPubs];
const categories = ["All", "Research Report", "Policy Brief", "VE Analysis", "Journal Article", "Crime Survey"];

export default function PublicationsPage() {
  const [filter, setFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const { data: fetchedPubs, loading } = useDataFetch(allPubs, 1000);

  // Filter and search
  const filtered = (fetchedPubs || []).filter((p) => {
    const matchesFilter = filter === "All" || p.tag === filter;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleFilterClick = (cat: string) => {
    setFilter(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <div>
      <SEO
        title="Publications"
        description="Learn more about Publications at SRIC - Security Research & Information Centre."
      />

      <PageHero title="Publications & Resources" subtitle="Research Library" breadcrumb="Publications" />
      <section className="section-pad-md" style={{ background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48 }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilterClick(cat)}
                style={{
                  padding: "8px 20px",
                  background: filter === cat ? "var(--navy)" : "#fff",
                  color: filter === cat ? "#fff" : "var(--navy)",
                  border: "1px solid var(--navy)",
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: 12,
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <input
            className="form-input"
            placeholder="Search publications by title or description..."
            value={searchQuery}
            onChange={handleSearchChange}
            style={{
              maxWidth: 500,
              marginBottom: 48,
              padding: "12px 16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              width: "100%",
              fontFamily: "inherit",
            }}
          />

          {loading ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="grid-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="pub-card" style={{ opacity: 0.7 }}>
                  <div className="pub-thumb" style={{ background: "#e0e0e0", animation: "pulse 1.5s infinite" }} />
                  <div style={{ padding: "20px" }}>
                    <div style={{ height: 14, width: 80, background: "#e0e0e0", marginBottom: 12, borderRadius: 2 }} />
                    <div
                      style={{ height: 20, width: "100%", background: "#e0e0e0", marginBottom: 8, borderRadius: 2 }}
                    />
                    <div
                      style={{ height: 20, width: "80%", background: "#e0e0e0", marginBottom: 16, borderRadius: 2 }}
                    />
                    <div style={{ height: 14, width: 40, background: "#e0e0e0", borderRadius: 2 }} />
                  </div>
                </div>
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <div
              style={{ textAlign: "center", padding: "60px 20px", background: "var(--grey-light)", borderRadius: 8 }}
            >
              <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 24,
                  color: "var(--navy)",
                  marginBottom: 12,
                }}
              >
                No Publications Found
              </h3>
              <p style={{ color: "var(--text-mid)" }}>We couldn't find any resources matching your search criteria.</p>
              <Button
                variant="primary"
                style={{ marginTop: 24 }}
                onClick={() => {
                  setSearchQuery("");
                  setFilter("All");
                  setCurrentPage(1);
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }} className="grid-4">
                {paginated.map((pub) => (
                  <div key={pub.title} className="pub-card card-hover">
                    <div className="pub-thumb" />
                    <div style={{ padding: "20px" }}>
                      <span className="pub-tag">{pub.tag}</span>
                      <h3
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: 15,
                          fontWeight: 700,
                          color: "var(--navy)",
                          marginBottom: 10,
                        }}
                      >
                        {pub.title}
                      </h3>
                      <p style={{ fontSize: 12, color: "var(--text-mid)", lineHeight: 1.7, marginBottom: 20 }}>
                        {pub.desc}
                      </p>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: 11, color: "var(--text-light)" }}>{pub.year}</span>
                        <Button variant="primary" style={{ fontSize: 11, padding: "6px 14px" }}>
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 48 }}>
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      style={{
                        width: 36,
                        height: 36,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: currentPage === i + 1 ? "var(--accent)" : "#fff",
                        color: currentPage === i + 1 ? "#fff" : "var(--navy)",
                        border: currentPage === i + 1 ? "none" : "1px solid #ddd",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontFamily: "'Oswald', sans-serif",
                      }}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
}
