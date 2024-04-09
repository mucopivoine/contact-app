import React from 'react'
import { IoMdMenu } from "react-icons/io";
function Header() {
  return (
    <div className='w-full bg-cyan-700 h-15 justify-center items-center flex'>
        <ul>
        <div className="flex p-5 items-center justify-between gap-20">
        <li className='text-3xl font-bold hidden md:block'><h1 className=''>Contact</h1></li>
        <li className='text-xl hidden md:block'><h2>Home</h2></li>
        <li className='block lg:hidden  md:hidden text-3xl mr-80'><IoMdMenu /></li>
        
        </div>
        </ul>
    </div>
  )
}

export default Header