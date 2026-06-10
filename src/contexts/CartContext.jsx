import React, { createContext, useContext, useEffect, useState } from "react";
// import * as cartApi from "../APIs/cartAPI";
import * as cartApi from "@/mockAPIs/mockCartAPI";
import { AuthContext } from "./AuthContext";

const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = 5.99;
  const taxRate = 0.1;
  const tax = subtotal * taxRate;
  const total = subtotal + shipping + tax;
  const cartCount =
    cartItems?.reduce((sum, item) => sum + item.quantity, 0) || 0;
  const [loading, setLoading] = useState(false);
  const { role } = useContext(AuthContext);

  useEffect(() => {
    if (role !== "PET_OWNER") return;
    const fetchCart = async () => {
      try {
        const { data } = await cartApi.getUserCart();
        setCartItems(data.products);
      } catch (error) {
        console.log("error", error.response);
      }
    };
    fetchCart();
  }, [role]);

  const addToCart = async (cartItem) => {
    const { data } = await cartApi.addCartItem(cartItem);
    setCartItems(data);
  };

  const updateCartQuantity = async (id, quantity) => {
    const { data } = await cartApi.updateCartItemQuantity(id, quantity);

    setCartItems(data);
  };

  const removeFromCart = async (id) => {
    const { data } = await cartApi.removeCartItem(id);

    setCartItems(data);
  };

  const clearCart = async () => {
    await cartApi.clearCart();
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        cartCount,
        subtotal,
        shipping,
        taxRate,
        tax,
        total,
        addToCart,
        loading,
        setLoading,
        updateCartQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export { CartContext };
