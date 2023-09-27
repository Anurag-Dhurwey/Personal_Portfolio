import Image from "next/image";
import React from "react";
import Home_Img from "../../assets/img/IMG_20221215_004629_127.jpg";
import Profile_Img from "@/assets/img/profile2.png";
import Navicons from "./miniComps/Navicons"
import { Wrapper } from "../../container";
// import { mongoDB, nextjs, nodejs } from "@/assets";
import style from "./home.module.css";
import { BiDownload } from "react-icons/bi";
const Home = () => {
  // const mainSkills = [nextjs, nodejs, mongoDB];
  return (
    <>
      {/* flex justify-center items-start gap-x-2 max-[821px]:flex-col max-[820px]:justify-start max-[820px]:items-center max-[820px]:gap-y-4 max-[820px]:self-start */}
      <section className={style.home_section}>
        {/* <div > */}
        <div 
        className={style.home_top}
        >
          <div 
          className={style.home_left}
          >
            <div className={style.home_name}>
              {/* <div className=""> */}
              <h2 className=" text-xl text-[#0000ffd5] font-bold">
                Hi
                <p className="text-2xl text-[#04cb04e7]  font-extrabold font-sans">
                  I&apos;m{" "}
                  <span className="text-[#eb24d7d9]">ANURAG DHURWEY</span>
                </p>
              </h2>
              <h3>An intermediate Web developer;</h3>
              {/* </div> */}
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

          {/* </div> */}
          {/* <div className=" "> */}
          <div className={`${style.home_right}`}  >
            <Image src={Profile_Img} alt="img" className={style.home_img} style={{maxWidth:"none"}} />
            {/* </div> */}
          </div>
        </div>

<Navicons/>
      </section>
    </>
  );
};

export default Wrapper(Home, "home", "bg-[var(--primary-bg)]");
// export default Home;
