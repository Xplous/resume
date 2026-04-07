"use client";

import AnimatedSection from "./AnimatedSection";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: 'ЗАО "ЗЭТО"',
    role: "Web Developer",
    period: "Март 2024 — настоящее время",
    duration: "2 года+",
    stack: [
      "Python",
      "FastAPI",
      "Django",
      "Rust",
      "Tokio",
      "Axum",
      "PHP",
      "1С-Битрикс",
      "Next.js",
      "Vue.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Nginx",
      "GitLab CI",
      "WebSockets",
    ],
    achievements: [
      "Разработка и поддержка корпоративных и клиентских веб-приложений",
      "Backend-сервисы на Rust для высоконагруженных компонентов (чат-системы, real-time)",
      "Фронтенд на Next.js / Vue.js с подключением API и UI-компонентов",
      "Оптимизация производительности, модернизация архитектуры",
      "Контейнеризация через Docker, администрирование Linux-серверов",
      "Настройка Nginx и CI/CD-конвейеров (GitLab CI)",
    ],
  },
  {
    company: 'ООО "ЭНДИ"',
    role: "Fullstack-разработчик",
    period: "Сентябрь 2023 — Март 2025",
    duration: "1 год 7 месяцев",
    stack: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Docker Compose",
      "Nginx",
      "JWT Auth",
      "WebSockets",
    ],
    achievements: [
      "Проект IwaterCRM — CRM-система для управления клиентами и продажами",
      "Фронтенд на Next.js с SSR и оптимизацией (Lighthouse 95+)",
      "REST API и микросервисы на FastAPI с PostgreSQL",
      "Применение Clean Architecture, JWT Auth, WebSockets",
      "Настройка Nginx как reverse proxy и балансировщика",
      "Система логирования, мониторинга и автоматического деплоя",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-blue-500" />
            <span className="text-sm text-blue-500 font-mono uppercase tracking-wider">
              Опыт работы
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Профессиональный{" "}
            <span className="gradient-text">путь</span>
          </h2>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-zinc-800" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <AnimatedSection key={idx} delay={idx * 150}>
                <div className="relative pl-8 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-1 w-2.5 h-2.5 -translate-x-1/2 rounded-full bg-blue-500 ring-4 ring-zinc-950" />

                  <div className="p-6 rounded-xl bg-zinc-800 border border-zinc-600 hover:border-blue-500 transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                          <Briefcase size={16} className="text-blue-500" />
                          {exp.role}
                        </h3>
                        <p className="text-blue-400 text-sm font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-zinc-500 mt-2 md:mt-0">
                        <Calendar size={12} />
                        {exp.period}
                        <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-full text-xs">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.achievements.map((a, i) => (
                        <li
                          key={i}
                          className="text-sm text-zinc-400 flex items-start gap-2"
                        >
                          <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5">
                      {exp.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] bg-zinc-800 text-zinc-400 rounded border border-zinc-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Education */}
        <AnimatedSection delay={300}>
          <div className="mt-16 p-6 rounded-xl card-elevated">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <span className="text-blue-500 text-lg">🎓</span>
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  Псковский государственный университет
                </h3>
                <p className="text-sm text-zinc-500">
                  ПИШ, 09.03.02 — Информационные системы и технологии · Выпуск 2026
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
