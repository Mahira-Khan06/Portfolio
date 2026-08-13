"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(0, to, {
        duration: 1.4,
        onUpdate: (v) => setVal(Math.round(v * 10) / 10),
      });
      return () => controls.stop();
    }
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

const semesters = [
  { sem: "Sem 1", gpa: 7.8 },
  { sem: "Sem 2", gpa: 9.08 },
  { sem: "Sem 3", gpa: 8.34 },
  { sem: "Sem 4", gpa: 9.1 },
];

export default function Stats() {
  return (
    <section className="relative z-10 px-6 md:px-16 py-32">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="section-eyebrow text-center"
      >
        Numbers
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title text-center text-5xl mt-3 mb-16"
      >
        By the numbers
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
        <div className="card-border p-8 text-center">
          <p className="font-display text-5xl text-ember glow-text">
            <Counter to={180} suffix= "+" />
          </p>
          <p className="text-xs uppercase tracking-widest text-muted mt-3">
            LeetCode solved
          </p>
        </div>
        <div className="card-border p-8 text-center">
          <p className="font-display text-5xl text-ember2">
            <Counter to={1000} suffix="+" />
          </p>
          <p className="text-xs uppercase tracking-widest text-muted mt-3">
            GitHub commits
          </p>
        </div>
        <div className="card-border p-8 text-center">
          <p className="font-display text-5xl text-gold">
            <Counter to={8.58} />
          </p>
          <p className="text-xs uppercase tracking-widest text-muted mt-3">
            CGPA
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h3 className="text-xs uppercase tracking-widest text-ember2 mb-6 text-center">
          Semester grades
        </h3>
        <div className="grid grid-cols-4 gap-4">
          {semesters.map((s, i) => (
            <motion.div
              key={s.sem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-border p-5 text-center"
            >
              <p className="font-display text-2xl text-ink">{s.gpa || "—"}</p>
              <p className="text-[11px] uppercase tracking-widest text-muted mt-2">
                {s.sem}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
