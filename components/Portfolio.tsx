import { ExternalLink, GitFork } from "lucide-react";

const projects = [
  {
    title: "CloudVault Platform",
    category: "Cloud Infrastructure",
    description:
      "Multi-tenant cloud storage platform serving 2M+ users with 99.99% uptime. Built on AWS with auto-scaling microservices.",
    tech: ["AWS", "Kubernetes", "Go", "React"],
    gradient: "from-sky-500/20 to-blue-600/10",
    accent: "#0ea5e9",
    span: "lg:col-span-2",
  },
  {
    title: "NeuroCommerce AI",
    category: "AI & E-Commerce",
    description:
      "AI-powered product recommendation engine increasing conversion rates by 340% for a $50M e-commerce brand.",
    tech: ["Python", "TensorFlow", "Next.js", "Redis"],
    gradient: "from-violet-500/20 to-purple-600/10",
    accent: "#8b5cf6",
    span: "",
  },
  {
    title: "SecureVPN Dashboard",
    category: "Cybersecurity",
    description:
      "Enterprise VPN management portal with real-time threat intelligence and SOC2-compliant audit logging.",
    tech: ["React", "Go", "PostgreSQL", "Grafana"],
    gradient: "from-rose-500/20 to-pink-600/10",
    accent: "#f43f5e",
    span: "",
  },
  {
    title: "FinTrack Mobile",
    category: "Mobile App",
    description:
      "Cross-platform personal finance app with open banking integration, now at 500K+ installs on iOS and Android.",
    tech: ["React Native", "Node.js", "MongoDB", "Plaid"],
    gradient: "from-emerald-500/20 to-teal-600/10",
    accent: "#10b981",
    span: "lg:col-span-2",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-0 w-[500px] h-[500px] opacity-8"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,92,246,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <span className="section-tag mb-4 inline-flex">Our Work</span>
            <h2 className="text-4xl sm:text-5xl font-black text-white mt-4">
              Projects That <span className="gradient-text">Make Impact</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="btn-outline text-sm whitespace-nowrap self-start sm:self-auto"
          >
            View All Projects
          </a>
        </div>

        {/* Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className={`glass rounded-2xl overflow-hidden card-hover group ${p.span}`}
            >
              {/* Visual header */}
              <div
                className={`h-48 bg-gradient-to-br ${p.gradient} relative flex items-center justify-center`}
              >
                <div
                  className="text-7xl font-black opacity-10 select-none"
                  style={{ color: p.accent }}
                >
                  {p.title.charAt(0)}
                </div>
                {/* Overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/30">
                  <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                    <ExternalLink size={16} />
                  </button>
                  <button className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                    <GitFork size={16} />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-2"
                  style={{ color: p.accent }}
                >
                  {p.category}
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{p.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        color: "#64748b",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
