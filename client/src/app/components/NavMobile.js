import React from 'react'
import Link from "next/link";
import { CgClose } from 'react-icons/cg'

const NavMobile = ({setNavMobile}) => {
  return (
    <nav className='lg:hidden bg-white h-[40vh] bottom-0 top-0 w-60 flex justify-center items-center shadow-lg rounded-bl-3xl		'>
   
      <div onClick={()=> setNavMobile(false) }className='absolute top-7 left-4 left-2 cursor-pointer'>
        <CgClose className='text-3xl'/>
      </div>
      <ul className='text-xl flex flex-col gap-y-8'>
      <li className=''>

<a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded  hover:text-forange duration-300">About</a>
</li>
<li>
<a href="#drinks" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-forange duration-300 ">Drinks</a>        </li>
<li>
<a href="#promos" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-forange duration-300">Promos</a>        </li>
<li>
<a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:text-forange duration-300">Contact</a>        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;