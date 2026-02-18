"use client";

type Skill = {
  label: string;
  value: number;
};

const skills: Skill[] = [
  { label: "HTML & CSS",    value: 80 },
  { label: "JavaScript",   value: 75 },
  { label: "React",        value: 70 },
  { label: "Next.js",      value: 80 },  // ← tambah
  { label: "PHP",          value: 75 },
  { label: "Laravel",      value: 80 },  
  { label: "Figma",        value: 85 },
];

export default function About() {
  return (
    <section id="about" style={{ position: "relative", zIndex: 1 }}>
      <div className="section-container">

        <div className="section-header fade-up">
          <span className="section-num">01 //</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line" />
        </div>

        <div style={styles.grid} className="about-grid">
          <div style={styles.bioCol} className="fade-up">
            <p style={styles.bioText}>
              Mahasiswa{" "}
              <span style={{ color: "var(--accent)" }}>Sistem informasi kota cerdas / Politeknik Indramayu</span>
              , semester 6. Saya passionate dengan dunia web dan suka belajar 
                teknologi baru baik di sisi frontend maupun backend. Saat ini 
                sedang mendalami{" "}
              <span style={{ color: "var(--accent)" }}>JavaScript, Php, React, Laravel, Next.js</span>.
            </p>
            <p style={styles.bioText}>
              Saya percaya kode yang bagus bukan cuma yang berjalan — tapi yang
              mudah dibaca, di-maintain, dan bisa berkembang. Selain coding,
              saya juga tertarik dengan{" "}
              <span style={{ color: "var(--accent)" }}>desain UI</span> dan aksesibilitas.
            </p>
            <p style={styles.bioText}>
              Sedang mencari kesempatan{" "}
              <span style={{ color: "var(--accent)" }}>internship</span> untuk
              belajar lebih banyak dari tim yang berpengalaman.
            </p>
          </div>

          <div style={styles.skillsCol} className="fade-up">
            {skills.map((skill) => (
              <div key={skill.label} style={styles.skillItem}>
                <div style={styles.skillLabel}>
                  <span style={{ color: "var(--muted)", fontFamily: "var(--mono)", fontSize: "0.72rem" }}>
                    {skill.label}
                  </span>
                  <span style={{ color: "var(--accent)", fontFamily: "var(--mono)", fontSize: "0.72rem" }}>
                    {skill.value}%
                  </span>
                </div>
                <div style={styles.skillBar}>
                  <div
                    className="skill-fill"
                    style={{
                      height: "100%",
                      width: `${skill.value}%`,
                      background: "linear-gradient(90deg, var(--accent), var(--accent3))",
                      borderRadius: "2px",
                      transform: "scaleX(0)",
                      transformOrigin: "left",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

const styles: Record<string, React.CSSProperties> = {
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "3rem",
    alignItems: "start",
  },
  bioCol: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  bioText: {
    fontFamily: "var(--mono)",
    fontSize: "0.85rem",
    color: "var(--muted)",
    lineHeight: 2,
  },
  skillsCol: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  skillItem: {
    display: "flex",
    flexDirection: "column",
    gap: "0.4rem",
  },
  skillLabel: {
    display: "flex",
    justifyContent: "space-between",
  },
  skillBar: {
    height: "3px",
    background: "var(--border)",
    borderRadius: "2px",
    overflow: "hidden",
  },
};