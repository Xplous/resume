"use client";

import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <span className="font-bold text-white">
            NF<span className="text-blue-500">.</span>
          </span>
          <span className="w-1 h-1 bg-zinc-700 rounded-full" />
          <span>&copy; {new Date().getFullYear()} Никита Филиппов</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Xplous"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:nick.filippoff2016@yandex.ru"
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
