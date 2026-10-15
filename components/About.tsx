import Link from "next/link";
import { CheckCircle2, Award, Globe, Users } from "lucide-react";

const pillars = [
  "Cloud-native architecture by default",
  "Agile delivery with transparent communication",
  "Security and compliance built in from day one",
  "Senior engineering teams, no outsourcing",
  "Post-launch support and SLA guarantees",
  "Open-source stack, no vendor lock-in",
];

export default function About() {
  return (
    <section id="about" style={{ padding: "96px 0", borderTop: "1px solid var(--border)", position: "relative", overflow: "hidden" }}>
      {/* Glow */}
      <div
        className="glow-blob"
        style={{
          bottom: 0,
          right: "-10%",
          width: 500,
          height: 400,
          background: "radial-gradient(ellipse, rgba(22,163,74,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 64,
            alignItems: "center",
          }}
        >
          {/* Text */}
          <div>
            <span className="sec-label" style={{ display: "block" }}>About</span>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                fontFamily: "var(--sans)",
                marginBottom: 20,
              }}
            >
              We build technology that moves{" "}
              <span className="gradient-text">businesses forward.</span>
            </h2>
            <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.7, marginBottom: 16 }}>
              Dev Technology is a technology solutions company focused on building modern
              software, cloud infrastructure and intelligent digital solutions.
            </p>
            <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.7, marginBottom: 36 }}>
              We work across development, cloud, AI, DevOps and IT consulting to help
              businesses transform ideas into reliable digital products that scale.
            </p>

            {/* Pillars */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px 16px",
                marginBottom: 36,
              }}
            >
              {pillars.map((p) => (
                <div key={p} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                  <CheckCircle2 size={14} style={{ color: "var(--violet)", flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.5 }}>{p}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/#contact" className="btn-violet">Start a Project</Link>
              <Link href="/#projects" className="btn-outline">View Our Work</Link>
            </div>
          </div>

          {/* Card panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Metrics */}
            <div className="card" style={{ padding: "28px 28px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, textAlign: "center" }}>
                {[
                  { icon: Users, value: "50+", label: "Clients" },
                  { icon: Globe, value: "10+", label: "Countries" },
                  { icon: Award, value: "99%", label: "Uptime SLA" },
                ].map((m) => {
                  const Icon = m.icon;
                  return (
                    <div key={m.label}>
                      <Icon size={18} style={{ color: "var(--violet)", margin: "0 auto 8px" }} />
                      <div style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.03em", fontFamily: "var(--sans)" }} className="gradient-text">
                        {m.value}
                      </div>
                      <div style={{ fontSize: 11, color: "var(--muted)", marginTop: 2 }}>{m.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Brand card */}
            <div
              className="card"
              style={{
                padding: "24px 24px",
                background: "var(--violet-dim)",
                borderColor: "var(--border-violet)",
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, color: "#a3e635", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 10 }}>
                Brand Positioning
              </div>
              <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.7, fontStyle: "italic" }}>
                &ldquo;Modern technology. Practical solutions. Scalable growth.&rdquo;
              </p>
              <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 6 }}>
                {["Software", "Cloud", "AI", "DevOps", "IT Consulting"].map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 11,
                      padding: "3px 10px",
                      borderRadius: 100,
                      background: "rgba(132,204,22,0.15)",
                      border: "1px solid rgba(132,204,22,0.25)",
                      color: "#bef264",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
