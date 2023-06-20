"use client"

import React, {useContext} from 'react'

import CartItem from './CartItem'
import CartBottom from './CartBottom';
import CartTop from './CartTop';
import { CartContext } from '../context/CartContext';


const CartDesktop = () => {
  const {isOpen, cart } = useContext(CartContext)

  return (
  
  <div className={`${isOpen ? 'left-0' : '-left-full'} bg-white fixed top-0 
  bottom-0 w-[500px] shadow-2xl lg:flex flex-col transition-all duration-300 z-20`}>
    
    <CartTop/>

    <div className={`p-10 flex flex-col gap-y-4 h-[65vh] py-2 mr-4 mt-8 overflow-y-scroll scrollbar-10 ${cart.length >= 3 && 'scrollbar-track-black/10 scrollbar-thumb-secondary'}`> 
      {cart.map((boba,index) => {
        return <CartItem boba={boba} key={index}/>
      })}
    </div>
    
  </div>
  
  );
};

export default CartDesktop;
