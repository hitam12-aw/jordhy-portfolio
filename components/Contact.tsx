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
                <span style={{ color: "var(--accent)" }}>something great.</span>
              </h3>
              <p style={styles.contactDesc}>
                I am currently open to internship opportunities. If you are a recruiter
                or part of a great team looking for a dedicated web developer,
                feel free to reach out — I would love to connect!
              </p>
            </div>

            <a href="mailto:2307093@student.polindra.ac.id" style={styles.emailLink}>
              <span style={styles.emailIcon}>✉</span>
              <span>jordhyrifkypratama17@gmail.com</span>
              <span style={styles.emailArrow}>→</span>
            </a>
          </div>

          {/* Right col — contact form */}
          <div className="fade-up">
            <form
              action="https://formspree.io/f/mqedllbp"
              method="POST"
              style={styles.form}
            >
              <div style={styles.formGroup}>
                <label style={styles.label}>NAME</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>EMAIL</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  style={styles.input}
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>MESSAGE</label>
                <textarea
                  name="message"
                  placeholder="Tell me what you want to build..."
                  required
                  rows={5}
                  style={{ ...styles.input, ...styles.textarea }}
                />
              </div>
              <button type="submit" style={styles.submitBtn}>
                Send Message →
              </button>
              <p style={styles.formNote}>
                Powered by Formspree. Your message goes straight to my inbox.
              </p>
            </form>
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

  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1.25rem",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.4rem",
  },
  label: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.65rem",
    color: "var(--muted)",
    letterSpacing: "0.1em",
  },
  input: {
    width: "100%",
    padding: "0.75rem 1rem",
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "4px",
    color: "var(--text)",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.85rem",
    outline: "none",
    transition: "border-color 0.2s ease",
  },
  textarea: {
    resize: "vertical" as const,
    minHeight: "120px",
  },
  submitBtn: {
    width: "100%",
    padding: "0.85rem",
    background: "var(--text)",
    color: "var(--bg)",
    border: "none",
    borderRadius: "4px",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.85rem",
    fontWeight: 700,
    cursor: "pointer",
    transition: "opacity 0.2s ease",
    letterSpacing: "0.02em",
  },
  formNote: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.6rem",
    color: "var(--muted)",
    textAlign: "center" as const,
    opacity: 0.7,
  },
};