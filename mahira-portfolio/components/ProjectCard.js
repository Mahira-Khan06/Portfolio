"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  function handleMove(e) {
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setTilt({ x: (py - 0.5) * -10, y: (px - 0.5) * 10 });
    setGlow({ x: px * 100, y: py * 100 });
  }

  function handleLeave() {
    setTilt({ x: 0, y: 0 });
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(255,43,67,0.14), #140307 60%)`,
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className="card-border p-6 transition-transform duration-150 will-change-transform"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-display text-2xl text-ink">{project.name}</h3>
        <span className="text-[10px] uppercase tracking-widest text-ember2 border border-ember2/40 px-2 py-1">
          {project.tag}
        </span>
      </div>
      <p className="text-muted text-sm leading-relaxed mb-5">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.stack.map((s) => (
          <span
            key={s}
            className="text-[11px] px-2.5 py-1 border border-cardLine text-muted"
          >
            {s}
          </span>
        ))}
      </div>
      <div className="flex gap-4 text-xs uppercase tracking-widest">
        {project.github && (
          <a
            href={project.github}
            className="text-ink hover:text-ember transition-colors"
          >
            GitHub →
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            className="text-ink hover:text-gold transition-colors"
          >
            Live demo →
          </a>
        )}
      </div>
    </motion.div>
  );
}
