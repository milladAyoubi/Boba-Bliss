"use client";
import { Poppins } from "next/font/google";
import React, { createContext, useState } from "react";
import CartMobileIcon from "../components/CartMobileIcon";
import { Boba } from "../components/Boba";
export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)

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

        toppings.sort((a, b) => a.name.localeCompare(b.name))

        const newItem = {
            id,
            image,
            name,
            price,
            toppings,
            size,
            suger,
            amount: 1
        }

        const cartItemIndex = cart.findIndex((item)=> {
            item.id === id && 
            item.price === price && 
            item.size === size && 
            JSON.stringify(item.toppings) === JSON.stringify 
            (toppings) && 
            item.suger === suger
            
        });

        if (cartItemIndex === -1 ) {
            setCart([...cart, newItem])
        } else {
            const newCart = [...cart];
            newCart[cartItemIndex].amount += 1
            setCart(newCart)
        }
        setCart([...cart, newItem])
        setIsOpen(true)
        
       
    }

    const removeItem = (id, price, suger) => {
        const itemIndex = cart.findIndex(
            (item) => item.id === id && item.price === price && item.suger === suger
        );

        if (itemIndex !== -1) {
            const newCart = [...cart];
            newCart.splice(itemIndex,1)
            setCart(newCart)
        }
    }

    const incAmount = (id,price) => {
        
    }

    console.log(cart)
    return ( <CartContext.Provider value = {
            { isOpen, setIsOpen, addToCart, removeItem, cart }
        } >

        { children }

        </CartContext.Provider>
    );
}

export default CartProvider