"use client"
import Image from "next/image";
import Link from "next/link"

import {FaYoutube, Fafacebook, FaInstagram, FaPinterest, FaFacebook} from 'react-icons/fa'
const Footer = () => {

    return (
    
    <footer className="bg-forange py-16 mt-28">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6 justify-center">
        <Link href={'#'}>
          <Image src={'logo.svg'} width={180} height={180} alt=''/>
        </Link>


      <div className="flex gap-x-6 text-xl text-white">
        <Link href={'#'}>
          <FaYoutube/>
        </Link>

      
      
        <Link href={'#'}>
          <FaFacebook/>
        </Link>
    

      
        <Link href={'#'}>
          <FaInstagram/>
        </Link>
    

      
     
        <Link href={'#'}>
          <FaYoutube/>
        </Link>
     

      </div>
      <div className="text-white font-medium text-center">
        Copyright &copy; Boba Bliss 2023. All Rights Reserved
      </div>
      </div>
      </div>
    </footer>
    
    );
};

export default Footer;