"use client";

import AnimatedSection from "./AnimatedSection";
import OrbitImages from "./OrbitImages";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiVuedotjs,
  SiTailwindcss,
  SiJavascript,
  SiRust,
  SiPython,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiNginx,
  SiLinux,
  SiGit,
} from "react-icons/si";

const technologies = [
  { icon: SiReact, name: "React", color: "#61DAFB" },
  { icon: SiRust, name: "Rust", color: "#DEA584" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  { icon: SiPython, name: "Python", color: "#3776AB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#ffffff" },
  { icon: SiDocker, name: "Docker", color: "#2496ED" },
  { icon: SiVuedotjs, name: "Vue.js", color: "#4FC08D" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
  { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  { icon: SiRedis, name: "Redis", color: "#DC382D" },
  { icon: SiPhp, name: "PHP", color: "#777BB4" },
  { icon: SiNginx, name: "Nginx", color: "#009639" },
  { icon: SiGit, name: "Git", color: "#F05032" },
  { icon: SiLinux, name: "Linux", color: "#FCC624" },
];

const orbitItems = technologies.map((tech) => {
  const Icon = tech.icon;
  return (
    <div
      key={tech.name}
      className="w-full h-full flex flex-col items-center justify-center gap-1.5"
      title={tech.name}
    >
      <div className="w-14 h-14 rounded-xl bg-zinc-800/90 border border-zinc-700 flex items-center justify-center backdrop-blur-sm shadow-lg">
        <Icon size={30} color={tech.color} />
      </div>
      <span className="text-[11px] text-zinc-400 font-medium whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
});

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

        <AnimatedSection delay={200}>
          <div className="w-full max-w-2xl mx-auto overflow-hidden sm:overflow-visible sm:max-w-5xl">
            {/* Mobile: smaller orbit */}
            <div className="block sm:hidden">
              <OrbitImages
                items={orbitItems}
                shape="ellipse"
                radiusX={180}
                radiusY={70}
                baseWidth={400}
                rotation={-8}
                duration={30}
                itemSize={60}
                fill
                responsive
                showPath
                pathColor="rgba(63, 63, 70, 0.3)"
                pathWidth={1}
                centerContent={
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text">16+</div>
                    <div className="text-xs text-zinc-500 mt-1">технологий</div>
                  </div>
                }
              />
            </div>
            {/* Desktop: full orbit */}
            <div className="hidden sm:block">
              <OrbitImages
                items={orbitItems}
                shape="ellipse"
                radiusX={510}
                radiusY={140}
                baseWidth={800}
                rotation={-8}
                duration={30}
                itemSize={80}
                fill
                responsive
                showPath
                pathColor="rgba(63, 63, 70, 0.3)"
                pathWidth={1}
                centerContent={
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text">16+</div>
                    <div className="text-sm text-zinc-500 mt-1">технологий</div>
                  </div>
                }
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
