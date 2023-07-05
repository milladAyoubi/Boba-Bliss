import React from 'react'
import Nav from './Nav'
import Image from 'next/image';
import { CgMenuRight } from 'react-icons/cg'

const Header = ( {setNavMobile} ) => {
    return (
      <header className=' fixed py-[30px] w-[100%] z-10 lg:hidden bg-forange' data-aos="fade-down" data-aos-delay="900" data-aos-duration="1200">
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