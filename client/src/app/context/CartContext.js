"use client";
import { Poppins } from "next/font/google";
import React, { createContext, useEffect, useState } from "react";
import CartMobileIcon from "../components/CartMobileIcon";
import { Boba } from "../components/Boba";
export const CartContext = createContext();


const CartProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)

    const [cart, setCart] = useState([])

    const [cartTotal, setCartTotal] = useState(0)

    const [itemAmount, setItemAmount] = useState(0)

useEffect(() => {
 
        const totalPrice = cart.reduce((a, c) => {
            return a + c.price * c.amount
            
        }, 0)

    setCartTotal(totalPrice)
}, [cart])
   

    useEffect(() => {
        const amount = cart.reduce((a,c) => {
            return a + c.amount; 
        }, 0);

        setItemAmount(amount)
    })

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
        const itemIndex = cart.findIndex (
            (item) => item.id === id && item.price === price
        )

        if (itemIndex !== -1) {
            const newCart = [...cart]
            newCart[itemIndex].amount += 1;
            setCart(newCart)
        } 
    }

    const decAmount = (id, price) => {
        const itemIndex = cart.findIndex (
            (item) => item.id === id && item.price === price
        )

        if(itemIndex !== -1) {
            const newCart = [...cart]
            if(newCart[itemIndex].amount > 1) {
                newCart[itemIndex].amount -= 1; 
            }
            setCart(newCart)
        }
    }

    const cartAmount = () => {
       return cart.length
    }
   

    console.log(cart)
    
    return ( <CartContext.Provider value = {
            { isOpen, 
              setIsOpen, 
              addToCart, 
              removeItem,
              incAmount,
              decAmount,
              cartAmount,
              itemAmount,
              cartTotal,
              cart, }
        } >

        { children }

        </CartContext.Provider>
    );
}

export default CartProvider