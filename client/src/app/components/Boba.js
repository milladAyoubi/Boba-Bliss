"use client";

import React, { useState } from "react";

import Image from 'next/image'

import Modal from 'react-modal'

import BobaDetails from "./BobaDetails";

import {IoCloseOutline } from 'react-icons/io5';



const Boba = ({boba}) => {
    console.log(boba)
    return (
    
    <div className="group py-2  px-4 xl:py-4 xl:-px-2 rounded-xl">
        <Image width={270} height={270} src={boba.image} alt='' priority={1} />
        
        <div>
            <div className="text-xl font-bold mb-3 capitilize cursor-pointer">{boba.name}</div>
        </div>

        <div className="text-sm font-medium min-h-[60px] mb-6 ">{boba.description}</div>
   
        <div className="mb-6 flex items-center justify-between">
            <div className="hidden lg:flex text-xl font-semibold">Start at {boba.priceSm}</div>

            <button className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm">Choose</button>
        </div>
    </div>
    
    );
};

export default Boba;