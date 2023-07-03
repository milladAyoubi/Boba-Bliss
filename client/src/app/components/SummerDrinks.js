"use client"
import React from 'react';
import Image from 'next/image';
import {IoIosArrowDroprightCircle} from 'react-icons/io';

const SummerDrinks = () => {
  return (
  
  <section  className='section lg:mt-[-50px] ' id="crypto" data-aos="fade-right" data-aos-delay="500"data-aos-duration="1200">
    <div className='container mx-auto text-center lg:text-left' >
    <div className='flex flex-col items-center gap-x-10 lg:flex-row' >
     <div className='lg:max-w-[700px] '>
            <h2 className='section-title '>Summer Drink Days Are Back!</h2>
            <p className='section-subtitle'>Sip away the summer heat and fill yourself with a nutritious drink with a small a smoothie only starting at $6.99! 
            </p>
            <button className='flex m-auto lg:m-0 gradient text-white rounded-full btn-sm font-semibold text-lg px-16 py-3'>Learn More</button>
      </div>


    <div  className="lg:relative lg:bottom-8" >

    <Image src={'/Summer-Image.png'} width={560} height={560} alt='' priority={1}/>

     
    </div>



    </div>

    </div>

  </section>
  
  
  );
};

export default SummerDrinks;
