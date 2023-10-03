import { Wrapper } from "@/container";
import React from "react";
import { ecommerce } from "../../assets/index";
import { social_media } from "../../assets/index";
import { AiFillGithub } from "react-icons/ai";
import { FaFirefoxBrowser } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import style from "./project.module.css";
const Projects = () => {
  const myProjects = [
    {
      logo: ecommerce,
      webUrl: "https://digital-shop.onrender.com",
      sourceCode:
        "https://github.com/Anurag-Dhurwey/Digital-shop-Rebooted-version",
      usedTools: "React, Strapi, Stripe",
      desc: `Developed an e-commerce platform using React, Strapi, Stripe, and
        Implemented user authentication, product listings, shopping cart functionality, and
        payment processing`,
    },
    {
      logo: social_media,
      webUrl: "https://multi-purpose-site.vercel.app/",
      sourceCode: "https://gitlab.com/multi_purpose_site/multi_purpose_site",
      usedTools: "Next.js, Redux Toolkit, Sanity, NextAuth.js",
      desc: `Designed and built a social media web application using Next.js, Redux
      Toolkit, Sanity as a headless CMS, and NextAuth.js for secure authentication. Created
      dynamic and interactive user interfaces with real-time updates`,
    },
  ];

  return (
    <div className={style.main}>
      <div className="py-8">
        <h2 className={style.header}>Projects</h2>
      </div>
      <ul className={style.ul}>
        {myProjects.map((project, i) => {
          const { sourceCode, webUrl, logo, usedTools, desc } = project;
          return (
            <li key={i + sourceCode} className={style.li}>
              <div className={style.li_first_div}>
                <h2 style={{ fontWeight: "bolder" }}>E-commerce Website</h2>
                <div className={style.project_img}>
                  <Image
                    src={logo}
                    alt="img"
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      transitionDuration: "500ms",
                    }}
                  />

                  {/* <div className={style.links}>
                  <Link
                    href={sourceCode}
                    target="_blank"
                  >
                    <AiFillGithub className={style.icons}/>
                  </Link>
                  <Link
                    href={webUrl}
                    target="_blank"
                  >
                    <FaFirefoxBrowser className={`${style.icons}`}  />
                  </Link>
                </div> */}
                </div>
              </div>
              <div className={style.li_second_div}>
                <div className={style.check_out}>
                  <span style={{ fontWeight: "bold" }}>Check-out:</span>
                  <div className={style.links}>
                    <Link href={sourceCode} target="_blank">
                      <AiFillGithub className={style.icons} />
                    </Link>
                    <Link href={webUrl} target="_blank">
                      <FaFirefoxBrowser className={`${style.icons}`} />
                    </Link>
                  </div>
                </div>

                <p>
                  <span style={{ fontWeight: "bold" }}>Description: </span>{" "}
                  {desc}
                </p>
                <p>
                  <span style={{ fontWeight: "bold" }}>Tools used: </span>
                  {usedTools}
                </p>
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
      <Wrapper id="projects" bg="bg-[var(--primary-bg)]">
        <Projects />
      </Wrapper>
    </>
  );
};

export default Expo;
