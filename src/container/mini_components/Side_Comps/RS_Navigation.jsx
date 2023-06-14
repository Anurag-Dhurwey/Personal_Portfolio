'use client'
import React from 'react'
import {Head_nav} from '../../../components'
import Link from 'next/link'

const RS_Navigation = ({idName}) => {
  return (
    <div className=''>
      <ul className='flex flex-col justify-center items-center gap-y-4'>
      {Head_nav.map((nav,i)=>{
        return (
          <Link key={nav+i} href={`#${nav}`}>
          <li >
             <button className={` h-3 w-3 rounded-[50%]  ${idName==nav?'bg-pink-700':'bg-[#00FFFF]'}`}>

             </button>
          </li>
          </Link>
        )
      })}
      </ul>
    </div>
  )
}

export default RS_Navigation
