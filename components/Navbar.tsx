"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#solutions", label: "Solutions" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(9,9,11,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div
        className="container"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}
      >
        {/* Logo */}
        <a href="#home" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          <img
            src="/logo.png"
            alt="Dev Technology"
            style={{ height: 52, width: "auto", display: "block" }}
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: 4 }}>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: "var(--muted)",
                textDecoration: "none",
                padding: "6px 14px",
                borderRadius: 6,
                transition: "color 0.15s ease, background 0.15s ease",
                fontFamily: "var(--sans)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--muted)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: 8 }}>
          <a href="#contact" className="btn-outline" style={{ padding: "7px 18px", fontSize: 13 }}>
            Contact
          </a>
          <a href="#contact" className="btn-violet" style={{ padding: "7px 18px", fontSize: 13 }}>
            Get Started
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          style={{ background: "none", border: "none", cursor: "pointer", color: "var(--muted)" }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div
          style={{
            background: "rgba(9,9,11,0.98)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            padding: "20px 24px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            backdropFilter: "blur(20px)",
          }}
        >
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ fontSize: 15, fontWeight: 500, color: "var(--muted)", textDecoration: "none" }}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-violet" style={{ marginTop: 8, justifyContent: "center" }}>
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}
