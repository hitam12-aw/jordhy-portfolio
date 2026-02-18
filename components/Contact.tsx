"use client";

import { useState } from "react";

// ─── Tipe Data Social Link ─────────────────────────────────────────────────────
type SocialLink = {
  icon: string;     // emoji/karakter ikon
  name: string;     // nama platform
  handle: string;   // username/handle yang ditampilkan
  url: string;      // link tujuan
};

// ─── Data Social Links ─────────────────────────────────────────────────────────
// Edit bagian ini sesuai akun social media kamu!
const socialLinks: SocialLink[] = [
  {
    icon: "⌥",
    name: "GitHub",
    handle: "hitam12-aw",
    url: "https://github.com/hitam12-aw",
  },
  {
    icon: "wa",
    name: "Whatsapp",
    handle: "+6285150003725",
    url: "https://wa.me/6285150003725",
  },
  {
    icon: "ig",
    name: "Instagram",
    handle: "jordhy_0",
    url: "https://www.instagram.com/jordhy_0?igsh=MTV1NW54cjcyMmU4OQ==",
  },
];

// ─── Contact Component ─────────────────────────────────────────────────────────
// Section kontak berisi teks ajakan, email, dan daftar social media.
export default function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <div className="section-container">

        {/* ── Section Header ────────────────────────────────────────────────── */}
        <div className="section-header fade-up">
          <span className="section-num">03 //</span>
          <h2 className="section-title">Contact</h2>
          <div className="section-line" />
        </div>

        {/* ── Grid: Teks + Social ───────────────────────────────────────────── */}
        <div style={styles.grid} className="contact-wrapper">

          {/* Kolom kiri: teks & email */}
          <div className="fade-up">
            <h3 style={styles.contactHeading}>
              Let&apos;s build
              <br />
              <span style={{ color: "var(--accent)" }}>something cool.</span>
            </h3>

            <p style={styles.contactDesc}>
              Lagi terbuka untuk kesempatan magang. Kalau kamu recruiter atau
              bagian dari tim yang keren, jangan ragu buat reach out!
            </p>

            {/* Ganti email di sini */}
            <a
              href="mailto:emailkamu@gmail.com"
              style={styles.emailLink}
            >
              ✉ 2307093@student.polindra.ac.id
            </a>
          </div>

          {/* Kolom kanan: daftar social media */}
          <div style={styles.socialList} className="fade-up">
            {socialLinks.map((social) => (
              <SocialItem key={social.name} social={social} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── SocialItem Sub-Component ──────────────────────────────────────────────────
// Kartu social media — hover effect dihandle lewat React state.
function SocialItem({ social }: { social: SocialLink }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...styles.socialCard,
        borderColor: hovered ? "rgba(126,255,212,0.3)" : "var(--border)",
        transform: hovered ? "translateX(4px)" : "translateX(0)",
      }}
    >
      {/* Ikon */}
      <div style={styles.socialIcon}>{social.icon}</div>

      {/* Nama & handle */}
      <div style={{ flex: 1 }}>
        <span style={styles.socialName}>{social.name}</span>
        <span style={styles.socialHandle}>{social.handle}</span>
      </div>

      {/* Panah kanan */}
      <span
        style={{
          ...styles.socialArrow,
          transform: hovered ? "translateX(3px)" : "translateX(0)",
          color: hovered ? "var(--accent)" : "var(--muted)",
        }}
      >
        →
      </span>
    </a>
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
    gap: "3rem",
    alignItems: "start",
  },
  contactHeading: {
    fontSize: "1.8rem",
    fontWeight: 800,
    letterSpacing: "-0.02em",
    marginBottom: "1rem",
    lineHeight: 1.2,
    color: "var(--text)",
  },
  contactDesc: {
    fontFamily: "var(--mono)",
    fontSize: "0.8rem",
    color: "var(--muted)",
    lineHeight: 1.9,
    marginBottom: "1.5rem",
  },
  emailLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    fontFamily: "var(--mono)",
    fontSize: "0.85rem",
    color: "var(--accent)",
    textDecoration: "none",
    padding: "0.75rem 1.25rem",
    border: "1px solid rgba(126,255,212,0.3)",
    borderRadius: "4px",
    transition: "background 0.25s, transform 0.25s",
  },
  socialList: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  socialCard: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    padding: "1rem 1.25rem",
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: "6px",
    textDecoration: "none",
    transition: "border-color 0.25s ease, transform 0.25s ease",
  },
  socialIcon: {
    width: "36px",
    height: "36px",
    background: "rgba(126,255,212,0.08)",
    borderRadius: "4px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1rem",
    flexShrink: 0,
    color: "var(--text)",
  },
  socialName: {
    fontFamily: "var(--mono)",
    fontSize: "0.75rem",
    color: "var(--text)",
    letterSpacing: "0.05em",
    display: "block",
    marginBottom: "2px",
  },
  socialHandle: {
    fontFamily: "var(--mono)",
    fontSize: "0.65rem",
    color: "var(--muted)",
  },
  socialArrow: {
    fontSize: "0.75rem",
    transition: "transform 0.2s ease, color 0.2s ease",
  },
};