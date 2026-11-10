import React, { useEffect, useRef } from "react";

/** Original wire sculpture. One canvas, capped pixel ratio, paused offscreen. */
export function SignalCore({ compact = false }: { compact?: boolean } = {}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let size = 0,
      frame = 0,
      visible = true,
      last = 0,
      phase = 0;
    const draw = (time: number) => {
      if (!size) return;
      ctx.clearRect(0, 0, size, size);
      const angle = phase,
        tilt = 0.7;
      const project = (u: number, v: number) => {
        const radius = 1 + 0.38 * Math.cos(v);
        const x = radius * Math.cos(u),
          y = radius * Math.sin(u),
          z = 0.38 * Math.sin(v);
        const rx = x * Math.cos(angle) + z * Math.sin(angle);
        const rz = -x * Math.sin(angle) + z * Math.cos(angle);
        const ry = y * Math.cos(tilt) - rz * Math.sin(tilt);
        const depth = y * Math.sin(tilt) + rz * Math.cos(tilt);
        const perspective = 3.8 / (3.8 - depth);
        return [
          size / 2 + rx * size * 0.255 * perspective,
          size / 2 + ry * size * 0.255 * perspective,
          depth,
        ];
      };
      const rings = compact ? 18 : 40;
      const segments = compact ? 48 : 84;
      for (let ring = 0; ring < rings; ring++) {
        ctx.beginPath();
        let depth = 0;
        for (let point = 0; point <= segments; point++) {
          const [x, y, z] = project(
            (ring / rings) * Math.PI * 2,
            (point / segments) * Math.PI * 2,
          );
          depth += z;
          if (!point) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        const alpha =
          (compact ? 0.4 : 0.22) + (depth / (segments + 1) + 1.4) * 0.15;
        ctx.strokeStyle = `rgba(180,165,255,${alpha})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
      }
      const crossRings = compact ? 6 : 12;
      for (let ring = 0; ring < crossRings; ring++) {
        ctx.beginPath();
        for (let point = 0; point <= 100; point++) {
          const [x, y] = project(
            (point / 100) * Math.PI * 2,
            (ring / crossRings) * Math.PI * 2,
          );
          if (!point) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = compact
          ? "rgba(219,210,255,.45)"
          : "rgba(219,210,255,.20)";
        ctx.lineWidth = 0.6;
        ctx.stroke();
      }
    };
    const tick = (time: number) => {
      if (!visible || document.hidden || media.matches) {
        frame = 0;
        return;
      }
      if (time - last >= 32) {
        phase += Math.min(time - last, 64) * 0.00013;
        last = time;
        draw(time);
      }
      frame = requestAnimationFrame(tick);
    };
    const start = () => {
      if (!frame && visible && !document.hidden && !media.matches) {
        last = performance.now();
        frame = requestAnimationFrame(tick);
      }
    };
    const resize = () => {
      size = canvas.clientWidth;
      const dpr = Math.min(devicePixelRatio || 1, 1.5);
      canvas.width = size * dpr;
      canvas.height = size * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(0);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        visible = entries[0].isIntersecting;
        start();
      },
      { rootMargin: "80px" },
    );
    observer.observe(canvas);
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    const update = () => {
      if (media.matches) {
        cancelAnimationFrame(frame);
        frame = 0;
        draw(0);
      } else start();
    };
    media.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    resize();
    start();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resizeObserver.disconnect();
      media.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, [compact]);
  return (
    <canvas ref={canvasRef} className="signal-canvas" aria-hidden="true" />
  );
}
