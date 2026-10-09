const techGroups = [
  { label: "Languages", items: ["Python", "Java", "C++", "JavaScript", "PHP", "SQL"] },
  { label: "Frontend", items: ["HTML", "CSS", "React", "Angular", "Bootstrap", "TypeScript"] },
  { label: "Backend", items: ["Node.js", "Express", "Laravel", "Flask", "Django", "Spring"] },
  { label: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis"] },
  { label: "Cloud", items: ["AWS", "Azure", "Google Cloud"] },
  { label: "DevOps", items: ["Docker", "Kubernetes", "Terraform", "Git", "CI/CD"] },
  { label: "AI / ML", items: ["TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "OpenAI", "Hugging Face"] },
];

const allItems = techGroups.flatMap((g) => g.items);
const doubled = [...allItems, ...allItems];

export default function TechStack() {
  return (
    <section style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}>
      <div className="container" style={{ marginBottom: 56 }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span className="sec-label">Tech Stack</span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              fontFamily: "var(--sans)",
            }}
          >
            Technologies We <span className="gradient-text">Master</span>
          </h2>
        </div>

        {/* Group grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: 12,
            marginBottom: 48,
          }}
        >
          {techGroups.map((g) => (
            <div key={g.label} className="card" style={{ padding: "20px 20px" }}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#a78bfa",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 14,
                }}
              >
                {g.label}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {g.items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee */}
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .tech-marquee { animation: marquee 55s linear infinite; }
        .tech-marquee:hover { animation-play-state: paused; }
      `}</style>

      <div style={{ overflow: "hidden", position: "relative", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "16px 0" }}>
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 100, background: "linear-gradient(90deg, var(--bg), transparent)", zIndex: 10, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 100, background: "linear-gradient(270deg, var(--bg), transparent)", zIndex: 10, pointerEvents: "none" }} />
        <div className="tech-marquee" style={{ display: "flex", gap: 8, width: "max-content" }}>
          {doubled.map((item, i) => (
            <span
              key={i}
              style={{
                fontSize: 12,
                fontWeight: 500,
                padding: "6px 14px",
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: 6,
                color: "var(--muted)",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
