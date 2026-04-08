"use client";

import { useEffect, useState } from "react";
import { Github, Mail, MapPin, ArrowDown } from "lucide-react";

const roles = [
  "Fullstack-разработчик",
  "Rust Engineer",
  "Backend Engineer",
  "Frontend Developer",
  "DevOps Enthusiast",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentRole.length) {
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (charIndex > 0) {
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px]" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs text-zinc-400 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Открыт к предложениям
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 animate-slide-up">
          Никита{" "}
          <span className="gradient-text">Филиппов</span>
        </h1>

        {/* Typing role */}
        <div className="h-10 flex items-center justify-center mb-6">
          <span className="text-xl md:text-2xl text-zinc-400 font-mono">
            {roles[roleIndex].slice(0, charIndex)}
            <span className="animate-pulse text-blue-500">|</span>
          </span>
        </div>

        {/* Info chips */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-10 text-sm text-zinc-500">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-blue-500" />
            Псков, Россия
          </span>
          <span className="w-1 h-1 bg-zinc-700 rounded-full" />
          <span>21 год</span>
          <span className="w-1 h-1 bg-zinc-700 rounded-full" />
          <span>3+ года опыта</span>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/20"
          >
            Мои проекты
          </a>
          <a
            href="https://github.com/Xplous"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 text-sm font-medium rounded-lg transition-all flex items-center gap-2"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="mailto:nick.filippoff2016@yandex.ru"
            className="px-6 py-3 border border-zinc-700 hover:border-zinc-500 text-zinc-300 text-sm font-medium rounded-lg transition-all flex items-center gap-2"
          >
            <Mail size={16} />
            Email
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-600 hover:text-blue-500 transition-colors animate-bounce"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
