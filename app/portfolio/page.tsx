"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState, useEffect, useRef } from "react";
import {
  Code2, Cloud, Brain, GraduationCap, Briefcase, Mail,
  Phone, Globe, Github, Download, ExternalLink, BookOpen,
  FlaskConical, Sparkles, MapPin, ArrowRight,
} from "lucide-react";

/* ── skill data ──────────────────────────────── */
const skills = [
  { name: "Python",          level: 92, category: "language",  color: "#f59e0b" },
  { name: "Java",            level: 80, category: "language",  color: "#f59e0b" },
  { name: "JavaScript",      level: 88, category: "language",  color: "#f59e0b" },
  { name: "PHP",             level: 75, category: "language",  color: "#f59e0b" },
  { name: "React / Next.js", level: 90, category: "frontend",  color: "#6366f1" },
  { name: "Node.js",         level: 82, category: "backend",   color: "#3b82f6" },
  { name: "SQL",             level: 85, category: "database",  color: "#06b6d4" },
  { name: "AWS",             level: 78, category: "cloud",     color: "#10b981" },
  { name: "Machine Learning",level: 88, category: "ai",        color: "#8b5cf6" },
  { name: "TensorFlow",      level: 82, category: "ai",        color: "#8b5cf6" },
  { name: "Docker",          level: 74, category: "devops",    color: "#ef4444" },
  { name: "Git / GitHub",    level: 95, category: "devops",    color: "#ef4444" },
];

