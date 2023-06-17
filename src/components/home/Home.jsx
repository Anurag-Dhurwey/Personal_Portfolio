import Image from "next/image";
import React from "react";
import Home_Img from "../../assets/img/IMG_20221215_004629_127.jpg";
import { Wrapper } from "../../container";
import { mongoDB, nextjs, nodejs } from "@/assets";

const Home = () => {
  const mainSkills = [nextjs, nodejs, mongoDB];
  return (
    <>
      {/* flex justify-center items-start gap-x-2 max-[821px]:flex-col max-[820px]:justify-start max-[820px]:items-center max-[820px]:gap-y-4 max-[820px]:self-start */}
      <div className=" max-[450px]:min-h-screen h-full w-[100%]  flex flex-col gap-y-2 justify-center items-center self-center  min-[821px]:grid min-[821px]:grid-cols-3 ">
        <div className="h-[100%] flex flex-col self-start items-center gap-y-2">
          <div className="bg-[rgba(232,112,112,0.4)] w-fit border rounded-[20%] px-2 min-[321px]:px-6 py-3 shadow-[5px_5px_14px_1px_rgba(0,0,0,0.75)] min-[820px]:mt-[10%] ">
            <div className="">
              <h2 className=" text-xl text-[#0000ffd5] font-bold">
                Hi
                <p className="text-2xl text-[#04cb04e7]  font-extrabold font-sans">
                  I&apos;m <span className="text-[#eb24d7d9]">ANURAG DHURWEY</span>
                </p>
              </h2>
              {/* <h3>An intermediate Web developer;</h3> */}
            </div>
          </div>
          <div className="w-[100%] text-center text-white bg-[rgba(232,112,112,0.66)] border rounded-[10px] shadow-[5px_5px_14px_1px_rgba(0,0,0,0.75)] min-[321px]:p-2">
          <p className="">An intermediate Web developer;</p>
            <p className="">
              I can Integrate data from various backend services and databases. and also gather and refine specifications and requirements based on technical needs.
            </p>
          </div>
        </div>
        <div className=" h-[100%] w-full flex justify-center items-start">
          <div className=" w-fit rounded-[94px_94px_200px_200px] border overflow-hidden shadow-[15px_15px_34px_1px_rgba(0,0,0,0.75)]">
            <Image
              src={Home_Img}
              alt="img"
              className="h-[325px] w-auto min-[600px]:h-[400px]"
            />
          </div>
        </div>
        <div className=" h-full w-full flex justify-between items-center min-[821px]:flex-col my-[30px] ">
          {mainSkills.map((item, i) => {
            return (
              <Image
                src={item}
                alt="next"
                className={`h-[80px] w-auto rounded-full ${
                  i === 0 || i === 2 ? "self-start" : ""
                }`}
                key={i}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Wrapper(Home, "home", "bg-[var(--primary-bg)]");
