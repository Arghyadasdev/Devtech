"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "Dev AI",
    category: "AI / Machine Learning",
    desc: "AI-powered software and intelligent automation platform enabling businesses to automate repetitive workflows.",
    stack: ["Python", "TensorFlow", "FastAPI", "React"],
    accent: "#84cc16",
    span: "lg:col-span-2",
  },
  {
    name: "Enterprise ERP",
    category: "Software Development",
    desc: "Integrated ERP for schools, colleges and businesses. HR, finance, inventory and academic management.",
    stack: ["Node.js", "PostgreSQL", "React", "Docker"],
    accent: "#06b6d4",
    span: "",
  },
  {
    name: "HealthPredict",
    category: "AI / Healthcare",
    desc: "AI health risk prediction using ML models trained on clinical datasets to surface early risk signals.",
    stack: ["Python", "Scikit-learn", "Next.js", "AWS"],
    accent: "#10b981",
    span: "",
  },
  {
    name: "CloudOps",
    category: "Cloud / DevOps",
    desc: "Cloud infrastructure automation. Multi-cloud provisioning, monitoring, alerting and CI/CD management.",
    stack: ["Terraform", "Kubernetes", "Go", "Grafana"],
    accent: "#f59e0b",
    span: "",
  },
  {
    name: "E-Commerce Platform",
    category: "Web Development",
    desc: "Scalable commerce platform with payment gateway, logistics management and real-time inventory.",
    stack: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    accent: "#ec4899",
    span: "lg:col-span-2",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Header */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 20,
            marginBottom: 48,
          }}
        >
          <div>
            <span className="sec-label" style={{ display: "block" }}>Projects</span>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 52px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                fontFamily: "var(--sans)",
              }}
            >
              Selected <span className="gradient-text">Work</span>
            </h2>
          </div>
          <Link href="/#contact" className="btn-outline">
            Start Your Project <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
          className="projects-grid"
        >
          {projects.map((p) => (
            <div
              key={p.name}
              className={`card card-violet ${p.span}`}
              style={{ padding: 0, overflow: "hidden", cursor: "pointer" }}
            >
              {/* Color header */}
              <div
                style={{
                  height: 120,
                  background: `linear-gradient(135deg, ${p.accent}15 0%, ${p.accent}05 100%)`,
                  borderBottom: `1px solid ${p.accent}20`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 24px",
                }}
              >
                <div
                  style={{
                    fontSize: 64,
                    fontWeight: 900,
                    color: p.accent,
                    opacity: 0.12,
                    letterSpacing: "-0.05em",
                    lineHeight: 1,
                    userSelect: "none",
                    fontFamily: "var(--sans)",
                  }}
                >
                  {p.name.charAt(0)}
                </div>
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    background: `${p.accent}20`,
                    border: `1px solid ${p.accent}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <ArrowUpRight size={14} style={{ color: p.accent }} />
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "20px 24px 24px" }}>
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: p.accent,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  {p.category}
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                    marginBottom: 10,
                    fontFamily: "var(--sans)",
                  }}
                >
                  {p.name}
                </h3>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, marginBottom: 16 }}>
                  {p.desc}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {p.stack.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) { .projects-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px) { .projects-grid { grid-template-columns: 1fr !important; } }
        .lg\\:col-span-2 { grid-column: span 2; }
        @media (max-width: 1024px) { .lg\\:col-span-2 { grid-column: span 1; } }
      `}</style>
    </section>
  );
}
