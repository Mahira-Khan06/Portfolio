"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const trailRef = useRef([]);
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -200, y: -200 });
  const ring = useRef({ x: -200, y: -200 });
  const hovering = useRef(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ringEl = ringRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function onMove(e) {
      mouse.current = { x: e.clientX, y: e.clientY };
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";

      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        life: 1,
        r: Math.random() * 2 + 1,
        color:
          Math.random() < 0.6
            ? "255,43,67"
            : Math.random() < 0.8
            ? "200,10,35"
            : "255,60,80",
      });
      if (trailRef.current.length > 28) trailRef.current.shift();
    }

    function onEnter(e) {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.closest("a") ||
        e.target.closest("button")
      ) {
        hovering.current = true;
      }
    }

    function onLeave() {
      hovering.current = false;
    }

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      ringEl.style.left = ring.current.x + "px";
      ringEl.style.top = ring.current.y + "px";
      const scale = hovering.current ? 1.7 : 1;
      ringEl.style.transform = `translate(-50%,-50%) scale(${scale})`;

      for (let i = trailRef.current.length - 1; i >= 0; i--) {
        const p = trailRef.current[i];
        p.life -= 0.055;
        if (p.life <= 0) { trailRef.current.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * p.life, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.life * 0.7})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(${p.color},${p.life})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <style>{`* { cursor: none !important; }`}</style>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9998]"
      />
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] w-2 h-2 rounded-full bg-ember shadow-ember -translate-x-1/2 -translate-y-1/2"
        style={{ boxShadow: "0 0 8px #ff2b43, 0 0 20px rgba(255,43,67,0.5)" }}
      />
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9997] w-8 h-8 rounded-full border border-ember/60 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200"
        style={{ boxShadow: "0 0 10px rgba(255,43,67,0.3)" }}
      />
    </>
  );
}
