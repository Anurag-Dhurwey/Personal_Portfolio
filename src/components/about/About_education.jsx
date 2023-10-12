"use client";
import { Wrapper } from "@/container";
import React, { useEffect, useState } from "react";
import style from "./about_education.module.css";
import Image from "next/image";
const About_education = () => {
  // interface imgType {
  //   url: string;
  //   title: string;
  //   desc: string;
  // }
  const img = [
    {
      url: "https://media.istockphoto.com/id/949299844/it/foto/vista-prospettica-dellesterno-delledificio-contemporaneo.jpg?s=612x612&w=0&k=20&c=_DR1aRHuTEV3EYBJo1ZXq1pF4SgwB9EVWQLaBj4sC5g=",
      title: "10th Standard",
      desc: `Developed an e-commerce platform using React, Strapi, Stripe, and Implemented user authentication, product listings, shopping cart functionality, and
      payment processing.`,
    },
    {
      url: "https://media.istockphoto.com/id/1150545984/it/foto/palazzo-moderno-di-lusso-con-piscina.jpg?s=612x612&w=0&k=20&c=Pbrai_VGc9tUviMCF1UaBErdS1YGyIVWsD29jzMZwTY=",
      title: "12th Standard",
      desc: "when i was in 10 class",
    },
    {
      url: "https://media.istockphoto.com/id/1214351345/it/foto/guardando-direttamente-lo-skyline-del-quartiere-finanziario-nel-centro-di-londra-immagine-di.jpg?s=612x612&w=0&k=20&c=oNNbPzPvcQ-4RA6AeatNIxHQIafBiXmDRtUUY0Ska-I=",
      title: "Graduation",
      desc: `Developed an e-commerce platform using React, Strapi, Stripe, and Implemented user authentication, product listings, shopping cart functionality, and
      payment processing.`,
    },
  ];
  const [state, setState] = useState(0);
  const [imgEle, setImgEle] = useState();
  const [multiply, setMultiply] = useState(1);

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
  useEffect(() => {
    setImgEle(document.getElementById("about_education_li_first_child"));
  }, []);

  return (
    <div className={style.main}>
      <div className="py-8">
        <h2 style={{textAlign:'center'}} onClick={()=>alert(`${window.innerHeight+' '+window.innerWidth}`)} className={style.header}>About and education</h2>
      </div>
      <ul className={style.ul}>
        <li className={style.li}>
          <div
            className={style.li_first_child}
            style={{
              transform: `translateX(${-15 * multiply}px)`,
              translate: `${15 * multiply}px`,
            }}
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
            <span className={style.li_nav_btn}>
              <button
                disabled={state ? false : true}
                className=""
                onClick={() => pre()}
              >
                left
              </button>
              <button
                disabled={state != img.length - 1 ? false : true}
                onClick={() => next()}
              >
                right
              </button>
            </span>
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
        </li>
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
