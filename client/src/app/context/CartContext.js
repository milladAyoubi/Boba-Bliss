"use client";
import { Poppins } from "next/font/google";
import React, {createContext, use, useState} from "react";
import CartMobileIcon from "../components/CartMobileIcon";

export const CartContext = createContext();

const CartProvider = ({children}) => {

    const [isOpen, setIsOpen ] = useState(false)

    const [cart, setCart] = useState([])

    const addToCart = (
        id, 
        image, 
        name, 
        price, 
        toppings, 
        size, 
        suger
        
        ) => {
        console.log(id, image, name, price, toppings, size, suger)

        toppings.sort((a,b) => a.name.localCompare(b.name))

        const newItem = {
            id, image, name, price, toppings, size, suger, amount: 1
        }

        console.log(newItem)
        setCart([...cart, newItem])
    }
    console.log(cart)
    return (
        <CartContext.Provider value={{isOpen, setIsOpen, addToCart, cart}}>
                
            {children}
            
        </CartContext.Provider>
    );
}

export default CartProvider