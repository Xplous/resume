"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { Briefcase, Calendar, ExternalLink, Award, Trophy, GraduationCap } from "lucide-react";

const experiences = [
  {
    company: 'ЗАО "ЗЭТО"',
    role: "Fullstack Developer",
    period: "Март 2024 — настоящее время",
    duration: "2 года+",
    logo: "/zeto.svg",
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
      "Rust-микросервис для генерации PDF-билетов и бейджей с QR/штрихкодами (проект «Клуб Подарков») — многократный рост производительности vs Python",
      "Backend-сервисы на Rust (Tokio, Axum) для high-load компонентов: чат-системы, real-time, очереди",
      "Фронтенд на Next.js / Vue.js с подключением API и UI-компонентов",
      "Оптимизация производительности, модернизация архитектуры, Telegram-боты",
      "Контейнеризация через Docker, администрирование Linux-серверов, Nginx, GitLab CI",
    ],
  },
  {
    company: 'ООО "ЭНДИ"',
    role: "Frontend-стажёр → Lead Frontend",
    period: "Сентябрь 2023 — Март 2025",
    duration: "1 год 7 месяцев",
    logo: "/endi.png",
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Nginx",
      "JWT Auth",
      "WebSockets",
    ],
    achievements: [
      "Начал со стажировки по фронтенду, вырос до руководителя frontend-отдела",
      "Проект IwaterCRM — CRM-система для управления клиентами и продажами",
      "Фронтенд на Next.js с SSR и оптимизацией (Lighthouse 95+)",
      "REST API и микросервисы на FastAPI с PostgreSQL",
      "Применение Clean Architecture, JWT Auth, WebSockets",
      "Настройка Nginx как reverse proxy и балансировщика, система логирования и CI/CD",
    ],
  },
  {
    company: "Freelance",
    role: "JavaScript Developer",
    period: "Март 2023 — Сентябрь 2023",
    duration: "7 месяцев",
    logo: null,
    stack: ["JavaScript", "React", "HTML", "CSS", "Node.js"],
    achievements: [
      "Первые коммерческие заказы после выпуска RSSchool JS/FE Pre-School",
      "Верстка и фронтенд для небольших клиентов, лендинги, SPA",
      "Изучение React и экосистемы параллельно с поступлением в университет",
    ],
  },
];

type Achievement = {
  icon: typeof Trophy;
  image?: string;
  title: string;
  subtitle: string;
  description: string;
  pdf: string;
  badge: string;
};

const achievements: Achievement[] = [
  {
    icon: Trophy,
    image: "/itmo.ico",
    title: "Робошкола 2026",
    subtitle: "Призёр · ИТМО × СБЕР",
    description:
      "Треки: Системы управления, Навигация и управление движением, Электроинженерия, Цифровое производство, Робототехника и ИИ. Даёт право на поступление в магистратуру факультета систем управления и робототехники ИТМО.",
    pdf: "/roboschool-2026.pdf",
    badge: "2026",
  },
  {
    icon: Award,
    image: "/1c.ico",
    title: "Олимпиада «1С:Предприятие» 2026",
    subtitle: "2 место · Первый тур",
    description:
      "Сороковая Международная олимпиада по программированию на платформе «1С:Предприятие». Организатор: Фирма «1С» совместно с Финансовым университетом при Правительстве РФ.",
    pdf: "/1c-olympiad-2026.pdf",
    badge: "2026",
  },
  {
    icon: GraduationCap,
    title: "RS School · JS/FE Pre-School",
    subtitle: "JavaScript · The Rolling Scopes School",
    description:
      "Окончание подготовительного курса по JavaScript и фронтенду. Точка старта в коммерческой разработке — сразу после выпуска начал брать первые заказы.",
    pdf: "/rsschool-2023.pdf",
    badge: "Март 2023",
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
                <div className="relative pl-6 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-1 w-2.5 h-2.5 -translate-x-1/2 rounded-full bg-blue-500 ring-4 ring-zinc-950" />

                  <div className="p-6 rounded-xl bg-zinc-800 border border-zinc-600 hover:border-blue-500 transition-all">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                          {exp.logo ? (
                            <span className="w-5 h-5 flex items-center justify-center shrink-0">
                              <Image
                                src={exp.logo}
                                alt={exp.company}
                                width={20}
                                height={20}
                                className="w-full h-full object-contain"
                                unoptimized
                              />
                            </span>
                          ) : (
                            <Briefcase size={16} className="text-blue-500" />
                          )}
                          {exp.role}
                        </h3>
                        <p className="text-blue-400 text-sm font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 md:gap-2 text-xs text-zinc-500 mt-2 md:mt-0">
                        <Calendar size={12} className="shrink-0" />
                        <span className="whitespace-nowrap">{exp.period}</span>
                        <span className="px-2 py-0.5 bg-blue-500/10 text-blue-400 rounded-full text-xs whitespace-nowrap">
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
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-3">
            <a
              href="https://pskgu.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl card-elevated flex items-center gap-3 hover:border-blue-500 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/pskgu-favicon.ico"
                  alt="ПсковГУ"
                  className="w-7 h-7 object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                  Псковский государственный университет
                </h3>
                <p className="text-sm text-zinc-500 truncate">
                  ПИШ, 09.03.02 ИСТ · Выпуск 2026 (бакалавр)
                </p>
              </div>
              <div className="w-9 h-9 rounded-lg border border-zinc-700 bg-zinc-800/50 flex items-center justify-center shrink-0 text-zinc-500 group-hover:text-blue-400 group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all">
                <ExternalLink size={16} />
              </div>
            </a>
            <a
              href="https://itmo.ru/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl card-elevated flex items-center gap-3 hover:border-blue-500 transition-all group relative overflow-hidden"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/itmo.ico"
                  alt="ИТМО"
                  className="w-7 h-7 object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-bold text-white group-hover:text-blue-400 transition-colors truncate">
                  Университет ИТМО
                </h3>
                <p className="text-sm text-zinc-500 truncate">
                  Магистратура · план поступления 2026
                </p>
              </div>
              <div className="w-9 h-9 rounded-lg border border-zinc-700 bg-zinc-800/50 flex items-center justify-center shrink-0 text-zinc-500 group-hover:text-blue-400 group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all">
                <ExternalLink size={16} />
              </div>
            </a>
          </div>
        </AnimatedSection>

        {/* Achievements & Awards */}
        <AnimatedSection delay={400}>
          <div className="mt-12 flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-blue-500" />
            <span className="text-sm text-blue-500 font-mono uppercase tracking-wider">
              Достижения и сертификаты
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((item, idx) => (
              <a
                key={idx}
                href={item.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-xl card-elevated hover:border-blue-500 transition-all group flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-blue-500/20 flex items-center justify-center shrink-0 overflow-hidden group-hover:border-blue-500/40 transition-all">
                    {item.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-7 h-7 object-contain"
                      />
                    ) : (
                      <span className="text-blue-400">
                        <item.icon size={18} />
                      </span>
                    )}
                  </div>
                  <span className="px-2 py-0.5 text-[10px] font-mono bg-zinc-800 text-zinc-400 rounded border border-zinc-700/50 whitespace-nowrap">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-blue-400/80 font-medium mb-2">
                  {item.subtitle}
                </p>
                <p className="text-xs text-zinc-500 leading-relaxed flex-1">
                  {item.description}
                </p>
                <div className="mt-3 flex items-center gap-1.5 text-[11px] text-zinc-600 group-hover:text-blue-400 transition-colors">
                  <ExternalLink size={11} />
                  Открыть сертификат
                </div>
              </a>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
