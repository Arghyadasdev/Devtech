"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef } from "react";
import {
  Code2, Cloud, Brain, GraduationCap, Briefcase, Mail,
  Phone, Globe, GitFork, Download, ExternalLink, BookOpen,
  FlaskConical, Sparkles, MapPin, ArrowRight,
} from "lucide-react";

/* ── data ────────────────────────────────────── */
const skills = [
  { name: "Python",           level: 92, category: "language", color: "#f59e0b" },
  { name: "Java",             level: 80, category: "language", color: "#f59e0b" },
  { name: "JavaScript",       level: 88, category: "language", color: "#f59e0b" },
  { name: "PHP",              level: 75, category: "language", color: "#f59e0b" },
  { name: "React / Next.js",  level: 90, category: "frontend", color: "#6366f1" },
  { name: "Node.js",          level: 82, category: "backend",  color: "#3b82f6" },
  { name: "SQL",              level: 85, category: "database", color: "#06b6d4" },
  { name: "AWS",              level: 78, category: "cloud",    color: "#10b981" },
  { name: "Machine Learning", level: 88, category: "ai",       color: "#8b5cf6" },
  { name: "TensorFlow",       level: 82, category: "ai",       color: "#8b5cf6" },
  { name: "Docker",           level: 74, category: "devops",   color: "#ef4444" },
  { name: "Git / GitHub",     level: 95, category: "devops",   color: "#ef4444" },
];

