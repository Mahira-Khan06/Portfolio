"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { groupProjects, soloProjects } from "./projectsData";

const categories = [
  { key: "fullstack", label: "Full-stack" },
  { key: "frontend",  label: "Frontend"  },
  { key: "systems",   label: "Systems"   },
];

export default function Projects() {
  const [active, setActive] = useState("fullstack");

  return (
    <section id="work" className="relative z-10 px-6 md:px-16 py-32">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-eyebrow text-center"
      >
        Selected work
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-center text-5xl mt-3 mb-20"
      >
        Projects
      </motion.h2>

      {/* Group projects */}
      <div className="mb-24">
        <div className="flex items-center gap-4 mb-8 max-w-4xl mx-auto">
          <div className="flex-1 h-px bg-cardLine" />
          <h3 className="font-display text-xl text-ink tracking-wide whitespace-nowrap">
            Group work
          </h3>
          <div className="flex-1 h-px bg-cardLine" />
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {groupProjects.map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>
      </div>

      {/* Solo projects */}
      <div>
        <div className="flex items-center gap-4 mb-10 max-w-5xl mx-auto">
          <div className="flex-1 h-px bg-cardLine" />
          <h3 className="font-display text-xl text-ink tracking-wide whitespace-nowrap">
            Solo work
          </h3>
          <div className="flex-1 h-px bg-cardLine" />
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`text-xs uppercase tracking-widest px-6 py-2.5 transition-all duration-300 ${
                active === c.key
                  ? "border border-ember text-ember shadow-ember bg-ember/5"
                  : "border border-cardLine text-muted hover:text-ink hover:border-ink/30"
              }`}
            >
              {c.label}
              <span className={`ml-2 text-[10px] ${active === c.key ? "text-ember/70" : "text-muted/50"}`}>
                {soloProjects[c.key].length}
              </span>
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {soloProjects[active].map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}