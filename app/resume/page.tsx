"use client";

import { useEffect } from "react";

// ─── Tipe Data Education ─────────────────────────────────────
type Education = {
  degree: string;
  school: string;
  period: string;
  location: string;
  gpa?: string;
  experiences?: string[];
};

// ─── Data Education ──────────────────────────────────────────
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
    "Mulai belajar web development secara otodidak ",
    ],
  },
];

// ─── Resume Page Component ───────────────────────────────────
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
          <div style={styles.heroTag}>
            <span style={styles.heroTagLine} />
            My Resume
          </div>
          <h1 style={styles.heroTitle}>Education & Experience</h1>
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
                <div style={styles.timelineDot} />

                <div style={styles.card}>
                  <div style={styles.cardHeader}>
                    <div>
                      <h3 style={styles.degree}>{edu.degree}</h3>
                      <div style={styles.school}>{edu.school}</div>
                    </div>
                    <div style={styles.periodBadge}>{edu.period}</div>
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
                        Prestasi & Kegiatan:
                      </div>
                      <ul style={styles.achievementsList}>
                        {edu.experiences.map((experiences, i) => (
                          <li key={i} style={styles.achievementItem}>
                            {experiences}
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

// ─── Styles ───────────────────────────────────────────────────
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
  heroTag: {
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
    width: "32px",
    height: "1px",
    background: "var(--accent)",
  },
  heroTitle: {
    fontSize: "clamp(2.5rem, 6vw, 4rem)",
    fontWeight: 800,
    marginBottom: "1rem",
  },
  heroDesc: {
    fontSize: "0.9rem",
    color: "var(--muted)",
    maxWidth: "600px",
  },
  section: {},
  timeline: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    borderLeft: "1px solid var(--border)",
    paddingLeft: "1.5rem",
  },
  timelineItem: {
    position: "relative",
  },
  timelineDot: {
    position: "absolute",
    left: "-7px",
    top: "1rem",
    width: "12px",
    height: "12px",
    background: "var(--accent)",
    borderRadius: "50%",
  },
  card: {
    background: "#1a1a24",
    border: "1px solid #2a2a3e",
    borderRadius: "8px",
    padding: "1.75rem",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: "1rem",
  },
  degree: {
    fontSize: "1.2rem",
    fontWeight: 700,
  },
  school: {
    fontSize: "0.85rem",
    color: "var(--accent)",
  },
  periodBadge: {
    fontSize: "0.7rem",
    background: "rgba(167,139,250,0.1)",
    padding: "0.4rem 0.8rem",
    borderRadius: "4px",
  },
  metaRow: {
    display: "flex",
    gap: "1.5rem",
    marginBottom: "1.5rem",
  },
  metaItem: {
    fontSize: "0.75rem",
    color: "var(--muted)",
  },
  achievementsSection: {
    borderTop: "1px solid var(--border)",
    paddingTop: "1.25rem",
  },
  achievementsTitle: {
    fontSize: "0.75rem",
    fontWeight: 700,
    marginBottom: "0.75rem",
  },
  achievementsList: {
    listStyle: "disc",
    paddingLeft: "1.25rem",
  },
  achievementItem: {
    fontSize: "0.75rem",
    marginBottom: "0.5rem",
  },
};
