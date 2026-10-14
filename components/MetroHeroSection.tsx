"use client";

import dynamic from "next/dynamic";

const MetroHero = dynamic(() => import("@/components/ui/scroll-locked-video-hero"), {
  ssr: false,
  loading: () => <div style={{ height: "100dvh", background: "#05070d" }} />,
});

export default function MetroHeroSection() {
  return (
    <MetroHero
      title="BUILT TO SCALE"
      tagline="Every system we ship opens a new door for what's next."
      scrollHint="SCROLL"
      signature={{ name: "Dev Technology", url: "https://devtech.live" }}
      scrubDistance={900}
    />
  );
}
