const steps = [
  { num: "01", title: "Discover", desc: "Understand the business problem, goals and requirements." },
  { num: "02", title: "Plan", desc: "Define architecture, technology stack and project roadmap." },
  { num: "03", title: "Design", desc: "Create UI/UX wireframes and technical system architecture." },
  { num: "04", title: "Develop", desc: "Build and test the complete solution with iterative sprints." },
  { num: "05", title: "Deploy & Support", desc: "Deploy and provide ongoing 24/7 maintenance and support." },
];

export default function Process() {
  return (
    <section style={{ padding: "96px 0", background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="sec-label">Our Process</span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              fontFamily: "var(--sans)",
            }}
          >
            How We <span className="gradient-text">Work</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: 16,
          }}
        >
          {steps.map((s, i) => (
            <div key={s.num} className="card" style={{ padding: "28px 24px", position: "relative" }}>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: 36,
                    right: -9,
                    width: 18,
                    height: 1,
                    background: "var(--border)",
                    zIndex: 10,
                    display: "none",
                  }}
                />
              )}
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "var(--violet)",
                  letterSpacing: "0.08em",
                  marginBottom: 16,
                }}
              >
                {s.num}
              </div>
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  marginBottom: 10,
                  fontFamily: "var(--sans)",
                }}
              >
                {s.title}
              </h3>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
