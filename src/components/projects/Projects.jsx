import { Wrapper } from "@/container";
import React from "react";
import { ecommerce, social_media, fuzionApp } from "../../assets/index";
import { AiFillGithub } from "react-icons/ai";
import { FaFirefoxBrowser } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import style from "./project.module.css";
const Projects = () => {
  const myProjects = [
    {
      title: "Social_App",
      logo: social_media,
      webUrl: "https://next-js-internship-assignment.vercel.app/",
      sourceCode:
        "https://github.com/Anurag-Dhurwey/NextJs_Internship_assignment",
      usedTools: "NextJs, Sanity, NodeJs & Socket-Io",
      desc: `Developed an Social platform, I used NextJs for front-end, sanity as backend service, Socket-io for real time comments and likes updates, and
        Implemented user authentication, Logged in user can Upload posts and also able to like comment`,
    },
    {
      title: "Fuzion_App",
      logo: fuzionApp,
      webUrl: "https://fuzion-app.onrender.com",
      sourceCode: "https://github.com/Anurag-Dhurwey/Fuzion_App",
      usedTools: "Angular, Socket-io, HTML Canvas, Fabric-js, Redis",
      desc: `I created a collabrative drawing app, and implemented
import export functionality and real-time shape
manipulation using socket-io and redis`,
    },
    {
      title: "ECOMMERCE WEB APP",
      logo: ecommerce,
      webUrl: "https://techtreasure.vercel.app/",
      sourceCode: "https://github.com/Anurag-Dhurwey/techtreasure",
      usedTools: `ReactJs, Redux Toolkit,
NodeJs & ExpressJs
 MongoDB `,
      desc: `My friend and I worked together to build an ecommerce
web app for a local client. Implemented all the
functionality an eCommerce app should have. secure
authentication, wishlist and add to cart functionality
implemented.
And created a admin panel for admin using reactJs to
control our ecommerce store.`,
    },
  ];

  return (
    <div className={style.main}>
      <div className="py-8">
        <h2 className={style.header}>Projects</h2>
      </div>
      <ul className={style.ul}>
        {myProjects.map((project, i) => {
          const { sourceCode, webUrl, logo, usedTools, desc, title } = project;
          return (
            <li key={i + sourceCode} className={style.li}>
              <div className={style.li_first_div}>
                <h2 style={{ fontWeight: "bolder" }}>{title}</h2>
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
