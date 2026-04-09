"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import CardSwap, { Card } from "./CardSwap";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Клуб Подарков",
    subtitle: "Платформа регистрации на мероприятия",
    description:
      "Production-платформа для регистрации на корпоративные мероприятия с автоматической генерацией билетов и бейджей. Отдельный Rust-микросервис для PDF генерации с QR-кодами и штрихкодами — мой первый коммерческий Rust-проект с многократным ростом производительности vs Python. Сдан в продакшн в феврале 2026.",
    stack: ["Next.js 16", "NestJS", "Rust", "PostgreSQL", "Redis", "BullMQ", "Bitrix24"],
    url: "https://ticket.giftclub.pro",
    github: null,
    iconImage: "/club.ico",
    screenshot: "/projects/giftbox.png",
  },
  {
    title: "Hybrid AI",
    subtitle: "Корпоративный ИИ-помощник",
    description:
      "Enterprise AI-ассистент с RAG по документам, Smart Router между LLM (Claude, GPT-4o, GigaChat, Gemini) и полным контролем безопасности. Векторный + графовый поиск, JWT + Argon2, role-based access.",
    stack: ["Rust", "Axum", "Next.js 15", "SurrealDB", "Qdrant", "TypeScript"],
    url: "https://hybrid-ai.ru",
    github: null,
    iconImage: "/projects/icon-hybrid-ai.png",
    screenshot: "/projects/hybrid-ai.png",
  },
  {
    title: "Солнечный Бор",
    subtitle: "Загородный гостиничный комплекс",
    description:
      "Корпоративный сайт базы отдыха у озера Жижицкое — система бронирования, каталог размещений с фильтрацией, акции, банкетный зал, кафе. Более 40 видов развлечений.",
    stack: ["Next.js", "React", "1С-Битрикс", "PHP", "PostgreSQL"],
    url: "https://bazasolnychny.ru",
    github: null,
    iconImage: "/projects/icon-solnechny-bor.ico",
    screenshot: "/projects/solnechny-bor.png",
  },
  {
    title: "Школа Первых",
    subtitle: "Учебный центр ДПО",
    description:
      "Сайт учебного центра в Великих Луках — профессиональное обучение персонала, каталог программ, расписание, преподаватели, отзывы, новости. Адаптивная верстка.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    url: "https://school-firsts.ru",
    github: null,
    iconImage: "/projects/icon-school-firsts.webp",
    screenshot: "/projects/school-firsts.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 bg-zinc-950/50">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-blue-500" />
            <span className="text-sm text-blue-500 font-mono uppercase tracking-wider">
              Портфолио
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Избранные{" "}
            <span className="gradient-text">проекты</span>
          </h2>
          <p className="text-zinc-500 text-sm mb-16 max-w-xl">
            Коммерческие и pet-проекты — от корпоративных AI-систем до CRM и ботов.
            Карточки автоматически перелистываются, наведите чтобы остановить.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* CardSwap showcase */}
          <AnimatedSection delay={200}>
            <div className="relative overflow-hidden rounded-2xl">
              <div className="flex items-center justify-center scale-90 sm:scale-100 md:scale-125 origin-center" style={{ height: "380px" }}>
                <CardSwap
                  width={280}
                  height={220}
                  cardDistance={20}
                  verticalDistance={25}
                  delay={4500}
                  pauseOnHover={true}
                  skewAmount={2}
                  easing="elastic"
                >
                  {projects.filter((p) => p.screenshot).map((project, idx) => (
                    <Card key={idx}>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.screenshot!}
                          alt={project.title}
                          fill
                          className="object-cover object-top"
                          sizes="500px"
                          quality={100}
                          unoptimized
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-10">
                          <h3 className="text-sm font-bold text-white">{project.title}</h3>
                          <p className="text-xs text-zinc-400">{project.subtitle}</p>
                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 mt-2 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink size={11} />
                              {project.url.replace("https://", "")}
                            </a>
                          )}
                        </div>
                      </div>
                    </Card>
                  ))}
                </CardSwap>
              </div>
            </div>
          </AnimatedSection>

          {/* Project grid list */}
          <div className="w-full min-w-0">
            <div className="grid gap-3">
              {projects.map((project, idx) => (
                <AnimatedSection key={idx} delay={idx * 80}>
                  <div className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-zinc-800 border border-zinc-600 hover:border-blue-500 transition-all cursor-default overflow-hidden">
                    <div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 group-hover:scale-110 transition-transform">
                      <Image
                        src={project.iconImage}
                        alt={project.title}
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1 min-w-0 overflow-hidden">
                      <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                        <h4 className="text-sm font-semibold text-white truncate shrink-0">
                          {project.title}
                        </h4>
                        <span className="text-xs text-zinc-600 shrink-0 hidden sm:inline">—</span>
                        <span className="text-xs text-zinc-500 truncate hidden sm:inline">
                          {project.subtitle}
                        </span>
                      </div>
                      <div className="flex gap-1.5 mt-1">
                        {project.stack.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] text-zinc-500"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      {project.url && (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-blue-400 transition-all"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg hover:bg-zinc-800 text-zinc-500 hover:text-white transition-all"
                        >
                          <Github size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
