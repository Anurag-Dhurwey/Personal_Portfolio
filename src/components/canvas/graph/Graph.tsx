"use client";

import React, { useRef, useEffect, useState } from "react";

export interface Point {
  x: number;
  y: number;
  color: string;
  dx: number; // Displacement in x-direction
  dy: number; // Displacement in y-direction
}
interface props{
  points:Point[]
}
const CanvasAnimation: React.FC<props> = ({points}:props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // const ctxRef = useRef<CanvasRenderingContext2D>(null);



  // Function to update point positions
  const updatePoints = () => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!canvasRef.current || !ctx) return; // Handle potential null reference

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height); // Clear canvas

    points.forEach((point) => {
      // Handle bouncing off edges
      if (point.x + 5 > canvasRef.current!.width) {
        point.x -= 5; // Adjust for point size
        point.dx *= -1;
      } else if (point.x - 5 < 0) {
        point.x += 5;
        point.dx *= -1;
      }

      if (point.y + 5 > canvasRef.current!.height) {
        point.y -= 5;
        point.dy *= -1;
      } else if (point.y - 5 < 0) {
        point.y += 5;
        point.dy *= -1;
      }

      point.x += point.dx;
      point.y += point.dy;

      // Draw the point
      ctx.beginPath();
      ctx.arc(point.x, point.y, 3, 0, 2 * Math.PI);
      ctx.fillStyle = point.color;
      ctx.fill();
    });

    // Check for connections between points
    for (let i = 0; i < points.length - 1; i++) {
      for (let j = i + 1; j < points.length; j++) {
        const distance = Math.sqrt(
          Math.pow(points[i].x - points[j].x, 2) +
            Math.pow(points[i].y - points[j].y, 2)
        );
        if (distance < 130) {
          ctx.beginPath();
          ctx.moveTo(points[i].x, points[i].y);
          ctx.lineTo(points[j].x, points[j].y);
          ctx.strokeStyle = "#30e3ce";
          ctx.stroke();
        }
      }
    }
  };

  // useEffect hook for animation
  useEffect(() => {
    const graphCanEle = document.getElementById(
      "graph-canvas"
    ) as HTMLCanvasElement;
    graphCanEle.width = window.innerWidth-10;
    graphCanEle.height = window.innerHeight;

    const animate = () => {
      updatePoints();
      requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("resize", (e) => {
      graphCanEle.width = window.innerWidth;
      graphCanEle.height = window.innerHeight;
    });
    return () => {
      // Cleanup on unmount (optional, if needed)
    };
  }, []);

  return (
    <canvas
      className=" absolute top-0 left-0"
      id="graph-canvas"
      ref={canvasRef}
    />
  );
};

export default CanvasAnimation;
