import { Wrapper } from "@/container";
import React from "react";
import {ecommerce} from "../../assets/index";
import {social_media} from "../../assets/index";
import { AiFillGithub } from "react-icons/ai";
import { MdVisibility } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
const Projects = () => {
  const myProjects = [
    {
      logo: ecommerce,
      webUrl: "https://digital-shop.onrender.com",
      sourceCode:
        "https://github.com/Anurag-Dhurwey/Digital-shop-Rebooted-version",
    },
    {
      logo: social_media,
      webUrl: "https://multi-purpose-site.vercel.app/",
      sourceCode:
        "https://gitlab.com/multi_purpose_site/multi_purpose_site",
    },
  ];

  return (
    <div className="flex justify-around items-center flex-col min-h-screen h-[100%] w-[100%] ">
      <div className="py-8">
        <h2 className=" font-extrabold text-center text-[aqua] text-4xl uppercase">
          Projects
        </h2>
      </div>
      <ul className="flex justify-center items-center flex-wrap h-[100%] w-[100%] gap-x-4 gap-y-4">
        {myProjects.map((project, i) => {
          const { sourceCode, webUrl, logo } = project;
          return (
            <li
              key={i + sourceCode}
              className="relative h-[180px] hover:h-[200px] w-[280px] hover:w-[280px] rounded-2xl overflow-hidden flex justify-center items-center shadow-[10px_10px_5px_0px_rgba(0,0,0,0.75)] duration-500"
            >
              <Image
                src={logo}
                alt="img"
                className="h-[100%]  object-cover duration-500"
              />

              <div className="h-full w-full ">
                <Link
                  href={sourceCode}
                  target="_blank"
                  style={{ translate: `-50% -50%` }}
                  className="absolute top-[50%] left-[30%]"
                >
                  <AiFillGithub className=" h-8 w-8 text-blue-700 hover:h-10 hover:w-10 duration-500" />
                </Link>
                <Link
                  href={webUrl}
                  target="_blank"
                  style={{ translate: `50% -50%` }}
                  className="absolute top-[50%] right-[30%]"
                >
                  <MdVisibility className=" h-8 w-8 text-blue-700 hover:h-10 hover:w-10 duration-500 " />
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};


const Expo = () => {
  return (
    <>
     <Wrapper id="home" bg="bg-[var(--primary-bg)]">
      <Projects/>
      </Wrapper> 
    </>
  )
}


export default Expo
