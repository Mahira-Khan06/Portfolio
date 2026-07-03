"use client";

import { useEffect, useRef } from "react";

export default function EmberField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let raf;

    function getPageHeight() {
      return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        window.innerHeight
      );
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = getPageHeight();
    }
    resize();

    const retimers = [100, 400, 1000, 2000].map((ms) =>
      setTimeout(resize, ms)
    );

    const ro = new ResizeObserver(resize);
    ro.observe(document.body);
    window.addEventListener("resize", resize);

    const colors = ["255,43,67", "200,10,35", "180,0,20"];

    function spawn() {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height + canvas.height * 0.02,
        r: Math.random() * 1.8 + 0.6,
        speed: Math.random() * 0.5 + 0.15,
        drift: (Math.random() - 0.5) * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: Math.random() * 0.6 + 0.4,
      });
    }

    for (let i = 0; i < 550; i++) spawn();

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (particles.length < 260) spawn();
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.y -= p.speed;
        p.x += p.drift;
        p.life -= 0.0015;
        if (p.life <= 0 || p.y < -10) {
          particles.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.life * 0.7})`;
        ctx.shadowBlur = 7;
        ctx.shadowColor = `rgba(${p.color},${p.life})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(raf);
      retimers.forEach(clearTimeout);
      ro.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full pointer-events-none z-0"
    />
  );
}
