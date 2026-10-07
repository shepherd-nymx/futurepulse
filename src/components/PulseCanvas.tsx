import React, { useEffect, useRef } from 'react';

export const PulseCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes for subtle circuit network
    const nodeCount = Math.min(36, Math.floor(width / 35));
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
    }

    const nodes: Node[] = [];
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 1.5 + 1,
        baseAlpha: Math.random() * 0.25 + 0.1,
      });
    }

    // Pulse wave progress (0 to 1)
    let pulseProgress = 0;
    const pulseSpeed = 0.0018;

    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reducedMotion = mediaQuery.matches;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle circuit nodes and connective hairline lines
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

        ctx.fillStyle = `rgba(148, 163, 184, ${node.baseAlpha})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby nodes with subtle hairlines
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.08;
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }
      }

      // 2. Continuous horizontal engineering pulse wave line
      if (!reducedMotion) {
        pulseProgress = (pulseProgress + pulseSpeed) % 1;
      }

      const centerY = height * 0.62;
      const pulseHeadX = pulseProgress * (width + 300) - 150;

      // Draw faint baseline
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();

      // Draw dynamic pulse wave
      ctx.beginPath();
      ctx.lineWidth = 1.5;

      const gradient = ctx.createLinearGradient(
        Math.max(0, pulseHeadX - 250),
        centerY,
        Math.min(width, pulseHeadX + 50),
        centerY
      );
      gradient.addColorStop(0, 'rgba(56, 189, 248, 0)');
      gradient.addColorStop(0.5, 'rgba(14, 165, 233, 0.45)');
      gradient.addColorStop(0.9, 'rgba(56, 189, 248, 0.85)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.95)');

      ctx.strokeStyle = gradient;

      for (let x = 0; x < width; x += 3) {
        const distFromHead = pulseHeadX - x;
        let y = centerY;

        // Waveform profile simulating electronic pulse heartbeat
        if (distFromHead > 0 && distFromHead < 180) {
          const t = distFromHead / 180;
          // P-Q-R-S-T like waveform spike
          if (t > 0.4 && t < 0.6) {
            const peakT = (t - 0.4) / 0.2;
            y += Math.sin(peakT * Math.PI) * -55; // sharp R spike
          } else if (t >= 0.6 && t < 0.7) {
            const peakT = (t - 0.6) / 0.1;
            y += Math.sin(peakT * Math.PI) * 20; // S dip
          } else if (t > 0.15 && t < 0.35) {
            const peakT = (t - 0.15) / 0.2;
            y += Math.sin(peakT * Math.PI) * -14; // P wave
          } else if (t >= 0.75 && t < 0.95) {
            const peakT = (t - 0.75) / 0.2;
            y += Math.sin(peakT * Math.PI) * -16; // T wave
          }
        }

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Lead pulse glowing node
      if (pulseHeadX >= 0 && pulseHeadX <= width) {
        ctx.fillStyle = '#38bdf8';
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(pulseHeadX, centerY, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full opacity-70"
      aria-hidden="true"
    />
  );
};
