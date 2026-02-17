import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

// ─── Metadata ─────────────────────────────────────────────────────────────────
// Ini yang muncul di tab browser dan hasil Google (SEO)
// Ganti semua [Nama Kamu] dan deskripsi sesuai kamu
export const metadata: Metadata = {
  title: "Jordhyrp.dev — Web developer",
  description:
    "Portfolio pribadi Jordhy Rifky Pratama, Web developer yang sedang mencari kesempatan internship.",
  keywords: ["frontend developer", "portfolio", "internship", "react", "nextjs", "laravel"],
  authors: [{ name: "Jordhy Rifky Pratama" }],
  openGraph: {
    title: "Jordhy Rifky Pratama — Web Developer",
    description: "Portfolio pribadi Jordhy Rifky Pratama, Web developer.",
    type: "website",
    // url: "https://namakamu.vercel.app", // ← uncomment & isi setelah deploy
  },
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
// Komponen ini membungkus SEMUA halaman.
// Navbar ada di sini supaya muncul di setiap halaman secara otomatis.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body>
        {/* Ambient glow blobs — background decoratif */}
        <div className="blob blob-1" aria-hidden="true" />
        <div className="blob blob-2" aria-hidden="true" />

        {/* Navbar tampil di semua halaman */}
        <Navbar />

        {/* Konten tiap halaman masuk di sini */}
        <main>{children}</main>
      </body>
    </html>
  );
}