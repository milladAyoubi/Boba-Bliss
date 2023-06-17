"use client";
import { Poppins } from "next/font/google";
import React, {createContext, use, useState} from "react";
import CartMobileIcon from "../components/CartMobileIcon";

export const CartContext = createContext();

const CartProvider = ({children}) => {

    const [isOpen, setIsOpen ] = useState(false)
    return (
        <CartContext.Provider value={{isOpen, setIsOpen}}>
                
            {children}
            
        </CartContext.Provider>
    );
}

export default CartProvider