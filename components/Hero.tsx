"use client";

export default function Hero() {
  return (
    <section style={styles.section} className="hero">
      <div style={styles.inner}>

        <div style={styles.statusBadge}>
          <span style={styles.statusDot} />
          Open for internship — 2026
        </div>

        <div style={styles.heroTag}>
          <span style={styles.heroTagLine} />
          Web Developer
        </div>

        <h1 style={styles.heading}>
          Halo, saya
          <br />
          <span style={styles.nameHighlight}>Jordhy Rifky Pratama</span>
        </h1>

        <p style={styles.desc}>
          Mahasiswa yang sedang mendalami{" "}
          <span style={{ color: "var(--accent3)" }}>web development</span>{" "}
          dari sisi frontend maupun backend. Saat ini fokus belajar{" "}
          <span style={{ color: "var(--accent3)" }}>JavaScript, Php, React, Laravel, Next.js,</span>
          {" "}dan{" "}
          <span style={{ color: "var(--accent3)" }}>SQL</span>{" "}
          untuk membangun aplikasi web yang lengkap dan fungsional.
        </p>
                <div style={styles.ctaRow}>
          <a href="#projects" className="btn btn-primary">↓ Lihat Projects</a>
          <a href="#contact" className="btn btn-outline">Hubungi Saya</a>
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
  inner: { width: "100%" },
  statusBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.4rem 0.9rem",
    background: "rgba(126,255,212,0.07)",
    border: "1px solid rgba(126,255,212,0.2)",
    borderRadius: "100px",
    fontFamily: "var(--mono)",
    fontSize: "0.7rem",
    color: "var(--accent)",
    marginBottom: "2rem",
  },
  statusDot: {
    width: "6px",
    height: "6px",
    background: "var(--accent)",
    borderRadius: "50%",
    display: "inline-block",
    animation: "pulse 2s infinite",
  },
  heroTag: {
    fontFamily: "var(--mono)",
    fontSize: "0.75rem",
    color: "var(--accent)",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    marginBottom: "1.5rem",
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },
  heroTagLine: {
    display: "inline-block",
    width: "32px",
    height: "1px",
    background: "var(--accent)",
  },
  heading: {
    fontFamily: "var(--sans)",
    fontSize: "clamp(3rem, 8vw, 6rem)",
    fontWeight: 800,
    lineHeight: 1.0,
    letterSpacing: "-0.03em",
    marginBottom: "1.5rem",
    color: "var(--text)",
  },
  nameHighlight: { color: "var(--accent)" },
  desc: {
    fontFamily: "var(--mono)",
    fontSize: "0.88rem",
    color: "var(--muted)",
    lineHeight: 1.8,
    maxWidth: "480px",
    marginBottom: "2.5rem",
  },
  ctaRow: {
    display: "flex",
    gap: "1rem",
    flexWrap: "wrap" as const,
  },
};