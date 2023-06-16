"use client";
import Image from "next/image";
import {
    MouseParallaxContainer,
    MouseParallaxChild,
} from 'react-parallax-mouse'

const Banner = () => {
    return (
    <section className=" bg-pattern bg-no-repeat bg-cover lg:min-h-[768px] pt-16 lg:pt-16 relative bottom-16">
      <div className="container mx-auto min-h-[780px]  flex items-center justfy-center relative bottom-16">
        <MouseParallaxContainer globalFactorX={0.1} globalFactory={0.1} resetOnLeave className="w-full flex flex-col lg:flex-row justify-between items-center">
          <MouseParallaxChild factorX={0.1} factorY={0.1} >
            <div className="flex flex-col gap-6 ">
             
              <h1 className="text-3xl lg:text-6xl font-poppins font-extrabold text-indigo ">
              Boba That Will  <br/> Make You Climax
              </h1>
              <p className="text-xl lg:text-xl font-poppins  text-indigo">
              Here at Boba Hub we are committed to providing a <br/> orgasmic  feeling in your mouth while staying true <br/> to company values
              </p>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.1} factorY={0.1} >
          <div>

            <div>
              <Image src={'/Hero-Image.png'} width={550} height={550} alt='' priority={1}/>
            </div>
          </div>
            </MouseParallaxChild>

        </MouseParallaxContainer>
      </div>
    
      
    </section>
    
    
    );
};

export default Banner;