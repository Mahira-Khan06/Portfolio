"use client";

import { motion } from "framer-motion";

const links = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Certificates", href: "#certificates" },
  { label: "Profiles", href: "#profiles" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 backdrop-blur-md bg-bg/40"
    >
      <a href="#" className="font-display text-xl tracking-widest text-ink">
        M<span className="text-ember">K</span>.
      </a>
      <ul className="hidden md:flex gap-10">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-xs uppercase tracking-widest text-muted hover:text-ink transition-colors duration-300 hover:[text-shadow:0_0_12px_rgba(255,43,67,0.7)]"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="/Resume_final1.pdf"
        className="text-xs uppercase tracking-widest px-4 py-2 border border-ink/20 hover:border-ember hover:text-ember hover:shadow-ember transition-all duration-300"
      >
        Resume
      </a>
    </motion.nav>
  );
}
