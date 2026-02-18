"use client";

export default function Hero() {
  return (
    <section style={styles.section} className="hero">
      <div style={styles.inner}>

        {/* GT world notification banner */}
        <div style={styles.worldNotif}>
          <span style={styles.notifIcon}>🌍</span>
          <span style={styles.notifText}>WORLD: PORTFOLIO — PUBLIC</span>
          <span style={styles.notifSep}>|</span>
          <span style={styles.notifSub}>Welcome, Visitor!</span>
        </div>

        {/* Status badge */}
        <div style={styles.statusBadge}>
          <span style={styles.statusDot} />
          <span style={styles.statusText}>Available for Internship — 2026</span>
        </div>

        {/* Tag line */}
        <div style={styles.heroTag}>
          <span style={styles.heroTagLine} />
          <span style={styles.heroTagText}>// Web Developer</span>
        </div>

        {/* Main heading */}
        <h1 style={styles.heading}>
          <span style={styles.headingSmall}>Hi, I&apos;m</span>
          <br />
          <span style={styles.nameHighlight}>Jordhy Rifky Pratama</span>
          <span style={styles.cursor}>▌</span>
        </h1>

        {/* Description panel */}
        <div style={styles.descPanel}>
          <div style={styles.descPanelHeader}>
            <span style={styles.descPanelLabel}>[ INFO ]</span>
          </div>
          <p style={styles.desc}>
            A 6th-semester Informatics student with a focus web development. 
            Currently learning and building responsive interfaces
            with <span style={styles.accentBlue}>React and Next.js</span> on
            the frontend, and {" "}
            <span style={styles.accentBlue}>Laravel and PHP</span> on the
            backend — always with clean, maintainable code in mind.
          </p>
        </div>

        {/* CTA Buttons */}
        <div style={styles.ctaRow}>
          <a href="#projects" className="btn btn-primary">
            ↓ View Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            ✉ Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div style={styles.socialRow}>
          <span style={styles.socialLabel}>Find me on</span>
          <div style={styles.socialLinks}>
            <a
              href="https://github.com/hitam12-aw"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialLink}
            >
              GitHub
            </a>
            <span style={styles.socialSep}>·</span>
            <a
              href="https://www.linkedin.com/in/jordhy-rifky-pratama-858745380/"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialLink}
            >
              LinkedIn
            </a>
            <span style={styles.socialSep}>·</span>
            <a
              href="https://www.instagram.com/jordhy_0"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialLink}
            >
              Instagram
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  section: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    padding: "6rem 2.5rem 4rem",
    position: "relative",
    zIndex: 1,
    maxWidth: "900px",
    margin: "0 auto",
  },
  inner: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1.25rem",
  },

  /* World notif banner */
  worldNotif: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.6rem",
    background: "rgba(78,203,113,0.08)",
    border: "1px solid rgba(78,203,113,0.25)",
    boxShadow: "2px 2px 0px rgba(0,0,0,0.06)",
    padding: "0.4rem 0.85rem",
    width: "fit-content",
  },
  notifIcon: {
    fontSize: "0.9rem",
  },
  notifText: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.7rem",
    color: "#3a8a4a",
    letterSpacing: "0.08em",
  },
  notifSep: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "1rem",
    color: "var(--border)",
  },
  notifSub: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.85rem",
    color: "var(--muted)",
  },

  /* Status badge */
  statusBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.6rem",
    padding: "0.4rem 0.9rem",
    background: "rgba(193,127,36,0.07)",
    border: "1px solid rgba(193,127,36,0.25)",
    boxShadow: "2px 2px 0px rgba(0,0,0,0.06)",
    width: "fit-content",
  },
  statusDot: {
    width: "8px",
    height: "8px",
    background: "var(--accent)",
    display: "inline-block",
    animation: "pulse 2s infinite",
    flexShrink: 0,
  },
  statusText: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.72rem",
    color: "var(--accent)",
    letterSpacing: "0.05em",
  },

  /* Hero tag */
  heroTag: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },
  heroTagLine: {
    display: "inline-block",
    width: "32px",
    height: "3px",
    background: "var(--accent)",
    flexShrink: 0,
  },
  heroTagText: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.85rem",
    color: "var(--accent)",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
  },

  /* Heading */
  heading: {
    lineHeight: 1.1,
    marginBottom: "0.25rem",
  },
  headingSmall: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
    color: "var(--muted)",
    display: "block",
    marginBottom: "0.25rem",
  },
  nameHighlight: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "clamp(1.8rem, 5vw, 3rem)",
    fontWeight: 800,
    color: "var(--accent)",
    display: "inline",
    letterSpacing: "-0.01em",
  },
  cursor: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "clamp(1.8rem, 5vw, 3rem)",
    color: "var(--accent)",
    animation: "pulse 1s steps(1) infinite",
    display: "inline",
  },

  /* Description panel */
  descPanel: {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    boxShadow: "3px 3px 0px rgba(0,0,0,0.06)",
    padding: "1rem 1.25rem",
    maxWidth: "560px",
  },
  descPanelHeader: {
    borderBottom: "1px solid var(--border)",
    paddingBottom: "0.4rem",
    marginBottom: "0.6rem",
  },
  descPanelLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.65rem",
    color: "var(--accent)",
  },
  desc: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.88rem",
    color: "var(--muted)",
    lineHeight: 1.8,
  },
  accentBlue: {
    color: "var(--accent3)",
    fontWeight: 600,
  },

  /* CTA row */
  ctaRow: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap",
    marginTop: "0.25rem",
  },

  /* Social row */
  socialRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },
  socialLabel: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.7rem",
    color: "var(--muted)",
  },
  socialLinks: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  socialLink: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.7rem",
    color: "var(--accent)",
    textDecoration: "none",
    borderBottom: "1px solid var(--border)",
    paddingBottom: "1px",
    transition: "border-color 0.2s ease, color 0.2s ease",
  },
  socialSep: {
    color: "var(--border2)",
    fontSize: "0.8rem",
  },
};