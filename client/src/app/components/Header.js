import React from 'react'
import Nav from './Nav'
import { useEffect, useState } from 'react';

import Image from 'next/image';
import { CgMenuRight } from 'react-icons/cg'

const Header = ( {setNavMobile} ) => {
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
      <header className={`${isScrolled ? 'bg-white shadow-lg duration-300' : 'bg-transparant duration-300'} fixed w-[100%] z-10 p-8 lg:hidden`} data-aos="fade-down" data-aos-delay="900" data-aos-duration="1200">
      <div className='container mx-auto flex items-center justify-between'> 
      <a href="#">
      <Image src={'logo.svg'} width={180} height={180} alt='' ></Image>
      </a>

      <div className='hidden lg:flex gap-x-[55px]'>
        <Nav/>

      </div>
      <div onClick={()=> setNavMobile(true)} className='lg:hidden cursor-pointer'>
        <CgMenuRight className='text-2xl'/>
      </div>

      </div>
      </header>
    
    
       
  );
};

export default Header;