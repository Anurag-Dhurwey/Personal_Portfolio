"use client";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";

const LS_Sociel_Icons = () => {
  const sociel = [{Icon:FaTwitter,link:'https://twitter.com/anurag_dhurwey2'},{Icon:BsLinkedin,link:'https://www.linkedin.com/in/anurag-dhurwey-03732024b/'},{Icon:GrInstagram,link:'https://www.instagram.com/anurag__dhurwey/'},{Icon:FaFacebookSquare,link:'https://www.facebook.com/profile.php?id=100051249822154'}];
  return (

      <ul className="flex flex-col justify-center items-center gap-y-6 ">
        {sociel.map((Item, i) => {
          const {Icon,link}=Item
          return (
           <Link key={ i} href={link} target="_blank">
            <li  className="">
             <Icon/>
            </li>
           </Link>
          );
        })}
      </ul>
  );
};

export default LS_Sociel_Icons;
