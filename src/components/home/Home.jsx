"use client"
import Image from "next/image";
import React from "react";
import Profile_Img from "@/assets/img/profile_img/profile2.png";
import Navicons from "./miniComps/Navicons";
import { Wrapper } from "@/container";
import style from "./home.module.css";
import { BiDownload } from "react-icons/bi";
const Home = () => {
  return (
    <>
 <main className={style.home_section}>
        <div className={style.home_top}>
          <div className={style.home_left}>
            <div className={style.home_name}>
              <h2 className=" text-xl text-[#0000ffd5] font-bold flex flex-col">
                Hi
                <span className="text-2xl text-[#04cb04e7]  font-extrabold font-sans">
                  I&apos;m{" "}
                  <span className="text-[#eb24d7d9]">ANURAG DHURWEY</span>
                </span>
              </h2>
              <h3>An intermediate Web developer;</h3>
            </div>
            <button className={style.home_resume_btn}>
              Resume
              <span>
                <BiDownload />
              </span>
            </button>
            <div className={style.home_bottom_objective}>
              <p className="">An intermediate Web developer;</p>
              <p className="">
                I can Integrate data from various backend services and
                databases. and also gather and refine specifications and
                requirements based on technical needs.
              </p>
            </div>
          </div>

          <div className={`${style.home_right}`}>
            <Image
              src={Profile_Img}
              alt="img"
              className={style.home_img}
              style={{ maxWidth: "none" }}
            />
          </div>
        </div>

        <Navicons />
      </main>
    </>
  );
};

const Expo = () => {
  return (
    <>
     <Wrapper id="home" bg="bg-[var(--primary-bg)]">
      <Home/>
      </Wrapper> 
    </>
  )
}


export default Expo;
