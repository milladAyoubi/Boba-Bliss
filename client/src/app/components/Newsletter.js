import React from 'react'
import Image from 'next/image'

const Newsletter = () => {
  return (
    <section className='mt-14 mb-24' id="promos">
        <div className='bg-newsletter text-xl container m-auto lg:min-h-[350px] h-[300px] bg-no-repeat bg-cover bg-center lg:max-h-[750px] rounded-xl flex flex-col lg:flex-row text-center lg:text-left' data-aos='fade-up' data-aos-delay='200' data-aos-duration='1200'>
           
            
            <div className=' m-auto flex flex-col gap-y-2 text-white lg:max-w-[300px]' >
                       <h1 className='text-2xl font-bold'>Sign Up For Our Newsletter Promotions</h1>
                       <p className='text-xl font-medium lg:max-w-[400px]'>Get exclusive deals delivered straight to your inbox</p>

            </div>

            <div className=' m-auto flex flex-col '>
                       <form action="" className='bg-white lg:py-3 lg:pl-10 lg:pr-3 py-1 px-1 rounded-full flex gap-4 w-[100%]'>
                            <input type="email" placeholder='Enter Email'/>

                            <a href="#"><button className='gradient lg:py-2 lg:px-5 rounded-full p-0.5 pointer'>Subscribe</button></a>
                       </form>

            </div>


        </div>
      
        </section>
  )
}

export default Newsletter
