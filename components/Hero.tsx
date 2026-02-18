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
          <span style={styles.notifSub}>Welcome, Guest!</span>
        </div>

        {/* Status badge */}
        <div style={styles.statusBadge}>
          <span style={styles.statusDot} />
          <span style={styles.statusText}>Open for internship — 2026</span>
        </div>

        {/* Tag line */}
        <div style={styles.heroTag}>
          <span style={styles.heroTagLine} />
          <span style={styles.heroTagText}>// Web Developer</span>
        </div>

        {/* Main heading */}
        <h1 style={styles.heading}>
          <span style={styles.headingSmall}>Halo, saya</span>
          <br />
          <span style={styles.nameHighlight}>Jordhy Rifky Pratama</span>
          <span style={styles.cursor}>▌</span>
        </h1>

        {/* Description panel — GT item info box */}
        <div style={styles.descPanel}>
          <div style={styles.descPanelHeader}>
            <span style={styles.descPanelLabel}>[ INFO ]</span>
          </div>
          <p style={styles.desc}>
            Mahasiswa yang sedang mendalami{" "}
            <span style={styles.accentBlue}>web development</span>{" "}
            dari sisi frontend maupun backend. Fokus belajar{" "}
            <span style={styles.accentBlue}>
              JavaScript, PHP, React, Laravel, Next.js,
            </span>{" "}
            dan{" "}
            <span style={styles.accentBlue}>SQL</span>{" "}
            untuk membangun aplikasi web yang lengkap dan fungsional.
          </p>
        </div>

        {/* CTA Buttons */}
        <div style={styles.ctaRow}>
          <a href="#projects" className="btn btn-primary">
            ▶ Lihat Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            ✉ Hubungi Saya
          </a>
        </div>

        {/* Floating pixel decoration */}
        <div style={styles.pixelBlocks} aria-hidden="true">
          {["🌱", "💎", "⭐", "🪨", "🌿"].map((icon, i) => (
            <span
              key={i}
              style={{
                ...styles.pixelBlock,
                animationDelay: `${i * 0.4}s`,
              }}
            >
              {icon}
            </span>
          ))}
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
    border: "2px solid rgba(78,203,113,0.25)",
    boxShadow: "2px 2px 0px rgba(0,0,0,0.08)",
    padding: "0.4rem 0.85rem",
    width: "fit-content",
  },
  notifIcon: { fontSize: "0.9rem" },
  notifText: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.7rem",
    color: "#4ecb71",
    letterSpacing: "0.08em",
  },
  notifSep: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "1rem",
    color: "var(--border)",
  },
  notifSub: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "0.9rem",
    color: "var(--muted)",
  },

  /* Status badge */
  statusBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.6rem",
    padding: "0.4rem 0.9rem",
    background: "rgba(247,201,72,0.07)",
    border: "2px solid rgba(247,201,72,0.25)",
    boxShadow: "2px 2px 0px rgba(0,0,0,0.08)",
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
    fontSize: "0.7rem",
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
    fontSize: "1.2rem",
    color: "var(--accent)",
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
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
    fontSize: "clamp(1.1rem, 3.5vw, 2rem)",
    color: "var(--accent)",
    textShadow: "none",
    display: "inline",
    letterSpacing: "0.02em",
  },
  cursor: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "clamp(1.1rem, 3.5vw, 2rem)",
    color: "var(--accent)",
    animation: "pixelBlink 1s steps(1) infinite",
    display: "inline",
  },

  /* Description panel */
  descPanel: {
    background: "var(--surface)",
    border: "2px solid var(--border2)",
    boxShadow: "3px 3px 0px rgba(0,0,0,0.08)",
    padding: "1rem 1.25rem",
    maxWidth: "520px",
  },
  descPanelHeader: {
    borderBottom: "2px solid var(--border)",
    paddingBottom: "0.4rem",
    marginBottom: "0.6rem",
  },
  descPanelLabel: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.7rem",
    color: "var(--accent)",
  },
  desc: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "1.15rem",
    color: "var(--muted)",
    lineHeight: 1.7,
  },
  accentBlue: {
    color: "var(--accent3)",
  },

  /* CTA row */
  ctaRow: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap" as const,
    marginTop: "0.25rem",
  },

  /* Floating pixel items */
  pixelBlocks: {
    display: "flex",
    gap: "1.5rem",
    marginTop: "1rem",
  },
  pixelBlock: {
    fontSize: "1.5rem",
    animation: "pixelFloat 2.5s ease-in-out infinite",
    display: "inline-block",
  },
};