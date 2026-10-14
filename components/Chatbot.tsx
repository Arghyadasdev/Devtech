"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, User, Sparkles } from "lucide-react";

interface Message {
  id: number;
  role: "bot" | "user";
  text: string;
  ts: string;
}

const INITIAL_MESSAGE: Message = {
  id: 0,
  role: "bot",
  text: "Hi! I'm Dev Technology's AI assistant.\n\nAsk me about our services, projects, pricing, or how to get started.",
  ts: now(),
};

function now() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

function getReply(input: string): string {
  const q = input.toLowerCase();

  if (match(q, ["hello", "hi", "hey", "good morning", "good evening"]))
    return "Hello! Welcome to Dev Technology. What can I help you with today?";

  if (match(q, ["service", "what do you do", "offer", "capabilities"]))
    return "Dev Technology offers:\n\n• Software Development\n• Cloud Solutions (AWS, Azure, GCP)\n• AI & Machine Learning\n• Web & Mobile Development\n• DevOps & CI/CD\n• IT Consulting\n\nWhich service interests you?";

  if (match(q, ["cloud", "aws", "azure", "gcp", "infrastructure"]))
    return "Our Cloud Solutions team works with AWS, Microsoft Azure and Google Cloud.\n\nWe handle cloud migration, architecture design, server management, security and monitoring.\n\nWant a free consultation?";

  if (match(q, ["ai", "machine learning", "ml", "artificial intelligence", "automation"]))
    return "Our AI & ML team builds:\n\n• Predictive analytics models\n• AI automation pipelines\n• Recommendation systems\n• NLP solutions\n• Computer vision\n• LLM integrations\n\nWe can build a custom AI solution for your business.";

  if (match(q, ["web", "website", "frontend", "next", "react", "ecommerce"]))
    return "We build:\n\n• Corporate websites\n• E-commerce platforms\n• Web portals & dashboards\n• CMS solutions\n• Admin panels\n\nAll built with Next.js, React and TypeScript.";

  if (match(q, ["mobile", "android", "ios", "app", "flutter"]))
    return "We build cross-platform mobile apps for Android and iOS using React Native and Flutter.\n\nFeatures include API integration, offline support, real-time sync and mobile dashboards.";

  if (match(q, ["devops", "docker", "kubernetes", "ci", "cd", "terraform", "pipeline"]))
    return "Our DevOps services include:\n\n• CI/CD pipeline setup\n• Docker & Kubernetes\n• Infrastructure as Code (Terraform)\n• Cloud deployment automation\n• Monitoring & alerting\n\nWe cut release cycles from weeks to hours.";

  if (match(q, ["software", "erp", "enterprise", "custom", "saas", "platform"]))
    return "We build custom software solutions:\n\n• Enterprise ERP applications\n• SaaS platforms\n• API development\n• Database architecture\n• Business automation\n\nEvery solution is tailored to your requirements.";

  if (match(q, ["price", "cost", "pricing", "budget", "how much", "quote"]))
    return "Project cost depends on scope, complexity and timeline.\n\nWe offer free initial consultations and provide detailed estimates after understanding your requirements.\n\nContact us:\n📧 arghayadasdev@gmail.com\n📞 +91 7001982361";

  if (match(q, ["contact", "reach", "email", "phone", "call"]))
    return "Reach Dev Technology at:\n\n📞 +91 7001982361\n📧 arghayadasdev@gmail.com\n🌐 devtech.live\n\nOr fill the contact form on this page — we respond within 24 hours.";

  if (match(q, ["start", "get started", "project", "hire", "work with"]))
    return "Getting started is simple:\n\n1. Tell us about your project\n2. We schedule a free discovery call\n3. We send a proposal and timeline\n4. We begin development\n\nReach us at arghayadasdev@gmail.com or call +91 7001982361.";

  if (match(q, ["project", "portfolio", "work", "case study", "built"]))
    return "Featured projects:\n\n• Dev AI — AI automation platform\n• Enterprise ERP — School & business management\n• HealthPredict — AI health risk prediction\n• CloudOps — DevOps automation platform\n• E-Commerce Platform — Scalable online store";

  if (match(q, ["about", "who are you", "company", "team"]))
    return "Dev Technology is a full-service technology solutions company.\n\nWe specialize in software development, cloud infrastructure, AI and DevOps.\n\nTagline: Technology. Innovation. Digital Transformation.";

  if (match(q, ["support", "maintenance", "ongoing"]))
    return "Yes — we provide 24/7 technical support and ongoing maintenance for all projects.\n\nThis includes bug fixes, performance optimization, security patches and feature updates.";

  if (match(q, ["time", "timeline", "how long", "duration"]))
    return "Timelines vary:\n\n• Landing page: 1–2 weeks\n• Web app: 4–12 weeks\n• Mobile app: 6–16 weeks\n• Enterprise software: 3–6 months\n• Cloud migration: 2–8 weeks";

  if (match(q, ["tech stack", "language", "framework", "python", "node"]))
    return "Our tech stack:\n\n• Languages: Python, JavaScript, Java, PHP\n• Frontend: React, Angular, Next.js\n• Backend: Node.js, Django, Laravel\n• Cloud: AWS, Azure, Google Cloud\n• AI/ML: TensorFlow, PyTorch, OpenAI\n• DevOps: Docker, Kubernetes, Terraform";

  if (match(q, ["bye", "goodbye", "thanks", "thank you"]))
    return "Thanks for reaching out! Feel free to contact us anytime.\n\n📞 +91 7001982361\n📧 arghayadasdev@gmail.com\n\nWe look forward to working with you.";

  return "I didn't catch that. You can ask about:\n\n• Services (cloud, AI, web, mobile, DevOps)\n• Project examples\n• Pricing & timelines\n• Getting started\n• Contact information\n\nOr email arghayadasdev@gmail.com directly.";
}

