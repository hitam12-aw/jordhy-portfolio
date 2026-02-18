"use client";
import { useEffect } from "react"; 

// ─── Tipe Data Education ───────────────────────────────────────────────────────
type Education = {
  degree: string;      // Gelar/Program studi
  school: string;      // Nama sekolah/kampus
  period: string;      // Periode waktu
  location: string;    // Lokasi
  gpa?: string;        // IPK (opsional)
  experiences?: string[]; // Prestasi/kegiatan (opsional)
};

// ─── Data Education ────────────────────────────────────────────────────────────
// Edit bagian ini sesuai pendidikan kamu!
const educationList: Education[] = [
  {
    degree: "Politeknik Indramayu",
    school: "",
    period: "2022 - Sekarang",
    location: "Indramayu, Jawa Barat",
    
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
    // gpa: "85.50", // uncomment kalau mau tampilin nilai
    experiences: [
     "Mengembangkan website kalkulator profit trading di game Growtopia",
    "Mulai belajar web development secara otodidak",
      // Tambah prestasi lain kalau ada
    ],
  },
];

// ─── Resume Page Component ─────────────────────────────────────────────────────
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
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
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
                {/* Timeline Dot */}
                <div style={styles.timelineDot} />

                {/* Content Card */}
                <div style={styles.card}>
                  {/* Header */}
                  <div style={styles.cardHeader}>
                    <div>
                      <h3 style={styles.degree}>{edu.degree}</h3>
                      <div style={styles.school}>{edu.school}</div>
                    </div>
                    <div style={styles.periodBadge}>{edu.period}</div>
                  </div>

                  {/* Meta Info */}
                  <div style={styles.metaRow}>
                    <span style={styles.metaItem}>
                      📍 {edu.location}
                    </span>
                    {edu.gpa && (
                      <span style={styles.metaItem}>
                        🎓 IPK: {edu.gpa}
                      </span>
                    )}
                  </div>

                  {/* Achievements */}
                  {edu.experiences && edu.experiences.length > 0 && (
                    <div style={styles.achievementsSection}>
                      <div style={styles.achievementsTitle}>
                        Kegiatan:
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

      <div className="section-divider" />

      {/* CTA Section */}
      <section style={styles.ctaSection}>
        <div className="section-container">
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaTitle}>Tertarik untuk bekerja sama?</h2>
            <p style={styles.ctaDesc}>
              Saya terbuka untuk kesempatan magang dan kolaborasi project.
            </p>
            <div style={styles.ctaButtons}>
              <a href="/#contact" className="btn btn-primary">
                Hubungi Saya
              </a>
              <a href="/" className="btn btn-outline">
                ← Kembali ke Home
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
const styles: Record<string, React.CSSProperties> = {
  // Hero
  heroSection: {
    minHeight: "50vh",
    display: "flex",
    alignItems: "center",
    position: "relative",
    zIndex: 1,
  },
  heroContainer: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "4rem 2.5rem",
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
  heroTitle: {
    fontFamily: "var(--sans)",
    fontSize: "clamp(2.5rem, 6vw, 4rem)",
    fontWeight: 800,
    lineHeight: 1.1,
    letterSpacing: "-0.03em",
    marginBottom: "1rem",
    color: "var(--text)",
  },
  heroDesc: {
    fontFamily: "var(--mono)",
    fontSize: "0.88rem",
    color: "var(--muted)",
    lineHeight: 1.8,
    maxWidth: "600px",
  },

  // Timeline
  section: {
    position: "relative",
    zIndex: 1,
  },
  timeline: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  timelineItem: {
    position: "relative",
    paddingLeft: "3rem",
  },
  timelineDot: {
    position: "absolute",
    left: "0",
    top: "0.75rem",
    width: "12px",
    height: "12px",
    background: "var(--accent)",
    borderRadius: "50%",
    border: "3px solid var(--bg)",
    zIndex: 2,
  },

  // Card
  card: {
    background: "#1a1a24",
    border: "1px solid #2a2a3e",
    borderRadius: "8px",
    padding: "1.75rem",
    transition: "border-color 0.3s, transform 0.3s",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "1rem",
    marginBottom: "1rem",
    flexWrap: "wrap",
  },
  degree: {
    fontSize: "1.25rem",
    fontWeight: 700,
    color: "var(--text)",
    marginBottom: "0.4rem",
    letterSpacing: "-0.01em",
  },
  school: {
    fontFamily: "var(--mono)",
    fontSize: "0.85rem",
    color: "var(--accent)",
    letterSpacing: "0.02em",
  },
  periodBadge: {
    fontFamily: "var(--mono)",
    fontSize: "0.7rem",
    color: "var(--accent3)",
    background: "rgba(167,139,250,0.1)",
    border: "1px solid rgba(167,139,250,0.2)",
    padding: "0.4rem 0.8rem",
    borderRadius: "4px",
    letterSpacing: "0.05em",
    whiteSpace: "nowrap",
  },
  metaRow: {
    display: "flex",
    gap: "1.5rem",
    marginBottom: "1.5rem",
    flexWrap: "wrap",
  },
  metaItem: {
    fontFamily: "var(--mono)",
    fontSize: "0.75rem",
    color: "var(--muted)",
    display: "flex",
    alignItems: "center",
    gap: "0.4rem",
  },
  achievementsSection: {
    borderTop: "1px solid var(--border)",
    paddingTop: "1.25rem",
  },
  achievementsTitle: {
    fontFamily: "var(--mono)",
    fontSize: "0.75rem",
    color: "var(--text)",
    fontWeight: 700,
    marginBottom: "0.75rem",
    letterSpacing: "0.05em",
  },
  achievementsList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  achievementItem: {
    fontFamily: "var(--mono)",
    fontSize: "0.75rem",
    color: "var(--muted)",
    lineHeight: 1.6,
    paddingLeft: "1.25rem",
    position: "relative",
  },

  // CTA
  ctaSection: {
    position: "relative",
    zIndex: 1,
  },
  ctaContent: {
    textAlign: "center",
    maxWidth: "600px",
    margin: "0 auto",
  },
  ctaTitle: {
    fontSize: "2rem",
    fontWeight: 800,
    marginBottom: "1rem",
    color: "var(--text)",
    letterSpacing: "-0.02em",
  },
  ctaDesc: {
    fontFamily: "var(--mono)",
    fontSize: "0.85rem",
    color: "var(--muted)",
    lineHeight: 1.8,
    marginBottom: "2rem",
  },
  ctaButtons: {
    display: "flex",
    gap: "1rem",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};