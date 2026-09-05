"use client";

import { useEffect, useRef } from "react";

const GLYPHS = "01<>[]{}/*+-=AIλΣデータ";
const FONT_SIZE = 20;
const COLUMN_WIDTH = 16;
const FRAME_INTERVAL = 50;

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!context || reducedMotion.matches) return;

    let columns: number[] = [];
    let animationFrame = 0;
    let previousFrame = 0;

    const resize = () => {
      const pixelRatio = Math.min(window.devicePixelRatio, 2);
      canvas.width = window.innerWidth * pixelRatio;
      canvas.height = window.innerHeight * pixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      columns = Array.from(
        { length: Math.ceil(window.innerWidth / COLUMN_WIDTH) },
        () => Math.random() * (window.innerHeight / FONT_SIZE),
      );
    };

    const paintFrame = () => {
      context.globalCompositeOperation = "destination-out";
      context.fillStyle = "rgba(0, 0, 0, 0.12)";
      context.fillRect(0, 0, window.innerWidth, window.innerHeight);
      context.globalCompositeOperation = "source-over";
      context.font = `600 ${FONT_SIZE}px var(--font-mono)`;
      context.fillStyle = document.documentElement.classList.contains("dark")
        ? "rgba(55, 255, 120, 0.48)"
        : "rgba(0, 78, 34, 0.82)";

      columns.forEach((position, column) => {
        const glyph = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        context.fillText(glyph, column * COLUMN_WIDTH, position * FONT_SIZE);
        columns[column] =
          position * FONT_SIZE > window.innerHeight && Math.random() > 0.975
            ? Math.random() * -20
            : position + 1;
      });
    };

    const seedCanvas = () => {
      resize();
      for (let frame = 0; frame < 10; frame += 1) paintFrame();
    };

    const draw = (time: number) => {
      animationFrame = requestAnimationFrame(draw);
      if (time - previousFrame < FRAME_INTERVAL) return;
      previousFrame = time;
      paintFrame();
    };

    seedCanvas();
    window.addEventListener("resize", seedCanvas);
    animationFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", seedCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-rain" aria-hidden="true" />;
}