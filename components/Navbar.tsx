"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = ["about", "projects", "contact"];
    const handleScroll = () => {
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
  { href: "/#about", label: "about" },      // ← tambah / di depan
  { href: "/#projects", label: "projects" }, // ← tambah / di depan
  { href: "/resume", label: "resume" },
  { href: "/#contact", label: "contact" },  
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1.2rem 2.5rem",
        background: "rgba(10,10,15,0.85)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <span
        style={{
          fontFamily: "var(--mono)",
          fontSize: "0.9rem",
          color: "var(--accent)",
          letterSpacing: "0.05em",
        }}
      >
        ~/portfolio
      </span>

      {/* Hamburger Button - Mobile Only */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: "none",
          flexDirection: "column",
          gap: "4px",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "0.5rem",
        }}
        className="hamburger-btn"
        aria-label="Toggle menu"
      >
        <span
          style={{
            width: "24px",
            height: "2px",
            background: "var(--accent)",
            transition: "all 0.3s",
            transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none",
          }}
        />
        <span
          style={{
            width: "24px",
            height: "2px",
            background: "var(--accent)",
            transition: "all 0.3s",
            opacity: menuOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            width: "24px",
            height: "2px",
            background: "var(--accent)",
            transition: "all 0.3s",
            transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none",
          }}
        />
      </button>

      {/* Desktop Menu */}
      <ul
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
        className="desktop-menu"
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace("#", "");
          return (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "0.78rem",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: isActive ? "var(--accent)" : "var(--muted)",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Mobile Menu */}
      <ul
        style={{
          position: "fixed",
          top: "73px",
          left: 0,
          right: 0,
          background: "rgba(10,10,15,0.98)",
          backdropFilter: "blur(16px)",
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          listStyle: "none",
          margin: 0,
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease",
          borderBottom: "1px solid var(--border)",
        }}
        className="mobile-menu"
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.replace("#", "");
          return (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "1rem",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: isActive ? "var(--accent)" : "var(--muted)",
                  transition: "color 0.2s",
                }}
              >
                {link.label}
              </a>
            </li>
          );
        })}
      </ul>

      <style jsx>{`
        @media (max-width: 768px) {
          .hamburger-btn {
            display: flex !important;
          }
          .desktop-menu {
            display: none !important;
          }
        }
        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
}