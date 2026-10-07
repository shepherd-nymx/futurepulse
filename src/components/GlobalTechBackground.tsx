import React, { useEffect, useRef } from 'react';

interface ParticleNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  pulseOffset: number;
}

interface DataPulseBeam {
  axis: 'x' | 'y';
  fixedCoord: number;
  pos: number;
  speed: number;
  length: number;
  alpha: number;
  color: string;
}

interface SignalRipple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  speed: number;
}

export const GlobalTechBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const setCanvasSize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
      ctx.scale(dpr, dpr);
    };

    setCanvasSize();

    // Mouse coordinates for gentle interactive illumination
    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      targetMouseX = -1000;
      targetMouseY = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', setCanvasSize);

    // 1. Digital Constellation Micro-Nodes (Neat & Simple)
    const nodeCount = Math.max(20, Math.min(42, Math.floor(width / 36)));
    const nodes: ParticleNode[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        radius: Math.random() * 1.2 + 0.8,
        baseAlpha: Math.random() * 0.22 + 0.12,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    // 2. Data Track Pulses (Clean horizontal and vertical light packets)
    const gridSpacing = 64;
    const pulses: DataPulseBeam[] = [];
    const maxPulses = Math.min(5, Math.floor(width / 260));

    const createPulse = (): DataPulseBeam => {
      const isHorizontal = Math.random() > 0.45;
      if (isHorizontal) {
        const gridY = Math.floor(Math.random() * (height / gridSpacing)) * gridSpacing;
        return {
          axis: 'x',
          fixedCoord: gridY,
          pos: -100,
          speed: Math.random() * 1.5 + 1.2,
          length: Math.random() * 80 + 60,
          alpha: Math.random() * 0.35 + 0.25,
          color: Math.random() > 0.3 ? '#38bdf8' : '#0ea5e9',
        };
      } else {
        const gridX = Math.floor(Math.random() * (width / gridSpacing)) * gridSpacing;
        return {
          axis: 'y',
          fixedCoord: gridX,
          pos: -100,
          speed: Math.random() * 1.5 + 1.2,
          length: Math.random() * 80 + 60,
          alpha: Math.random() * 0.35 + 0.25,
          color: Math.random() > 0.3 ? '#38bdf8' : '#0ea5e9',
        };
      }
    };

    for (let i = 0; i < maxPulses; i++) {
      const p = createPulse();
      p.pos = Math.random() * (p.axis === 'x' ? width : height);
      pulses.push(p);
    }

    // 3. Periodic Signal Ripples
    const ripples: SignalRipple[] = [];
    let lastRippleTime = 0;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reducedMotion = mediaQuery.matches;
    let time = 0;

    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // Smoothly interpolate mouse coordinates
      mouseX += (targetMouseX - mouseX) * 0.08;
      mouseY += (targetMouseY - mouseY) * 0.08;

      // Subtle mouse ambient spotlight
      if (mouseX > 0 && mouseY > 0 && mouseX < width && mouseY < height) {
        const mouseGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 240);
        mouseGlow.addColorStop(0, 'rgba(56, 189, 248, 0.05)');
        mouseGlow.addColorStop(0.5, 'rgba(14, 165, 233, 0.02)');
        mouseGlow.addColorStop(1, 'rgba(14, 165, 233, 0)');
        ctx.fillStyle = mouseGlow;
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 240, 0, Math.PI * 2);
        ctx.fill();
      }

      // 4. Render Data Track Pulses (Circuit Beams)
      if (!reducedMotion) {
        for (let i = 0; i < pulses.length; i++) {
          const p = pulses[i];
          p.pos += p.speed;

          const limit = p.axis === 'x' ? width + p.length : height + p.length;
          if (p.pos > limit) {
            // Re-initialize pulse
            const fresh = createPulse();
            pulses[i] = fresh;
            continue;
          }

          if (p.axis === 'x') {
            const startX = Math.max(0, p.pos - p.length);
            const endX = Math.min(width, p.pos);
            if (endX > startX) {
              const grad = ctx.createLinearGradient(startX, p.fixedCoord, endX, p.fixedCoord);
              grad.addColorStop(0, 'rgba(56, 189, 248, 0)');
              grad.addColorStop(0.7, `rgba(56, 189, 248, ${p.alpha * 0.5})`);
              grad.addColorStop(1, `rgba(255, 255, 255, ${p.alpha})`);
              ctx.strokeStyle = grad;
              ctx.lineWidth = 1.2;
              ctx.beginPath();
              ctx.moveTo(startX, p.fixedCoord);
              ctx.lineTo(endX, p.fixedCoord);
              ctx.stroke();

              // Glowing head dot
              ctx.fillStyle = '#bae6fd';
              ctx.beginPath();
              ctx.arc(endX, p.fixedCoord, 1.2, 0, Math.PI * 2);
              ctx.fill();
            }
          } else {
            const startY = Math.max(0, p.pos - p.length);
            const endY = Math.min(height, p.pos);
            if (endY > startY) {
              const grad = ctx.createLinearGradient(p.fixedCoord, startY, p.fixedCoord, endY);
              grad.addColorStop(0, 'rgba(56, 189, 248, 0)');
              grad.addColorStop(0.7, `rgba(56, 189, 248, ${p.alpha * 0.5})`);
              grad.addColorStop(1, `rgba(255, 255, 255, ${p.alpha})`);
              ctx.strokeStyle = grad;
              ctx.lineWidth = 1.2;
              ctx.beginPath();
              ctx.moveTo(p.fixedCoord, startY);
              ctx.lineTo(p.fixedCoord, endY);
              ctx.stroke();

              // Glowing head dot
              ctx.fillStyle = '#bae6fd';
              ctx.beginPath();
              ctx.arc(p.fixedCoord, endY, 1.2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      // 5. Signal Ripple Waves (Periodic expanding radar/pulse rings)
      if (!reducedMotion && time - lastRippleTime > 4.5) {
        lastRippleTime = time;
        ripples.push({
          x: width * 0.5,
          y: height * 0.45,
          radius: 10,
          maxRadius: Math.min(width, height) * 0.45,
          alpha: 0.18,
          speed: 1.1,
        });
      }

      for (let i = ripples.length - 1; i >= 0; i--) {
        const rip = ripples[i];
        rip.radius += rip.speed;
        const progress = rip.radius / rip.maxRadius;
        rip.alpha = (1 - progress) * 0.16;

        if (progress >= 1) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.strokeStyle = `rgba(56, 189, 248, ${rip.alpha})`;
        ctx.lineWidth = 0.85;
        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 6. Render Micro-Nodes & Hairline Constellation
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        if (!reducedMotion) {
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0) node.x = width;
          if (node.x > width) node.x = 0;
          if (node.y < 0) node.y = height;
          if (node.y > height) node.y = 0;
        }

        const breathingAlpha = node.baseAlpha + Math.sin(time * 1.4 + node.pulseOffset) * 0.06;
        const finalAlpha = Math.max(0.06, Math.min(0.38, breathingAlpha));

        // Delicate outer halo
        ctx.fillStyle = `rgba(56, 189, 248, ${finalAlpha * 0.25})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2.2, 0, Math.PI * 2);
        ctx.fill();

        // Core dot
        ctx.fillStyle = `rgba(224, 242, 254, ${finalAlpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby nodes with razor-thin hairlines
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 115) {
            const lineAlpha = (1 - dist / 115) * 0.065;
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = 0.65;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Reaction to mouse proximity
        if (mouseX > 0 && mouseY > 0) {
          const mdx = node.x - mouseX;
          const mdy = node.y - mouseY;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 130) {
            const malpha = (1 - mdist / 130) * 0.18;
            ctx.strokeStyle = `rgba(56, 189, 248, ${malpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mouseX, mouseY);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#05070B]"
      aria-hidden="true"
    >
      {/* 1. Deep, luminous ambient auroras (ultra-smooth floating gradients) */}
      <div className="absolute top-[8%] left-[18%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[160px] animate-ambient-1 pointer-events-none" />
      <div className="absolute bottom-[18%] right-[12%] w-[550px] h-[550px] rounded-full bg-sky-500/8 blur-[150px] animate-ambient-2 pointer-events-none" />
      <div className="absolute top-[52%] left-[8%] w-[500px] h-[500px] rounded-full bg-indigo-600/7 blur-[170px] animate-ambient-3 pointer-events-none" />
      <div className="absolute top-[80%] right-[30%] w-[450px] h-[450px] rounded-full bg-blue-500/6 blur-[150px] animate-ambient-1 pointer-events-none" />

      {/* 2. Neat geometric coordinate grid with subtle radial vignette mask */}
      <div className="absolute inset-0 tech-grid-neat opacity-80 pointer-events-none" />

      {/* 3. Subtle slow scanning optical line */}
      <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/25 to-transparent pointer-events-none animate-[pulseScanLine_18s_linear_infinite]" />

      {/* 4. Canvas rendering nodes, network hairlines, and data track beams */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
    </div>
  );
};
