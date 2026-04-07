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
  title: "Никита Филиппов — Fullstack Developer",
  description:
    "Портфолио fullstack-разработчика. React, Next.js, Rust, Python, TypeScript. 2+ года коммерческого опыта.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
