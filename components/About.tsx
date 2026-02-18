"use client";

type Skill = {
  label: string;
  value: number;
  color: string;
};

const skills: Skill[] = [
  { label: "HTML & CSS",  value: 80, color: "#e05c2a" },
  { label: "JavaScript", value: 75, color: "#f7c948" },
  { label: "React",       value: 70, color: "#5bb8f5" },
  { label: "Next.js",     value: 80, color: "#f0e8d0" },
  { label: "PHP",         value: 75, color: "#c44dff" },
  { label: "Laravel",     value: 80, color: "#e05c2a" },
  { label: "Figma",       value: 85, color: "#4ecb71" },
];

const gemEmoji: Record<string, string> = {
  "HTML & CSS":  "🟧",
  "JavaScript":  "🟨",
  "React":       "🟦",
  "Next.js":     "⬜",
  "PHP":         "🟪",
  "Laravel":     "🟥",
  "Figma":       "🟩",
};

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

          {/* Bio Column */}
          <div style={styles.bioCol} className="fade-up">

            {/* GT-style player card */}
            <div style={styles.nameCard}>
              <div style={styles.nameCardTop}>
                <span style={styles.nameCardLabel}>[ PLAYER INFO ]</span>
                <span style={styles.nameCardLevel}>LVL 6</span>
              </div>
              <div style={styles.pixelAvatar}>🧑‍💻</div>
              <div style={styles.playerName}>Jordhy Rifky Pratama</div>
              <div style={styles.playerTitle}>Web Developer</div>
            </div>

            <p style={styles.bioText}>
              <span style={styles.highlight}>▶</span>{" "}
              Mahasiswa{" "}
              <span style={styles.accentText}>Sistem Informasi Kota Cerdas</span>
              {" "}/ Politeknik Indramayu, semester 6.
            </p>
            <p style={styles.bioText}>
              <span style={styles.highlight}>▶</span>{" "}
              Passionate di dunia web, mendalami{" "}
              <span style={styles.accentText}>JS, PHP, React, Laravel, Next.js</span>.
            </p>
            <p style={styles.bioText}>
              <span style={styles.highlight}>▶</span>{" "}
              Kode yang bagus itu mudah dibaca, di-maintain, dan berkembang.
              Tertarik juga sama{" "}
              <span style={styles.accentText}>desain UI</span> dan aksesibilitas.
            </p>
            <p style={styles.bioText}>
              <span style={styles.highlight}></span>{" "}
              {" "}
              
            </p>
          </div>

          {/* Skills Column */}
          <div style={styles.skillsCol} className="fade-up">
            <div style={styles.skillsHeader}>
              <span style={styles.skillsTitle}>[ SKILL TREE ]</span>
            </div>

            {skills.map((skill) => (
              <div key={skill.label} style={styles.skillItem}>
                <div style={styles.skillLabel}>
                  <span style={styles.skillName}>
                    {gemEmoji[skill.label]} {skill.label}
                  </span>
                  <span style={{ ...styles.skillPct, color: skill.color }}>
                    {skill.value}%
                  </span>
                </div>
                <div style={styles.skillBarOuter}>
                  <div
                    className="skill-fill"
                    style={{
                      height: "100%",
                      width: `${skill.value}%`,
                      background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                      borderRight: `2px solid ${skill.color}`,
                      transition: "width 0.8s ease",
                    }}
                  />
                  {[25, 50, 75].map((mark) => (
                    <div key={mark} style={{ ...styles.barNotch, left: `${mark}%` }} />
                  ))}
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
  nameCard: {
    background: "var(--surface)",
    border: "2px solid var(--border2)",
    boxShadow: "3px 3px 0px rgba(0,0,0,0.1)",
    padding: "1rem",
    marginBottom: "0.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.4rem",
  },
  nameCardTop: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nameCardLabel: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.7rem",
    color: "var(--accent)",
  },
  nameCardLevel: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.7rem",
    color: "#4ecb71",
    background: "rgba(78,203,113,0.15)",
    padding: "2px 6px",
    border: "1px solid rgba(78,203,113,0.3)",
  },
  pixelAvatar: {
    fontSize: "3rem",
    lineHeight: 1,
  },
  playerName: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.9rem",
    color: "var(--text)",
    textShadow: "none",
  },
  playerTitle: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "1rem",
    color: "var(--accent)",
    letterSpacing: "0.1em",
  },
  bioText: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "1.15rem",
    color: "var(--muted)",
    lineHeight: 1.7,
  },
  highlight: {
    color: "var(--accent2)",
  },
  accentText: {
    color: "var(--accent2)",
    fontWeight: 700,
  },
  accentGold: {
    color: "var(--accent)",
    fontWeight: 700,
  },
  skillsCol: {
    display: "flex",
    flexDirection: "column",
    gap: "0.85rem",
    background: "var(--surface)",
    border: "2px solid var(--border2)",
    boxShadow: "3px 3px 0px rgba(0,0,0,0.1)",
    padding: "1.25rem",
  },
  skillsHeader: {
    marginBottom: "0.25rem",
    borderBottom: "2px solid var(--border)",
    paddingBottom: "0.5rem",
  },
  skillsTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.75rem",
    color: "var(--accent)",
  },
  skillItem: {
    display: "flex",
    flexDirection: "column",
    gap: "0.3rem",
  },
  skillLabel: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  skillName: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "1rem",
    color: "var(--text)",
    letterSpacing: "0.05em",
  },
  skillPct: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.75rem",
  },
  skillBarOuter: {
    height: "12px",
    background: "rgba(0,0,0,0.4)",
    border: "2px solid var(--border)",
    overflow: "hidden",
    position: "relative",
  },
  barNotch: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "2px",
    background: "rgba(0,0,0,0.5)",
    zIndex: 2,
  },
};