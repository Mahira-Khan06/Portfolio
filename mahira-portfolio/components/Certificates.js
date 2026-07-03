"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    name: "Code for Bharat S2",
    issuer: "Tech Masters India · Microsoft",
    year: "2025",
    type: " Top 22 / 2.5k Teams",
    detail: "Top 22 of 2500+ teams, Microsoft Office, Aug 2",
    image: "/cfb.png",
    color: "#0d1a08",
    win: true,
  },
  {
    name: "Hackster 2025",
    issuer: "HMR Institute of Technology",
    year: "2025",
    type: " Best Girl Team",
    detail: "Best Girl Team Prize at Hackster 2025, Sept 20, Top 10 / 1700+ Teams",
    image: "/hackster.png",
    color: "#1a0820",
    win: true,
  },
  {
    name: "TechJam 2.0",
    issuer: "Microsoft · MLH · Unstop",
    year: "2025",
    type: " Top 10 Team",
    detail: "Top 10 at TechJam 2.0, Microsoft Sovereign Office, Noida",
    image: "/techjam.png",
    color: "#2a0a10",
    win: true,
  },

  {
    name: "Bharatiya Antariksh",
    issuer: "ISRO · Hack2skill",
    year: "2025",
    type: "Acknowledgement",
    detail: "ISRO's Bharatiya Antariksh Hackathon 2025",
    image: "/bah.png",
    color: "#0a0d1a",
    win: false,
  },
  {
    name: "Google Cloud Agentic AI",
    issuer: "Google Cloud · Hack2skill",
    year: "2025",
    type: "Participation",
    detail: "Google Cloud Agentic AI Day, powered by Hack2skill",
    image: "/gcaai.png",
    color: "#0f0a1a",
    win: false,
  },
  {
    name: "HackShastra",
    issuer: "HackShastra",
    year: "2025",
    type: "Participation",
    detail: "Round 1 – Idea Submission, Team Naraini",
    image: "/hackshastra.png",
    color: "#1a0a08",
    win: false,
  },
  {
    name: "Hackground India 2K25",
    issuer: "Techverse Nexus",
    year: "2025",
    type: "Participation",
    detail: "Team Gama4ce, Hackground India 2K25",
    image: "/hackground.png",
    color: "#120a1a",
    win: false,
  },
  {
    name: "InnoHacks 2.0",
    issuer: "NSUT Delhi",
    year: "2025",
    type: "Participation",
    detail: "InnoHacks 2.0 at INNOVISION'25, NSUT Delhi, Top 40",
    image: "/innohacks.png",
    color: "#0a1210",
    win: false,
  },
  {
    name: "CodeSynthesis",
    issuer: "GTB 4th Centenary College",
    year: "2025",
    type: "Participation",
    detail: "Merging Innovation with Sustainable Impact",
    image: "/codesynthesis.png",
    color: "#1a100a",
    win: false,
  },
  {
    name: "Daksh Sparkfest",
    issuer: "GL Bajaj Institute",
    year: "2025",
    type: "Participation",
    detail: "Daksh Sparkfest, GL Bajaj Institute, Delhi NCR",
    image: "/daksh.png",
    color: "#0a1a14",
    win: false,
  },
];

function getCardStyle(offset) {
  const abs = Math.abs(offset);
  if (abs > 3) return null;
  return {
    transform: `perspective(1200px) rotateY(${offset * 40}deg) translateX(${offset * 52}%) translateZ(${abs === 0 ? 80 : abs === 1 ? 0 : abs === 2 ? -80 : -140}px) scale(${abs === 0 ? 1 : abs === 1 ? 0.8 : abs === 2 ? 0.62 : 0.46})`,
    opacity: abs === 0 ? 1 : abs === 1 ? 0.75 : abs === 2 ? 0.45 : 0.2,
    zIndex: 20 - abs,
  };
}

export default function Certificates() {
  const [active, setActive] = useState(0);
  const total = certificates.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  return (
    <section id="certificates" className="relative z-10 px-6 md:px-16 py-32">
      <motion.p
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        className="section-eyebrow text-center"
      >
        Proof of work
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="section-title text-center text-5xl mt-3 mb-20"
      >
        Certificates
      </motion.h2>

      <div
        className="relative flex items-center justify-center overflow-visible mx-auto"
        style={{ height: "340px", maxWidth: "1200px" }}
      >
        {certificates.map((cert, i) => {
          let offset = i - active;
          if (offset > total / 2)  offset -= total;
          if (offset < -total / 2) offset += total;
          const style = getCardStyle(offset);
          if (!style) return null;
          const isActive = offset === 0;

          return (
            <div
              key={i}
              onClick={() => setActive(i)}
              className="absolute cursor-pointer transition-all duration-500 ease-out select-none"
              style={{
                ...style,
                width: "580px",
                height: "400px",
                borderRadius: "14px",
                overflow: "hidden",
                display: "flex",
                border: `1px solid ${isActive ? "rgba(255,43,67,0.6)" : "rgba(255,43,67,0.12)"}`,
                boxShadow: isActive ? "0 0 50px rgba(255,43,67,0.25), 0 0 100px rgba(255,43,67,0.1)" : "none",
              }}
            >

              <div className="flex w-full h-full">

                <div className="relative flex-shrink-0" style={{ width: "78%", height: "100%" }}>
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "center top" }}
                  />
                  <div
                    className="absolute top-0 right-0 bottom-0"
                    style={{
                      width: "25%",
                      background: `linear-gradient(to right, transparent, ${cert.color}ff)`,
                    }}
                  />
                  {cert.win && (
                    <div
                      className="absolute top-2.5 left-2.5 text-[9px] uppercase tracking-wide px-2 py-0.5 rounded-full"
                      style={{ background: "rgba(255,43,67,0.9)", color: "#fff" }}
                    >
                      {cert.type}
                    </div>
                  )}
                </div>

                <div
                  className="flex flex-col justify-between px-5 py-5 flex-1"
                  style={{ background: `linear-gradient(160deg, ${cert.color}ee, #060103)` }}
                >
                  <div>
                    <p className="text-[9px] uppercase tracking-widest text-ember/70 mb-1">{cert.year}</p>
                    {!cert.win && <p className="text-[9px] text-muted/50 mb-1">{cert.type}</p>}
                    <h3 className="font-display text-base text-ink leading-snug mb-2">{cert.name}</h3>
                    <p className="text-[11px] text-muted/65 leading-relaxed">{cert.detail}</p>
                  </div>
                  <div>
                    <div className="w-5 h-px bg-ember mb-2" />
                    <p className="text-[9px] text-muted/45">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* controls */}
      <div className="flex justify-center gap-5 mt-12">
        <button
          onClick={prev}
          className="w-9 h-9 rounded-full border border-ink/20 flex items-center justify-center text-muted hover:border-ember hover:text-ember transition-all duration-300 text-sm"
        >←</button>

        <div className="flex gap-1.5 items-center flex-wrap justify-center max-w-[280px]">
          {certificates.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`rounded-full transition-all duration-300 ${
                i === active ? "w-5 h-1.5 bg-ember shadow-ember" : "w-1.5 h-1.5 bg-cardLine hover:bg-ember/40"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="w-9 h-9 rounded-full border border-ink/20 flex items-center justify-center text-muted hover:border-ember hover:text-ember transition-all duration-300 text-sm"
        >→</button>
      </div>

      <p className="text-center text-[10px] uppercase tracking-widest text-muted/40 mt-5">
        {active + 1} / {total} — {certificates[active].name}
      </p>
    </section>
  );
}