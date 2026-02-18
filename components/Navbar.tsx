"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sectionIds = ["about", "projects", "contact"];
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "";
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && window.scrollY >= section.offsetTop - 120) {
          current = id;
        }
      });
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#about",    label: "About",    icon: "👤" },
    { href: "/#projects", label: "Projects", icon: "🧱" },
    { href: "/resume",    label: "Resume",   icon: "📜" },
    { href: "/#contact",  label: "Contact",  icon: "✉" },
  ];

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: "3px",
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0.85rem 2.5rem",
        background: scrolled ? "rgba(10,10,10,0.98)" : "rgba(10,10,10,0.92)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.3)" : "none",
        transition: "background 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Logo */}
      <a href="/" style={{ display: "flex", alignItems: "center", gap: "0.6rem", textDecoration: "none" }}>
        <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>🌍</span>
        <div>
          <span style={styles.logoText}>Jrp</span>
          <span style={styles.logoDot}>.dev</span>
        </div>
      </a>

      {/* Hamburger — mobile only */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="hamburger-btn"
        aria-label="Toggle menu"
        style={{
          display: "none",
          flexDirection: "column",
          gap: "5px",
          background: "rgba(247,201,72,0.08)",
          border: "2px solid var(--border2)",
          boxShadow: "2px 2px 0px rgba(0,0,0,0.4)",
          cursor: "pointer",
          padding: "0.5rem 0.6rem",
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              width: "20px",
              height: "2px",
              background: "var(--accent)",
              display: "block",
              transition: "all 0.2s ease",
              transform:
                i === 0 && menuOpen ? "rotate(45deg) translateY(7px)"
                : i === 2 && menuOpen ? "rotate(-45deg) translateY(-7px)"
                : "none",
              opacity: i === 1 && menuOpen ? 0 : 1,
            }}
          />
        ))}
      </button>

      {/* Desktop Menu */}
      <ul className="desktop-menu" style={styles.desktopMenu}>
        {navLinks.map((link) => {
          const sectionId = link.href.replace("/#", "").replace("/", "");
          const isActive = activeSection === sectionId;
          return (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  ...styles.navLink,
                  color: isActive ? "var(--accent)" : "rgba(255,255,255,0.6)",
                  background: isActive ? "rgba(193,127,36,0.12)" : "transparent",
                  border: isActive ? "1px solid rgba(193,127,36,0.3)" : "1px solid transparent",
                }}
              >
                <span style={{ fontSize: "1rem" }}>{link.icon}</span>
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Mobile Menu */}
      <ul
        className="mobile-menu"
        style={{
          position: "fixed",
          top: "57px",
          left: 0,
          right: 0,
          background: "rgba(10,10,10,0.99)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          padding: "1.5rem 2rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          listStyle: "none",
          margin: 0,
          transform: menuOpen ? "translateY(0)" : "translateY(-110%)",
          transition: "transform 0.25s ease",
          zIndex: 999,
        }}
      >
        <li style={{ borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "0.5rem", marginBottom: "0.25rem" }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", color: "rgba(255,255,255,0.4)" }}>
            Navigation
          </span>
        </li>
        {navLinks.map((link) => {
          const sectionId = link.href.replace("/#", "").replace("/", "");
          const isActive = activeSection === sectionId;
          return (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                style={{
                  ...styles.mobileNavLink,
                  color: isActive ? "var(--accent)" : "var(--text)",
                  borderColor: isActive ? "rgba(247,201,72,0.3)" : "var(--border)",
                  background: isActive ? "rgba(247,201,72,0.06)" : "rgba(0,0,0,0.2)",
                }}
              >
                <span style={{ fontSize: "1rem" }}>{link.icon}</span>
                <span style={{ flex: 1 }}>{link.label}</span>
                <span style={{ color: isActive ? "var(--accent)" : "var(--muted)", fontSize: "0.5rem" }}>
                  {isActive ? "▶" : "▷"}
                </span>
              </a>
            </li>
          );
        })}
      </ul>

      <style jsx>{`
        @media (max-width: 768px) {
          .hamburger-btn { display: flex !important; }
          .desktop-menu  { display: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </nav>
  );
}

const styles: Record<string, React.CSSProperties> = {
  logoText: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.9rem",
    fontWeight: 800,
    color: "#ffffff",
    display: "block",
    lineHeight: 1.4,
  },
  logoDot: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "var(--accent2)",
    display: "block",
    lineHeight: 1,
  },
  desktopMenu: {
    display: "flex",
    gap: "0.5rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
    alignItems: "center",
  },
  navLink: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.72rem",
    textDecoration: "none",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    padding: "0.35rem 0.75rem",
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    transition: "all 0.15s ease",
    borderRadius: "4px",
  },
  mobileNavLink: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.72rem",
    textDecoration: "none",
    letterSpacing: "0.06em",
    padding: "0.75rem 1rem",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "4px",
    transition: "all 0.15s ease",
  },
};