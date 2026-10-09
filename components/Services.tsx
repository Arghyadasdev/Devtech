"use client";

import { ArrowUpRight, Cloud, Code2, Palette, Brain, GitBranch, Lightbulb } from "lucide-react";

const categories = [
  { icon: Lightbulb, title: "Strategy", desc: "Technology consulting, architecture planning and digital transformation.", color: "#f59e0b" },
  { icon: Palette, title: "Design", desc: "Modern UI/UX design and user-focused digital experiences.", color: "#ec4899" },
  { icon: Code2, title: "Development", desc: "Web applications, software platforms and enterprise solutions.", color: "#8b5cf6" },
  { icon: Cloud, title: "Cloud", desc: "Cloud infrastructure, migration, deployment and management.", color: "#06b6d4" },
  { icon: Brain, title: "AI & Machine Learning", desc: "AI-powered applications, predictive models and intelligent automation.", color: "#10b981" },
  { icon: GitBranch, title: "DevOps", desc: "CI/CD, containerization, infrastructure automation and deployment.", color: "#f97316" },
];

const detailed = [
  { title: "Cloud Solutions", items: ["AWS", "Microsoft Azure", "Google Cloud", "Cloud migration", "Cloud architecture", "Server management", "Cloud security", "Monitoring"] },
  { title: "Software Development", items: ["Custom software", "Web applications", "Enterprise applications", "API development", "Database solutions", "Business automation"] },
  { title: "Web Development", items: ["Corporate websites", "E-commerce", "Web portals", "Admin dashboards", "CMS solutions", "Responsive websites"] },
  { title: "Mobile Development", items: ["Android applications", "Cross-platform apps", "API integration", "Mobile dashboards"] },
  { title: "AI & Machine Learning", items: ["Machine learning", "Predictive analytics", "AI automation", "Recommendation systems", "NLP", "Computer vision"] },
  { title: "DevOps", items: ["Docker", "Kubernetes", "CI/CD", "Terraform", "Git", "Cloud deployment", "Infrastructure automation"] },
];

export default function Services() {
  return (
    <>
      {/* Service categories */}
      <section id="services" className="section">
        <div className="container">
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span className="sec-label">Services</span>
            <h2
              style={{
                fontSize: "clamp(28px, 5vw, 56px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1.05,
                fontFamily: "var(--sans)",
                marginBottom: 16,
              }}
            >
              Everything You Need{" "}
              <span className="gradient-text">to Scale</span>
            </h2>
            <p style={{ fontSize: 16, color: "var(--muted)", maxWidth: 480, margin: "0 auto", lineHeight: 1.6 }}>
              From strategy to deployment, we cover the full technology stack.
            </p>
          </div>

          {/* Card grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 16,
            }}
          >
            {categories.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="card card-violet"
                  style={{ padding: "28px 28px", cursor: "pointer" }}
                >
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: `${c.color}15`,
                      border: `1px solid ${c.color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: 18,
                    }}
                  >
                    <Icon size={20} style={{ color: c.color }} />
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
                    {c.title}
                  </h3>
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65 }}>{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed solutions */}
      <section id="solutions" style={{ padding: "96px 0", background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="sec-label">Solutions</span>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                fontFamily: "var(--sans)",
              }}
            >
              Detailed Capabilities
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 16,
            }}
          >
            {detailed.map((d) => (
              <div key={d.title} className="card" style={{ padding: "24px 24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                  <h3 style={{ fontSize: 14, fontWeight: 700, fontFamily: "var(--sans)" }}>{d.title}</h3>
                  <ArrowUpRight size={14} style={{ color: "var(--dim)" }} />
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {d.items.map((item) => (
                    <span key={item} className="tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
