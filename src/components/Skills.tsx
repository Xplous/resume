"use client";

import AnimatedSection from "./AnimatedSection";

interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
}

const categories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React / Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Vue.js / Nuxt", level: 75 },
      { name: "Tailwind CSS", level: 92 },
      { name: "JavaScript", level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Rust (Axum, Tokio)", level: 80 },
      { name: "Python (FastAPI, Django)", level: 85 },
      { name: "Node.js / Express", level: 78 },
      { name: "PHP (1С-Битрикс)", level: 70 },
      { name: "REST API / WebSockets", level: 88 },
    ],
  },
  {
    title: "Базы данных",
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 72 },
      { name: "SurrealDB", level: 70 },
      { name: "Qdrant (Vector DB)", level: 68 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    title: "DevOps & Инструменты",
    skills: [
      { name: "Docker / Docker Compose", level: 85 },
      { name: "Nginx", level: 80 },
      { name: "Linux (Ubuntu, Debian)", level: 82 },
      { name: "Git / GitLab CI", level: 88 },
      { name: "CI/CD Pipelines", level: 78 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-blue-500" />
            <span className="text-sm text-blue-500 font-mono uppercase tracking-wider">
              Технологии
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Навыки и{" "}
            <span className="gradient-text">технологический стек</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat, ci) => (
            <AnimatedSection key={cat.title} delay={ci * 100}>
              <div className="p-6 rounded-xl bg-zinc-800 border border-zinc-600 hover:border-blue-500 transition-all">
                <h3 className="text-lg font-semibold text-white mb-5">
                  {cat.title}
                </h3>
                <div className="space-y-4">
                  {cat.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-zinc-300">{skill.name}</span>
                        <span className="text-zinc-500 font-mono text-xs">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
