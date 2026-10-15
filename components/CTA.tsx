import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function CTA() {
  return (
    <section style={{ padding: "96px 0" }}>
      <div className="container">
        <div
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: 20,
            padding: "clamp(48px, 7vw, 88px) clamp(28px, 5vw, 72px)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Glow */}
          <div
            className="glow-blob"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              width: 700,
              height: 350,
              background: "radial-gradient(ellipse, rgba(132,204,22,0.1) 0%, transparent 70%)",
            }}
          />

          {/* Dot grid */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
              borderRadius: 20,
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 10 }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 14px",
                borderRadius: 100,
                background: "rgba(132,204,22,0.1)",
                border: "1px solid rgba(132,204,22,0.25)",
                color: "#bef264",
                fontSize: 12,
                fontWeight: 500,
                marginBottom: 28,
              }}
            >
              <Zap size={12} />
              Let&apos;s Build Together
            </div>

            <h2
              style={{
                fontSize: "clamp(36px, 6vw, 80px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.0,
                fontFamily: "var(--sans)",
                marginBottom: 18,
              }}
            >
              Have an idea?
              <br />
              <span className="gradient-text-bright">Let&apos;s build it.</span>
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "var(--muted)",
                maxWidth: 480,
                margin: "0 auto 40px",
                lineHeight: 1.6,
              }}
            >
              Tell us about your project and we&apos;ll create a technology solution
              designed for your business.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/#contact" className="btn-violet" style={{ padding: "13px 28px", fontSize: 15 }}>
                Start a Project <ArrowRight size={16} />
              </Link>
              <Link href="/#contact" className="btn-outline" style={{ padding: "13px 28px", fontSize: 15 }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
