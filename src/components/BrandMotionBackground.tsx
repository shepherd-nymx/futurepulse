import React, { useEffect, useRef } from "react";

/** One decoder and one viewport canvas, however many brand marks are on screen. */
export function BrandMotionBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const video = videoRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !video || !context) return;
    const frameCanvas = document.createElement("canvas");
    frameCanvas.width = 320;
    frameCanvas.height = 180;
    const frameContext = frameCanvas.getContext("2d", {
      willReadFrequently: true,
    });
    if (!frameContext) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mouse = window.matchMedia("(hover: hover) and (pointer: fine)");
    let width = 0,
      height = 0,
      raf = 0,
      lastPaint = 0,
      lastFrame = -1;
    let disposed = false,
      frameReady = false;
    let pointerX = 0.5,
      pointerY = 0.5,
      driftX = 0,
      driftY = 0,
      pointerActive = false;

    const capture = () => {
      if (video.readyState < 2 || video.currentTime === lastFrame) return;
      frameContext.drawImage(video, 0, 0, 320, 180);
      const pixels = frameContext.getImageData(0, 0, 320, 180);
      // Remove the dark video matte once per source frame, retaining the uploaded colors.
      for (let i = 0; i < pixels.data.length; i += 4) {
        const level = Math.max(
          pixels.data[i],
          pixels.data[i + 1],
          pixels.data[i + 2],
        );
        pixels.data[i + 3] = Math.min(255, Math.max(0, (level - 19) * 1.15));
      }
      frameContext.putImageData(pixels, 0, 0);
      lastFrame = video.currentTime;
      frameReady = true;
    };
    const paint = () => {
      capture();
      context.clearRect(0, 0, width, height);
      if (!frameReady || !width || !height) return;
      const moving = !reduced.matches && mouse.matches;
      const targetX = moving && pointerActive ? (pointerX - 0.5) * 35 : 0;
      const targetY = moving && pointerActive ? (pointerY - 0.5) * 28 : 0;
      driftX += (targetX - driftX) * 0.12;
      driftY += (targetY - driftY) * 0.12;
      const columns = Math.max(2, Math.ceil(width / 350));
      const rows = Math.max(3, Math.ceil(height / 230));
      const cellWidth = width / columns,
        cellHeight = height / rows;
      const logoWidth = Math.min(245, cellWidth * 0.78);
      const logoHeight = (logoWidth * 180) / 320;
      for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
          const x = cellWidth * (column + 0.5);
          const y = cellHeight * (row + 0.5);
          const distance = Math.hypot(
            x - pointerX * width,
            y - pointerY * height,
          );
          const influence =
            moving && pointerActive ? Math.max(0, 1 - distance / 380) : 0;
          context.save();
          context.globalAlpha = 0.085 + influence * 0.055;
          context.translate(
            x + driftX * (1 + influence),
            y + driftY * (1 + influence),
          );
          context.rotate(moving ? driftX * 0.0015 * influence : 0);
          context.drawImage(
            frameCanvas,
            -logoWidth / 2,
            -logoHeight / 2,
            logoWidth,
            logoHeight,
          );
          context.restore();
        }
      }
    };
    const tick = (time: number) => {
      raf = 0;
      if (disposed || document.hidden || reduced.matches) return;
      if (time - lastPaint >= 32) {
        lastPaint = time;
        paint();
      }
      raf = requestAnimationFrame(tick);
    };
    const start = () => {
      if (disposed || document.hidden || reduced.matches) return;
      void video.play().catch(() => {
        /* A first frame remains when autoplay is restricted. */
      });
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      paint();
    };
    const pointer = (event: PointerEvent) => {
      if (reduced.matches || !mouse.matches || event.pointerType === "touch")
        return;
      pointerX = event.clientX / Math.max(1, width);
      pointerY = event.clientY / Math.max(1, height);
      pointerActive = true;
    };
    const leave = () => {
      pointerActive = false;
    };
    const sync = () => {
      cancelAnimationFrame(raf);
      raf = 0;
      if (document.hidden || reduced.matches) {
        video.pause();
        pointerActive = false;
        driftX = 0;
        driftY = 0;
        if (reduced.matches && video.readyState >= 1 && video.currentTime !== 3)
          video.currentTime = 3;
        paint();
      } else start();
    };
    const loaded = () => {
      lastFrame = -1;
      resize();
      sync();
    };
    const seeked = () => {
      lastFrame = -1;
      paint();
    };
    video.addEventListener("loadeddata", loaded);
    video.addEventListener("seeked", seeked);
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", pointer, { passive: true });
    document.documentElement.addEventListener("pointerleave", leave);
    window.addEventListener("blur", leave);
    document.addEventListener("visibilitychange", sync);
    // A user gesture also resumes playback on browsers that restrict autoplay.
    window.addEventListener("pointerdown", start, { passive: true });
    reduced.addEventListener("change", sync);
    mouse.addEventListener("change", leave);
    resize();
    if (video.readyState >= 2) loaded();
    else start();
    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      video.pause();
      video.removeEventListener("loadeddata", loaded);
      video.removeEventListener("seeked", seeked);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", pointer);
      document.documentElement.removeEventListener("pointerleave", leave);
      window.removeEventListener("blur", leave);
      document.removeEventListener("visibilitychange", sync);
      window.removeEventListener("pointerdown", start);
      reduced.removeEventListener("change", sync);
      mouse.removeEventListener("change", leave);
    };
  }, []);

  return (
    <div className="brand-motion-background" aria-hidden="true">
      <video
        ref={videoRef}
        className="brand-motion-source"
        src="/assets/brand/future-pulse-logo-motion.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        tabIndex={-1}
      />
      <canvas ref={canvasRef} className="brand-motion-canvas" />
    </div>
  );
}
