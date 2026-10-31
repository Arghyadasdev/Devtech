"use client";

import { ScrollGlobe } from "@/components/ui/scroll-globe";

const scrollToId = (id: string) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const sections = [
  {
    id: "global-hero",
    badge: "Global Reach",
    title: "Built From",
    subtitle: "Anywhere, For Everywhere",
    description:
      "Dev Technology ships software for clients across continents. Distributed teams, cloud-native delivery, and a workflow that doesn't care what timezone you're in.",
    align: "left" as const,
    actions: [
      { label: "Start a Project", variant: "primary" as const, onClick: () => scrollToId("contact") },
      { label: "View Our Work", variant: "secondary" as const, onClick: () => scrollToId("projects") },
    ],
  },
  {
    id: "global-clients",
    badge: "Clients",
    title: "Trusted Across Borders",
    description:
      "From local startups to international teams, we've shipped platforms that run on every major cloud and reach users on every continent. Distance has never been the constraint — delivery has always been the standard.",
    align: "center" as const,
  },
  {
    id: "global-capability",
    badge: "Capability",
    title: "One Team.",
    subtitle: "Full-Stack Coverage.",
    description:
      "Software, cloud infrastructure, AI and DevOps under one roof. No handoffs between vendors, no gaps between teams — just one accountable partner from architecture to production.",
    align: "left" as const,
    features: [
      { title: "Cloud-Native by Default", description: "AWS, Azure and Google Cloud deployments built for scale from day one." },
      { title: "AI-Powered Delivery", description: "Machine learning and automation woven into the products we ship, not bolted on." },
      { title: "24/7 Support", description: "Engineering support that doesn't stop when the sun goes down somewhere in the world." },
    ],
  },
  {
    id: "global-future",
    badge: "What's Next",
    title: "Let's Build",
    subtitle: "Your Next Platform",
    description:
      "Wherever you're building from, we're ready to start. A free consultation, a clear scope, and a team that ships — that's how every Dev Technology project begins.",
    align: "center" as const,
    actions: [
      { label: "Talk to Us", variant: "primary" as const, onClick: () => scrollToId("contact") },
      { label: "See Pricing", variant: "secondary" as const, onClick: () => scrollToId("pricing") },
    ],
  },
];

export default function GlobalReach() {
  return <ScrollGlobe sections={sections} className="border-t border-border" />;
}
