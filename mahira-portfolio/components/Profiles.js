"use client";

import { motion } from "framer-motion";

const profiles = [
  {
    name: "GitHub",
    handle: "@Walker71619",
    href: "https://github.com/Walker71619",
    desc: "Full project history, commits, and source code.",
  },
  {
    name: "LeetCode",
    handle: "Mahira_k06",
    href: "https://leetcode.com/u/Mahi_k06_/",
    desc: "DSA progress - Sharpening core fundamentals through consistent practice.",
  },
  {
    name: "LinkedIn",
    handle: "Mahira Khan",
    href: "https://www.linkedin.com/in/mahira-khan-678646286/",
    desc: "Professional updates and experience.",
  },
  {
    name: "Instagram",
    handle: "@walker_71619",
    href: "https://www.instagram.com/walker_71619/",
    desc: "Personal.",
  },
];

export default function Profiles() {
  return (
    <section id="profiles" className="relative z-10 px-6 md:px-16 py-32">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-eyebrow text-center"
      >
        Find me elsewhere
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-center text-5xl mt-3 mb-16"
      >
        Profiles
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {profiles.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.href}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card-border p-6 flex items-center justify-between group hover:border-ember/50 hover:shadow-ember transition-all duration-300"
          >
            <div>
              <h3 className="font-display text-xl text-ink group-hover:text-ember transition-colors">
                {p.name}
              </h3>
              <p className="text-xs text-muted mt-1">{p.handle}</p>
              <p className="text-xs text-muted mt-2 max-w-xs">{p.desc}</p>
            </div>
            <span className="text-ember text-xl group-hover:translate-x-1 transition-transform">
              →
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
