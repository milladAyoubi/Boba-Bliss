"use client"

import React from 'react';

import Image from 'next/image';

const Promo = () => {
  return (
  
  <section  className='section lg:pt-[160px] bg-promo bg-center bg-no-repeat bg-cover' id="features">
    <div className='container mx-auto'>
    <div className='flex flex-col items-center gap-x-10 lg:flex-row justify-end' >
    

    <div  data-aos="fade-left" data-aos-delay="1000"data-aos-duration="1200">

      <div className='flex gap-6 py-5 px-10 buissness-icon-container '>
        <div className='buissness-icon bg-blue/10'>
    
        </div>

        <div className=''>
          <h3 className='text-indigo text-xl mb-1 font-semibold'>Stock Rewards</h3>
          <p className='text-indigo'>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
        </div>
      </div>


      <div className='text-indigo flex gap-6 py-5 px-10 buissness-icon-container '>
        <div className='buissness-icon bg-blue/10'>
       
        </div>

        <div>
          <h3 className='text-indigo text-xl mb-1 font-semibold'>Military Grade Encryption </h3>
          <p className='text-indigo'>We take proactive steps make sure your information and transactions are secure.</p>
        </div>
      </div>


      <div className='text-indigo flex gap-6 py-5 px-10 buissness-icon-container'>
        <div className='buissness-icon bg-blue/10'>
       
        </div>

        <div >
          <h3 className='text-indigo text-xl mb-1 font-semibold'>Universal E-Transfer</h3>
          <p className='text-indigo'>A balance transfer credit card can save you a lot of money in interest charges.</p>
          <button className='btn px-10  gradient text-white rounded-full btn-sm font-semibold text-sm'>Learn More</button>
        </div>
      </div>


     


     
    </div>



    </div>

    </div>

  </section>
  
  
  );
};

export default Promo;