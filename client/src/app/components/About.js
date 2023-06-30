"use client"
import React from 'react'
import { Parallax } from 'react-parallax'



const About = () => {
    const bg = <Image src={'/smoothie.png'} width={560} height={560} alt=''/>
  return (
    <div className='text-center'>
       
      <Parallax className="h-[20vh] relative" bgImage={bg} strength={800}>
        <div className='flex items-center justify-center absolute h-[20vh] w-[100%]'>
            <span className='img-text'>Hello</span>
            
        </div>
      </Parallax>
    </div>
  );
}

export default About
