"use client";

import React, { useState } from "react";

import Image from 'next/image'

import Modal from 'react-modal'

import BobaDetails from "./BobaDetails";

import {IoCloseOutline } from 'react-icons/io5';


Modal.setAppElement('body')

const modalStyles = {
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
}

const Boba = ({boba}) => {
    console.log(boba)
   
    const [modal, setModal] = useState(false);
    


    const openModal = () => {
        setModal(true);
    }

    const closeModal = () => {
        setModal(false);
    }

   
    return (
    
    <div className="group py-2  px-4 xl:py-4 xl:-px-2 rounded-xl lg:relative bottom-28">
        <Image onClick={openModal} className="lg:group-hover:-translate-y-5 transition-all duration-300 mb-8 cursor-pointer" 
        width={270} height={270} src={boba.image} alt='' priority={1} />
        
        <div onClick={openModal}>
            <div className="text-xl font-bold mb-3 capitilize cursor-pointer">{boba.name}</div>
        </div>

        <div className="text-sm font-medium min-h-[60px] mb-6 ">{boba.description}</div>
   
        <div className="mb-6 flex items-center justify-between">
            <div className="hidden lg:flex text-xl font-semibold">Start at {boba.priceSm}</div>

            <button onClick={openModal} className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm">Choose</button>

            <button onClick={openModal} className="btn btn-sm gradient text-sm lg:hidden px-3">Starts at {boba.priceSm}</button>
        </div>

        {modal &&
         <Modal isOpen={modal} style={modalStyles} onRequestClose={closeModal} contentLabel='Boba Modal' 
         className="bg-white w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%]">
            <div onClick={closeModal} className="absolute z-30 right-2 top-2 hover:scale-110 duration-200 cursor-pointer">
                <IoCloseOutline className="text-4xl text-orange"/>
            </div>
            <BobaDetails boba={boba}  modal={modal} setModal={setModal} />
        </Modal>}
    </div>
    
    );
};

export default Boba;