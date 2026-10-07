import React, { useEffect, useRef } from 'react';

interface PulseRing {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  alpha: number;
}

export const PulseCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    const setCanvasSize = () => {
      const parent = canvas.parentElement;
      width = parent?.clientWidth || window.innerWidth;
      height = parent?.clientHeight || window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Continuous pulse progress (0 to 1)
    let pulseProgress = 0;
    const pulseSpeed = 0.0016;

    // Pulse expanding rings
    const rings: PulseRing[] = [];
    let lastRingProgress = 0;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const reducedMotion = mediaQuery.matches;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (!reducedMotion) {
        pulseProgress = (pulseProgress + pulseSpeed) % 1;
      }

      // Vertical placement of the signature pulse line
      const centerY = height * 0.65;
      const pulseHeadX = pulseProgress * (width + 360) - 180;

      // 1. Crisp datum baseline with micro tick marks
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();

      // Tick marks along baseline
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.08)';
      ctx.lineWidth = 0.75;
      ctx.beginPath();
      for (let tx = 40; tx < width; tx += 48) {
        ctx.moveTo(tx, centerY - 3);
        ctx.lineTo(tx, centerY + 3);
      }
      ctx.stroke();

      // 2. Spawn periodic expanding radar rings from the pulse beacon
      if (!reducedMotion && Math.abs(pulseProgress - lastRingProgress) > 0.08) {
        lastRingProgress = pulseProgress;
        if (pulseHeadX > 0 && pulseHeadX < width) {
          rings.push({
            x: pulseHeadX,
            y: centerY,
            radius: 4,
            maxRadius: 42,
            alpha: 0.45,
          });
        }
      }

      // Render expanding rings
      for (let i = rings.length - 1; i >= 0; i--) {
        const ring = rings[i];
        ring.radius += 0.8;
        const prog = ring.radius / ring.maxRadius;
        ring.alpha = (1 - prog) * 0.35;

        if (prog >= 1) {
          rings.splice(i, 1);
          continue;
        }

        ctx.strokeStyle = `rgba(56, 189, 248, ${ring.alpha})`;
        ctx.lineWidth = 0.85;
        ctx.beginPath();
        ctx.arc(ring.x, ring.y, ring.radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 3. Primary Technological Pulse Waveform
      const waveLength = 220;
      const waveStartX = Math.max(0, pulseHeadX - waveLength);
      const waveEndX = Math.min(width, pulseHeadX + 20);

      if (waveEndX > waveStartX) {
        // Area under wave (subtle ambient glow fill)
        ctx.beginPath();
        ctx.moveTo(waveStartX, centerY);

        for (let x = waveStartX; x <= waveEndX; x += 3) {
          const distFromHead = pulseHeadX - x;
          let yOffset = 0;

          if (distFromHead > 0 && distFromHead < waveLength) {
            const t = distFromHead / waveLength;
            if (t > 0.42 && t < 0.6) {
              const peakT = (t - 0.42) / 0.18;
              yOffset = Math.sin(peakT * Math.PI) * -58; // Primary R-spike
            } else if (t >= 0.6 && t < 0.72) {
              const peakT = (t - 0.6) / 0.12;
              yOffset = Math.sin(peakT * Math.PI) * 22; // S-dip
            } else if (t > 0.18 && t < 0.38) {
              const peakT = (t - 0.18) / 0.2;
              yOffset = Math.sin(peakT * Math.PI) * -12; // P-wave
            } else if (t >= 0.74 && t < 0.94) {
              const peakT = (t - 0.74) / 0.2;
              yOffset = Math.sin(peakT * Math.PI) * -16; // T-wave
            }
          }

          ctx.lineTo(x, centerY + yOffset);
        }

        ctx.lineTo(waveEndX, centerY);
        ctx.closePath();

        const fillGrad = ctx.createLinearGradient(waveStartX, centerY - 60, waveEndX, centerY);
        fillGrad.addColorStop(0, 'rgba(14, 165, 233, 0)');
        fillGrad.addColorStop(0.6, 'rgba(14, 165, 233, 0.08)');
        fillGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
        ctx.fillStyle = fillGrad;
        ctx.fill();

        // Wave stroke line with luminous gradient
        ctx.beginPath();
        for (let x = waveStartX; x <= waveEndX; x += 3) {
          const distFromHead = pulseHeadX - x;
          let yOffset = 0;

          if (distFromHead > 0 && distFromHead < waveLength) {
            const t = distFromHead / waveLength;
            if (t > 0.42 && t < 0.6) {
              const peakT = (t - 0.42) / 0.18;
              yOffset = Math.sin(peakT * Math.PI) * -58;
            } else if (t >= 0.6 && t < 0.72) {
              const peakT = (t - 0.6) / 0.12;
              yOffset = Math.sin(peakT * Math.PI) * 22;
            } else if (t > 0.18 && t < 0.38) {
              const peakT = (t - 0.18) / 0.2;
              yOffset = Math.sin(peakT * Math.PI) * -12;
            } else if (t >= 0.74 && t < 0.94) {
              const peakT = (t - 0.74) / 0.2;
              yOffset = Math.sin(peakT * Math.PI) * -16;
            }
          }

          if (x === waveStartX) {
            ctx.moveTo(x, centerY + yOffset);
          } else {
            ctx.lineTo(x, centerY + yOffset);
          }
        }

        const waveGrad = ctx.createLinearGradient(waveStartX, centerY, waveEndX, centerY);
        waveGrad.addColorStop(0, 'rgba(56, 189, 248, 0)');
        waveGrad.addColorStop(0.4, 'rgba(14, 165, 233, 0.45)');
        waveGrad.addColorStop(0.85, 'rgba(56, 189, 248, 0.9)');
        waveGrad.addColorStop(1, 'rgba(255, 255, 255, 1)');

        ctx.strokeStyle = waveGrad;
        ctx.lineWidth = 1.6;
        ctx.stroke();

        // 4. Secondary Faint Mirrored Harmonic Wave (Depth & Holographic Elegance)
        ctx.beginPath();
        for (let x = waveStartX; x <= waveEndX; x += 4) {
          const distFromHead = pulseHeadX - x;
          let mirrorYOffset = 0;

          if (distFromHead > 0 && distFromHead < waveLength) {
            const t = distFromHead / waveLength;
            if (t > 0.42 && t < 0.6) {
              const peakT = (t - 0.42) / 0.18;
              mirrorYOffset = Math.sin(peakT * Math.PI) * 24; // inverted shallow harmonic
            } else if (t >= 0.6 && t < 0.72) {
              const peakT = (t - 0.6) / 0.12;
              mirrorYOffset = Math.sin(peakT * Math.PI) * -8;
            }
          }

          if (x === waveStartX) {
            ctx.moveTo(x, centerY + mirrorYOffset);
          } else {
            ctx.lineTo(x, centerY + mirrorYOffset);
          }
        }
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.18)';
        ctx.lineWidth = 0.9;
        ctx.stroke();
      }

      // 5. Leading Glowing Beacon Point
      if (pulseHeadX >= 0 && pulseHeadX <= width) {
        // Outer glow
        const beaconGlow = ctx.createRadialGradient(pulseHeadX, centerY, 0, pulseHeadX, centerY, 16);
        beaconGlow.addColorStop(0, 'rgba(56, 189, 248, 0.9)');
        beaconGlow.addColorStop(0.4, 'rgba(14, 165, 233, 0.4)');
        beaconGlow.addColorStop(1, 'rgba(14, 165, 233, 0)');
        ctx.fillStyle = beaconGlow;
        ctx.beginPath();
        ctx.arc(pulseHeadX, centerY, 16, 0, Math.PI * 2);
        ctx.fill();

        // Core bright spark
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(pulseHeadX, centerY, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }

      // 6. Subtle Technological Monospace Telemetry Indicators
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.fillStyle = 'rgba(148, 163, 184, 0.28)';

      if (width > 640) {
        ctx.fillText('SIGNAL // 104.2 MHz', 40, centerY - 12);
        ctx.fillText('HARARE [17.82° S, 31.05° E]', width / 2 - 80, centerY - 12);
        ctx.fillText('SYSTEM // ONLINE', width - 180, centerY - 12);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full opacity-85"
      aria-hidden="true"
    />
  );
};
