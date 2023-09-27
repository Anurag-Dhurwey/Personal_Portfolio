import React from "react";
import style from "./skills.module.css";
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
  const skills = [
    { per: 75, logos: [html5, css] },
    { per: 65, logos: [javascript] },
    { per: 60, logos: [nextjs] },
    { per: 45, logos: [nodejs] },
    { per: 35, logos: [firebase] },
    { per: 70, logos: [sanity] },
  ];
  return (
    <div className={style.skills_parent_div}>
      <div className="py-8">
        <h2 className="font-extrabold text-center text-[aqua] text-4xl uppercase">
          SKILLS
        </h2>
      </div>
      <ul className={style.skills_ul}>
        {skills.map((item, i) => {
          const { per, logos } = item;
          return (
            <li key={i}>
              <span className={style.skills_logo}>
                {logos.map((img, i) => {
                  return (
                    <span
                      key={i + Date.now()}
                      className={style.skills_logo_img_border}
                    >
                      <Image src={img} alt="skills" className={style.skills_logo_img} />
                    </span>
                  );
                })}
              </span>
              <span className={style.skills_outer_bar}>
                <span
                  style={{ width: `${per}%` }}
                  className={style.skills_inner_bar}
                ></span>
                <p style={{fontSize:'12px',fontWeight:'bolder'}}>{per}%</p>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Wrapper(Skills, "skills", "bg-[var(--primary-bg)]");
