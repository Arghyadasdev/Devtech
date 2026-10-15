"use client";

import Link from "next/link";
import { ImageStreamHero } from "@/components/ui/image-stream-hero";
import { ArrowRight } from "lucide-react";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=560&fit=crop&q=80&auto=format",
    alt: "Technology circuit board",
  },
  {
    src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=560&fit=crop&q=80&auto=format",
    alt: "Developer coding",
  },
  {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=560&fit=crop&q=80&auto=format",
    alt: "Cloud computing earth",
  },
  {
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=560&fit=crop&q=80&auto=format",
    alt: "Data matrix code",
  },
  {
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=560&fit=crop&q=80&auto=format",
    alt: "AI circuit neural",
  },
  {
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=560&fit=crop&q=80&auto=format",
    alt: "Laptop dark setup",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=560&fit=crop&q=80&auto=format",
    alt: "Developer laptop workspace",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=560&fit=crop&q=80&auto=format",
    alt: "Digital analytics dashboard",
  },
  {
    src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=560&fit=crop&q=80&auto=format",
    alt: "Server rack infrastructure",
  },
  {
    src: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=400&h=560&fit=crop&q=80&auto=format",
    alt: "Software development environment",
  },
  {
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=560&fit=crop&q=80&auto=format",
    alt: "Code on screen",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=560&fit=crop&q=80&auto=format",
    alt: "Abstract technology",
  },
];

export default function Showcase() {
  return (
    <section
      style={{
        borderTop: "1px solid var(--border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <ImageStreamHero
        images={IMAGES}
        cards={9}
        speed={20}
        axis={58}
        style={{ height: "600px", background: "var(--bg)" }}
      >
        {/* Overlay gradient so text stays readable */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(9,9,11,0.72) 0%, rgba(9,9,11,0.2) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
            padding: "0 clamp(20px, 5vw, 80px)",
          }}
        >
          <span className="sec-label" style={{ marginBottom: 16 }}>Our Work</span>
          <h2
            style={{
              fontSize: "clamp(28px, 4.5vw, 60px)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              fontFamily: "var(--sans)",
              color: "#fff",
              marginBottom: 18,
              maxWidth: 640,
            }}
          >
            Delivering solutions{" "}
            <span className="gradient-text">that scale</span>
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.55)",
              maxWidth: 420,
              lineHeight: 1.65,
              marginBottom: 36,
              fontFamily: "var(--sans)",
            }}
          >
            From cloud infrastructure to AI products — built for businesses
            that need technology that works.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Link
              href="/#projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "11px 24px",
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
              View Projects <ArrowRight size={14} />
            </Link>
            <Link
              href="/#contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "11px 24px",
                borderRadius: 100,
                border: "1px solid rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.8)",
                fontSize: 14,
                fontWeight: 500,
                textDecoration: "none",
                fontFamily: "var(--sans)",
                transition: "border-color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
            >
              Start a Project
            </Link>
          </div>
        </div>
      </ImageStreamHero>
    </section>
  );
}
