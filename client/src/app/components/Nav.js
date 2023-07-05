"use client"
import Image from "next/image";
import Link from "next/link";

import React, {useContext, useEffect, useState} from "react";
import { CartContext } from "../context/CartContext";


const Nav = () => {
  const [navbar, setNavBar] = useState(false)
  const {isOpen, setIsOpen, itemAmount} = useContext(CartContext)


  const [isScrolled, setIsScrolled] = useState(false);

  
  useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setIsScrolled(scrollTop > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


  return (
  <nav className={`${isScrolled ? 'bg-white shadow-lg duration-300' : 'bg-transparant duration-300'} hidden lg:flex w-full py-4 z-10 fixed data-aos='fade-down`} data-aos-delay='200' data-aos-duration='1000'>
      <div className="container mx-auto flex flex-col lg: lg:flex-row gap-y-3 justify-between items-center">
        <Link href="#">
          <Image src={'logo.svg'} width={180} height={180} alt='' ></Image>
        </Link>
       
        <div className="flex gap-x-8 items-center">
          <div className="flex gap-x-3 items-center">
       
            <div className="text-indigo font-medium text-medium">
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-transparent">
       
        <li>

          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-white hover:duration-200 md:p-0 ">About</a>
        </li>
        <li>
        <a href="#drinks" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-white hover:duration-200 md:p-0 ">Drinks</a>        </li>
        <li>
        <a href="#promos" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-white  hover:duration-200 md:p-0 ">Promos</a>        </li>
        <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-white hover:duration-200 md:p-0 ">Contact</a>        </li>
      </ul>
    </div>
                
               
            </div>
          </div>
          <div onClick={()=> setIsOpen(!isOpen)} className="relative cursor-pointer hidden lg:flex">
            <Image src={'bag.svg'} width={38} height={38} alt=''/>
            <div className="bg-red-600 w-6 h-6 rounded-full text-white flex justify-center items-center text-[13px] absolute -top-2.5 -right-2.5">
              {itemAmount}
            </div>
          </div>
        </div>
      </div>
  </nav>
  
  );
};

export default Nav;
