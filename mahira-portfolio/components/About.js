"use client";

import { motion } from "framer-motion";

const highlights = [
  { label: "Currently", value: "B.Tech IT · ADGIPS, Delhi · 3rd Year" },
  { label: "Coding since", value: "June 2025" },
  { label: "Status", value: "Open to opportunities" },
  { label: "Interests", value: "Full-stack · Real-time systems · DSA" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (d = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: d, ease: "easeOut" } }),
};

export default function About() {
  return (
    <section id="about" className="relative z-10 px-6 md:px-16 py-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* bio */}
        <div>
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="show" custom={0} viewport={{ once: true }}
            className="section-eyebrow mb-4"
          >
            About me
          </motion.p>

          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="show" custom={0.15} viewport={{ once: true }}
            className="section-title text-4xl md:text-5xl mb-8 leading-tight"
          >
            Builder by habit,<br />
            <span className="glow-text">developer by choice</span>
          </motion.h2>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" custom={0.3} viewport={{ once: true }}
            className="space-y-5 text-muted text-[16px] leading-relaxed"
          >
            <p>
             I'm Mahira Khan, a full-stack developer entering my third year at ADGIPS, Delhi (GGSIPU).
             I started coding in June 2025, and small experiments soon turned into real systems — real-time collaborative boards, AI-assisted platforms, analytics dashboards,
             and intermediate-level data structures in C++ and Java.
            </p>
            <p>
             I'm drawn to problems where clean interfaces meet solid architecture underneath,
             and I spend as much time thinking in algorithms as I do building UI.
            </p>
            <p>
             Right now, I'm now looking for a software engineering internships & opportunities -
             one where I can contribute to a real codebase, learn from experienced engineers, and build toward companies where engineering rigor is non-negotiable.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" custom={0.5} viewport={{ once: true }}
            className="mt-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-ember/30 bg-ember/8"
            style={{ background: "rgba(255,43,67,0.07)" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-ember" />
            </span>
            <span className="text-[11px] uppercase tracking-widest text-ember/80">
              Available for opportunities
            </span>
          </motion.div>
        </div>

        {/* highlight cards */}
        <div className="space-y-4 mt-2">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              variants={fadeUp} initial="hidden" whileInView="show" custom={0.2 + i * 0.1} viewport={{ once: true }}
              className="flex gap-5 items-start p-5 card-border hover:border-ember/30 transition-colors duration-300"
              style={{ background: "rgba(20,3,7,0.6)" }}
            >
              <p className="text-[10px] uppercase tracking-widest text-ember/60 mt-0.5 w-24 flex-shrink-0">
                {h.label}
              </p>
              <p className="text-sm text-ink leading-relaxed">{h.value}</p>
            </motion.div>
          ))}

          {/* mini divider */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" custom={0.65} viewport={{ once: true }}
            className="pt-4 flex items-center gap-4"
          >
            <div className="flex-1 h-px bg-cardLine" />
            <span className="text-[10px] uppercase tracking-widest text-muted/40">ADGIPS · GGSIPU · New Delhi</span>
            <div className="flex-1 h-px bg-cardLine" />
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" custom={0.75} viewport={{ once: true }}
            className="flex gap-4 pt-2"
          >
            <a
              href="#work"
              className="text-xs uppercase tracking-widest text-ember hover:text-ink transition-colors duration-300 border-b border-ember/40 hover:border-ink/40 pb-0.5"
            >
              See my work →
            </a>
            <a
              href="/Resume_final1.pdf"
              className="text-xs uppercase tracking-widest text-muted hover:text-ink transition-colors duration-300 border-b border-muted/20 hover:border-ink/40 pb-0.5"
            >
              Download resume →
            </a>
          </motion.div>
        </div>

      </div>
    </section>
  );
}