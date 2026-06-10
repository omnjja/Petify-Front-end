import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

const UseCartItems = () => {
  const { cartItems } = useContext(CartContext);
  return cartItems;
};

export default UseCartItems;
