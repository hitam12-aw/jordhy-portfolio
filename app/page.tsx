"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useEffect } from "react";

export default function Home() {

  // Cursor glow
  useEffect(() => {
    const glow = document.createElement("div");
    glow.classList.add("cursor-glow");
    document.body.appendChild(glow);

    const handleMove = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };

    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.removeChild(glow);
    };
  }, []);

  // Fade-up & skill bar observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
              entry.target
                .querySelectorAll<HTMLElement>(".skill-fill")
                .forEach((bar) => bar.classList.add("animated"));
            }, i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Contact />
      <div className="section-divider" />

      {/* Footer — GT style */}
      <footer
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "2rem 2.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "'VT323', monospace",
            fontSize: "1rem",
            color: "var(--muted)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <span style={{ color: "var(--accent)" }}>◆</span>
          Jordhy Rifky Pratama
          <span style={{ color: "var(--accent)" }}>◆</span>
        </span>

        <span
          style={{
            fontFamily: "'Press Start 2P', monospace",
            fontSize: "0.4rem",
            color: "var(--border)",
          }}
        >
          {new Date().getFullYear()} — built with Next.js
        </span>
      </footer>

      {/* Bottom padding biar konten ga ketutup strip bawah */}
      <div style={{ height: "8px" }} />
    </>
  );
}