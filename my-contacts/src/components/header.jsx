import React from 'react'
import { IoMdMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import Homepage from './Homepage';
import { FaUser } from "react-icons/fa6";

function Header() {
  return (
    <div>
      <div className='lg:w-[1470px] sm:w-[743px] rounded-md bg-cyan-700 h-15 justify-center items-center flex gap-40'>
        <ul>
          <div className="flex p-5 items-center justify-between gap-20">
            <li className='text-3xl font-bold hidden md:block'><h1 className=''>Contact</h1></li>
            <li className='text-xl hidden md:block'><h2><a href="/home"> Home</a></h2></li>
            <li className='block lg:hidden  md:hidden text-3xl ml-80'><IoMdMenu /></li>
          </div>
        </ul>
        <div className=" flex  gap-4 rounded-md bg-slate-500 sm:mr-14">
          <div className='items-center justify-center'>
            <p><FaUser className='text-4xl items-center justify-center' /></p>
          </div>
          <div>
            <p>murerwa</p>
            <p>pivoine@gmail.com</p>
          </div>
          <div>
            <button className=" rounded-md bg-white mt-3 hover:bg-slate-700"> sign out</button>
          </div>

        </div>
      </div>
      <Homepage />

    </div>
  );
}

export default Header;