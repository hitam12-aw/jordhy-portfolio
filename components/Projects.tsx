"use client";

import { useState } from "react";

type Project = {
  type: string;
  title: string;
  desc: string;
  tags: string[];
  demo?: string;
  github?: string;
  wip?: boolean;
  icon?: string;
};

const projects: Project[] = [
  {
    type: "Web App",
    title: "Project Pertama",
    desc: "Deskripsi singkat project kamu. Apa yang dibangun, masalah apa yang diselesaikan, dan apa yang kamu pelajari dari sini.",
    tags: ["React", "Tailwind", "API"],
    demo: "#",
    github: "#",
    icon: "🧱",
  },
  {
    type: "Landing Page",
    title: "Project Kedua",
    desc: "Deskripsi project kamu yang kedua. Ceritakan teknologi apa yang dipakai dan apa hasilnya secara singkat dan jelas.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "#",
    icon: "🌿",
  },
  {
    type: "Dashboard",
    title: "Project Ketiga",
    desc: "Tuliskan project ketiga kamu di sini. Kalau belum banyak, 2-3 project cukup asal kualitasnya bagus.",
    tags: ["React", "Chart.js", "REST API"],
    demo: "#",
    github: "#",
    icon: "💎",
  },
  {
    type: "Coming Soon",
    title: "Work in Progress...",
    desc: "Selalu ada yang sedang dibangun. Lagi explore teknologi baru dan bakalan publish secepatnya.",
    tags: ["???"],
    wip: true,
    icon: "⚙️",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <div className="section-container">

        <div className="section-header fade-up">
          <span className="section-num">02 //</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-line" />
        </div>

        {/* GT inventory-style grid */}
        <div style={styles.grid} className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fade-up"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...styles.card,
        ...(project.wip ? styles.cardWip : {}),
        borderColor: hovered && !project.wip
          ? "var(--accent)"
          : "var(--border2)",
        transform: hovered && !project.wip
          ? "translate(-3px, -3px)"
          : "translate(0, 0)",
        boxShadow: hovered && !project.wip
          ? "6px 6px 0px rgba(0,0,0,0.7)"
          : "4px 4px 0px rgba(0,0,0,0.5)",
      }}
    >
      {/* Colored top bar — GT block category colors */}
      <div style={{
        ...styles.cardTopBar,
        background: project.wip
          ? "repeating-linear-gradient(90deg, var(--border) 0px, var(--border) 8px, transparent 8px, transparent 16px)"
          : hovered
          ? "repeating-linear-gradient(90deg, var(--accent) 0px, var(--accent) 8px, var(--accent2) 8px, var(--accent2) 16px, var(--accent3) 16px, var(--accent3) 24px, transparent 24px, transparent 32px)"
          : "repeating-linear-gradient(90deg, var(--border2) 0px, var(--border2) 8px, var(--border) 8px, var(--border) 16px)",
      }} />

      {/* Icon + type row */}
      <div style={styles.typeRow}>
        <span style={styles.projectIcon}>{project.icon}</span>
        <span style={styles.projectType}>{project.type}</span>
        {project.wip && (
          <span style={styles.wipBadge}>[ WIP ]</span>
        )}
      </div>

      {/* Title */}
      <h3 style={{
        ...styles.projectTitle,
        color: hovered && !project.wip ? "var(--accent)" : "var(--text)",
      }}>
        {project.title}
      </h3>

      {/* Desc */}
      <p style={styles.projectDesc}>{project.desc}</p>

      {/* Tags — gem badge style */}
      <div style={styles.tagsRow}>
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      {/* Links */}
      {!project.wip && (
        <div style={styles.linksRow}>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...styles.projectLink,
                color: hovered ? "var(--accent)" : "var(--muted)",
                borderColor: hovered ? "rgba(247,201,72,0.4)" : "var(--border)",
                boxShadow: hovered ? "2px 2px 0px rgba(0,0,0,0.4)" : "2px 2px 0px rgba(0,0,0,0.3)",
              }}
            >
              ↗ Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...styles.projectLink,
                color: hovered ? "var(--accent2)" : "var(--muted)",
                borderColor: hovered ? "rgba(78,203,113,0.4)" : "var(--border)",
                boxShadow: hovered ? "2px 2px 0px rgba(0,0,0,0.4)" : "2px 2px 0px rgba(0,0,0,0.3)",
              }}
            >
              ⌥ GitHub
            </a>
          )}
        </div>
      )}

      {/* WIP animated dots */}
      {project.wip && (
        <div style={styles.wipRow}>
          <span style={styles.wipText}>Loading</span>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                ...styles.wipDot,
                animationDelay: `${i * 0.3}s`,
              }}
            >
              ■
            </span>
          ))}
        </div>
      )}
    </div>
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
    gap: "1.5rem",
  },

  /* Card — GT inventory slot */
  card: {
    background: "var(--surface)",
    border: "2px solid var(--border2)",
    boxShadow: "3px 3px 0px rgba(0,0,0,0.08)",
    padding: "1.5rem",
    position: "relative",
    overflow: "hidden",
    transition: "border-color 0.15s ease, transform 0.15s ease, box-shadow 0.15s ease",
    cursor: "pointer",
  },
  cardWip: {
    opacity: 0.55,
    cursor: "default",
    borderStyle: "dashed",
  },

  /* Pixel top bar */
  cardTopBar: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "4px",
    transition: "background 0.2s ease",
  },

  /* Type row */
  typeRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "0.75rem",
    paddingTop: "0.5rem",
  },
  projectIcon: {
    fontSize: "1.2rem",
    lineHeight: 1,
  },
  projectType: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.7rem",
    color: "var(--accent3)",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    flex: 1,
  },
  wipBadge: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.65rem",
    color: "var(--accent4)",
    background: "rgba(224,92,42,0.1)",
    border: "1px solid rgba(224,92,42,0.3)",
    padding: "2px 6px",
    animation: "pixelBlink 1.5s steps(1) infinite",
  },

  /* Title */
  projectTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.85rem",
    fontWeight: 400,
    marginBottom: "0.75rem",
    lineHeight: 1.8,
    transition: "color 0.15s ease",
    textShadow: "none",
  },

  /* Desc */
  projectDesc: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "1.05rem",
    color: "var(--muted)",
    lineHeight: 1.7,
    marginBottom: "1.25rem",
  },

  /* Tags */
  tagsRow: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "0.4rem",
    marginBottom: "1.25rem",
  },

  /* Links */
  linksRow: {
    display: "flex",
    gap: "0.75rem",
  },
  projectLink: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.7rem",
    textDecoration: "none",
    letterSpacing: "0.05em",
    padding: "0.4rem 0.75rem",
    border: "2px solid var(--border)",
    transition: "color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease",
  },

  /* WIP loading */
  wipRow: {
    display: "flex",
    alignItems: "center",
    gap: "0.3rem",
    marginTop: "0.5rem",
  },
  wipText: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.7rem",
    color: "var(--muted)",
  },
  wipDot: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "0.7rem",
    color: "var(--accent)",
    animation: "pixelBlink 0.9s steps(1) infinite",
    display: "inline-block",
  },
};