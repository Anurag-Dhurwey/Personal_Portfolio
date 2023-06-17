"use client";
import React from "react";
// import { FaTwitter } from "react-icons/fa";
// import { BsLinkedin } from "react-icons/bs";
// import { GrInstagram } from "react-icons/gr";
// import { FaFacebookSquare } from "react-icons/fa";
import { instagram, facebook, linkedin, twitter, github } from "@/assets";
import Link from "next/link";
import Image from "next/image";

const LS_Sociel_Icons = () => {
  const sociel = [
    { Icon: twitter, link: "https://twitter.com/anurag_dhurwey2" },
    {
      Icon: linkedin,
      link: "https://www.linkedin.com/in/anurag-dhurwey-03732024b/",
    },
    { Icon: instagram, link: "https://www.instagram.com/anurag__dhurwey/" },
    {
      Icon: facebook,
      link: "https://www.facebook.com/profile.php?id=100051249822154",
    },
    { Icon: github, link: "" },
  ];
  return (
    <ul className="flex flex-col justify-center items-center gap-y-6 ">
      {sociel.map((Item, i) => {
        const { Icon, link } = Item;
        return (
          <Link key={i} href={link} target="_blank">
            <li className="">
              <Image src={Icon} alt="social" className="w-6 h-6" />
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default LS_Sociel_Icons;
