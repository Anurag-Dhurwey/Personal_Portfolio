"use client";
import { Wrapper } from "@/container";
import React, { useEffect, useState } from "react";
import style from "./about_education.module.css";
import Image from "next/image";
const About_education = () => {
  interface imgType {
    url: string;
    title: string;
    desc: string;
  }
  const img = [
    {
      url: "https://media.istockphoto.com/id/949299844/it/foto/vista-prospettica-dellesterno-delledificio-contemporaneo.jpg?s=612x612&w=0&k=20&c=_DR1aRHuTEV3EYBJo1ZXq1pF4SgwB9EVWQLaBj4sC5g=",
      title: "10th Standard",
      desc: "when i was in 10 class",
    },
    {
      url: "https://media.istockphoto.com/id/1150545984/it/foto/palazzo-moderno-di-lusso-con-piscina.jpg?s=612x612&w=0&k=20&c=Pbrai_VGc9tUviMCF1UaBErdS1YGyIVWsD29jzMZwTY=",
      title: "10th Standard",
      desc: "when i was in 10 class",
    },
    {
      url: "https://media.istockphoto.com/id/1214351345/it/foto/guardando-direttamente-lo-skyline-del-quartiere-finanziario-nel-centro-di-londra-immagine-di.jpg?s=612x612&w=0&k=20&c=oNNbPzPvcQ-4RA6AeatNIxHQIafBiXmDRtUUY0Ska-I=",
      title: "10th Standard",
      desc: "when i was in 10 class",
    },
  ];
  const [state, setState] = useState<number>(0);
  const imgEle = document.getElementById("about_education_li_first_child");
  const [multiply, setMultiply] = useState<number>(1);

  function trans() {
    if (imgEle) {
      console.log(imgEle.style.transform);
      setMultiply(() => multiply + 1);
    }
  }

  function pre() {
    if (state > 0) {
      trans();
      setState(state - 1);
    }
  }

  function next() {
    if (state < img.length - 1) {
      trans();
      setState(state + 1);
    }
  }

  const { url, desc, title } = img[state];

  return (
    <div className={style.main}>
      <ul className={style.ul}>
        <li className={style.li}>
          <div
            className={style.li_first_child}
            style={{ transform: `translateX(${-30 * multiply}px)`,translate:`${30 * multiply}px` }}
            id="about_education_li_first_child"
          >
            <Image
              src={url}
              id="about_education_imgEle"
              alt="my educational institutes"
              className={style.img}
              width={1000}
              height={1000}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={style.li_second_child}>
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
        </li>
        <span className="flex justify-center items-center gap-x-2 py-2 px-4 absolute top-2">
          <button className="" onClick={() => pre()}>
            left
          </button>
          <button onClick={() => next()}>right</button>
        </span>
      </ul>
    </div>
  );
};

const Expo = () => {
  return (
    <>
      <Wrapper id="education" bg="bg-[var(--secondry-bg)]">
        <About_education />
      </Wrapper>
    </>
  );
};

export default Expo;

