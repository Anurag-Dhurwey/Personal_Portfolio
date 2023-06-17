"use client";
import React from "react";
// import { GrContact, GrProjects } from "react-icons/gr";
// import { AiOutlineHome } from "react-icons/ai";
// import { GiSkills } from "react-icons/gi";
// import { FcAbout } from "react-icons/fc";
import { Head_nav } from "../../../components";
import Link from "next/link";

const RS_Navigation = ({ idName }) => {
  // const icons = [GrContact, AiOutlineHome, GiSkills, GrProjects, FcAbout];
  return (
    <div className="">
      <ul className="flex flex-col justify-center items-center gap-y-4">
        {Head_nav.map((nav, i) => {
          return (
            <Link key={nav + i} href={`#${nav}`}>
              {/* {nav == "home" && (
                <li
                  className={`${
                    idName == nav ? "bg-[#d50663]" : "bg-[aqua]"
                  } p-1 rounded-md`}
                >
                  <AiOutlineHome className={` h-6 w-6 `} />
                </li>
              )}
              {nav == "projects" && (
                <li
                  className={`${
                    idName == nav ? "bg-[#d50663]" : "bg-[aqua]"
                  } p-1 rounded-md`}
                >
                  {" "}
                  <GrProjects className={` h-6 w-6 `} />
                </li>
              )}
              {nav == "skills" && (
                <li
                  className={`${
                    idName == nav ? "bg-[#d50663]" : "bg-[aqua]"
                  } p-1 rounded-md`}
                >
                  <GiSkills className={` h-6 w-6 `} />
                </li>
              )}
              {nav == "about" && (
                <li
                  className={`${
                    idName == nav ? "bg-[#d50663]" : "bg-[aqua]"
                  } p-1 rounded-md`}
                >
                  {" "}
                  <FcAbout className={` h-6 w-6 `} />
                </li>
              )}
              {nav == "contact" && (
                <li
                  className={`${
                    idName == nav ? "bg-[#d50663]" : "bg-[aqua]"
                  } p-1 rounded-md`}
                >
                  {" "}
                  <GrContact className={` h-6 w-6 `} />
                </li>
              )} */}

              <li>
                <button
                  className={`h-4 w-4 rounded-full ${
                    idName == nav ? "bg-[#d50663]" : "bg-[aqua]"
                  }`}
                ></button>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default RS_Navigation;
