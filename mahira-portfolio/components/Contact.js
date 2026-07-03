"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const EMAIL = "mahirakhan24538@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section id="contact" className="relative z-10 px-6 md:px-16 py-32 text-center">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-eyebrow"
      >
        Let's talk
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-5xl mt-3 mb-6"
      >
        Get in <span className="glow-text">touch</span>
      </motion.h2>
      <p className="text-muted max-w-md mx-auto mb-10">
        Open to opportunities and interesting collaborations.
        Reach out directly - no forms, no friction.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href={`mailto:${EMAIL}`}
          className="px-9 py-4 text-xs uppercase tracking-widest font-semibold bg-ember text-bg shadow-ember hover:shadow-emberStrong hover:-translate-y-0.5 transition-all duration-300"
        >
          Email me
        </a>
        <button
          onClick={copyEmail}
          className="px-9 py-4 text-xs uppercase tracking-widest font-semibold border border-ink/20 hover:border-gold hover:text-gold hover:shadow-gold transition-all duration-300"
        >
          {copied ? "Copied!" : "Copy email"}
        </button>
        <a
          href="/resume.pdf"
          className="px-9 py-4 text-xs uppercase tracking-widest font-semibold border border-ink/20 hover:border-ember hover:text-ember transition-all duration-300"
        >
          Download resume
        </a>
      </div>
    </section>
  );
}
