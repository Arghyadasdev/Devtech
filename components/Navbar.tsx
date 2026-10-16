"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#solutions", label: "Solutions" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#projects", label: "Projects" },
  { href: "/#about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false);
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href.substring(1));
      }
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "14px 0" : "26px 0",
        transition: "padding 0.3s ease",
      }}
    >
      <div
        className="container"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.pushState(null, "", "/");
            }
          }}
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexShrink: 0,
            background: "rgba(9,9,11,0.7)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            borderRadius: 100,
            padding: "8px 18px 8px 12px",
          }}
        >
          <Image
            src="/logo.png"
            alt="Dev Technology"
            width={127}
            height={51}
            priority
            style={{ height: 44, width: "auto", display: "block" }}
          />
        </Link>

        {/* Desktop nav — glass pill with sliding active capsule */}
        <div
          className="hidden md:flex"
          style={{
            alignItems: "center",
            gap: 2,
            background: "rgba(9,9,11,0.7)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            borderRadius: 100,
            padding: 6,
          }}
        >
          {navLinks.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                style={{
                  position: "relative",
                  fontSize: 14.5,
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "#0b1405" : "var(--muted)",
                  background: isActive ? "var(--violet)" : "transparent",
                  textDecoration: "none",
                  padding: "10px 20px",
                  borderRadius: 100,
                  transition: "color 0.2s ease, background 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "var(--muted)";
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: 8, flexShrink: 0 }}>
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
            style={{
              fontSize: 14,
              fontWeight: 500,
              color: "var(--muted)",
              textDecoration: "none",
              padding: "11px 18px",
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
          >
            Contact
          </Link>
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
            className="btn-violet"
            style={{ padding: "12px 26px", fontSize: 14, borderRadius: 100 }}
          >
            Get Started
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          style={{
            background: "rgba(9,9,11,0.7)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(20px)",
            borderRadius: 100,
            width: 48,
            height: 48,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "var(--muted)",
            flexShrink: 0,
          }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div
          className="container"
          style={{ marginTop: 10 }}
        >
          <div
            style={{
              background: "rgba(9,9,11,0.95)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(20px)",
              borderRadius: 20,
              padding: "16px 20px 20px",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            {navLinks.map((l) => {
              const isActive = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  style={{
                    fontSize: 16.5,
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? "#a3e635" : "var(--muted)",
                    textDecoration: "none",
                  }}
                >
                  {l.label}
                </Link>
              );
            })}
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className="btn-violet"
              style={{ marginTop: 6, justifyContent: "center", borderRadius: 100 }}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
