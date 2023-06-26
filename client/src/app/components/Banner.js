"use client";
import Image from "next/image";
import {
    MouseParallaxContainer,
    MouseParallaxChild,
} from 'react-parallax-mouse'

const Banner = () => {
    return (
    <section className=" bg-pattern bg-no-repeat bg-cover lg:min-h-[768px]  pt-12 lg:pt-28 relative bottom-28">
      <div className="container mx-auto lg:min-h-[788px] min-h-[620px]  flex items-center justfy-center relative top-20 lg:top-0 lg:bottom-12">
        <MouseParallaxContainer globalFactorX={0.1} globalFactory={0.1} resetOnLeave className="w-full flex flex-col lg:flex-row justify-between items-center">
          <MouseParallaxChild factorX={0.1} factorY={0.1} >
            <div className="flex flex-col text-center gap-8 lg:text-left ">
             
              <h1 className="text-3xl lg:text-6xl font-poppins font-extrabold text-indigo ">
              Boba Made With   <br/> Delight In Every Sip
              </h1>
              <p className="text-xl lg:text-xl font-poppins text-indigo">
              Immerse yourself in our menu of handcrafted bubble tea  <br/> Meticulously curated to satisfy your taste buds and leave <br/> you wanting more!
              </p>
            </div>
          </MouseParallaxChild>
          <MouseParallaxChild factorX={0.1} factorY={0.1} >
          <div>

            <div className="relative left-5 top-6 lg:top-0">
              <Image src={'/Hero-Image.png'} width={560} height={560} alt='' priority={1}/>
            </div>
          </div>
            </MouseParallaxChild>

        </MouseParallaxContainer>
      </div>
    
      
    </section>
    
    
    );
};

export default Banner;