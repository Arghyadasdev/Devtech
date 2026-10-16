"use client";

import Link from "next/link";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "25,000",
    unit: "starting at",
    desc: "Landing pages and small business websites that need to launch fast.",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Basic SEO setup",
      "Contact form integration",
      "2 weeks delivery",
      "14 days support",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth",
    price: "50,000",
    unit: "starting at",
    desc: "Full-featured web apps and e-commerce for growing businesses.",
    features: [
      "Up to 15 pages / screens",
      "Custom backend & database",
      "Admin dashboard",
      "Payment gateway integration",
      "4-6 weeks delivery",
      "30 days support",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    name: "Professional",
    price: "75,000",
    unit: "starting at",
    desc: "Production-grade platforms with cloud infrastructure and automation.",
    features: [
      "Unlimited pages / screens",
      "Cloud deployment (AWS/Azure)",
      "CI/CD pipeline setup",
      "API development & integrations",
      "6-8 weeks delivery",
      "60 days support",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Enterprise",
    price: "1,00,000",
    unit: "starting at",
    desc: "Custom software, AI solutions and large-scale system builds.",
    features: [
      "Fully custom architecture",
      "AI / ML integration",
      "Dedicated engineering team",
      "SLA-backed delivery",
      "Flexible timeline",
      "Ongoing maintenance plan",
    ],
    cta: "Talk to Us",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="sec-label">Pricing</span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              fontFamily: "var(--sans)",
            }}
          >
            Affordable <span className="gradient-text">Pricing</span>
          </h2>
          <p style={{ fontSize: 16, color: "var(--muted)", maxWidth: 520, margin: "14px auto 0", lineHeight: 1.6 }}>
            Transparent plans from ₹25,000 to ₹1,00,000+. No hidden fees — every
            project starts with a free consultation to scope the right plan for you.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }}
          className="pricing-grid"
        >
          {plans.map((p) => (
            <div
              key={p.name}
              className={p.featured ? "card card-violet" : "card"}
              style={{
                padding: "32px 24px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                border: p.featured ? "1px solid var(--border-violet)" : undefined,
                background: p.featured ? "var(--violet-dim)" : undefined,
              }}
            >
              {p.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    background: "var(--violet)",
                    color: "#0b1405",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: 100,
                    whiteSpace: "nowrap",
                  }}
                >
                  <Sparkles size={11} />
                  Most Popular
                </div>
              )}

              <div style={{ fontSize: 15, fontWeight: 700, fontFamily: "var(--sans)", marginBottom: 8 }}>
                {p.name}
              </div>
              <div style={{ fontSize: 11, color: "var(--muted)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {p.unit}
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 16 }}>
                <span style={{ fontSize: 15, color: "var(--muted)", fontWeight: 600 }}>₹</span>
                <span
                  style={{
                    fontSize: "clamp(26px, 3vw, 34px)",
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    fontFamily: "var(--sans)",
                  }}
                  className={p.featured ? "gradient-text" : undefined}
                >
                  {p.price}
                </span>
              </div>
              <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, marginBottom: 24, minHeight: 60 }}>
                {p.desc}
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28, flex: 1 }}>
                {p.features.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <Check size={14} style={{ color: "var(--violet)", flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 13, color: "#e4e4e7", lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/#contact"
                className={p.featured ? "btn-violet" : "btn-outline"}
                style={{ justifyContent: "center", width: "100%" }}
              >
                {p.cta}
              </Link>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", fontSize: 13, color: "var(--muted)", marginTop: 40 }}>
          Need something outside these ranges?{" "}
          <Link href="/#contact" style={{ color: "#a3e635", textDecoration: "none" }}>
            Get a custom quote
          </Link>
          .
        </p>
      </div>

      <style>{`
        @media (max-width: 1100px) { .pricing-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 640px) { .pricing-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
