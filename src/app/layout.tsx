import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#0a0a0a",
};

export const metadata: Metadata = {
  title: "Никита Филиппов — Fullstack Developer",
  description:
    "Портфолио fullstack-разработчика. React, Next.js, Rust, Python, TypeScript. 3+ года коммерческого опыта.",
  keywords: [
    "fullstack",
    "developer",
    "react",
    "next.js",
    "rust",
    "python",
    "typescript",
    "portfolio",
  ],
  authors: [{ name: "Никита Филиппов" }],
  openGraph: {
    title: "Никита Филиппов — Fullstack Developer",
    description: "Портфолио fullstack-разработчика",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">{children}</body>
    </html>
  );
}
