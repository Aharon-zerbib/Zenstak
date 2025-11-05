import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zenstak | Suite CRM unifiée",
  description:
    "Orchestrez l'intégralité de votre relation client avec une suite d'applications connectées et prêtes à l'emploi.",
  icons: {
    // primary favicon (SVG present in public/icons/)
    icon: "/icons/soup.svg",
    // shortcut icon for some browsers
    shortcut: "/icons/soup.svg",
    // fallback PNG already present at public/iconApp.png
    other: [{ url: "/iconApp.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-(--color-background) text-(--color-foreground) antialiased transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
