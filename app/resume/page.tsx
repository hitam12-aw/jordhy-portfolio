"use client";

import { useEffect } from "react";

type Education = {
  degree: string;
  school: string;
  period: string;
  location: string;
  gpa?: string;
  experiences?: string[];
};

const educationList: Education[] = [
  {
    degree: "Politeknik Indramayu",
    school: "",
    period: "2022 - Sekarang",
    location: "Indramayu, Jawa Barat",
    gpa: "",
    experiences: [
      "Mengembangkan 3 sistem berbasis web: Presensi Ormawa, Peta Donor Darah, dan Sistem Peringatan Dini Banjir",
      "Aktif membangun project untuk meningkatkan kemampuan problem solving dan coding",
      "Self-learning React, Next.js, Laravel, dan teknologi web modern",
    ],
  },
  {
    degree: "SMA Negeri 1 Tukdana",
    school: "",
    period: "2019 - 2022",
    location: "Indramayu, Jawa Barat",
    experiences: [
      "Mengembangkan website kalkulator profit trading di game Growtopia",
      "Mulai belajar web development secara otodidak",
    ],
  },
];

export default function ResumePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main style={{ paddingTop: "73px" }}>

      {/* Hero Section */}
      <section style={styles.heroSection}>
        <div style={styles.heroContainer}>

          {/* GT world enter banner */}
          <div style={styles.worldBanner}>
            <span style={styles.worldIcon}>🌍</span>
            <span style={styles.worldText}>ENTERING WORLD: RESUME</span>
            <span style={styles.worldIcon}>🌍</span>
          </div>

          <div style={styles.heroTag}>
            <span style={styles.heroTagLine} />
            My Resume
          </div>
          <h1 style={styles.heroTitle}>Education &<br />Experience</h1>
          <p style={styles.heroDesc}>
            Perjalanan pendidikan dan pengalaman saya di bidang web development
            dan teknologi.
          </p>
        </div>
      </section>

      <div className="section-divider" />

      {/* Education Section */}
      <section style={styles.section}>
        <div className="section-container">
          <div className="section-header fade-up">
            <span className="section-num">01 //</span>
            <h2 className="section-title">Education</h2>
            <div className="section-line" />
          </div>

          <div style={styles.timeline}>
            {educationList.map((edu, index) => (
              <div key={index} className="fade-up" style={styles.timelineItem}>

                {/* Timeline dot — pixel block */}
                <div style={styles.timelineDot}>
                  <div style={styles.timelineDotInner} />
                </div>

                {/* Card — GT inventory slot style */}
                <div style={styles.card}>
                  {/* Top colored bar */}
                  <div style={styles.cardAccentBar} />

                  <div style={styles.cardHeader}>
                    <div>
                      <h3 style={styles.degree}>{edu.degree}</h3>
                      {edu.school && (
                        <div style={styles.school}>{edu.school}</div>
                      )}
                    </div>
                    <div style={styles.periodBadge}>
                      <span style={styles.periodIcon}>📅</span>
                      {edu.period}
                    </div>
                  </div>

                  <div style={styles.metaRow}>
                    <span style={styles.metaItem}>📍 {edu.location}</span>
                    {edu.gpa && (
                      <span style={styles.metaItem}>🎓 IPK: {edu.gpa}</span>
                    )}
                  </div>

                  {edu.experiences && edu.experiences.length > 0 && (
                    <div style={styles.achievementsSection}>
                      <div style={styles.achievementsTitle}>
                        [ Prestasi & Kegiatan ]
                      </div>
                      <ul style={styles.achievementsList}>
                        {edu.experiences.map((exp, i) => (
                          <li key={i} style={styles.achievementItem}>
                            <span style={styles.bulletGem}>◆</span>
                            {exp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const styles: Record<string, React.CSSProperties> = {
  heroSection: {
    minHeight: "50vh",
    display: "flex",
    alignItems: "center",
  },
  heroContainer: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "4rem 2.5rem",
  },

  /* World banner — GT world enter notification */
  worldBanner: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.75rem",
    background: "rgba(247,201,72,0.1)",
    border: "2px solid rgba(247,201,72,0.3)",
    boxShadow: "4px 4px 0px rgba(0,0,0,0.4)",
    padding: "0.5rem 1rem",
    marginBottom: "1.5rem",
  },
  worldIcon: {
    fontSize: "1rem",
  },
  worldText: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.75rem",
    color: "var(--accent)",
    letterSpacing: "0.1em",
  },

  heroTag: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "1.1rem",
    color: "var(--accent)",
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    marginBottom: "1rem",
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },
  heroTagLine: {
    width: "32px",
    height: "2px",
    background: "var(--accent)",
    display: "inline-block",
  },
  heroTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "clamp(1rem, 3vw, 1.6rem)",
    fontWeight: 400,
    marginBottom: "1rem",
    color: "var(--text)",
    textShadow: "none",
    lineHeight: 1.8,
  },
  heroDesc: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "1.15rem",
    color: "var(--muted)",
    maxWidth: "600px",
    lineHeight: 1.7,
  },

  section: {},

  timeline: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    borderLeft: "4px solid var(--border2)",
    paddingLeft: "2rem",
  },
  timelineItem: {
    position: "relative",
  },
  timelineDot: {
    position: "absolute",
    left: "-2.85rem",
    top: "1.25rem",
    width: "20px",
    height: "20px",
    background: "var(--bg)",
    border: "3px solid var(--accent)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  timelineDotInner: {
    width: "6px",
    height: "6px",
    background: "var(--accent)",
  },

  card: {
    background: "var(--surface)",
    border: "2px solid var(--border2)",
    boxShadow: "3px 3px 0px rgba(0,0,0,0.1)",
    padding: "1.5rem",
    position: "relative",
    overflow: "hidden",
  },

  /* Colored top bar — like GT block category */
  cardAccentBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "3px",
    background: "repeating-linear-gradient(90deg, var(--accent) 0px, var(--accent) 8px, var(--accent2) 8px, var(--accent2) 16px, var(--accent3) 16px, var(--accent3) 24px, transparent 24px, transparent 32px)",
  },

  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap" as const,
    marginBottom: "0.75rem",
    paddingTop: "0.5rem",
  },
  degree: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.9rem",
    fontWeight: 400,
    color: "var(--text)",
    textShadow: "none",
    lineHeight: 1.8,
  },
  school: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "1rem",
    color: "var(--accent)",
  },
  periodBadge: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "1rem",
    background: "rgba(91,184,245,0.1)",
    border: "2px solid rgba(91,184,245,0.25)",
    padding: "0.25rem 0.75rem",
    color: "var(--accent3)",
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
    alignSelf: "flex-start" as const,
  },
  periodIcon: {
    fontSize: "0.85rem",
  },
  metaRow: {
    display: "flex",
    gap: "1.5rem",
    marginBottom: "1.25rem",
  },
  metaItem: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "1rem",
    color: "var(--muted)",
  },
  achievementsSection: {
    borderTop: "2px dashed var(--border)",
    paddingTop: "1rem",
  },
  achievementsTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.7rem",
    color: "var(--accent)",
    marginBottom: "0.75rem",
    letterSpacing: "0.05em",
  },
  achievementsList: {
    listStyle: "none",
    paddingLeft: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  achievementItem: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "1.05rem",
    color: "var(--text)",
    lineHeight: 1.6,
    display: "flex",
    alignItems: "flex-start",
    gap: "0.5rem",
  },
  bulletGem: {
    color: "var(--accent)",
    flexShrink: 0,
    marginTop: "2px",
    fontSize: "0.7rem",
  },
};