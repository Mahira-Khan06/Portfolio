"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 2200;
const CUBE_SIZE = 2.2;

function ParticleCube() {
  const meshRef = useRef();
  const drag = useRef({ active: false, prevX: 0, prevY: 0 });
  // store angular velocity as axis components
  const angVel = useRef({ x: 0, y: 0 });
  const mouseWorld = useRef(new THREE.Vector3(999, 999, 999));
  const { gl, camera } = useThree();

  const { origins, positions, colors } = useMemo(() => {
    const origins   = new Float32Array(COUNT * 3);
    const positions = new Float32Array(COUNT * 3);
    const colors    = new Float32Array(COUNT * 3);

    const colA = new THREE.Color("#ff2b43");
    const colB = new THREE.Color("#cc1a2e");
    const colC = new THREE.Color("#8a0010");
    const colD = new THREE.Color("#f3e9d8");

    for (let i = 0; i < COUNT; i++) {
      const surface = Math.random() < 0.65;
      let x, y, z;
      if (surface) {
        const face = Math.floor(Math.random() * 6);
        const u = (Math.random() - 0.5) * CUBE_SIZE;
        const v = (Math.random() - 0.5) * CUBE_SIZE;
        const h = CUBE_SIZE / 2;
        if      (face === 0) { x =  h; y = u; z = v; }
        else if (face === 1) { x = -h; y = u; z = v; }
        else if (face === 2) { x = u; y =  h; z = v; }
        else if (face === 3) { x = u; y = -h; z = v; }
        else if (face === 4) { x = u; y = v; z =  h; }
        else                 { x = u; y = v; z = -h; }
      } else {
        x = (Math.random() - 0.5) * CUBE_SIZE;
        y = (Math.random() - 0.5) * CUBE_SIZE;
        z = (Math.random() - 0.5) * CUBE_SIZE;
      }

      origins[i * 3]     = x;
      origins[i * 3 + 1] = y;
      origins[i * 3 + 2] = z;
      positions[i * 3]     = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const r   = Math.random();
      const col = r < 0.55 ? colA : r < 0.78 ? colB : r < 0.93 ? colC : colD;
      colors[i * 3]     = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }
    return { origins, positions, colors };
  }, []);

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("color",    new THREE.BufferAttribute(colors,    3));
    return g;
  }, [positions, colors]);

  // Start at a tilted angle so you immediately see it's 3D
  useEffect(() => {
    if (!meshRef.current) return;
    const q = new THREE.Quaternion();
    q.setFromEuler(new THREE.Euler(0.4, 0.6, 0.15));
    meshRef.current.quaternion.copy(q);
  }, []);

  useEffect(() => {
    const canvas = gl.domElement;

    const onDown = (e) => {
      drag.current.active = true;
      drag.current.prevX = e.clientX ?? e.touches?.[0]?.clientX;
      drag.current.prevY = e.clientY ?? e.touches?.[0]?.clientY;
    };
    const onUp = () => { drag.current.active = false; };

    const onMove = (e) => {
      const cx = e.clientX ?? e.touches?.[0]?.clientX;
      const cy = e.clientY ?? e.touches?.[0]?.clientY;

      const rect = canvas.getBoundingClientRect();
      const nx   = ((cx - rect.left) / rect.width)  * 2 - 1;
      const ny   = -((cy - rect.top) / rect.height) * 2 + 1;
      const vec  = new THREE.Vector3(nx, ny, 0.5).unproject(camera);
      vec.sub(camera.position).normalize();
      const d = -camera.position.z / vec.z;
      mouseWorld.current.copy(camera.position).addScaledVector(vec, d);

      if (drag.current.active) {
        const dx = cx - drag.current.prevX;
        const dy = cy - drag.current.prevY;
        // accumulate velocity on both axes
        angVel.current.y += dx * 0.009;
        angVel.current.x += dy * 0.009;
        drag.current.prevX = cx;
        drag.current.prevY = cy;
      }
    };

    canvas.addEventListener("mousedown",  onDown);
    canvas.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("mouseup",    onUp);
    window.addEventListener("touchend",   onUp);
    window.addEventListener("mousemove",  onMove);
    window.addEventListener("touchmove",  onMove, { passive: true });

    return () => {
      canvas.removeEventListener("mousedown",  onDown);
      canvas.removeEventListener("touchstart", onDown);
      window.removeEventListener("mouseup",    onUp);
      window.removeEventListener("touchend",   onUp);
      window.removeEventListener("mousemove",  onMove);
      window.removeEventListener("touchmove",  onMove);
    };
  }, [gl, camera]);

  const _qX = new THREE.Quaternion();
  const _qY = new THREE.Quaternion();
  const _axisX = new THREE.Vector3(1, 0, 0);
  const _axisY = new THREE.Vector3(0, 1, 0);

  useFrame(() => {
    if (!meshRef.current) return;

    const t = Date.now() * 0.001;

    // --- quaternion-based rotation so X + Y both work in true 3D ---
    const spinY = drag.current.active ? angVel.current.y : angVel.current.y + 0.003;
    const spinX = drag.current.active ? angVel.current.x : angVel.current.x + 0.0012;

    _qY.setFromAxisAngle(_axisY, spinY);
    _qX.setFromAxisAngle(_axisX, spinX);

    // apply in world space so dragging feels natural from any angle
    meshRef.current.quaternion.premultiply(_qY);
    meshRef.current.quaternion.premultiply(_qX);

    // dampen velocity
    angVel.current.y *= 0.87;
    angVel.current.x *= 0.87;

    const localMouse = mouseWorld.current.clone()
      .applyQuaternion(meshRef.current.quaternion.clone().invert());

    const pos = meshRef.current.geometry.attributes.position;

    for (let i = 0; i < COUNT; i++) {
      const ox = origins[i * 3];
      const oy = origins[i * 3 + 1];
      const oz = origins[i * 3 + 2];

      const wave = Math.sin(t * 1.1 + i * 0.007) * 0.04;

      const dx = ox - localMouse.x;
      const dy = oy - localMouse.y;
      const dz = oz - localMouse.z;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      const burstR = 0.75;
      const burst  = dist < burstR ? ((burstR - dist) / burstR) * 0.55 : 0;
      const inv    = 1 / (dist + 0.001);

      pos.setXYZ(
        i,
        ox + wave * (ox / CUBE_SIZE) + (burst > 0 ? dx * inv * burst : 0),
        oy + wave * (oy / CUBE_SIZE) + (burst > 0 ? dy * inv * burst : 0),
        oz + wave * (oz / CUBE_SIZE) + (burst > 0 ? dz * inv * burst : 0),
      );
    }
    pos.needsUpdate = true;
  });

  return (
    <points ref={meshRef} geometry={geo}>
      <pointsMaterial
        size={0.028}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        toneMapped={false}
      />
    </points>
  );
}

export default function ParticleCubeScene() {
  return (
    <div className="absolute inset-0 z-0 cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 48 }}>
        <ParticleCube />
      </Canvas>
    </div>
  );
}