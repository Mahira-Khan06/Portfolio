"use client";

import { useEffect, useRef } from "react";

const BUTTERFLY_COUNT = 25;

function createButterfly(canvasWidth, canvasHeight) {
  return {
    x: Math.random() * canvasWidth,
    y: Math.random() * canvasHeight,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.3 - 0.1,
    size: Math.random() * 18 + 12,
    wingAngle: Math.random() * Math.PI * 2,
    wingSpeed: Math.random() * 0.04 + 0.025,
    opacity: Math.random() * 0.5 + 0.35,
    glowIntensity: Math.random() * 0.4 + 0.6,
    driftOffset: Math.random() * Math.PI * 2,
    driftSpeed: Math.random() * 0.008 + 0.004,
    // strictly red palette only
    col: Math.random() < 0.7 ? "255,20,55" : Math.random() < 0.7 ? "200,10,35" : "255,60,80",
  };
}

function drawButterfly(ctx, b, t) {
  const { x, y, size, wingAngle, opacity, col, glowIntensity } = b;
  const flap = Math.abs(Math.sin(wingAngle));

  ctx.save();
  ctx.translate(x, y);

  // outer glow
  ctx.shadowBlur = 18 * glowIntensity;
  ctx.shadowColor = `rgba(${col},${opacity})`;

  // LEFT wing
  ctx.save();
  ctx.scale(-flap, 1);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(-size * 0.9, -size * 0.7, -size * 1.2, -size * 0.2, -size * 0.5, size * 0.3);
  ctx.bezierCurveTo(-size * 0.3, size * 0.55, 0, size * 0.2, 0, 0);
  ctx.fillStyle = `rgba(${col},${opacity * 0.55})`;
  ctx.fill();

  // wing veins left
  ctx.strokeStyle = `rgba(${col},${opacity * 0.9})`;
  ctx.lineWidth = 0.7;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(-size * 0.5, -size * 0.3, -size * 0.8, -size * 0.1, -size * 0.5, size * 0.3);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, -size * 0.1);
  ctx.bezierCurveTo(-size * 0.4, -size * 0.5, -size * 0.9, -size * 0.3, -size * 0.7, size * 0.1);
  ctx.stroke();

  // lower left wing
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(-size * 0.6, size * 0.2, -size * 0.7, size * 0.7, -size * 0.2, size * 0.65);
  ctx.bezierCurveTo(-size * 0.05, size * 0.6, 0, size * 0.3, 0, 0);
  ctx.fillStyle = `rgba(${col},${opacity * 0.45})`;
  ctx.fill();
  ctx.restore();

  // RIGHT wing
  ctx.save();
  ctx.scale(flap, 1);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(size * 0.9, -size * 0.7, size * 1.2, -size * 0.2, size * 0.5, size * 0.3);
  ctx.bezierCurveTo(size * 0.3, size * 0.55, 0, size * 0.2, 0, 0);
  ctx.fillStyle = `rgba(${col},${opacity * 0.55})`;
  ctx.fill();

  ctx.strokeStyle = `rgba(${col},${opacity * 0.9})`;
  ctx.lineWidth = 0.7;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(size * 0.5, -size * 0.3, size * 0.8, -size * 0.1, size * 0.5, size * 0.3);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, -size * 0.1);
  ctx.bezierCurveTo(size * 0.4, -size * 0.5, size * 0.9, -size * 0.3, size * 0.7, size * 0.1);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.bezierCurveTo(size * 0.6, size * 0.2, size * 0.7, size * 0.7, size * 0.2, size * 0.65);
  ctx.bezierCurveTo(size * 0.05, size * 0.6, 0, size * 0.3, 0, 0);
  ctx.fillStyle = `rgba(${col},${opacity * 0.45})`;
  ctx.fill();
  ctx.restore();

  // body
  ctx.beginPath();
  ctx.ellipse(0, size * 0.1, size * 0.06, size * 0.35, 0, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(${col},${opacity})`;
  ctx.fill();

  // antennae
  ctx.strokeStyle = `rgba(${col},${opacity * 0.7})`;
  ctx.lineWidth = 0.6;
  ctx.beginPath();
  ctx.moveTo(0, -size * 0.1);
  ctx.quadraticCurveTo(-size * 0.3, -size * 0.6, -size * 0.4, -size * 0.75);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(0, -size * 0.1);
  ctx.quadraticCurveTo(size * 0.3, -size * 0.6, size * 0.4, -size * 0.75);
  ctx.stroke();

  ctx.restore();
}

export default function Butterflies() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let butterflies = [];
    let raf;

    function getPageHeight() {
      return Math.max(document.body.scrollHeight, window.innerHeight);
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = getPageHeight();
      butterflies = Array.from({ length: BUTTERFLY_COUNT }, () =>
        createButterfly(canvas.width, canvas.height)
      );
    }
    resize();

    const timers = [300, 800, 1600, 3000].map(ms => setTimeout(resize, ms));
    const ro = new ResizeObserver(resize);
    ro.observe(document.body);
    window.addEventListener("resize", resize);

    let t = 0;
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      t += 0.016;

      butterflies.forEach((b) => {
        b.wingAngle += b.wingSpeed;
        b.x += b.vx + Math.sin(t * b.driftSpeed + b.driftOffset) * 0.25;
        b.y += b.vy + Math.cos(t * b.driftSpeed * 0.7 + b.driftOffset) * 0.18;

        if (b.x < -60) b.x = canvas.width + 40;
        if (b.x > canvas.width + 60) b.x = -40;
        if (b.y < -60) b.y = canvas.height + 40;
        if (b.y > canvas.height + 60) b.y = -40;

        drawButterfly(ctx, b, t);
      });

      raf = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      ro.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full pointer-events-none z-[1]"
    />
  );
}
