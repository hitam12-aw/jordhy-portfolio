"use client";

import { useState } from "react";

type SocialLink = {
  icon: string;
  name: string;
  handle: string;
  url: string;
  color: string;
};

const socialLinks: SocialLink[] = [
  {
    icon: "⌥",
    name: "GitHub",
    handle: "hitam12-aw",
    url: "https://github.com/hitam12-aw",
    color: "#f0e8d0",
  },
  {
    icon: "wa",
    name: "Whatsapp",
    handle: "+6285150003725",
    url: "https://wa.me/6285150003725",
    color: "#4ecb71",
  },
  {
    icon: "ig",
    name: "Instagram",
    handle: "jordhy_0",
    url: "https://www.instagram.com/jordhy_0?igsh=MTV1NW54cjcyMmU4OQ==",
    color: "#c44dff",
  },
];

export default function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <div className="section-container">

        <div className="section-header fade-up">
          <span className="section-num">03 //</span>
          <h2 className="section-title">Contact</h2>
          <div className="section-line" />
        </div>

        <div style={styles.grid} className="contact-wrapper">

          {/* Left col */}
          <div className="fade-up">
            {/* GT dialogue box style */}
            <div style={styles.dialogueBox}>
              <div style={styles.dialogueHeader}>
                <span style={styles.dialogueTitle}>[ MESSAGE ]</span>
                <span style={styles.dialogueDots}>▼</span>
              </div>
              <h3 style={styles.contactHeading}>
                Let&apos;s build
                <br />
                <span style={{ color: "var(--accent)" }}>something cool.</span>
              </h3>
              <p style={styles.contactDesc}>
                Lagi terbuka untuk kesempatan magang. Kalau kamu recruiter atau
                bagian dari tim yang keren, jangan ragu buat reach out!
              </p>
            </div>

            <a href="mailto:2307093@student.polindra.ac.id" style={styles.emailLink}>
              <span style={styles.emailIcon}>✉</span>
              <span>2307093@student.polindra.ac.id</span>
              <span style={styles.emailArrow}>→</span>
            </a>
          </div>

          {/* Right col — social links */}
          <div style={styles.socialList} className="fade-up">
            <div style={styles.socialHeader}>
              <span style={styles.socialHeaderText}>[ FIND ME AT ]</span>
            </div>
            {socialLinks.map((social) => (
              <SocialItem key={social.name} social={social} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function SocialItem({ social }: { social: SocialLink }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...styles.socialCard,
        borderColor: hovered ? social.color : "var(--border2)",
        transform: hovered ? "translate(-2px, -2px)" : "translate(0, 0)",
        boxShadow: hovered
          ? `4px 4px 0px ${social.color}66`
          : "4px 4px 0px rgba(0,0,0,0.5)",
      }}
    >
      <div style={{ ...styles.socialIcon, color: hovered ? social.color : "var(--muted)", borderColor: hovered ? social.color : "var(--border)" }}>
        {social.icon}
      </div>
      <div style={{ flex: 1 }}>
        <span style={{ ...styles.socialName, color: hovered ? social.color : "var(--text)" }}>
          {social.name}
        </span>
        <span style={styles.socialHandle}>{social.handle}</span>
      </div>
      <span style={{ ...styles.socialArrow, color: hovered ? social.color : "var(--muted)" }}>
        {hovered ? "▶" : "▷"}
      </span>
    </a>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    position: "relative",
    zIndex: 1,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3rem",
    alignItems: "start",
  },

  /* Dialogue box — GT NPC talk style */
  dialogueBox: {
    background: "var(--surface)",
    border: "2px solid var(--border2)",
    boxShadow: "3px 3px 0px rgba(0,0,0,0.1)",
    padding: "1.25rem",
    marginBottom: "1.5rem",
    position: "relative",
  },
  dialogueHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "0.75rem",
    paddingBottom: "0.5rem",
    borderBottom: "2px solid var(--border)",
  },
  dialogueTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.7rem",
    color: "var(--accent)",
  },
  dialogueDots: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.5rem",
    color: "var(--muted)",
    animation: "pixelBlink 1.2s steps(1) infinite",
  },
  contactHeading: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.75rem",
    fontWeight: 400,
    marginBottom: "1rem",
    lineHeight: 2,
    color: "var(--text)",
    textShadow: "none",
  },
  contactDesc: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "1.1rem",
    color: "var(--muted)",
    lineHeight: 1.7,
  },

  emailLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.75rem",
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "1.1rem",
    color: "var(--accent)",
    textDecoration: "none",
    padding: "0.75rem 1.25rem",
    border: "2px solid rgba(247,201,72,0.4)",
    background: "rgba(247,201,72,0.05)",
    boxShadow: "3px 3px 0px rgba(0,0,0,0.08)",
    transition: "transform 0.1s ease, box-shadow 0.1s ease",
    width: "100%",
  },
  emailIcon: {
    fontSize: "1.2rem",
  },
  emailArrow: {
    marginLeft: "auto",
    color: "var(--muted)",
  },

  socialList: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  socialHeader: {
    borderBottom: "2px solid var(--border)",
    paddingBottom: "0.5rem",
    marginBottom: "0.25rem",
  },
  socialHeaderText: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.7rem",
    color: "var(--accent)",
  },

  socialCard: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "0.85rem 1rem",
    background: "var(--surface)",
    border: "2px solid var(--border2)",
    textDecoration: "none",
    transition: "transform 0.1s ease, box-shadow 0.1s ease, border-color 0.15s ease",
    cursor: "pointer",
  },
  socialIcon: {
    width: "36px",
    height: "36px",
    background: "rgba(0,0,0,0.3)",
    border: "2px solid var(--border)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.85rem",
    flexShrink: 0,
    fontFamily: "'Poppins', sans-serif",
    transition: "color 0.15s ease, border-color 0.15s ease",
  },
  socialName: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.75rem",
    letterSpacing: "0.05em",
    display: "block",
    marginBottom: "4px",
    transition: "color 0.15s ease",
  },
  socialHandle: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.9rem",
    color: "var(--muted)",
  },
  socialArrow: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.5rem",
    transition: "color 0.15s ease",
  },
};