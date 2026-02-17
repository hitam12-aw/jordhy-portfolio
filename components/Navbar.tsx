"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sectionIds = ["about", "projects", "contact"];
    const handleScroll = () => {
      let current = "";
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          // Menggunakan offsetTop untuk menentukan section mana yang sedang aktif
          if (window.scrollY >= section.offsetTop - 120) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about",    label: "about"    },
    { href: "#projects", label: "projects" },
    { href: "#contact",  label: "contact"  },
  ];

  return (
    <nav style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1.2rem 2.5rem",
      background: "rgba(10,10,15,0.85)",
      backdropFilter: "blur(16px)",
      borderBottom: "1px solid var(--border)",
    }}>
      <span style={{
        fontFamily: "var(--mono)",
        fontSize: "0.9rem",
        color: "var(--accent)",
        letterSpacing: "0.05em",
      }}>
      Jrp.dev
      </span>

      <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}>
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
    </nav>
  );
}