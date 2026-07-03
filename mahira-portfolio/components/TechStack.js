"use client";

import { motion } from "framer-motion";

const stack = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "C++", "Java"] },
  {
    group: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js"],
  },
  {
    group: "Backend / Data",
    items: ["Node.js", "Express", "MongoDB", "Socket.io", "TimescaleDB"],
  },
  { group: "Tools", items: ["Docker", "Git", "Vercel", "Firebase"] },
];

export default function TechStack() {
  return (
    <section id="stack" className="relative z-10 px-6 md:px-16 py-32">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-eyebrow text-center"
      >
        What I build with
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-center text-5xl mt-3 mb-16"
      >
        Tech stack
      </motion.h2>

      <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {stack.map((s, i) => (
          <motion.div
            key={s.group}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="text-xs uppercase tracking-widest text-ember2 mb-4">
              {s.group}
            </h3>
            <ul className="space-y-2">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-ink border-b border-cardLine pb-2 hover:text-ember hover:pl-1 transition-all duration-300"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