const experience = [
  {
    role: "Teaching Assistant & Lab Faculty",
    org: "Academic Institution",
    period: "2023 – Present",
    icon: "🎓",
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
    icon: "💻",
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
  { name: "StockPredictor AI",        emoji: "📈", color: "#f59e0b", tags: ["Python","TensorFlow","LSTM","React"],    desc: "LSTM-based stock price forecasting with real-time data and interactive dashboard." },
  { name: "Disease Prediction System", emoji: "🩺", color: "#ef4444", tags: ["Python","XGBoost","scikit-learn","Flask"],desc: "Multi-class disease classifier using ensemble ML on clinical symptom datasets." },
  { name: "Health Risk Assessment",    emoji: "❤️",  color: "#ec4899", tags: ["FastAPI","ML","Next.js","PostgreSQL"],  desc: "Patient risk stratification combining EHR processing and predictive modelling." },
  { name: "Food Label OCR / NLP",      emoji: "🔬", color: "#10b981", tags: ["OpenCV","Tesseract","spaCy","AWS"],     desc: "Computer vision pipeline for nutritional extraction and allergen detection." },
  { name: "Dev Technology Platform",   emoji: "🌐", color: "#8b5cf6", tags: ["Next.js","TypeScript","WebGL","CSS 3D"],desc: "Agency website with WebGL black hole hero and 3D CSS corridor showcase." },
  { name: "Cloud Lab Management",      emoji: "☁️",  color: "#06b6d4", tags: ["AWS","Terraform","Docker","Python"],   desc: "VM provisioning, usage monitoring and student access management for academic labs." },
];

const publications = [
  { title: "Ensemble Approaches for Early Disease Detection from Symptom Patterns", venue: "International Conference on AI in Healthcare", year: "2024", type: "Conference" },
  { title: "Comparative Study of LSTM Architectures for Financial Time-Series Forecasting", venue: "Journal of Applied Machine Learning", year: "2024", type: "Journal" },
  { title: "OCR-Augmented NLP Pipeline for Food Nutrition Extraction", venue: "IEEE Workshop on Document Analysis", year: "2023", type: "Workshop" },
];

const education = [
  { degree: "B.Tech — Computer Science & Engineering", institution: "West Bengal University of Technology", period: "2019 – 2023", detail: "Specialisation: AI & Machine Learning · CGPA 8.4 / 10", icon: "🎓" },
  { degree: "Higher Secondary (Science — PCM + CS)", institution: "West Bengal Board of Secondary Education", period: "2017 – 2019", detail: "Percentage: 82%", icon: "📚" },
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

/* ── skill bar ──────────────────────────────── */
function SkillBar({ name, level, color }: { name: string; level: number; color: string }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      setTimeout(() => setWidth(level), 100);
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [level]);
  return (
    <div ref={ref} style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#e4e4e7", fontFamily: "var(--sans)" }}>{name}</span>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", fontFamily: "var(--sans)" }}>{level}%</span>
      </div>
      <div style={{ height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 100, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${width}%`, background: `linear-gradient(90deg, ${color}99, ${color})`, borderRadius: 100, transition: "width 1s cubic-bezier(0.4,0,0.2,1)", boxShadow: `0 0 8px ${color}55` }} />
      </div>
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
        .skills-grid { display:grid; grid-template-columns:1fr 1fr; gap:0 48px; }
        .projects-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .contact-grid { display:flex; gap:16px; flex-wrap:wrap; justify-content:center; }
        @media(max-width:768px) {
          .owner-grid { grid-template-columns:1fr !important; }
          .skills-grid { grid-template-columns:1fr !important; }
          .projects-grid { grid-template-columns:1fr !important; }
        }
        @media(min-width:769px) and (max-width:1024px) {
          .projects-grid { grid-template-columns:1fr 1fr !important; }
        }
      `}</style>

      <main style={{ background: "var(--bg)", paddingTop: 60 }}>

        {/* ═══ HERO ═══════════════════════════════════════════ */}
        <section style={{ minHeight: "100svh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
          {/* Background */}
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <div style={{ position: "absolute", top: "-10%", right: "-5%", width: 600, height: 600, background: "radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 65%)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", bottom: "0%", left: "-10%", width: 500, height: 500, background: "radial-gradient(ellipse, rgba(99,102,241,0.07) 0%, transparent 65%)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
            {/* Horizontal divider lines */}
            <div style={{ position: "absolute", top: "30%", left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.08), transparent)" }} />
            <div style={{ position: "absolute", top: "65%", left: 0, right: 0, height: "1px", background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.05), transparent)" }} />
          </div>

          <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: 100, paddingBottom: 100 }}>
            <div className="owner-grid">
              {/* ── LEFT: avatar + links ── */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 20 }}>
                {/* Avatar */}
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      width: 180,
                      height: 180,
                      borderRadius: 28,
                      background: "linear-gradient(135deg, rgba(139,92,246,0.25), rgba(99,102,241,0.12))",
                      border: "1.5px solid rgba(139,92,246,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 80,
                      animation: "float 5s ease-in-out infinite",
                      boxShadow: "0 0 80px rgba(139,92,246,0.18), inset 0 1px 0 rgba(255,255,255,0.08)",
                    }}
                  >
                    👨‍💻
                  </div>
                  {/* Online badge */}
                  <div style={{ position: "absolute", bottom: -8, right: -8, background: "rgba(9,9,11,0.95)", border: "1px solid rgba(74,222,128,0.3)", borderRadius: 10, padding: "5px 10px", display: "flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 700, color: "#4ade80", fontFamily: "var(--sans)" }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 6px rgba(74,222,128,0.8)", animation: "pulse-ring 2s infinite" }} />
                    Available
                  </div>
                </div>

                {/* Name plate */}
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", color: "#a78bfa", textTransform: "uppercase", marginBottom: 4, fontFamily: "var(--sans)" }}>Founder & Developer</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.35)", fontFamily: "var(--sans)", display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
                    <MapPin size={12} />
                    West Bengal, India
                  </div>
                </div>

                {/* Social links */}
                <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%", maxWidth: 200 }}>
                  {[
                    { icon: <Github size={14} />, label: "Arghyadasdev",       href: "https://github.com/Arghyadasdev",           color: "#a78bfa" },
                    { icon: <Mail size={14} />,   label: "arghayadasdev@gmail.com", href: "mailto:arghayadasdev@gmail.com",        color: "#818cf8" },
                    { icon: <Phone size={14} />,  label: "+91 7001982361",      href: "tel:+917001982361",                         color: "#60a5fa" },
                    { icon: <Globe size={14} />,  label: "devtech.live",        href: "https://devtech.live",                      color: "#34d399" },
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

                {/* CTAs */}
                <div style={{ display: "flex", gap: 8, width: "100%", maxWidth: 200 }}>
                  <a href="#projects-section" className="btn-violet" style={{ flex: 1, justifyContent: "center", fontSize: 13, padding: "9px 0" }}>Projects</a>
                  <a href="mailto:arghayadasdev@gmail.com" className="btn-outline" style={{ flex: 1, justifyContent: "center", fontSize: 13, padding: "9px 0", display: "flex", alignItems: "center", gap: 6 }}>
                    <Download size={13} />
                    CV
                  </a>
                </div>
              </div>

              {/* ── RIGHT: text ── */}
              <div>
                {/* Badge */}
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

                <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, maxWidth: 560, marginBottom: 40, fontFamily: "var(--sans)" }}>
                  I build intelligent software — predictive ML models, full-stack web platforms, and cloud infrastructure.
                  I also teach and mentor students in programming, databases and AI.
                  Founder of <a href="/" style={{ color: "#a78bfa", textDecoration: "none" }}>Dev Technology</a>.
                </p>

                {/* Stat row */}
                <div style={{ display: "flex", gap: 0, marginBottom: 44 }}>
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

                {/* Tag cloud */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["Python", "React", "TensorFlow", "AWS", "Node.js", "Next.js", "Docker", "SQL"].map((tag) => (
                    <span key={tag} style={{ fontSize: 12, fontWeight: 600, padding: "5px 13px", borderRadius: 100, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.4)", fontFamily: "var(--sans)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ ABOUT CARDS ═══════════════════════════════════ */}
        <section style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="sec-label" style={{ marginBottom: 10 }}>About Me</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", fontFamily: "var(--sans)" }}>
                Builder. Teacher. Researcher.
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="projects-grid">
              {[
                { icon: <Code2 size={20} color="#8b5cf6" />, bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.2)", title: "Software Engineering", body: "Full-stack: React, Next.js, Node.js, PHP, Python. Production apps from system design through deployment." },
                { icon: <Brain size={20} color="#60a5fa" />, bg: "rgba(96,165,250,0.1)", border: "rgba(96,165,250,0.2)", title: "AI & Machine Learning", body: "Predictive models, NLP, computer vision, time-series. Tools: TensorFlow, scikit-learn, PyTorch, OpenCV." },
                { icon: <Cloud size={20} color="#34d399" />, bg: "rgba(52,211,153,0.1)", border: "rgba(52,211,153,0.2)", title: "Cloud & DevOps", body: "AWS (EC2, S3, Lambda, RDS), Docker, Terraform, CI/CD. Academic cloud lab infrastructure management." },
                { icon: <GraduationCap size={20} color="#f59e0b" />, bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.2)", title: "Education & Mentorship", body: "Teaching Assistant and Lab Faculty. Subjects: Programming, DBMS, Web Dev. AI/ML project mentorship." },
                { icon: <FlaskConical size={20} color="#f472b6" />, bg: "rgba(244,114,182,0.1)", border: "rgba(244,114,182,0.2)", title: "Research", body: "Published in healthcare AI, financial forecasting and document analysis. Bridging theory and industry." },
                { icon: <BookOpen size={20} color="#a78bfa" />, bg: "rgba(167,139,250,0.1)", border: "rgba(167,139,250,0.2)", title: "Open Source", body: "Active GitHub contributor — ML utilities, web tools and educational resources for students." },
              ].map(({ icon, bg, border, title, body }) => (
                <div key={title}
                  style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 16, padding: 24, transition: "border-color 0.2s, transform 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = border; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{ width: 44, height: 44, background: bg, border: `1px solid ${border}`, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>{icon}</div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 8, fontFamily: "var(--sans)" }}>{title}</div>
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65, fontFamily: "var(--sans)", margin: 0 }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ SKILLS ════════════════════════════════════════ */}
        <section style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="sec-label" style={{ marginBottom: 10 }}>Technical Skills</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", fontFamily: "var(--sans)", marginBottom: 12 }}>
                Tools &amp; Technologies
              </h2>
              {/* Category tabs */}
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

            <div className="skills-grid" style={{ maxWidth: 900, margin: "0 auto" }}>
              {skills
                .filter((s) => activeSection === "skills" || s.category === activeSection)
                .map((s) => <SkillBar key={s.name} name={s.name} level={s.level} color={s.color} />)
              }
            </div>
          </div>
        </section>

        {/* ═══ EXPERIENCE ════════════════════════════════════ */}
        <section style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="sec-label" style={{ marginBottom: 10 }}>Career</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", fontFamily: "var(--sans)" }}>
                Experience
              </h2>
            </div>

            <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
              {/* Timeline line */}
              <div style={{ position: "absolute", left: 20, top: 0, bottom: 0, width: 1, background: "linear-gradient(180deg, rgba(139,92,246,0.4), rgba(139,92,246,0.05))" }} />

              <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                {experience.map((exp, i) => (
                  <div key={i} style={{ display: "flex", gap: 28 }}>
                    {/* Timeline dot */}
                    <div style={{ flexShrink: 0, width: 40, height: 40, borderRadius: "50%", background: `${exp.color}18`, border: `1.5px solid ${exp.color}44`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, zIndex: 1, marginTop: 4 }}>
                      {exp.icon}
                    </div>
                    {/* Card */}
                    <div style={{ flex: 1, background: "var(--card)", border: "1px solid var(--border)", borderRadius: 16, padding: "24px 28px", transition: "border-color 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = exp.color + "44")}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
                        <div>
                          <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", fontFamily: "var(--sans)" }}>{exp.role}</div>
                          <div style={{ fontSize: 13, color: exp.color, fontFamily: "var(--sans)", marginTop: 2 }}>{exp.org}</div>
                        </div>
                        <span style={{ fontSize: 11, fontWeight: 600, padding: "4px 11px", borderRadius: 100, background: `${exp.color}15`, border: `1px solid ${exp.color}30`, color: exp.color, fontFamily: "var(--sans)", whiteSpace: "nowrap" }}>{exp.period}</span>
                      </div>
                      <ul style={{ paddingLeft: 18, margin: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                        {exp.points.map((pt, j) => (
                          <li key={j} style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, fontFamily: "var(--sans)" }}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PROJECTS ══════════════════════════════════════ */}
        <section id="projects-section" style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="sec-label" style={{ marginBottom: 10 }}>Portfolio</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", fontFamily: "var(--sans)" }}>
                Featured Projects
              </h2>
            </div>

            <div className="projects-grid">
              {projects.map((p) => (
                <div key={p.name}
                  style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18, padding: 24, display: "flex", flexDirection: "column", gap: 14, cursor: "default", transition: "all 0.22s ease", position: "relative", overflow: "hidden" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = p.color + "55"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 16px 48px ${p.color}15`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  {/* Top glow */}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${p.color}88, transparent)`, borderRadius: "18px 18px 0 0" }} />

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 36 }}>{p.emoji}</span>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <ExternalLink size={13} color="rgba(255,255,255,0.25)" />
                    </div>
                  </div>

                  <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", fontFamily: "var(--sans)" }}>{p.name}</div>
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65, flex: 1, fontFamily: "var(--sans)", margin: 0 }}>{p.desc}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
                    {p.tags.map((tag) => (
                      <span key={tag} style={{ fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 100, background: `${p.color}15`, border: `1px solid ${p.color}30`, color: p.color, fontFamily: "var(--sans)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PUBLICATIONS ══════════════════════════════════ */}
        <section style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="sec-label" style={{ marginBottom: 10 }}>Research</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", fontFamily: "var(--sans)" }}>
                Publications
              </h2>
            </div>

            <div style={{ maxWidth: 780, margin: "0 auto", display: "flex", flexDirection: "column", gap: 14 }}>
              {publications.map((pub, i) => (
                <div key={i}
                  style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 14, padding: "22px 26px", display: "flex", gap: 18, alignItems: "flex-start", transition: "border-color 0.2s, transform 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(139,92,246,0.35)"; e.currentTarget.style.transform = "translateX(4px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateX(0)"; }}
                >
                  <div style={{ width: 42, height: 42, background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)", borderRadius: 11, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <BookOpen size={17} color="#a78bfa" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", lineHeight: 1.45, marginBottom: 6, fontFamily: "var(--sans)" }}>{pub.title}</div>
                    <div style={{ fontSize: 13, color: "#a78bfa", marginBottom: 8, fontFamily: "var(--sans)" }}>{pub.venue}</div>
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

        {/* ═══ EDUCATION ═════════════════════════════════════ */}
        <section style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="sec-label" style={{ marginBottom: 10 }}>Academic Background</div>
              <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", fontFamily: "var(--sans)" }}>
                Education
              </h2>
            </div>

            <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", flexDirection: "column", gap: 14 }}>
              {education.map((edu, i) => (
                <div key={i}
                  style={{ background: "var(--card)", border: "1px solid var(--border)", borderRadius: 14, padding: "24px 28px", display: "flex", gap: 20, alignItems: "flex-start", transition: "border-color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(139,92,246,0.3)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  <div style={{ width: 44, height: 44, background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.22)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{edu.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 4 }}>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", fontFamily: "var(--sans)" }}>{edu.degree}</div>
                      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "var(--sans)", whiteSpace: "nowrap" }}>{edu.period}</span>
                    </div>
                    <div style={{ fontSize: 13, color: "#818cf8", marginBottom: 4, fontFamily: "var(--sans)" }}>{edu.institution}</div>
                    <div style={{ fontSize: 12, color: "var(--muted)", fontFamily: "var(--sans)" }}>{edu.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CONTACT CTA ═══════════════════════════════════ */}
        <section style={{ padding: "96px 0 120px", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            {/* CTA card */}
            <div style={{ maxWidth: 760, margin: "0 auto", background: "var(--card)", border: "1px solid rgba(139,92,246,0.2)", borderRadius: 24, padding: "56px 48px", textAlign: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: -40, left: "50%", transform: "translateX(-50%)", width: 300, height: 120, background: "radial-gradient(ellipse, rgba(139,92,246,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.025) 1px, transparent 1px)", backgroundSize: "24px 24px", pointerEvents: "none" }} />

              <div style={{ position: "relative", zIndex: 1 }}>
                <div className="sec-label" style={{ marginBottom: 16 }}>Get In Touch</div>
                <h2 style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.025em", marginBottom: 14, fontFamily: "var(--sans)" }}>
                  Let&apos;s Build Something Together
                </h2>
                <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.7, maxWidth: 480, margin: "0 auto 36px", fontFamily: "var(--sans)" }}>
                  Open for collaborations, research partnerships, teaching opportunities and freelance projects.
                </p>

                <div className="contact-grid" style={{ marginBottom: 28 }}>
                  {[
                    { icon: <Mail size={15} />, label: "arghayadasdev@gmail.com", href: "mailto:arghayadasdev@gmail.com", color: "#8b5cf6" },
                    { icon: <Phone size={15} />, label: "+91 7001982361", href: "tel:+917001982361", color: "#6366f1" },
                    { icon: <Github size={15} />, label: "Arghyadasdev", href: "https://github.com/Arghyadasdev", color: "#818cf8" },
                  ].map(({ icon, label, href, color }) => (
                    <a key={label} href={href}
                      style={{ display: "flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 10, padding: "11px 18px", textDecoration: "none", color: "rgba(255,255,255,0.45)", fontSize: 13, fontFamily: "var(--sans)", transition: "all 0.15s ease" }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = color + "55"; e.currentTarget.style.color = color; e.currentTarget.style.background = color + "12"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(255,255,255,0.45)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
                    >
                      {icon}{label}
                    </a>
                  ))}
                </div>

                <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.3)", textDecoration: "none", fontFamily: "var(--sans)", transition: "color 0.15s ease", border: "1px solid rgba(255,255,255,0.08)", padding: "8px 16px", borderRadius: 8 }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#a78bfa"; e.currentTarget.style.borderColor = "rgba(139,92,246,0.3)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.3)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                >
                  <ArrowRight size={13} />
                  Back to Dev Technology
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
