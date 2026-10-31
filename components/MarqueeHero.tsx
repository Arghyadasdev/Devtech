"use client";

import { AnimatedMarqueeHero } from "@/components/ui/hero-3";

const SHOWCASE_IMAGES = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=560&fit=crop&q=80&auto=format",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=560&fit=crop&q=80&auto=format",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=560&fit=crop&q=80&auto=format",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=560&fit=crop&q=80&auto=format",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=560&fit=crop&q=80&auto=format",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=560&fit=crop&q=80&auto=format",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=560&fit=crop&q=80&auto=format",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=560&fit=crop&q=80&auto=format",
];

export default function MarqueeHero() {
  return (
    <AnimatedMarqueeHero
      tagline="Trusted by 50+ businesses worldwide"
      title={
        <>
          We Build Products
          <br />
          People Actually Use
        </>
      }
      description="From startups to enterprises, Dev Technology ships software, cloud infrastructure and AI solutions that scale with your business."
      ctaText="Start Your Project"
      images={SHOWCASE_IMAGES}
      onCtaClick={() => {
        const el = document.getElementById("contact");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }}
    />
  );
}
