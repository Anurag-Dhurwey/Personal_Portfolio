import React from 'react'
import { mongoDB, nextjs, nodejs } from "@/assets";
import style from "./navicon.module.css"
import Image from 'next/image';
const Navicons = () => {
    const mainSkills = [nextjs, nodejs, mongoDB];
  return (
    <div className={style.navicons_parent}>
        <ul className= 'h-full flex justify-evenly items-start'>
            {mainSkills.map((skill,i)=>{
               return  <li
                 key={i + Date.now()}
                 className={style.navicons_border}
                 style={{alignSelf:i==1?'flex-end':''}}
               >
                 <Image src={skill} alt="skills" className={style.navicons_logo} />
               </li>
            })}
        </ul>
      
    </div>
  )
}

export default Navicons