const experience = [
  {
    role: "Teaching Assistant & Lab Faculty",
    org: "Academic Institution",
    period: "2023 – Present",
    color: "#a78bfa",
    points: [
      "Lab sessions for Programming, DBMS and Web Development",
      "Curriculum design and student assessment evaluation",
      "Mentor for AI/ML final-year projects and dissertations",
      "Cloud lab infrastructure management for practicals",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    org: "Self-Employed",
    period: "2022 – Present",
    color: "#60a5fa",
    points: [
      "End-to-end web applications: React, Next.js, Node.js, PHP",
      "ML solutions from data preprocessing through deployment",
      "Cloud deployment on AWS EC2, S3 and Lambda",
      "Clients in e-commerce, healthcare and education sectors",
    ],
  },
];

const projects = [
  { name: "StockPredictor AI",         emoji: "📈", color: "#f59e0b", featured: true,  tags: ["Python","TensorFlow","LSTM","React"],     desc: "LSTM-based stock price forecasting with real-time data ingestion, technical indicator features, and an interactive forecast dashboard built for traders who need signal, not noise." },
  { name: "Disease Prediction System", emoji: "🩺", color: "#ef4444", featured: false, tags: ["XGBoost","Flask"] },
  { name: "Health Risk Assessment",    emoji: "❤️",  color: "#ec4899", featured: false, tags: ["FastAPI","Next.js"] },
  { name: "Food Label OCR / NLP",      emoji: "🔬", color: "#10b981", featured: false, tags: ["OpenCV","spaCy"] },
  { name: "Dev Technology Platform",   emoji: "🌐", color: "#8b5cf6", featured: false, tags: ["Next.js","WebGL"] },
  { name: "Cloud Lab Management",      emoji: "☁️",  color: "#06b6d4", featured: false, tags: ["AWS","Terraform"] },
];

const publications = [
  { title: "Ensemble Approaches for Early Disease Detection from Symptom Patterns", venue: "International Conference on AI in Healthcare", year: "2024", type: "Conference" },
  { title: "Comparative Study of LSTM Architectures for Financial Time-Series Forecasting", venue: "Journal of Applied Machine Learning", year: "2024", type: "Journal" },
  { title: "OCR-Augmented NLP Pipeline for Food Nutrition Extraction", venue: "IEEE Workshop on Document Analysis", year: "2023", type: "Workshop" },
];

const education = [
  { degree: "B.Tech — Computer Science & Engineering", institution: "West Bengal University of Technology", period: "2019 – 2023", short: "2023", detail: "Specialisation: AI & Machine Learning · CGPA 8.4 / 10" },
  { degree: "Higher Secondary (Science — PCM + CS)", institution: "West Bengal Board of Secondary Education", period: "2017 – 2019", short: "2019", detail: "Percentage: 82%" },
];

/* ── animated counter ───────────────────────── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let start = 0;
      const step = () => {
        start += Math.ceil(target / 40);
        if (start >= target) { setVal(target); return; }
        setVal(start);
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <div ref={ref}>{val}{suffix}</div>;
}

/* ── radial skill ring ──────────────────────── */
function SkillRing({ name, level, color }: { name: string; level: number; color: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let start = 0;
      const step = () => {
        start += Math.max(1, Math.ceil(level / 36));
        if (start >= level) { setVal(level); return; }
        setVal(start);
        requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [level]);
  return (
    <div ref={ref} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
      <div style={{ width: 92, height: 92, borderRadius: "50%", background: `conic-gradient(${color} ${val * 3.6}deg, rgba(255,255,255,0.06) 0deg)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <div style={{ position: "absolute", inset: 7, borderRadius: "50%", background: "var(--bg)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 16, fontWeight: 800, color: "#fff", fontFamily: "var(--sans)" }}>{val}%</span>
        </div>
      </div>
      <span style={{ fontSize: 12, fontWeight: 600, color: "#e4e4e7", textAlign: "center", fontFamily: "var(--sans)" }}>{name}</span>
    </div>
  );
}

/* ── page ───────────────────────────────────── */
export default function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("skills");

  return (
    <>
      <Navbar />

      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        @keyframes pulse-ring { 0%{box-shadow:0 0 0 0 rgba(139,92,246,0.4)} 70%{box-shadow:0 0 0 20px rgba(139,92,246,0)} 100%{box-shadow:0 0 0 0 rgba(139,92,246,0)} }
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0} }

        .owner-grid { display:grid; grid-template-columns:1fr 2fr; gap:48px; align-items:start; }

        /* bento about grid */
        .bento-grid { display:grid; grid-template-columns:repeat(4,1fr); grid-template-rows:repeat(3,minmax(150px,auto)); grid-template-areas:"a a b b" "a a c d" "e e f f"; gap:20px; }
        .bento-a{grid-area:a} .bento-b{grid-area:b} .bento-c{grid-area:c} .bento-d{grid-area:d} .bento-e{grid-area:e} .bento-f{grid-area:f}

        /* zigzag experience timeline */
        .exp-zigzag{ position:relative; }
        .exp-zigzag::before{ content:""; position:absolute; left:50%; top:4px; bottom:4px; width:1px; background:linear-gradient(180deg, rgba(139,92,246,0.4), rgba(139,92,246,0.05)); transform:translateX(-50%); }
        .exp-row{ display:grid; grid-template-columns:1fr 48px 1fr; margin-bottom:28px; position:relative; }
        .exp-dot{ grid-column:2; display:flex; justify-content:center; padding-top:2px; }
        .exp-content.even{ grid-column:1; }
        .exp-content.odd{ grid-column:3; }

        /* masonry project grid */
        .masonry-grid{ display:grid; grid-template-columns:repeat(3,1fr); grid-template-rows:repeat(2,minmax(150px,auto)) auto; grid-template-areas:"feat feat p2" "feat feat p3" "p4 p5 p6"; gap:18px; }
        .m-feat{grid-area:feat} .m-p2{grid-area:p2} .m-p3{grid-area:p3} .m-p4{grid-area:p4} .m-p5{grid-area:p5} .m-p6{grid-area:p6}

        .edu-grid{ display:grid; grid-template-columns:1fr 1fr; gap:20px; }
        .contact-split{ display:grid; grid-template-columns:1.1fr 1fr; gap:48px; align-items:center; }

        @media(max-width:1024px){
          .masonry-grid{ grid-template-columns:1fr 1fr !important; grid-template-areas:"feat feat" "p2 p3" "p4 p5" "p6 p6" !important; }
        }
        @media(max-width:768px) {
          .owner-grid { grid-template-columns:1fr !important; }
          .bento-grid{ grid-template-columns:1fr !important; grid-template-areas:none !important; grid-template-rows:auto !important; }
          .bento-a,.bento-b,.bento-c,.bento-d,.bento-e,.bento-f{ grid-area:auto !important; }
          .exp-row{ grid-template-columns:40px 1fr !important; }
          .exp-dot{ grid-column:1 !important; }
          .exp-content.even, .exp-content.odd{ grid-column:2 !important; }
          .exp-zigzag::before{ left:20px; }
          .masonry-grid{ grid-template-columns:1fr !important; grid-template-areas:none !important; }
          .m-feat,.m-p2,.m-p3,.m-p4,.m-p5,.m-p6{ grid-area:auto !important; }
          .edu-grid{ grid-template-columns:1fr !important; }
          .contact-split{ grid-template-columns:1fr !important; }
        }
      `}</style>

      <main style={{ background: "var(--bg)", paddingTop: 60 }}>

        {/* ═══ HERO ═══ */}
        <section style={{ minHeight: "100svh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 600, height: 600, background: "radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 65%)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", bottom: "0%", left: "-10%", width: 500, height: 500, background: "radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 65%)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            {/* giant watermark wordmark */}
            <div style={{ position: "absolute", top: "50%", right: "-2%", transform: "translateY(-50%)", fontSize: "clamp(6rem, 16vw, 11rem)", fontWeight: 900, letterSpacing: "-0.04em", color: "rgba(255,255,255,0.025)", fontFamily: "var(--sans)", whiteSpace: "nowrap", userSelect: "none" }}>
              PORTFOLIO
            </div>
          </div>

          <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: 100, paddingBottom: 100 }}>
            <div className="owner-grid">
              {/* LEFT: avatar */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
                <div style={{ position: "relative" }}>
                  <div style={{ width: 180, height: 180, borderRadius: 28, background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(99,102,241,0.12))", border: "1.5px solid rgba(139,92,246,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 80, animation: "float 5s ease-in-out infinite", boxShadow: "0 0 80px rgba(139,92,246,0.18), inset 0 1px 0 rgba(255,255,255,0.08)" }}>
                    👨‍💻
                  </div>
                  <div style={{ position: "absolute", bottom: -8, right: -8, background: "rgba(9,9,11,0.95)", border: "1px solid rgba(74,222,128,0.3)", borderRadius: 10, padding: "5px 10px", display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, color: "#4ade80", fontFamily: "var(--sans)" }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 6px rgba(74,222,128,0.8)", animation: "pulse-ring 2s infinite" }} />
                    Available
                  </div>
                </div>

                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#a78bfa", textTransform: "uppercase", marginBottom: 4, fontFamily: "var(--sans)" }}>Founder &amp; Developer</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", fontFamily: "var(--sans)", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                    <MapPin size={12} />
                    West Bengal, India
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%", maxWidth: 200 }}>
                  {[
                    { icon: <GitFork size={14} />, label: "Arghyadasdev", href: "https://github.com/Arghyadasdev", color: "#a78bfa" },
                    { icon: <Mail size={14} />,   label: "arghayadasdev@gmail.com", href: "mailto:arghayadasdev@gmail.com", color: "#818cf8" },
                    { icon: <Phone size={14} />,  label: "+91 7001982361", href: "tel:+917001982361", color: "#60a5fa" },
                    { icon: <Globe size={14} />,  label: "devtech.live", href: "https://devtech.live", color: "#34d399" },
                  ].map(({ icon, label, href, color }) => (
                    <a key={label} href={href}
                      style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 9, padding: "8px 12px", textDecoration: "none", color: "rgba(255,255,255,0.4)", fontSize: 12, fontFamily: "var(--sans)", transition: "all 0.15s ease", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = color + "44"; e.currentTarget.style.color = color; e.currentTarget.style.background = color + "0f"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "rgba(255,255,255,0.4)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
                    >
                      <span style={{ flexShrink: 0 }}>{icon}</span>
                      <span style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{label}</span>
                    </a>
                  ))}
                </div>

                <div style={{ display: "flex", gap: 8, width: "100%", maxWidth: 200 }}>
                  <a href="#projects-section" className="btn-violet" style={{ flex: 1, justifyContent: "center", fontSize: 13, padding: "9px 0" }}>Projects</a>
                  <a href="mailto:arghayadasdev@gmail.com" className="btn-outline" style={{ flex: 1, justifyContent: "center", fontSize: 13, padding: "9px 0", display: "flex", alignItems: "center", gap: 6 }}>
                    <Download size={13} />
                    CV
                  </a>
                </div>
              </div>

              {/* RIGHT: text */}
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.22)", borderRadius: 100, padding: "5px 14px", fontSize: 12, fontWeight: 600, color: "#a78bfa", letterSpacing: "0.04em", marginBottom: 28, textTransform: "uppercase", fontFamily: "var(--sans)" }}>
                  <Sparkles size={12} />
                  Personal Portfolio
                </div>

                <h1 style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.04em", marginBottom: 8, fontFamily: "var(--sans)", color: "#fff" }}>
                  Arghya Das Dev
                </h1>

                <p style={{ fontSize: "clamp(1rem, 2.2vw, 1.3rem)", fontWeight: 700, background: "linear-gradient(90deg, #a78bfa 0%, #818cf8 35%, #60a5fa 65%, #34d399 100%)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: 28, fontFamily: "var(--sans)", animation: "shimmer 4s linear infinite" }}>
                  AI &amp; ML · Full-Stack · Cloud · Educator
                </p>

                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: 560, marginBottom: 32, fontFamily: "var(--sans)" }}>
                  I build intelligent software — predictive ML models, full-stack web platforms, and cloud infrastructure.
                  I also teach and mentor students in programming, databases and AI.
                  Founder of <a href="/" style={{ color: "#a78bfa", textDecoration: "none" }}>Dev Technology</a>.
                </p>

                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", fontFamily: "var(--sans)", marginBottom: 44, letterSpacing: "0.01em" }}>
                  Python &nbsp;·&nbsp; React &nbsp;·&nbsp; TensorFlow &nbsp;·&nbsp; AWS &nbsp;·&nbsp; Node.js &nbsp;·&nbsp; Next.js &nbsp;·&nbsp; Docker &nbsp;·&nbsp; SQL
                </div>

                <div style={{ display: "flex", gap: 0 }}>
                  {[
                    { num: 15, suffix: "+", label: "Projects Built" },
                    { num: 3,  suffix: "+", label: "Years Teaching" },
                    { num: 3,  suffix: "",  label: "Publications" },
                    { num: 12, suffix: "+", label: "Technologies" },
                  ].map(({ num, suffix, label }, i) => (
                    <div key={label} style={{ flex: 1, borderRight: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none", paddingRight: 24, paddingLeft: i > 0 ? 24 : 0 }}>
                      <div style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-0.03em", fontFamily: "var(--sans)", background: "linear-gradient(135deg, #fff, rgba(255,255,255,0.6))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                        <Counter target={num} suffix={suffix} />
                      </div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "var(--sans)", marginTop: 2 }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ ABOUT — BENTO GRID ═══ */}
        <section style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="sec-label" style={{ marginBottom: 10 }}>About Me</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", fontFamily: "var(--sans)" }}>
                Builder. Teacher. Researcher.
              </h2>
            </div>

            <div className="bento-grid">
              {/* a — big feature */}
              <div className="bento-a" style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.1), var(--card))", border: "1px solid rgba(139,92,246,0.22)", borderRadius: 20, padding: 32, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <Code2 size={28} color="#8b5cf6" style={{ marginBottom: 16 }} />
                <div style={{ fontSize: 19, fontWeight: 800, color: "#fff", marginBottom: 10, fontFamily: "var(--sans)" }}>Software Engineering</div>
                <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, fontFamily: "var(--sans)", margin: 0, maxWidth: 400 }}>
                  Full-stack development across React, Next.js, Node.js, PHP and Python — production applications from system design through deployment.
                </p>
              </div>
              {/* b */}
              <div className="bento-b" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: 26, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Brain size={22} color="#60a5fa" style={{ marginBottom: 12 }} />
                <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 6, fontFamily: "var(--sans)" }}>AI &amp; Machine Learning</div>
                <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, fontFamily: "var(--sans)", margin: 0 }}>Predictive models, NLP, computer vision &amp; forecasting.</p>
              </div>
              {/* c */}
              <div className="bento-c" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: 22, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <Cloud size={20} color="#34d399" style={{ marginBottom: 10 }} />
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", fontFamily: "var(--sans)" }}>Cloud &amp; DevOps</div>
              </div>
              {/* d */}
              <div className="bento-d" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: 22, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <GraduationCap size={20} color="#f59e0b" style={{ marginBottom: 10 }} />
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", fontFamily: "var(--sans)" }}>Education &amp; Mentorship</div>
              </div>
              {/* e */}
              <div className="bento-e" style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: 26, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <FlaskConical size={20} color="#f472b6" style={{ marginBottom: 10 }} />
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 4, fontFamily: "var(--sans)" }}>Research</div>
                <p style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.6, fontFamily: "var(--sans)", margin: 0 }}>Healthcare AI, financial forecasting, document analysis.</p>
              </div>
              {/* f */}
              <div className="bento-f" style={{ background: "linear-gradient(135deg, var(--card), rgba(99,102,241,0.08))", border: "1px solid var(--border)", borderRadius: 20, padding: 26, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <BookOpen size={20} color="#a78bfa" style={{ marginBottom: 10 }} />
                <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 4, fontFamily: "var(--sans)" }}>Open Source</div>
                <p style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.6, fontFamily: "var(--sans)", margin: 0 }}>ML utilities, web tools and educational resources on GitHub.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SKILLS — RADIAL RINGS ═══ */}
        <section style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="sec-label" style={{ marginBottom: 10 }}>Technical Skills</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", fontFamily: "var(--sans)", marginBottom: 12 }}>
                Tools &amp; Technologies
              </h2>
              <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginTop: 24 }}>
                {["skills", "frontend", "ai", "cloud", "devops"].map((tab) => (
                  <button key={tab} onClick={() => setActiveSection(tab)}
                    style={{ fontSize: 12, fontWeight: 600, padding: "6px 16px", borderRadius: 100, border: "1px solid", cursor: "pointer", transition: "all 0.15s ease", fontFamily: "var(--sans)", textTransform: "capitalize",
                      borderColor: activeSection === tab ? "#8b5cf6" : "rgba(255,255,255,0.1)",
                      background: activeSection === tab ? "rgba(139,92,246,0.15)" : "transparent",
                      color: activeSection === tab ? "#a78bfa" : "var(--muted)",
                    }}>
                    {tab === "skills" ? "All" : tab}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(110px, 1fr))", gap: 32, maxWidth: 900, margin: "0 auto", justifyContent: "center" }}>
              {skills
                .filter((s) => activeSection === "skills" || s.category === activeSection)
                .map((s) => <SkillRing key={s.name} name={s.name} level={s.level} color={s.color} />)
              }
            </div>
          </div>
        </section>

        {/* ═══ EXPERIENCE — ZIGZAG TIMELINE ═══ */}
        <section style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="sec-label" style={{ marginBottom: 10 }}>Career</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", fontFamily: "var(--sans)" }}>
                Experience
              </h2>
            </div>

            <div style={{ maxWidth: 820, margin: "0 auto" }}>
              <div className="exp-zigzag">
                {experience.map((exp, i) => {
                  const isEven = i % 2 === 0;
                  return (
                    <div key={i} className="exp-row">
                      <div className="exp-dot">
                        <div style={{ width: 44, height: 44, borderRadius: "50%", background: `${exp.color}18`, border: `1.5px solid ${exp.color}44`, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                          <Briefcase size={18} color={exp.color} />
                        </div>
                      </div>
                      <div className={`exp-content ${isEven ? "even" : "odd"}`}>
                        <div style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 16, padding: "22px 26px", transition: "border-color 0.2s" }}
                          onMouseEnter={(e) => (e.currentTarget.style.borderColor = exp.color + "44")}
                          onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                        >
                          <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", fontFamily: "var(--sans)" }}>{exp.role}</div>
                          <div style={{ fontSize: 12, color: exp.color, fontFamily: "var(--sans)", marginBottom: 4 }}>{exp.org}</div>
                          <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.3)", marginBottom: 14, fontFamily: "var(--sans)" }}>{exp.period}</div>
                          <ul style={{ paddingLeft: 18, margin: 0, display: "flex", flexDirection: "column", gap: 5 }}>
                            {exp.points.map((pt, j) => (
                              <li key={j} style={{ fontSize: 12.5, color: "var(--muted)", lineHeight: 1.55, fontFamily: "var(--sans)" }}>{pt}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PROJECTS — MASONRY ═══ */}
        <section id="projects-section" style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="sec-label" style={{ marginBottom: 10 }}>Portfolio</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", fontFamily: "var(--sans)" }}>
                Featured Projects
              </h2>
            </div>

            <div className="masonry-grid">
              {projects.map((p, i) => {
                const areaClass = i === 0 ? "m-feat" : `m-p${i + 1}`;
                if (p.featured) {
                  return (
                    <div key={p.name} className={areaClass}
                      style={{ background: `linear-gradient(135deg, ${p.color}14, var(--card))`, border: `1px solid ${p.color}33`, borderRadius: 20, padding: 32, display: "flex", flexDirection: "column", justifyContent: "flex-end", position: "relative", overflow: "hidden" }}
                    >
                      <span style={{ position: "absolute", top: 20, right: 24, fontSize: 11, fontWeight: 700, color: p.color, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "var(--sans)" }}>Featured</span>
                      <span style={{ fontSize: 48, marginBottom: 18 }}>{p.emoji}</span>
                      <div style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 10, fontFamily: "var(--sans)" }}>{p.name}</div>
                      <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7, margin: "0 0 16px", maxWidth: 440, fontFamily: "var(--sans)" }}>{p.desc}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {p.tags.map((tag) => (
                          <span key={tag} style={{ fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 100, background: `${p.color}18`, border: `1px solid ${p.color}35`, color: p.color, fontFamily: "var(--sans)" }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  );
                }
                return (
                  <div key={p.name} className={areaClass}
                    style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18, padding: 20, display: "flex", flexDirection: "column", gap: 10, transition: "border-color 0.2s, transform 0.2s", cursor: "default" }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = p.color + "55"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: 26 }}>{p.emoji}</span>
                      <ExternalLink size={13} color="rgba(255,255,255,0.22)" />
                    </div>
                    <div style={{ fontSize: 13.5, fontWeight: 700, color: "#fff", fontFamily: "var(--sans)" }}>{p.name}</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: "auto" }}>
                      {p.tags.map((tag) => (
                        <span key={tag} style={{ fontSize: 10.5, fontWeight: 600, padding: "2px 8px", borderRadius: 100, background: `${p.color}15`, border: `1px solid ${p.color}30`, color: p.color, fontFamily: "var(--sans)" }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ PUBLICATIONS — NUMBERED LIST ═══ */}
        <section style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <div className="sec-label" style={{ marginBottom: 10 }}>Research</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", fontFamily: "var(--sans)" }}>
                Publications
              </h2>
            </div>

            <div style={{ maxWidth: 760, margin: "0 auto" }}>
              {publications.map((pub, i) => (
                <div key={i} style={{ display: "flex", gap: 28, alignItems: "flex-start", padding: "28px 0", borderBottom: i < publications.length - 1 ? "1px solid var(--border)" : "none" }}>
                  <div style={{ fontSize: 40, fontWeight: 800, color: "rgba(139,92,246,0.18)", lineHeight: 1, fontFamily: "var(--sans)", minWidth: 60, flexShrink: 0 }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 8, lineHeight: 1.45, fontFamily: "var(--sans)" }}>{pub.title}</div>
                    <div style={{ fontSize: 13, color: "#a78bfa", marginBottom: 10, fontFamily: "var(--sans)" }}>{pub.venue}</div>
                    <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "var(--sans)" }}>{pub.year}</span>
                      <span style={{ fontSize: 11, fontWeight: 600, padding: "2px 9px", borderRadius: 100, background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.22)", color: "#818cf8", fontFamily: "var(--sans)" }}>{pub.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ EDUCATION — WATERMARK CARDS ═══ */}
        <section style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="sec-label" style={{ marginBottom: 10 }}>Academic Background</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", fontFamily: "var(--sans)" }}>
                Education
              </h2>
            </div>

            <div className="edu-grid" style={{ maxWidth: 820, margin: "0 auto" }}>
              {education.map((edu, i) => (
                <div key={i} style={{ position: "relative", background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18, padding: "32px 28px", overflow: "hidden" }}>
                  <span style={{ position: "absolute", right: -8, bottom: -26, fontSize: 92, fontWeight: 900, color: "rgba(255,255,255,0.03)", lineHeight: 1, fontFamily: "var(--sans)", pointerEvents: "none" }}>{edu.short}</span>
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <GraduationCap size={22} color="#818cf8" style={{ marginBottom: 14 }} />
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 8, fontFamily: "var(--sans)" }}>{edu.degree}</div>
                    <div style={{ fontSize: 13, color: "#818cf8", marginBottom: 10, fontFamily: "var(--sans)" }}>{edu.institution}</div>
                    <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 12, fontFamily: "var(--sans)" }}>{edu.detail}</div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.3)", fontFamily: "var(--sans)" }}>{edu.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CONTACT — SPLIT LAYOUT ═══ */}
        <section style={{ padding: "96px 0 120px", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div className="contact-split" style={{ maxWidth: 980, margin: "0 auto" }}>
              <div>
                <div className="sec-label" style={{ marginBottom: 16 }}>Get In Touch</div>
                <h2 style={{ fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 18, fontFamily: "var(--sans)" }}>
                  Let&apos;s build something together.
                </h2>
                <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.75, maxWidth: 420, marginBottom: 28, fontFamily: "var(--sans)" }}>
                  Open for collaborations, research partnerships, teaching opportunities and freelance projects.
                </p>
                <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.4)", textDecoration: "none", fontFamily: "var(--sans)", transition: "color 0.15s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}
                >
                  <ArrowRight size={13} />
                  Back to Dev Technology
                </a>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {[
                  { icon: <Mail size={16} />, label: "arghayadasdev@gmail.com", href: "mailto:arghayadasdev@gmail.com", color: "#8b5cf6" },
                  { icon: <Phone size={16} />, label: "+91 7001982361", href: "tel:+917001982361", color: "#6366f1" },
                  { icon: <GitFork size={16} />, label: "github.com/Arghyadasdev", href: "https://github.com/Arghyadasdev", color: "#818cf8" },
                  { icon: <Globe size={16} />, label: "devtech.live", href: "https://devtech.live", color: "#34d399" },
                ].map(({ icon, label, href, color }, i, arr) => (
                  <a key={label} href={href}
                    style={{ display: "flex", alignItems: "center", gap: 14, padding: "18px 4px", borderBottom: i < arr.length - 1 ? "1px solid var(--border)" : "none", textDecoration: "none", color: "rgba(255,255,255,0.55)", fontSize: 14, fontWeight: 500, fontFamily: "var(--sans)", transition: "all 0.15s ease" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = color; e.currentTarget.style.paddingLeft = "12px"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.55)"; e.currentTarget.style.paddingLeft = "4px"; }}
                  >
                    <span style={{ color, flexShrink: 0 }}>{icon}</span>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
