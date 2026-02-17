"use client";

import { useState } from "react";

// ─── Tipe Data Project ─────────────────────────────────────────────────────────
type Project = {
  type: string;       // kategori project, misal "Web App", "Landing Page"
  title: string;      // nama project
  desc: string;       // deskripsi singkat
  tags: string[];     // teknologi yang dipakai
  demo?: string;      // link live demo (opsional)
  github?: string;    // link GitHub (opsional)
  wip?: boolean;      // true = Work In Progress (tampilan beda)
};

// ─── Data Projects ─────────────────────────────────────────────────────────────
// Edit bagian ini sesuai project kamu!
// Tambah objek baru ke array untuk menambah kartu project.
const projects: Project[] = [
  {
    type: "Web App",
    title: "Project Pertama",
    desc: "Deskripsi singkat project kamu. Apa yang dibangun, masalah apa yang diselesaikan, dan apa yang kamu pelajari dari sini.",
    tags: ["React", "Tailwind", "API"],
    demo: "#",
    github: "#",
  },
  {
    type: "Landing Page",
    title: "Project Kedua",
    desc: "Deskripsi project kamu yang kedua. Ceritakan teknologi apa yang dipakai dan apa hasilnya secara singkat dan jelas.",
    tags: ["HTML", "CSS", "JavaScript"],
    demo: "#",
    github: "#",
  },
  {
    type: "Dashboard",
    title: "Project Ketiga",
    desc: "Tuliskan project ketiga kamu di sini. Kalau belum banyak, 2-3 project cukup asal kualitasnya bagus.",
    tags: ["React", "Chart.js", "REST API"],
    demo: "#",
    github: "#",
  },
  {
    type: "Coming Soon",
    title: "Work in Progress...",
    desc: "Selalu ada yang sedang dibangun. Lagi explore teknologi baru dan bakalan publish secepatnya.",
    tags: ["???"],
    wip: true,
  },
];

// ─── Projects Component ────────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section id="projects" style={styles.section}>
      <div className="section-container">

        {/* ── Section Header ────────────────────────────────────────────────── */}
        <div className="section-header fade-up">
          <span className="section-num">02 //</span>
          <h2 className="section-title">Projects</h2>
          <div className="section-line" />
        </div>

        {/* ── Grid Kartu Project ────────────────────────────────────────────── */}
        <div style={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}

// ─── ProjectCard Sub-Component ─────────────────────────────────────────────────
// Dipisah jadi komponen sendiri supaya bisa punya state hover sendiri-sendiri.
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
          ? "rgba(126,255,212,0.3)"
          : "var(--border)",
        transform: hovered && !project.wip ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* Garis atas yang muncul saat hover */}
      {!project.wip && (
        <div
          style={{
            ...styles.cardTopLine,
            transform: hovered ? "scaleX(1)" : "scaleX(0)",
          }}
        />
      )}

      {/* Tipe project */}
      <div style={styles.projectType}>{project.type}</div>

      {/* Judul */}
      <h3 style={styles.projectTitle}>{project.title}</h3>

      {/* Deskripsi */}
      <p style={styles.projectDesc}>{project.desc}</p>

      {/* Tags teknologi */}
      <div style={styles.tagsRow}>
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>

      {/* Link Demo & GitHub — hanya tampil kalau bukan WIP */}
      {!project.wip && (
        <div style={styles.linksRow}>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" style={styles.projectLink}>
              ↗ Live Demo
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" style={styles.projectLink}>
              ⌥ GitHub
            </a>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Styles ───────────────────────────────────────────────────────────────────
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
  card: {
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "8px",
    padding: "1.75rem",
    position: "relative",
    overflow: "hidden",
    transition: "border-color 0.3s ease, transform 0.3s ease",
    cursor: "pointer",
  },
  cardWip: {
    borderStyle: "dashed",
    opacity: 0.5,
    cursor: "default",
  },
  cardTopLine: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "2px",
    background: "linear-gradient(90deg, var(--accent), var(--accent3))",
    transformOrigin: "left",
    transition: "transform 0.4s ease",
  },
  projectType: {
    fontFamily: "var(--mono)",
    fontSize: "0.65rem",
    color: "var(--accent3)",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  projectTitle: {
    fontSize: "1.1rem",
    fontWeight: 700,
    marginBottom: "0.6rem",
    letterSpacing: "-0.01em",
    color: "var(--text)",
  },
  projectDesc: {
    fontFamily: "var(--mono)",
    fontSize: "0.75rem",
    color: "var(--muted)",
    lineHeight: 1.8,
    marginBottom: "1.5rem",
  },
  tagsRow: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "0.4rem",
    marginBottom: "1.25rem",
  },
  linksRow: {
    display: "flex",
    gap: "1rem",
  },
  projectLink: {
    fontFamily: "var(--mono)",
    fontSize: "0.7rem",
    color: "var(--muted)",
    textDecoration: "none",
    letterSpacing: "0.05em",
    transition: "color 0.2s",
  },
};