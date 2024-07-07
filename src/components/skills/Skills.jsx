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

  const mainSkills = [
    { title: 'ReactJs', logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png' },
    { title: 'NextJs', logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png' },
    { title: 'Angular', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Angular_gradient.png' }
    , { title: 'NodeJs', logo: nodejs },
    { title: 'Express', logo: expressJs },
    { title: 'MongoDB', logo: mongoDB }
  ]


  return (
    <div className={style.skills_parent_div}>
      <div className="py-8">
        <h2 className="font-extrabold text-center text-[aqua] text-4xl uppercase">
          SKILLS
        </h2>
      </div>
      <ul className={`${style.skills_ul} flex-wrap gap-[10px]`}>
        {/* {skills.map((item, i) => {
          const { category, list } = item;

          return (
            <li key={i} style={{ alignSelf: "flex-start" ,paddingBottom:'8px'}}>
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
        })} */}

        {/* {!skills.length % 2 == 0 && (
          <li
            style={{ visibility: "hidden" }}
            className={style.skills_outer_bar}
          ></li>
        )} */}


        {mainSkills.map(skill => {
          return <li key={skill.title} className=" flex justify-center items-center flex-col">
            <Image
              src={skill.logo}
              alt="skills"
              className={style.skills_logo_img}
              width={1000} height={1000}
            />
            <span className=" " style={{fontWeight:'bold'}}>{skill.title}</span>
          </li>
        })}
      </ul>
    </div>
  );
};

const Expo = () => {
  return (
    <>
      <Wrapper id="skills" bg="bg-[var(--secondry-bg)]">
        <Skills />
      </Wrapper>
    </>
  )
}

export default Expo