"use client";

import { CheckCircle2 } from "lucide-react";

const reasons = [
  { title: "Multi-Technology Expertise", desc: "Software engineering, cloud, AI and DevOps — one team, full stack coverage." },
  { title: "Custom Solutions", desc: "No templates. Every solution designed to your specific business requirements." },
  { title: "Scalable Architecture", desc: "Systems built for 10x growth without requiring a full rebuild later." },
  { title: "Security First", desc: "Security and reliability built into every layer from day one, not added after." },
  { title: "End-to-End Development", desc: "Planning through deployment and live support — single team ownership." },
  { title: "Continuous Support", desc: "24/7 maintenance, improvements and technical support for every project." },
];

export default function WhyUs() {
  return (
    <section style={{ padding: "96px 0", position: "relative", overflow: "hidden" }}>
      {/* Background glow */}
      <div
        className="glow-blob"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 600,
          height: 400,
          background: "radial-gradient(ellipse, rgba(139,92,246,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 10 }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <span className="sec-label">Why Choose Us</span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              fontFamily: "var(--sans)",
            }}
          >
            Your Complete{" "}
            <span className="gradient-text">Technology Partner</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: 16,
          }}
        >
          {reasons.map((r) => (
            <div key={r.title} className="card" style={{ padding: "28px 28px", display: "flex", gap: 16 }}>
              <div style={{ flexShrink: 0, marginTop: 2 }}>
                <CheckCircle2 size={18} style={{ color: "var(--violet)" }} />
              </div>
              <div>
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    letterSpacing: "-0.01em",
                    marginBottom: 8,
                    fontFamily: "var(--sans)",
                  }}
                >
                  {r.title}
                </h3>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65 }}>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
