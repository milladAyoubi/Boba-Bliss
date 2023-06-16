// cart context
import React, {createContext} from "react";

export const CartContext = createContext();

const CartProvider = () => {
    return (
        <CartContext.Provider value={'cart-context'}
    );
}