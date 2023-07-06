"use client"

import React from 'react';

import Image from 'next/image';

const Promo = () => {
  return (
  
  <section  className=' relative bottom-26' id="features" >
    <div className='container mx-auto'>
    <div className='flex flex-col items-center gap-x-10 lg:flex-row justify-end' >
      <div className='w-[80%] mb-8 lg:m-0 lg:max-w-[500px]'>

      <Image src={'/promo-image.png'} width={860} height={760} alt='' className=' lg:hover:rotate-12 transition-all duration-300' priority={1}/>
      </div>

    <div  className='sm:mt-12 mb-12' data-aos="fade-right" data-aos-delay="500"data-aos-duration="1200">

      <div className='text-indigo flex gap-6 py-5 px-10 buissness-icon-container '>
        <div className='buissness-icon bg-blue/10 m-auto'>
        <Image src={'/icon-star.png'} width={100} height={100} alt='' priority={1}/>
    
        </div>

        <div className=''>
          <h3 className='text-indigo text-xl mb-1 font-semibold'>Boba Rewards</h3>
          <p className='text-indigo'>As a loyal boba enthusiast, you deserve to be rewarded for your love of these delightful, chewy pearls of joy.</p>
        </div>
      </div>


      <div className='text-indigo flex gap-6 py-5 px-10 buissness-icon-container '>
        <div className='buissness-icon bg-blue/10 m-auto'>
        <Image src={'/icon-flavor.png'} width={120} height={90} alt='' priority={1}/>
        </div>

        <div>
          <h3 className='text-indigo text-xl mb-1 font-semibold'>Energizing Flavor</h3>
          <p className='text-indigo'>Designed to fuel your body and invigorate your senses, this remarkable blend of flavors is here to bring a burst of energy to your day.</p>
        </div>
      </div>


      <div className='text-indigo flex gap-6 py-5 px-10 buissness-icon-container'>
        <div className='buissness-icon bg-blue/10 m-auto'>
        <Image src={'/icon-natural.png'} width={120} height={110} alt='' priority={1}/>
        </div>

        <div >
          <h3 className='text-indigo text-xl mb-1 font-semibold'>Natural Toppings</h3>
          <p className='text-indigo'>Elevate your culinary creations with these carefully selected ingredients, harvested from bountiful fields and nurtured by the sun.</p>
         
        </div>
      </div>


     


     
    </div>



    </div>

    </div>

  </section>
  
  
  );
};

export default Promo;