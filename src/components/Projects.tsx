"use client";

import AnimatedSection from "./AnimatedSection";
import CardSwap, { Card } from "./CardSwap";
import { ExternalLink, Github, Cpu, Globe, MessageSquare, Gamepad2, BarChart3 } from "lucide-react";

const projects = [
  {
    title: "Hybrid AI",
    subtitle: "Корпоративный ИИ-помощник",
    description:
      "Enterprise AI-ассистент с RAG по документам, Smart Router между LLM (Claude, GPT-4o, GigaChat, Gemini) и полным контролем безопасности. Векторный + графовый поиск, JWT + Argon2, role-based access.",
    stack: ["Rust", "Axum", "Next.js 15", "SurrealDB", "Qdrant", "TypeScript"],
    url: "https://hybrid-ai.ru",
    github: null,
    icon: Cpu,
    color: "from-blue-600 to-cyan-500",
  },
  {
    title: "Солнечный Бор",
    subtitle: "Загородный гостиничный комплекс",
    description:
      "Корпоративный сайт базы отдыха у озера Жижицкое — система бронирования, каталог размещений с фильтрацией, акции, банкетный зал, кафе. Более 40 видов развлечений.",
    stack: ["Next.js", "React", "1С-Битрикс", "PHP", "PostgreSQL"],
    url: "https://bazasolnychny.ru",
    github: null,
    icon: Globe,
    color: "from-green-600 to-emerald-500",
  },
  {
    title: "Школа Первых",
    subtitle: "Учебный центр ДПО",
    description:
      "Сайт учебного центра в Великих Луках — профессиональное обучение персонала, каталог программ, расписание, преподаватели, отзывы, новости. Адаптивная верстка.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
    url: "https://school-firsts.ru",
    github: null,
    icon: BarChart3,
    color: "from-indigo-600 to-violet-500",
  },
  {
    title: "IwaterCRM",
    subtitle: "CRM-система для бизнеса",
    description:
      "Полноценная CRM для управления клиентами и продажами. SSR на Next.js с Lighthouse 95+, REST API на FastAPI, Clean Architecture, JWT Auth, WebSockets для real-time.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "Docker", "Nginx", "WebSockets"],
    url: null,
    github: null,
    icon: MessageSquare,
    color: "from-purple-600 to-pink-500",
  },
  {
    title: "VK Bot",
    subtitle: "Бот для ВКонтакте",
    description:
      "Многофункциональный бот с SQLite-хранилищем, обработкой команд, модульной архитектурой. Автоматизация взаимодействия в сообществах ВК.",
    stack: ["TypeScript", "Node.js", "SQLite", "VK API"],
    url: null,
    github: "https://github.com/Xplous/vk-bot",
    icon: MessageSquare,
    color: "from-sky-600 to-blue-500",
  },
  {
    title: "Match Tracker",
    subtitle: "Трекер матчей",
    description:
      "Real-time отслеживание спортивных матчей с обновлением данных. Современный интерфейс на Next.js с TypeScript.",
    stack: ["Next.js", "TypeScript", "React", "API"],
    url: null,
    github: "https://github.com/Xplous/match-tracker-test",
    icon: Gamepad2,
    color: "from-orange-600 to-amber-500",
  },
];

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  const Icon = project.icon;
  return (
    <div className="h-full p-5 flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <div
            className={`w-9 h-9 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}
          >
            <Icon size={18} className="text-white" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white leading-tight">
              {project.title}
            </h3>
            <p className="text-xs text-zinc-500">{project.subtitle}</p>
          </div>
        </div>
        <p className="text-xs text-zinc-400 leading-relaxed mb-3 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {project.stack.slice(0, 4).map((t) => (
            <span
              key={t}
              className="px-1.5 py-0.5 text-[10px] bg-zinc-800 text-zinc-400 rounded"
            >
              {t}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-1.5 py-0.5 text-[10px] bg-zinc-800 text-zinc-500 rounded">
              +{project.stack.length - 4}
            </span>
          )}
        </div>
      </div>
      <div className="flex gap-2 mt-3 pt-3 border-t border-zinc-800">
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={12} />
            Открыть
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={12} />
            Код
          </a>
        )}
      </div>
    </div>
  );
}

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

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* CardSwap showcase */}
          <AnimatedSection delay={200} className="flex-shrink-0">
            <div className="relative w-[420px] h-[380px]">
              <CardSwap
                width={380}
                height={280}
                cardDistance={45}
                verticalDistance={50}
                delay={4500}
                pauseOnHover={true}
                skewAmount={3}
                easing="elastic"
              >
                {projects.map((project, idx) => (
                  <Card key={idx}>
                    <ProjectCard project={project} />
                  </Card>
                ))}
              </CardSwap>
            </div>
          </AnimatedSection>

          {/* Project grid list */}
          <div className="flex-1 w-full">
            <div className="grid gap-3">
              {projects.map((project, idx) => (
                <AnimatedSection key={idx} delay={idx * 80}>
                  <div className="group flex items-center gap-4 p-4 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:border-blue-500/30 hover:bg-zinc-900/40 transition-all cursor-default">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <project.icon size={18} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-white truncate">
                          {project.title}
                        </h4>
                        <span className="text-xs text-zinc-600">—</span>
                        <span className="text-xs text-zinc-500 truncate">
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
