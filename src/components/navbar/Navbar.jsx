"use client";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { darkMode } from "@/redux/feature/darkMode";
import { BiMenu } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import { LOGO } from "@/assets";

const Head_nav = ["home", "skills", "projects","education", "contact"];

const Navbar = () => {
  const value = useSelector((state) => state.modeChanger.value);
  const dispatch = useDispatch();

  const change = () => {
    console.log(value);
    dispatch(darkMode());
  };

  const [sideBar, setSideBar] = useState(false);
  return (
    <>
      {/* <div className=""> */}
      <div className="flex justify-center items-center w-full py-2 sticky top-0 z-50 bg-[rgba(119,219,226,0.25)]">
        <div className="pl-4 text-2xl">
          <Link href={"#home"}>
            <h1
              style={{
                textShadow:
                  " 0 1px #808d93, -1px 0 #cdd2d5, -1px 2px #808d93, -2px 1px #cdd2d5, -2px 3px #808d93, -3px 2px #cdd2d5, -3px 4px #808d93, -4px 3px #cdd2d5, -4px 5px #808d93, -5px 4px #cdd2d5, -5px 6px #808d93, -6px 5px #cdd2d5, -6px 7px #808d93, -7px 6px #cdd2d5, -7px 8px #808d93, -8px 7px #cdd2d5, 0px 0px 20px #CE2165",
              }}
              className=" font-serif font-extrabold text-[#d50663]  "
            >
              ANURAG
            </h1>
          </Link>
        </div>
        <div className="w-full flex justify-center items-center gap-x-8 max-[820px]:hidden">
          {Head_nav.map((nav, i) => {
            return (
             <Link href={`#${nav}`} key={nav+i}>
              <button  className="uppercase font-semibold text-[#d50663] hover:drop-shadow-[0px_0px_15px_rgba(221,31,115,1)]" >
                {nav}
              </button>
             </Link>
            );
          })}
        </div>
        <div className="relative w-full flex justify-end items-center min-[821px]:hidden">
          <button
            className={`px-2 ${!sideBar ? "" : "hidden"}`}
            onClick={() => {
              setSideBar((v) => !v);
            }}
          >
            <BiMenu className="text-black text-4xl" />
          </button>
          {sideBar && (
            <div className=" absolute top-[-32px] right-0 h-[102vh] bg-[rgba(76,77,77,0.95)] w-[70vw] min-[350px]:w-[50vw] self-end z-10 flex justify-end items-start flex-col">
              <button
                className="px-2 py-4 self-end"
                onClick={() => {
                  setSideBar((v) => !v);
                }}
              >
                <RxCross2 className="text-black text-4xl" />
              </button>
              <ul className="w-full h-full flex justify-evenly items-center flex-col pb-[40%]">
                {Head_nav.map((nav, i) => {
                  return (
                    <Link key={nav + i} href={`#${nav}`}>
                    <li  className="uppercase font-semibold text-[#d50663] hover:drop-shadow-[0px_0px_15px_rgba(221,31,115,1)]">
                      {nav}
                    </li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="z-[10] text-xs sticky top-12 text-red-700 flex justify-center items-center">
        <p>This site is under devlopment</p>
      </div>
      {/* </div> */}
    </>
  );
};

export default Navbar;

export { Head_nav };
