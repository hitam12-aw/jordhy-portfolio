"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { useEffect } from "react";

export default function Home() {

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
      <footer
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "2rem 2.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "var(--mono)",
          fontSize: "0.7rem",
          color: "var(--muted)",
        }}
      >
        <span>
          <span style={{ color: "var(--accent)" }}></span>
        </span>
        <span></span>
      </footer>
    </>
  );
}