function match(q: string, keywords: string[]): boolean {
  return keywords.some((k) => q.includes(k));
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [unread, setUnread] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: Message = { id: Date.now(), role: "user", text, ts: now() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      const botMsg: Message = { id: Date.now() + 1, role: "bot", text: getReply(text), ts: now() };
      setMessages((prev) => [...prev, botMsg]);
      setTyping(false);
      if (!open) setUnread((n) => n + 1);
    }, 600 + Math.random() * 600);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  };

  const quickReplies = ["Our Services", "Cloud Solutions", "AI & ML", "Get a Quote", "Contact Us"];

  return (
    <>
      <style>{`
        @keyframes typing-dot {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.35; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes fab-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(139,92,246,0.55), 0 8px 32px rgba(139,92,246,0.4); }
          50% { box-shadow: 0 0 0 10px rgba(139,92,246,0), 0 8px 32px rgba(139,92,246,0.4); }
        }
        @keyframes chat-slide-up {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .chatbot-window { animation: chat-slide-up 0.22s ease forwards; }
        .chatbot-scroll::-webkit-scrollbar { width: 4px; }
        .chatbot-scroll::-webkit-scrollbar-track { background: transparent; }
        .chatbot-scroll::-webkit-scrollbar-thumb { background: rgba(139,92,246,0.25); border-radius: 4px; }
      `}</style>

      {/* Chat window */}
      {open && (
        <div
          className="chatbot-window"
          style={{
            position: "fixed",
            bottom: 88,
            right: 24,
            width: "min(400px, calc(100vw - 32px))",
            height: "min(580px, calc(100vh - 120px))",
            background: "rgba(9,9,11,0.97)",
            border: "1px solid rgba(139,92,246,0.2)",
            borderRadius: 20,
            display: "flex",
            flexDirection: "column",
            zIndex: 1000,
            boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(139,92,246,0.08), inset 0 1px 0 rgba(255,255,255,0.04)",
            overflow: "hidden",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "18px 20px",
              background: "linear-gradient(135deg, rgba(139,92,246,0.18) 0%, rgba(99,102,241,0.1) 100%)",
              borderBottom: "1px solid rgba(139,92,246,0.15)",
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexShrink: 0,
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Header glow */}
            <div style={{ position: "absolute", top: -20, left: "50%", transform: "translateX(-50%)", width: 200, height: 60, background: "radial-gradient(ellipse, rgba(139,92,246,0.15) 0%, transparent 70%)", pointerEvents: "none" }} />

            {/* Avatar */}
            <div
              style={{
                width: 40,
                height: 40,
                background: "linear-gradient(135deg, #8b5cf6, #6366f1)",
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                boxShadow: "0 4px 16px rgba(139,92,246,0.4)",
              }}
            >
              <Sparkles size={18} color="#fff" />
            </div>

            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", letterSpacing: "-0.01em", fontFamily: "var(--sans)" }}>
                Dev Technology
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 5, marginTop: 2 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block", boxShadow: "0 0 6px rgba(74,222,128,0.8)" }} />
                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", fontFamily: "var(--sans)" }}>AI Assistant · Online</span>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 8,
                width: 32,
                height: 32,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                color: "rgba(255,255,255,0.5)",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}
            >
              <X size={14} />
            </button>
          </div>

          {/* Messages */}
          <div
            className="chatbot-scroll"
            style={{ flex: 1, overflowY: "auto", padding: "20px 16px", display: "flex", flexDirection: "column", gap: 14 }}
          >
            {messages.map((m) => (
              <div
                key={m.id}
                style={{ display: "flex", flexDirection: m.role === "user" ? "row-reverse" : "row", alignItems: "flex-end", gap: 8 }}
              >
                {/* Avatar */}
                <div
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: "50%",
                    background: m.role === "bot"
                      ? "linear-gradient(135deg, #8b5cf6, #6366f1)"
                      : "rgba(255,255,255,0.08)",
                    border: m.role === "bot" ? "none" : "1px solid rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: m.role === "bot" ? "0 2px 8px rgba(139,92,246,0.35)" : "none",
                  }}
                >
                  {m.role === "bot"
                    ? <Sparkles size={13} color="#fff" />
                    : <User size={13} color="rgba(255,255,255,0.7)" />
                  }
                </div>

                {/* Bubble */}
                <div style={{ maxWidth: "74%", display: "flex", flexDirection: "column", gap: 4, alignItems: m.role === "user" ? "flex-end" : "flex-start" }}>
                  <div
                    style={{
                      background: m.role === "bot"
                        ? "rgba(30,30,36,0.9)"
                        : "linear-gradient(135deg, #8b5cf6, #7c3aed)",
                      color: m.role === "bot" ? "#d1d5db" : "#fff",
                      borderRadius: m.role === "bot" ? "16px 16px 16px 4px" : "16px 16px 4px 16px",
                      padding: "10px 14px",
                      fontSize: 13,
                      lineHeight: 1.6,
                      whiteSpace: "pre-line",
                      border: m.role === "bot" ? "1px solid rgba(139,92,246,0.15)" : "none",
                      fontFamily: "var(--sans)",
                      boxShadow: m.role === "user" ? "0 4px 16px rgba(139,92,246,0.25)" : "none",
                    }}
                  >
                    {m.text}
                  </div>
                  <span style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", paddingLeft: 2, paddingRight: 2, fontFamily: "var(--sans)" }}>{m.ts}</span>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {typing && (
              <div style={{ display: "flex", alignItems: "flex-end", gap: 8 }}>
                <div style={{ width: 30, height: 30, borderRadius: "50%", background: "linear-gradient(135deg, #8b5cf6, #6366f1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 2px 8px rgba(139,92,246,0.35)" }}>
                  <Sparkles size={13} color="#fff" />
                </div>
                <div style={{ background: "rgba(30,30,36,0.9)", border: "1px solid rgba(139,92,246,0.15)", borderRadius: "16px 16px 16px 4px", padding: "12px 16px", display: "flex", gap: 4, alignItems: "center" }}>
                  {[0, 1, 2].map((i) => (
                    <span key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "#8b5cf6", display: "inline-block", animation: `typing-dot 1.2s ease-in-out ${i * 0.2}s infinite` }} />
                  ))}
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick replies */}
          {messages.length <= 2 && (
            <div style={{ padding: "8px 16px", display: "flex", flexWrap: "wrap", gap: 6, flexShrink: 0 }}>
              {quickReplies.map((qr) => (
                <button
                  key={qr}
                  onClick={() => {
                    const userMsg: Message = { id: Date.now(), role: "user", text: qr, ts: now() };
                    setMessages((prev) => [...prev, userMsg]);
                    setTyping(true);
                    setTimeout(() => {
                      const botMsg: Message = { id: Date.now() + 1, role: "bot", text: getReply(qr), ts: now() };
                      setMessages((prev) => [...prev, botMsg]);
                      setTyping(false);
                    }, 700);
                  }}
                  style={{
                    fontSize: 12,
                    fontWeight: 500,
                    padding: "5px 12px",
                    borderRadius: 100,
                    background: "rgba(139,92,246,0.1)",
                    border: "1px solid rgba(139,92,246,0.25)",
                    color: "#c4b5fd",
                    cursor: "pointer",
                    transition: "all 0.15s ease",
                    fontFamily: "var(--sans)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(139,92,246,0.2)"; e.currentTarget.style.borderColor = "rgba(139,92,246,0.45)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(139,92,246,0.1)"; e.currentTarget.style.borderColor = "rgba(139,92,246,0.25)"; }}
                >
                  {qr}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div
            style={{
              padding: "12px 16px 16px",
              borderTop: "1px solid rgba(139,92,246,0.1)",
              display: "flex",
              gap: 8,
              background: "rgba(14,14,18,0.8)",
              flexShrink: 0,
            }}
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask me anything..."
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 12,
                padding: "10px 14px",
                fontSize: 13,
                color: "#fff",
                outline: "none",
                fontFamily: "var(--sans)",
                transition: "border-color 0.2s ease",
              }}
              onFocus={(e) => (e.target.style.borderColor = "rgba(139,92,246,0.5)")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.08)")}
            />
            <button
              onClick={send}
              disabled={!input.trim()}
              style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                background: input.trim()
                  ? "linear-gradient(135deg, #8b5cf6, #7c3aed)"
                  : "rgba(255,255,255,0.05)",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: input.trim() ? "pointer" : "not-allowed",
                transition: "all 0.2s ease",
                flexShrink: 0,
                boxShadow: input.trim() ? "0 4px 16px rgba(139,92,246,0.4)" : "none",
              }}
            >
              <Send size={15} color={input.trim() ? "#fff" : "rgba(255,255,255,0.2)"} />
            </button>
          </div>
        </div>
      )}

      {/* FAB toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          width: 58,
          height: 58,
          borderRadius: "50%",
          background: open
            ? "rgba(20,20,26,0.95)"
            : "linear-gradient(135deg, #8b5cf6, #7c3aed)",
          border: open ? "1px solid rgba(139,92,246,0.3)" : "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 1000,
          transition: "all 0.25s ease",
          animation: open ? "none" : "fab-pulse 2.5s ease-in-out infinite",
        }}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open
          ? <X size={22} color="#fff" />
          : <MessageCircle size={22} color="#fff" />
        }

        {!open && unread > 0 && (
          <span
            style={{
              position: "absolute",
              top: -3,
              right: -3,
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: "#ef4444",
              color: "#fff",
              fontSize: 11,
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid var(--bg)",
            }}
          >
            {unread}
          </span>
        )}
      </button>
    </>
  );
}
