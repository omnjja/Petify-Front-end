import React, { useContext } from 'react'
import { CartContext } from "../contexts/CartContext";

const UseCartCount = () => {
    const {cartCount} = useContext(CartContext);
    return cartCount;
}

export default UseCartCount
