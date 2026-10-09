"use client";

const footerLinks = {
  Company: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
  Services: [
    { label: "Software Development", href: "#solutions" },
    { label: "Cloud Solutions", href: "#solutions" },
    { label: "AI & ML", href: "#solutions" },
    { label: "DevOps", href: "#solutions" },
    { label: "IT Consulting", href: "#solutions" },
  ],
  Resources: [
    { label: "Blog", href: "#" },
    { label: "Case Studies", href: "#" },
    { label: "Documentation", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", paddingTop: 64, paddingBottom: 40 }}>
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 56,
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <img
                src="/logo.png"
                alt="Dev Technology"
                style={{ height: 64, width: "auto", display: "block" }}
              />
            </div>
            <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.7, maxWidth: 260, marginBottom: 20 }}>
              Technology. Innovation. Digital Transformation.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <a
                href="tel:+917001982361"
                style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none", transition: "color 0.15s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                +91 7001982361
              </a>
              <a
                href="mailto:arghayadasdev@gmail.com"
                style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none", transition: "color 0.15s ease", wordBreak: "break-all" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                arghayadasdev@gmail.com
              </a>
              <a
                href="https://devtech.live"
                style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none", transition: "color 0.15s ease" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#a78bfa")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                devtech.live
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  color: "#a78bfa",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: 18,
                }}
              >
                {section}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    style={{ fontSize: 13, color: "var(--muted)", textDecoration: "none", transition: "color 0.15s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#e4e4e7")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 24,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 12, color: "var(--muted)" }}>
            © 2026 Dev Technology. All Rights Reserved.
          </span>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#4ade80",
                display: "inline-block",
              }}
            />
            <span style={{ fontSize: 12, color: "var(--muted)" }}>Available for new projects</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
