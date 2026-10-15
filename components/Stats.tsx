const stats = [
  { num: "50+", label: "Projects Delivered" },
  { num: "20+", label: "Technologies" },
  { num: "30+", label: "Solutions Built" },
  { num: "99%", label: "Client Satisfaction" },
  { num: "24/7", label: "Technical Support" },
];

export default function Stats() {
  return (
    <section style={{ padding: "40px 0 0" }}>
      <div className="container">
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 16,
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{
                flex: "1 0 160px",
                padding: "32px 28px",
                textAlign: "center",
                borderRight: i < stats.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              <div
                style={{
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: 6,
                  fontFamily: "var(--sans)",
                }}
                className="gradient-text"
              >
                {s.num}
              </div>
              <div style={{ fontSize: 12, color: "var(--muted)", fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
