"use client";
import React from "react";
import style from "./skills.module.css";
import {
  html5,
  css,
  bootstrap,
  tailwind,
  firebase,
  javascript,
  mongoDB,
  nextjs,
  nodejs,
  sanity,
  strapi,
  expressJs,
  docker,
  git,
  ts,
} from "../../assets";
import Image from "next/image";
import { Wrapper } from "@/container";

const Skills = () => {

  const skills = [
    {
      category: "Front-End Tools",
      list: [
        { per: 75, logos: [html5, css] },
        { per: 65, logos: [javascript] },
        { per: 60, logos: [nextjs] },
      ],
    },

    {
      category: "Back-End Tools",
      list: [
        { per: 45, logos: [nodejs] },
        { per: 35, logos: [expressJs] },
      ],
    },
    {
      category: "Database",
      list: [
        { per: 50, logos: [mongoDB] },
        { per: 40, logos: [firebase] },
        { per: 70, logos: [sanity, strapi] },
      ],
    },

    {
      category: "Devloper Tools",
      list: [
        { per: 40, logos: [docker] },
        { per: 60, logos: [ts] },
        { per: 80, logos: [bootstrap, tailwind] },
      ],
    },
    { category: "Version Controls", list: [{ per: 40, logos: [git] }] },
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
          const { category, list } = item;

          return (
            <li key={i} style={{ alignSelf: "flex-start" }}>
              <h2 className={style.skills_category_head_title}>{category}:</h2>
              <ul className={style.skills_category_list}>
                {list.map((skill, i) => {
                  const { per, logos } = skill;
                  return (
                    <li key={i}>
                      <span className={style.skills_logo}>
                        {logos.map((img, i) => {
                          return (
                            <span
                              key={i + Date.now()}
                              className={style.skills_logo_img_border}
                            >
                              <Image
                                src={img}
                                alt="skills"
                                className={style.skills_logo_img}
                              />
                            </span>
                          );
                        })}
                      </span>
                      <span className={style.skills_outer_bar}>
                        <span
                          style={{ width: `${per}%` }}
                          className={style.skills_inner_bar}
                        ></span>
                        <p style={{ fontSize: "12px", fontWeight: "bolder" }}>
                          {per}%
                        </p>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}

        {!skills.length % 2 == 0 && (
          <li
            style={{ visibility: "hidden" }}
            className={style.skills_outer_bar}
          ></li>
        )}
      </ul>
    </div>
  );
};

const Expo = () => {
  return (
    <>
     <Wrapper id="home" bg="bg-[var(--secondry-bg)]">
      <Skills/>
      </Wrapper> 
    </>
  )
}

// export default Wrapper(Skills, "skills", "bg-[var(--secondry-bg)]");
export default Expo