"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { BlackHoleHeroSection } from "@/components/ui/blackhole-hero-section";

function useNarrow(query = "(max-width: 767px)") {
  const [narrow, setNarrow] = useState(false);
  useEffect(() => {
    const m = window.matchMedia(query);
    const sync = () => setNarrow(m.matches);
    sync();
    m.addEventListener("change", sync);
    return () => m.removeEventListener("change", sync);
  }, [query]);
  return narrow;
}

export default function Hero() {
  const narrow = useNarrow();

  return (
    <section id="hero" style={{ minHeight: "100svh", position: "relative" }}>
      <BlackHoleHeroSection
        focus={narrow ? [0.5, 0.78] : [0.72, 0.46]}
        scrim={narrow ? "top" : "left"}
        scrimStrength={0.88}
        distance={24}
        elevation={narrow ? -7 : -5.5}
        fov={narrow ? 58 : 42}
        hotColor="#EEFFD6"
        midColor="#69E219"
        coolColor="#1a4a05"
        glow={1}
        steps={narrow ? 200 : 280}
        resolution={narrow ? 0.55 : 0.65}
        style={{ minHeight: "100svh" }}
      >
        <div
          style={{
            display: "flex",
            minHeight: "100svh",
            alignItems: narrow ? "flex-start" : "center",
            padding: narrow ? "80px 24px 48px" : "0 clamp(24px, 6vw, 80px)",
          }}
        >
          <div style={{ maxWidth: 560 }}>
            {/* Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "5px 14px",
                borderRadius: 100,
                background: "rgba(132,204,22,0.15)",
                border: "1px solid rgba(132,204,22,0.3)",
                color: "#bef264",
                fontSize: 12,
                fontWeight: 500,
                marginBottom: 28,
                fontFamily: "var(--sans)",
              }}
            >
              <Sparkles size={12} />
              Technology. Innovation. Digital Transformation.
            </div>

            {/* Heading */}
            <h1
              style={{
                fontSize: "clamp(36px, 6.5vw, 88px)",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.0,
                fontFamily: "var(--sans)",
                color: "#ffffff",
                marginBottom: 20,
              }}
            >
              Technology
              <br />
              Solutions
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #84cc16 0%, #a3e635 50%, #bef264 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Built to Scale.
              </span>
            </h1>

            {/* Subtext */}
            <p
              style={{
                fontSize: 17,
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.65,
                marginBottom: 36,
                maxWidth: 420,
                fontFamily: "var(--sans)",
              }}
            >
              Dev Technology builds modern software, cloud infrastructure,
              AI solutions and digital products that grow with your business.
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
              <Link
                href="/#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "13px 26px",
                  borderRadius: 100,
                  background: "#84cc16",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  fontFamily: "var(--sans)",
                  transition: "background 0.15s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#65a30d")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#84cc16")}
              >
                Start a Project <ArrowRight size={15} />
              </Link>
              <Link
                href="/#projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "13px 26px",
                  borderRadius: 100,
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: 14,
                  fontWeight: 500,
                  textDecoration: "none",
                  fontFamily: "var(--sans)",
                  transition: "border-color 0.15s ease, color 0.15s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.45)"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; }}
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </BlackHoleHeroSection>
    </section>
  );
}
