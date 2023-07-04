"use client"
import Image from "next/image";
import Link from "next/link"

import {FaYoutube, Fafacebook, FaInstagram, FaPinterest, FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa'
const Footer = () => {

    return (
    
    
      <footer className='lg:pt-24 pt-0 bg-forange mt-32'>
      <div className='container mx-auto lg:mb-12'>
           <div className='flex flex-col gap-12  lg:flex-row '>
           <div className='flex flex-col flex-1 lg:max-w-[400px]'>
                  <div className=' flex flex-col gap-4 m-auto pt-12 lg:m-0 lg:pt-2'>
                      
                      <Image src={'/logo.svg'} width={160} height={160} alt='' priority={1}/>

                     
                  </div>
              </div>

              <div className='flex flex-1 flex-col lg:flex-row gap-8 '>
                  <div className='text-center w-full lg:text-left '>
                      <div className='text-xl font-bold mb-6 text-gray-900'>Quick Links</div>
                      <ul className='space-y-4 text-gray-900'>
                          <li><a className='hover:text-blue transition 'href="#">About</a></li>
                          <li><a className='hover:text-blue transition 'href="#">Drinks</a></li>
                          <li><a className='hover:text-blue transition ' href="#">Promos</a></li>
                          <li><a className='hover:text-blue transition 'href="#">Contact</a></li>
                      </ul>
                  </div>

                  <div className='text-center w-full lg:text-left'>
                      <div className='text-xl font-bold mb-6 text-gray-900'>Quick Links</div>
                      <ul className='space-y-4 text-gray-900'>
                          <li><a className='hover:text-blue transition ' href="#">Orders & Refunds</a></li>
                          <li><a className='hover:text-blue transition 'href="#">Testimonials</a></li>
                          <li><a className='hover:text-blue transition 'href="#">Shipping Info</a></li>
                          <li><a className='hover:text-blue transition ' href="#">Additional Info</a></li>
                      </ul>
                  </div>
                  <div className='text-center w-full lg:text-left'>
                      <div className='text-xl font-bold mb-6 text-gray-900'>Address & Hours</div>
                      <ul className='space-y-4 text-gray-900'>
                          <li><a className='hover:text-blue transition ' href="#">601 Richmond St, Toronto</a></li>
                          <li><a className='hover:text-blue transition 'href="#">9AM - 11PM</a></li>
                      </ul>
                  </div>
              </div>

          

             
           </div>
       
      </div>
      <div className='py-10'>
          <div className='container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-center lg:gap-y-0'>
             
              <div className='flex text-2xl gap-x-8'>
                  <a href="#" className='hover:text-blue transition'>
                      <FaYoutube/>
                  </a>
                  <a href="#" className='hover:text-blue transition'>
                      <FaInstagram/>
                  </a>
                  <a href="#" className='hover:text-blue transition'>
                      <FaTwitter/>
                  </a>
                  <a href="#" className='hover:text-blue transition'>
                      <FaLinkedin/>
                  </a>
              </div>
          </div>
      </div>
      
  </footer>
    
    );
};

export default Footer;