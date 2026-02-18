import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
    // url: "https://namakamu.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Preconnect Google Fonts untuk Press Start 2P, VT323, Nunito */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {/* Sky ambient glow */}
        <div className="blob blob-1" aria-hidden="true" />
        <div className="blob blob-2" aria-hidden="true" />

        {/* Pixel decoration — top grass strip */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background:
              "repeating-linear-gradient(90deg, #c17f24 0px, #c17f24 12px, #3a8a4a 12px, #3a8a4a 24px, #2e7ab0 24px, #2e7ab0 36px, #c0522a 36px, #c0522a 48px)",
            zIndex: 10000,
          }}
        />

        <Navbar />

        <main>{children}</main>

        {/* Pixel decoration — bottom dirt strip */}
        <div
          aria-hidden="true"
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: "3px",
            background:
              "repeating-linear-gradient(90deg, #a0845a 0px, #a0845a 10px, #c8b89a 10px, #c8b89a 20px)",
            zIndex: 10000,
          }}
        />
      </body>
    </html>
  );
}