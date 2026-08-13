"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ParticleCube = dynamic(() => import("./ParticleCube"), { ssr: false });

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ParticleCube />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center pt-20">

        <div className="text-center md:text-left">
          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={0.3}
            className="section-eyebrow mb-6"
          >
            Full-stack developer · ADGIPS, Delhi
          </motion.p>

          <motion.h1
            variants={fadeUp} initial="hidden" animate="show" custom={0.5}
            className="section-title text-[clamp(40px,6.5vw,84px)] leading-[1.02]"
          >
            Mahira <span className="glow-text">Khan</span>
          </motion.h1>

          <motion.p
            variants={fadeUp} initial="hidden" animate="show" custom={0.8}
            className="mt-6 max-w-md mx-auto md:mx-0 text-muted text-[17px] leading-relaxed"
          >
            I build fast, real-time, full-stack web experiences — from
            collaborative tools to AI-assisted platforms — with clean
            architecture and a little bit of fire.
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" animate="show" custom={1.05}
            className="mt-10 flex flex-wrap justify-center md:justify-start gap-5"
          >
            <a
              href="#work"
              className="px-9 py-4 text-xs uppercase tracking-widest font-semibold bg-ember text-bg shadow-ember hover:shadow-emberStrong hover:-translate-y-0.5 transition-all duration-300"
            >
              View work
            </a>
            <a
              href="/Resume_final1.pdf"
              className="px-9 py-4 text-xs uppercase tracking-widest font-semibold border border-ink/20 hover:border-ember hover:text-ember transition-all duration-300"
            >
              Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease: "easeOut" }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px]">

            <div className="absolute inset-[-60px] rounded-full bg-ember/10 blur-[90px] pointer-events-none" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-10px] rounded-full pointer-events-none"
              style={{
                border: "1px dashed rgba(255,43,67,0.3)",
              }}
            />

            <div
              className="absolute inset-[-3px] rounded-full pointer-events-none"
              style={{
                border: "1.5px solid rgba(255,43,67,0.5)",
                boxShadow: "0 0 20px rgba(255,43,67,0.2)",
              }}
            />

            {/* photo circle */}
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src="/pfp.png"
                alt="Mahira Khan"
                className="w-full h-full object-cover"
                style={{ objectPosition: "top" }}
              />

            </div>

            <div
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-5 py-2 flex items-center gap-2.5 whitespace-nowrap"
              style={{
                background: "linear-gradient(135deg, rgba(255,43,67,0.12), rgba(10,2,4,0.92))",
                border: "1px solid rgba(255,43,67,0.2)",
                borderRadius: "999px",
                backdropFilter: "blur(10px)",
              }}
            >
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ember opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-ember" />
              </span>
              <p className="font-display text-sm text-ink tracking-wide">Mahira Khan</p>
              <span className="text-[10px] text-ember/70 tracking-widest uppercase">Dev</span>
            </div>

            {/*tech tags */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-14 top-[30%] px-3 py-1.5 text-[10px] uppercase tracking-widest text-ink/80"
              style={{
                background: "rgba(255,43,67,0.1)",
                border: "1px solid rgba(255,43,67,0.25)",
                borderRadius: "999px",
                backdropFilter: "blur(8px)",
              }}
            >
              Next.js
            </motion.div>

            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute -right-12 top-[25%] px-3 py-1.5 text-[10px] uppercase tracking-widest text-ink/80"
              style={{
                background: "rgba(255,43,67,0.1)",
                border: "1px solid rgba(255,43,67,0.25)",
                borderRadius: "999px",
                backdropFilter: "blur(8px)",
              }}
            >
              React
            </motion.div>

            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
              className="absolute -right-14 top-[50%] px-3 py-1.5 text-[10px] uppercase tracking-widest text-ink/80"
              style={{
                background: "rgba(255,43,67,0.1)",
                border: "1px solid rgba(255,43,67,0.25)",
                borderRadius: "999px",
                backdropFilter: "blur(8px)",
              }}
            >
              Node.js
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
              className="absolute -left-16 top-[55%] px-3 py-1.5 text-[10px] uppercase tracking-widest text-ink/80"
              style={{
                background: "rgba(255,43,67,0.1)",
                border: "1px solid rgba(255,43,67,0.25)",
                borderRadius: "999px",
                backdropFilter: "blur(8px)",
              }}
            >
              MongoDB
            </motion.div>

          </div>
        </motion.div>
      </div>

      <motion.div
        variants={fadeUp} initial="hidden" animate="show" custom={1.4}
        className="absolute bottom-9 left-1/2 -translate-x-1/2 text-[11px] tracking-[3px] uppercase text-muted z-10"
      >
        Scroll
        <div className="w-px h-9 mx-auto mt-2.5 bg-gradient-to-b from-ember to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}