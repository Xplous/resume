"use client";

import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, Github, MapPin, Send } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "nick.filippoff2016@yandex.ru",
    href: "mailto:nick.filippoff2016@yandex.ru",
  },
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (911) 890-78-54",
    href: "tel:+79118907854",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Xplous",
    href: "https://github.com/Xplous",
  },
  {
    icon: MapPin,
    label: "Локация",
    value: "Псков, Россия",
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-px bg-blue-500" />
            <span className="text-sm text-blue-500 font-mono uppercase tracking-wider">
              Контакты
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Давайте{" "}
            <span className="gradient-text">работать вместе</span>
          </h2>
          <p className="text-zinc-500 text-sm mb-12 max-w-lg">
            Открыт к сотрудничеству и интересным проектам. Предпочтительная
            связь — email.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {contacts.map((c, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              {c.href ? (
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block p-5 rounded-xl border border-zinc-800 bg-zinc-900/20 hover:border-blue-500/30 hover:bg-zinc-900/40 transition-all group"
                >
                  <c.icon
                    size={20}
                    className="text-blue-500 mb-3 group-hover:scale-110 transition-transform"
                  />
                  <p className="text-xs text-zinc-500 mb-1">{c.label}</p>
                  <p className="text-sm text-white font-medium truncate">
                    {c.value}
                  </p>
                </a>
              ) : (
                <div className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/20">
                  <c.icon size={20} className="text-blue-500 mb-3" />
                  <p className="text-xs text-zinc-500 mb-1">{c.label}</p>
                  <p className="text-sm text-white font-medium">{c.value}</p>
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={400}>
          <div className="mt-12 text-center">
            <a
              href="mailto:nick.filippoff2016@yandex.ru"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Send size={16} />
              Написать мне
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
