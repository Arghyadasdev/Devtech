"use client";

import { useState } from "react";
import { Send, CheckCircle, Phone, Mail, Globe, Clock } from "lucide-react";

const projectTypes = [
  "Software Development",
  "Web Development",
  "Mobile Development",
  "Cloud Solutions",
  "AI & ML",
  "DevOps",
  "IT Consulting",
  "Other",
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", projectType: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const res = await fetch("https://formsubmit.co/ajax/arghayadasdev@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || "(not provided)",
          company: form.company || "(not provided)",
          projectType: form.projectType || "(not specified)",
          message: form.message,
          _subject: `New project inquiry from ${form.name}`,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSent(true);
    } catch {
      setError("Couldn't send — please email arghayadasdev@gmail.com directly instead.");
    } finally {
      setSending(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: 8,
    padding: "10px 14px",
    fontSize: 14,
    color: "#fff",
    outline: "none",
    fontFamily: "var(--sans)",
    transition: "border-color 0.15s ease",
    boxSizing: "border-box",
  };

  const focus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    (e.target.style.borderColor = "rgba(132,204,22,0.6)");
  const blur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    (e.target.style.borderColor = "var(--border)");

  return (
    <section id="contact" style={{ padding: "96px 0", borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <span className="sec-label">Contact</span>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              fontFamily: "var(--sans)",
            }}
          >
            Start a <span className="gradient-text">Conversation</span>
          </h2>
          <p style={{ fontSize: 15, color: "var(--muted)", marginTop: 14, maxWidth: 440, margin: "14px auto 0" }}>
            Tell us about your project. We respond within 24 hours.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 40,
            alignItems: "start",
          }}
        >
          {/* Info panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {[
              { icon: Phone, label: "Phone", value: "+91 7001982361", href: "tel:+917001982361" },
              { icon: Mail, label: "Email", value: "arghayadasdev@gmail.com", href: "mailto:arghayadasdev@gmail.com" },
              { icon: Globe, label: "Website", value: "devtech.live", href: "https://devtech.live" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  className="card"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    padding: "20px 24px",
                    textDecoration: "none",
                    transition: "border-color 0.2s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(132,204,22,0.4)")}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 10,
                      background: "rgba(132,204,22,0.1)",
                      border: "1px solid rgba(132,204,22,0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={18} style={{ color: "var(--violet)" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: "var(--muted)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 2 }}>
                      {c.label}
                    </div>
                    <div style={{ fontSize: 14, color: "#e4e4e7", wordBreak: "break-all" }}>{c.value}</div>
                  </div>
                </a>
              );
            })}

            <div className="card" style={{ padding: "20px 24px", display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "rgba(34,197,94,0.08)",
                  border: "1px solid rgba(34,197,94,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Clock size={18} style={{ color: "#4ade80" }} />
              </div>
              <div>
                <div style={{ fontSize: 11, color: "var(--muted)", fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>
                  Response Time
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ade80", display: "inline-block" }} />
                  <span style={{ fontSize: 13, color: "#4ade80", fontWeight: 500 }}>Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="card" style={{ padding: "32px 28px" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <CheckCircle size={48} style={{ color: "#4ade80", margin: "0 auto 20px" }} />
                <h3 style={{ fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 8 }}>Message Sent</h3>
                <p style={{ fontSize: 14, color: "var(--muted)", marginBottom: 28 }}>
                  We&apos;ll respond within 24 hours.
                </p>
                <button onClick={() => setSent(false)} className="btn-outline" style={{ fontSize: 13 }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label htmlFor="contact-name" style={{ display: "block", fontSize: 12, color: "var(--muted)", marginBottom: 6, fontWeight: 500 }}>Name *</label>
                    <input id="contact-name" name="name" type="text" required placeholder="Jane Smith" autoComplete="name" style={inputStyle} value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })} onFocus={focus} onBlur={blur} />
                  </div>
                  <div>
                    <label htmlFor="contact-email" style={{ display: "block", fontSize: 12, color: "var(--muted)", marginBottom: 6, fontWeight: 500 }}>Email *</label>
                    <input id="contact-email" name="email" type="email" required placeholder="jane@company.com" autoComplete="email" style={inputStyle} value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })} onFocus={focus} onBlur={blur} />
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  <div>
                    <label htmlFor="contact-phone" style={{ display: "block", fontSize: 12, color: "var(--muted)", marginBottom: 6, fontWeight: 500 }}>Phone</label>
                    <input id="contact-phone" name="phone" type="tel" placeholder="+91 XXXXXXXXXX" autoComplete="tel" style={inputStyle} value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })} onFocus={focus} onBlur={blur} />
                  </div>
                  <div>
                    <label htmlFor="contact-company" style={{ display: "block", fontSize: 12, color: "var(--muted)", marginBottom: 6, fontWeight: 500 }}>Company</label>
                    <input id="contact-company" name="company" type="text" placeholder="Acme Corp" autoComplete="organization" style={inputStyle} value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })} onFocus={focus} onBlur={blur} />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-project-type" style={{ display: "block", fontSize: 12, color: "var(--muted)", marginBottom: 6, fontWeight: 500 }}>Project Type</label>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                    value={form.projectType}
                    onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                    onFocus={focus}
                    onBlur={blur}
                  >
                    <option value="" style={{ background: "#18181b" }}>Select a type</option>
                    {projectTypes.map((t) => (
                      <option key={t} value={t} style={{ background: "#18181b" }}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" style={{ display: "block", fontSize: 12, color: "var(--muted)", marginBottom: 6, fontWeight: 500 }}>Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe your project..."
                    style={{ ...inputStyle, resize: "none" }}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={focus}
                    onBlur={blur}
                  />
                </div>
                {error && (
                  <div style={{ fontSize: 13, color: "#fca5a5", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 8, padding: "10px 14px" }}>
                    {error}
                  </div>
                )}
                <button
                  type="submit"
                  className="btn-violet"
                  disabled={sending}
                  style={{ justifyContent: "center", padding: "13px", fontSize: 14, opacity: sending ? 0.6 : 1, cursor: sending ? "default" : "pointer" }}
                >
                  {sending ? "Sending..." : "Send Message"} <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
