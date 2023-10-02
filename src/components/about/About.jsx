"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./About.css";
import { Wrapper } from "@/container";

function About  ()  {
  const img = [
    "https://media.istockphoto.com/id/949299844/it/foto/vista-prospettica-dellesterno-delledificio-contemporaneo.jpg?s=612x612&w=0&k=20&c=_DR1aRHuTEV3EYBJo1ZXq1pF4SgwB9EVWQLaBj4sC5g=",
    "https://media.istockphoto.com/id/1150545984/it/foto/palazzo-moderno-di-lusso-con-piscina.jpg?s=612x612&w=0&k=20&c=Pbrai_VGc9tUviMCF1UaBErdS1YGyIVWsD29jzMZwTY=",
    "https://media.istockphoto.com/id/1214351345/it/foto/guardando-direttamente-lo-skyline-del-quartiere-finanziario-nel-centro-di-londra-immagine-di.jpg?s=612x612&w=0&k=20&c=oNNbPzPvcQ-4RA6AeatNIxHQIafBiXmDRtUUY0Ska-I=",
    "https://media.istockphoto.com/id/904390980/it/foto/foto-di-architettura-contemporanea-astratta.jpg?s=612x612&w=0&k=20&c=_P4Wmx5nq5MeDuimpNklKCBlrLovmCyd9lfiMKeJZDs=",
    "https://media.istockphoto.com/id/130408311/it/foto/piscina-allesterno-della-casa-moderna-al-crepuscolo.jpg?s=612x612&w=0&k=20&c=ZoVjx7uDjoHKmpM1ayW6UR1SQOoYh_xx-QMG_qeOYs0=",
  ];
  const [progress, setProgress] = useState(50);
  const [startX, setStartX] = useState(0);
  const [activeElement, setActiveElement] = useState(0);
  const [isDown, setIsDown] = useState(false);
  const speedWheel = 0.1;
  const speedDrag = -0.4;

  function animate() {
    setProgress((pre) => Math.max(0, Math.min(pre, 100)));
    setActiveElement(Math.floor((progress / 100) * (img.length - 1)));
    // console.log(activeElement,progress)
  }

  const handleWheel = (e) => {
    const wheelProgress = e.deltaY * speedWheel;
    setProgress((pre) => {
      return pre + wheelProgress;
    });
    animate();
  };

  const handleMouseMove = (e) => {
    if (e.type === "mousemove") {
    }

    if (!isDown) {
      console.log("isdown");
      return;
    }

    const x = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    const mouseProgress = (x - startX) * speedDrag;
    setProgress((pre) => pre + mouseProgress);
    setStartX(x);
    animate();
  };

  const handleMouseDown = (e) => {
    console.log("handlemouseDown");
    setIsDown(true);
    setStartX(e.clientX || (e.touches && e.touches[0].clientX) || 0);
    // console.log(false)
  };

  const handleMouseUp = () => {
    console.log("handleMouseUp");
    setIsDown(false);
  };

  useEffect(() => {
    animate();
  }, []);

  return (
    <div
      onTouchMove={handleMouseMove}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onTouchStart={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
      className="min-h-screen h-[100%] w-[100%] "
    >
      <div className="h-[100vh] w-[100%] flex justify-between items-center flex-col">
        <div className="py-8">
          <h2 className="font-extrabold text-center text-[aqua] text-4xl uppercase">
            About and education
          </h2>
        </div>
        <div className="relative h-[100vh] w-[100%] flex justify-center items-center flex-col overflow-hidden pointer-events-none">
          {img.map((item, i) => {
            const zIndex =
              activeElement === i
                ? img.length
                : img.length - Math.abs(activeElement - i);
            const Ivalue = (i - activeElement) / img.length;
            const x = `${Ivalue * 400}`;
            const y = `${Ivalue * 100}`;
            const rotate = `${Ivalue * 120}`;

            return (
              <div
                key={i}
                style={{
                  translate: `${x}% ${y}%`,
                  rotate: `${rotate}deg`,
                  zIndex,
                  opacity: `${(zIndex / img.length) * 3 - 2}`,
                  transitionDuration: `1s`,
                }}
                className={`${
                  i == activeElement
                    ? "h-[var(--ac-height)] w-[var(--ac-width)]"
                    : "h-[var(--height)] w-[var(--width)]"
                }  absolute rounded-xl overflow-hidden shadow-[0_10px_50px_10px_rgba(0,0,0,.5)] origin-[0%_100%]  pointer-events-none select-none `}
              >
                <div className="w-full h-full absolute">
                  <Image
                    alt="about"
                    src={item}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover pointer-events-none select-none"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};


const Expo = () => {
  return (
    <>
     <Wrapper id="home" bg="bg-[var(--secondry-bg)]">
      <About/>
      </Wrapper> 
    </>
  )
}


export default Expo
