import React from "react";

import {
  html5,
  css,
  // bootstrap,
  // tailwind,
  firebase,
  javascript,
  // mongodb,
  nextjs,
  nodejs,
  sanity,
  // strapi,
} from "../../assets";
import Image from "next/image";
import { Wrapper } from "@/container";

const Skills = () => {
  const skills = [html5, css, javascript, nextjs, nodejs, firebase, sanity];
  return (
    <div className="w-[100%] h-[100%] flex justify-evenly items-center flex-wrap ">
      {skills.map((item, i) => {
        return (
          <div
            key={i}
            className=" flex justify-center items-center rounded-[100%] overflow-hidden h-[100px] w-[100px] shadow-[5px_5px_14px_1px_rgba(0,0,0,0.75)]"
          >
            <Image src={item} alt="skills" className="h-auto" />
          </div>
        );
      })}
    </div>
  );
};

export default Wrapper(Skills, "skills", "bg-[var(--primary-bg)]");
