"use client";

import AnimatedSection from "./AnimatedSection";
import { Code2, Server, Database, Globe } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend",
    desc: "React, Next.js, Vue.js, TypeScript — современные SPA и SSR-приложения",
  },
  {
    icon: Server,
    title: "Backend",
    desc: "Rust/Axum, Python/FastAPI/Django, Node.js — высоконагруженные сервисы",
  },
  {
    icon: Database,
    title: "Базы данных",
    desc: "PostgreSQL, SurrealDB, Qdrant, Redis — реляционные и векторные БД",
  },
  {
    icon: Globe,
    title: "DevOps",
    desc: "Docker, Nginx, Linux, GitLab CI — контейнеризация и CI/CD",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-blue-500" />
            <span className="text-sm text-blue-500 font-mono uppercase tracking-wider">
              Обо мне
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Fullstack-разработчик с опытом{" "}
            <span className="gradient-text">2+ года</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <AnimatedSection delay={100}>
            <div className="space-y-4 text-zinc-400 leading-relaxed">
              <p>
                Занимаюсь разработкой корпоративных и клиентских веб-приложений.
                Работаю со стеком от фронтенда на React/Next.js до бэкенда на
                Rust и Python, включая настройку инфраструктуры и CI/CD.
              </p>
              <p>
                Создаю backend-сервисы на Rust (Tokio, Axum) для высоконагруженных
                компонентов — чат-системы, real-time взаимодействие через WebSocket.
                Разрабатываю фронтенд с SSR-оптимизацией (Lighthouse 95+).
              </p>
              <p>
                Студент ПсковГУ, направление 09.03.02 — Информационные системы и
                технологии. Постоянно развиваюсь, изучаю новые подходы и строю
                собственные продукты.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-blue-500/30 transition-all group"
                >
                  <item.icon
                    size={20}
                    className="text-blue-500 mb-3 group-hover:scale-110 transition-transform"
                  />
                  <h3 className="text-sm font-semibold text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
