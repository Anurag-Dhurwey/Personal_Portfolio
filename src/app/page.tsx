"use client";
import CanvasAnimation, { Point } from "@/components/canvas/graph/Graph";
import {
  Navbar,
  Home,
  Projects,
  Skills,
  Contact,
  Footer,
  About,
  About_education,
} from "../components";
import { useEffect, useState } from "react";
export default function Anurag() {
  const [points, setPoints] = useState<Point[]>([]);

  useEffect(() => {
    const generatePoints = (num: number) => {
      const newPoints: Point[] = [];
      for (let i = 0; i < num; i++) {
        newPoints.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          color: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
          )}, ${Math.floor(Math.random() * 256)})`,
          dx: Math.random() * 2 - 1, // Random displacement between -1 and 1
          dy: Math.random() * 2 - 1, // Random displacement between -1 and 1
        });
      }
      // console.log(setPoints)
      // setPoints(()=>newPoints);
      return newPoints;
    };

    setPoints(() => generatePoints(30));
  },[]);

  return (
    <>
      {!!points.length && <CanvasAnimation points={points} />}
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      {/* <About/> */}
      {/* <About_education/> */}
      <Contact />
      {/* <Footer /> */}
    </>
  );
}
