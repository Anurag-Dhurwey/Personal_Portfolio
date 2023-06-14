import { Wrapper } from "@/container";
import React from "react";
import ecommerce from "../../assets/img/ecommerce.png";
import { AiFillGithub } from "react-icons/ai";
import { MdVisibility,MdOutlineVisibility } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
const Projects = () => {
  return (
    <div className="flex justify-center items-center flex-wrap h-[100%] w-[100%] gap-x-4 gap-y-4">
      <div className="relative h-[180px] hover:h-[200px] w-[280px] hover:w-[280px] rounded-2xl overflow-hidden flex justify-center items-center shadow-[10px_10px_5px_0px_rgba(0,0,0,0.75)] duration-500 ">

        <Image
          src={ecommerce}
          alt="img"
          className="h-[100%]  object-cover duration-500"
        />

        <div className="h-full w-full ">
        <Link href={""} style={{translate:`-50% -50%`}} className="absolute top-[50%] left-[30%]">
          <AiFillGithub  className=" h-8 w-8 text-blue-700 hover:h-10 hover:w-10 duration-500" />
        </Link>
        <Link href={""}  style={{translate:`50% -50%`}} className="absolute top-[50%] right-[30%]">
          <MdVisibility  className=" h-8 w-8 text-blue-700 hover:h-10 hover:w-10 duration-500 " />
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Wrapper(Projects, "projects", "bg-[var(--secondry-bg)]");
