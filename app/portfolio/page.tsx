"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import {
  Code2,
  Cloud,
  Brain,
  GraduationCap,
  Briefcase,
  Mail,
  Phone,
  Globe,
  Github,
  Download,
  ExternalLink,
  BookOpen,
  FlaskConical,
} from "lucide-react";

/* ─── data ─────────────────────────────────────────────── */

const skills = [
  { name: "Python", category: "language" },
  { name: "Java", category: "language" },
  { name: "JavaScript", category: "language" },
  { name: "PHP", category: "language" },
  { name: "React", category: "frontend" },
  { name: "Node.js", category: "backend" },
  { name: "SQL", category: "database" },
  { name: "AWS", category: "cloud" },
  { name: "Machine Learning", category: "ai" },
  { name: "TensorFlow", category: "ai" },
  { name: "Git / GitHub", category: "devops" },
  { name: "Next.js", category: "frontend" },
  { name: "Docker", category: "devops" },
  { name: "REST APIs", category: "backend" },
];

const skillCategories: Record<string, string> = {
  language: "#8b5cf6",
  frontend: "#6366f1",
  backend: "#3b82f6",
  database: "#06b6d4",
  cloud: "#10b981",
  ai: "#f59e0b",
  devops: "#ef4444",
};

const experience = [
  {
    role: "Teaching Assistant & Lab Faculty",
    org: "Academic Institution",
    period: "2023 – Present",
    points: [
      "Conduct lab sessions for Programming, DBMS, and Web Development courses",
      "Assist in curriculum design and evaluation of student assessments",
      "Mentor students in AI/ML projects and final year dissertations",
      "Manage cloud lab infrastructure for hands-on cloud computing practicals",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    org: "Self-Employed",
    period: "2022 – Present",
    points: [
      "Build web applications using React, Next.js, Node.js and PHP",
      "Deliver end-to-end ML solutions: data preprocessing through deployment",
      "Cloud deployment on AWS EC2, S3 and Lambda",
      "Client projects spanning e-commerce, healthcare and education verticals",
    ],
  },
];

const projects = [
  {
    name: "StockPredictor AI",
    desc: "LSTM-based stock price prediction system with real-time data ingestion, technical indicator features, and interactive forecast dashboard.",
    tags: ["Python", "TensorFlow", "LSTM", "Pandas", "React"],
    icon: "📈",
  },
  {
    name: "Disease Prediction System",
    desc: "Multi-class disease classifier using ensemble ML models (Random Forest, XGBoost, SVM) trained on symptom and clinical datasets.",
    tags: ["Python", "scikit-learn", "XGBoost", "Flask", "React"],
    icon: "🩺",
  },
  {
    name: "Health Risk Assessment",
    desc: "Patient risk stratification platform combining EHR data processing, predictive models, and clinician-facing dashboard.",
    tags: ["Python", "ML", "FastAPI", "PostgreSQL", "Next.js"],
    icon: "❤️",
  },
  {
    name: "Food Label OCR / NLP",
    desc: "Computer vision pipeline extracting nutritional data from product labels using OCR and NLP, with allergen detection and dietary scoring.",
    tags: ["Python", "Tesseract", "spaCy", "OpenCV", "AWS Lambda"],
    icon: "🔬",
  },
  {
    name: "Dev Technology Platform",
    desc: "Full agency website with WebGL black hole hero, 3D CSS corridor showcase, and rule-based AI chatbot. Built with Next.js and TypeScript.",
    tags: ["Next.js", "TypeScript", "Tailwind", "WebGL", "CSS 3D"],
    icon: "🌐",
  },
  {
    name: "Cloud Lab Management",
    desc: "Infrastructure automation system for academic cloud labs — VM provisioning, usage monitoring, and student access management via AWS.",
    tags: ["AWS", "Terraform", "Python", "Node.js", "Docker"],
    icon: "☁️",
  },
];

const publications = [
  {
    title: "Ensemble Approaches for Early Disease Detection from Symptom Patterns",
    venue: "International Conference on AI in Healthcare",
    year: "2024",
    type: "Conference Paper",
  },
  {
    title: "Comparative Study of LSTM Architectures for Financial Time-Series Forecasting",
    venue: "Journal of Applied Machine Learning",
    year: "2024",
    type: "Journal Article",
  },
  {
    title: "OCR-Augmented NLP Pipeline for Food Nutrition Extraction",
    venue: "IEEE Workshop on Document Analysis",
    year: "2023",
    type: "Workshop Paper",
  },
];

const education = [
  {
    degree: "B.Tech / B.E. in Computer Science & Engineering",
    institution: "West Bengal University of Technology",
    period: "2019 – 2023",
    detail: "Specialization in AI & Machine Learning. CGPA: 8.4 / 10",
  },
  {
    degree: "Higher Secondary (Science — Physics, Chemistry, Math, CS)",
    institution: "West Bengal Board of Secondary Education",
    period: "2017 – 2019",
    detail: "Percentage: 82%",
  },
];

/* ─── component ─────────────────────────────────────────── */

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredSkills = activeCategory
    ? skills.filter((s) => s.category === activeCategory)
    : skills;

  const uniqueCategories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <>
      <Navbar />
      <main style={{ background: "var(--bg)", paddingTop: 60 }}>

        {/* ── Hero ── */}
        <section
          style={{
            minHeight: "100svh",
            display: "flex",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background glow blobs */}
          <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
            <div style={{ position: "absolute", top: "10%", left: "5%", width: 500, height: 500, background: "radial-gradient(ellipse, rgba(139,92,246,0.12) 0%, transparent 70%)", borderRadius: "50%" }} />
            <div style={{ position: "absolute", bottom: "15%", right: "10%", width: 400, height: 400, background: "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)", borderRadius: "50%" }} />
            {/* Dot grid */}
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
          </div>

          <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: 80, paddingBottom: 80 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 48, alignItems: "center" }} className="hero-portfolio-grid">

              {/* Left content */}
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "rgba(139,92,246,0.1)",
                    border: "1px solid rgba(139,92,246,0.25)",
                    borderRadius: 100,
                    padding: "5px 14px",
                    fontSize: 12,
                    fontWeight: 600,
                    color: "#a78bfa",
                    letterSpacing: "0.04em",
                    marginBottom: 24,
                    textTransform: "uppercase",
                  }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px rgba(74,222,128,0.8)" }} />
                  Open to Opportunities
                </div>

                <h1
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                    fontWeight: 800,
                    lineHeight: 1.1,
                    letterSpacing: "-0.03em",
                    marginBottom: 16,
                    fontFamily: "var(--sans)",
                    color: "#fff",
                  }}
                >
                  Arghya Das Dev
                </h1>

                <p
                  style={{
                    fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
                    fontWeight: 600,
                    background: "linear-gradient(90deg, #a78bfa, #818cf8, #60a5fa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    marginBottom: 24,
                    fontFamily: "var(--sans)",
                  }}
                >
                  AI & ML · Software Development · Cloud · Educator
                </p>

                <p
                  style={{
                    fontSize: 16,
                    color: "rgba(255,255,255,0.55)",
                    lineHeight: 1.75,
                    maxWidth: 540,
                    marginBottom: 40,
                    fontFamily: "var(--sans)",
                  }}
                >
                  I build intelligent systems — from predictive ML models and full-stack web platforms to cloud infrastructure.
                  Alongside engineering, I teach and mentor students in programming, databases and AI.
                  Founder of Dev Technology.
                </p>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a
                    href="#projects-section"
                    className="btn-violet"
                    style={{ padding: "11px 24px", fontSize: 14 }}
                  >
                    View Projects
                  </a>
                  <a
                    href="#contact-section"
                    className="btn-outline"
                    style={{ padding: "11px 24px", fontSize: 14, display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <Download size={15} />
                    Download CV
                  </a>
                </div>

                {/* Quick stats */}
                <div style={{ display: "flex", gap: 32, marginTop: 48, flexWrap: "wrap" }}>
                  {[
                    { num: "15+", label: "Projects Built" },
                    { num: "3+", label: "Years Teaching" },
                    { num: "3", label: "Publications" },
                  ].map(({ num, label }) => (
                    <div key={label}>
                      <div style={{ fontSize: 28, fontWeight: 800, color: "#a78bfa", letterSpacing: "-0.02em", fontFamily: "var(--sans)" }}>{num}</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", fontFamily: "var(--sans)" }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — avatar card */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }} className="hide-on-mobile">
                <div
                  style={{
                    width: 200,
                    height: 200,
                    borderRadius: 24,
                    background: "linear-gradient(135deg, rgba(139,92,246,0.2), rgba(99,102,241,0.1))",
                    border: "1px solid rgba(139,92,246,0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 72,
                    boxShadow: "0 0 60px rgba(139,92,246,0.2), inset 0 1px 0 rgba(255,255,255,0.06)",
                  }}
                >
                  👨‍💻
                </div>
                <div style={{ display: "flex", gap: 10 }}>
                  {[
                    { icon: <Github size={16} />, href: "https://github.com/Arghyadasdev" },
                    { icon: <Mail size={16} />, href: "mailto:arghayadasdev@gmail.com" },
                    { icon: <Globe size={16} />, href: "https://devtech.live" },
                  ].map(({ icon, href }, i) => (
                    <a
                      key={i}
                      href={href}
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgba(255,255,255,0.5)",
                        textDecoration: "none",
                        transition: "all 0.15s ease",
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(139,92,246,0.15)"; e.currentTarget.style.color = "#a78bfa"; e.currentTarget.style.borderColor = "rgba(139,92,246,0.3)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about-section" style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div className="sec-label" style={{ marginBottom: 12 }}>About Me</div>
              <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", fontFamily: "var(--sans)" }}>
                Builder. Teacher. Researcher.
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }} className="about-grid">
              {[
                {
                  icon: <Code2 size={22} color="#a78bfa" />,
                  title: "Software Engineering",
                  body: "Full-stack development across React, Next.js, Node.js, PHP and Python. I build production-ready applications from system design through deployment.",
                },
                {
                  icon: <Brain size={22} color="#60a5fa" />,
                  title: "AI & Machine Learning",
                  body: "Applied ML: predictive models, NLP pipelines, computer vision and time-series forecasting. Tools include TensorFlow, scikit-learn, PyTorch and OpenCV.",
                },
                {
                  icon: <Cloud size={22} color="#34d399" />,
                  title: "Cloud & DevOps",
                  body: "AWS (EC2, S3, Lambda, RDS), Docker, Terraform and CI/CD pipelines. Lab infrastructure management for academic cloud computing environments.",
                },
                {
                  icon: <GraduationCap size={22} color="#f59e0b" />,
                  title: "Education & Mentorship",
                  body: "Teaching Assistant and Lab Faculty covering Programming, DBMS and Web Development. Mentor to students working on AI/ML research projects.",
                },
                {
                  icon: <FlaskConical size={22} color="#f472b6" />,
                  title: "Research",
                  body: "Published research in healthcare AI, financial forecasting and document analysis. Active in applied ML research bridging academic theory and industry practice.",
                },
                {
                  icon: <BookOpen size={22} color="#a78bfa" />,
                  title: "Open Source",
                  body: "Active contributor and maintainer. Projects on GitHub spanning ML utilities, web tools and educational resources for students learning programming and AI.",
                },
              ].map(({ icon, title, body }) => (
                <div
                  key={title}
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 16,
                    padding: 24,
                    transition: "border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(139,92,246,0.3)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  <div style={{ width: 44, height: 44, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    {icon}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 8, fontFamily: "var(--sans)" }}>{title}</div>
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65, fontFamily: "var(--sans)" }}>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div className="sec-label" style={{ marginBottom: 12 }}>Technical Skills</div>
              <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", fontFamily: "var(--sans)", marginBottom: 16 }}>
                Tools & Technologies
              </h2>
            </div>

            {/* Category filter */}
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center", marginBottom: 32 }}>
              <button
                onClick={() => setActiveCategory(null)}
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  padding: "5px 14px",
                  borderRadius: 100,
                  border: "1px solid",
                  borderColor: activeCategory === null ? "#8b5cf6" : "rgba(255,255,255,0.1)",
                  background: activeCategory === null ? "rgba(139,92,246,0.15)" : "transparent",
                  color: activeCategory === null ? "#a78bfa" : "var(--muted)",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  fontFamily: "var(--sans)",
                }}
              >
                All
              </button>
              {uniqueCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    padding: "5px 14px",
                    borderRadius: 100,
                    border: "1px solid",
                    borderColor: activeCategory === cat ? skillCategories[cat] : "rgba(255,255,255,0.1)",
                    background: activeCategory === cat ? `${skillCategories[cat]}22` : "transparent",
                    color: activeCategory === cat ? skillCategories[cat] : "var(--muted)",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    fontFamily: "var(--sans)",
                    textTransform: "capitalize",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
              {filteredSkills.map((skill) => (
                <div
                  key={skill.name}
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 10,
                    padding: "10px 18px",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#e4e4e7",
                    fontFamily: "var(--sans)",
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    transition: "all 0.15s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = skillCategories[skill.category]; e.currentTarget.style.color = skillCategories[skill.category]; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "#e4e4e7"; }}
                >
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: skillCategories[skill.category], flexShrink: 0 }} />
                  {skill.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Experience ── */}
        <section style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div className="sec-label" style={{ marginBottom: 12 }}>Career</div>
              <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", fontFamily: "var(--sans)" }}>
                Experience
              </h2>
            </div>

            <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 24 }}>
              {experience.map((exp, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 16,
                    padding: "28px 32px",
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: 16,
                    transition: "border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(139,92,246,0.3)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                      <div style={{ width: 36, height: 36, background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.2)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Briefcase size={16} color="#a78bfa" />
                      </div>
                      <div>
                        <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", fontFamily: "var(--sans)" }}>{exp.role}</div>
                        <div style={{ fontSize: 13, color: "#a78bfa", fontFamily: "var(--sans)" }}>{exp.org}</div>
                      </div>
                    </div>
                    <ul style={{ marginTop: 16, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 6 }}>
                      {exp.points.map((pt, j) => (
                        <li key={j} style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, fontFamily: "var(--sans)" }}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.3)", whiteSpace: "nowrap", fontFamily: "var(--sans)", paddingTop: 4 }}>{exp.period}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects-section" style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div className="sec-label" style={{ marginBottom: 12 }}>Portfolio</div>
              <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", fontFamily: "var(--sans)" }}>
                Featured Projects
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="projects-portfolio-grid">
              {projects.map((proj) => (
                <div
                  key={proj.name}
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 16,
                    padding: 24,
                    display: "flex",
                    flexDirection: "column",
                    gap: 12,
                    transition: "border-color 0.2s ease, transform 0.2s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(139,92,246,0.35)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: 32 }}>{proj.icon}</span>
                    <ExternalLink size={15} color="rgba(255,255,255,0.2)" />
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", fontFamily: "var(--sans)" }}>{proj.name}</div>
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.65, flex: 1, fontFamily: "var(--sans)" }}>{proj.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          padding: "3px 9px",
                          borderRadius: 100,
                          background: "rgba(139,92,246,0.1)",
                          border: "1px solid rgba(139,92,246,0.2)",
                          color: "#c4b5fd",
                          fontFamily: "var(--sans)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Research & Publications ── */}
        <section style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div className="sec-label" style={{ marginBottom: 12 }}>Research</div>
              <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", fontFamily: "var(--sans)" }}>
                Publications
              </h2>
            </div>

            <div style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
              {publications.map((pub, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 14,
                    padding: "22px 26px",
                    display: "flex",
                    gap: 20,
                    alignItems: "flex-start",
                    transition: "border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(139,92,246,0.3)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  <div style={{ width: 40, height: 40, background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.2)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <BookOpen size={16} color="#a78bfa" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 6, lineHeight: 1.4, fontFamily: "var(--sans)" }}>{pub.title}</div>
                    <div style={{ fontSize: 13, color: "#a78bfa", marginBottom: 4, fontFamily: "var(--sans)" }}>{pub.venue}</div>
                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                      <span style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", fontFamily: "var(--sans)" }}>{pub.year}</span>
                      <span style={{ fontSize: 11, fontWeight: 600, padding: "2px 8px", borderRadius: 100, background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.2)", color: "#818cf8", fontFamily: "var(--sans)" }}>{pub.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Education ── */}
        <section style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <div className="sec-label" style={{ marginBottom: 12 }}>Academic Background</div>
              <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", fontFamily: "var(--sans)" }}>
                Education
              </h2>
            </div>

            <div style={{ maxWidth: 680, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>
              {education.map((edu, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 14,
                    padding: "24px 28px",
                    display: "flex",
                    gap: 20,
                    alignItems: "flex-start",
                    transition: "border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(139,92,246,0.3)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  <div style={{ width: 40, height: 40, background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 2 }}>
                    <GraduationCap size={16} color="#818cf8" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, flexWrap: "wrap" }}>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", lineHeight: 1.4, fontFamily: "var(--sans)" }}>{edu.degree}</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.3)", whiteSpace: "nowrap", fontFamily: "var(--sans)" }}>{edu.period}</div>
                    </div>
                    <div style={{ fontSize: 13, color: "#a78bfa", marginTop: 4, marginBottom: 4, fontFamily: "var(--sans)" }}>{edu.institution}</div>
                    <div style={{ fontSize: 12, color: "var(--muted)", fontFamily: "var(--sans)" }}>{edu.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact-section" style={{ padding: "96px 0 120px", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <div className="sec-label" style={{ marginBottom: 12 }}>Get In Touch</div>
              <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", fontFamily: "var(--sans)", marginBottom: 14 }}>
                Let&apos;s Connect
              </h2>
              <p style={{ fontSize: 16, color: "var(--muted)", fontFamily: "var(--sans)" }}>
                Open for collaborations, research partnerships, teaching opportunities and freelance projects.
              </p>
            </div>

            <div style={{ display: "flex", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>
              {[
                { icon: <Mail size={18} />, label: "arghayadasdev@gmail.com", href: "mailto:arghayadasdev@gmail.com", color: "#8b5cf6" },
                { icon: <Phone size={18} />, label: "+91 7001982361", href: "tel:+917001982361", color: "#6366f1" },
                { icon: <Github size={18} />, label: "github.com/Arghyadasdev", href: "https://github.com/Arghyadasdev", color: "#818cf8" },
                { icon: <Globe size={18} />, label: "devtech.live", href: "https://devtech.live", color: "#60a5fa" },
              ].map(({ icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    padding: "14px 22px",
                    textDecoration: "none",
                    color: "var(--muted)",
                    fontSize: 14,
                    fontWeight: 500,
                    transition: "all 0.18s ease",
                    fontFamily: "var(--sans)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = color + "55"; e.currentTarget.style.color = color; e.currentTarget.style.background = color + "12"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.background = "var(--card)"; }}
                >
                  {icon}
                  {label}
                </a>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 48 }}>
              <a href="/" style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", textDecoration: "none", fontFamily: "var(--sans)", transition: "color 0.15s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
              >
                ← Back to Dev Technology
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>

      <style>{`
        .hero-portfolio-grid { grid-template-columns: 1fr auto !important; }
        .hide-on-mobile { display: flex; }
        @media (max-width: 768px) {
          .hero-portfolio-grid { grid-template-columns: 1fr !important; }
          .hide-on-mobile { display: none !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .projects-portfolio-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr 1fr !important; }
          .projects-portfolio-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
}
