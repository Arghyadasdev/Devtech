"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#solutions", label: "Solutions" },
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
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.pushState(null, "", "/");
            }
          }}
          style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}
        >
          <Image
            src="/logo.png"
            alt="Dev Technology"
            width={129}
            height={52}
            priority
            style={{ height: 52, width: "auto", display: "block" }}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: 4 }}>
          {navLinks.map((l) => {
            const isExactPage = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                style={{
                  fontSize: 14,
                  fontWeight: isExactPage ? 600 : 500,
                  color: isExactPage ? "#fff" : "var(--muted)",
                  background: isExactPage ? "rgba(132,204,22,0.15)" : "transparent",
                  border: isExactPage ? "1px solid rgba(132,204,22,0.3)" : "1px solid transparent",
                  textDecoration: "none",
                  padding: "6px 14px",
                  borderRadius: 6,
                  transition: "color 0.15s ease, background 0.15s ease",
                  fontFamily: "var(--sans)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#fff";
                  if (!isExactPage) e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isExactPage ? "#fff" : "var(--muted)";
                  if (!isExactPage) e.currentTarget.style.background = "transparent";
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: 8 }}>
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
            className="btn-outline"
            style={{ padding: "7px 18px", fontSize: 13 }}
          >
            Contact
          </Link>
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
            className="btn-violet"
            style={{ padding: "7px 18px", fontSize: 13 }}
          >
            Get Started
          </Link>
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
          {navLinks.map((l) => {
            const isExactPage = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                style={{
                  fontSize: 15,
                  fontWeight: isExactPage ? 600 : 500,
                  color: isExactPage ? "#a3e635" : "var(--muted)",
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
            style={{ marginTop: 8, justifyContent: "center" }}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
