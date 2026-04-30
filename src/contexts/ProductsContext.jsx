import React, { createContext, useContext, useEffect, useState } from "react";
// import * as productsApi from "../APIs/shopAPI";
// import * as cartApi from "../APIs/cartAPI";
import * as productsApi from "@/mockAPIs/mockShopAPI";
import * as cartApi from "@/mockAPIs/mockCartAPI";
import { AuthContext } from "./AuthContext";

const ProductsContext = createContext();
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const cartCount =
    cartItems?.reduce((sum, item) => sum + item.quantity, 0) || 0;
  const [loading, setLoading] = useState(false);
  const { role } = useContext(AuthContext);
  const productsCount = products?.length || 0;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const { data } = await productsApi.getAllProducts();
        setProducts(data.content);
      } catch (error) {
        console.log("error", error.response);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

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
    setCartItems((prev) => {
      const exists = prev.find((ci) => ci.id === data.id);
      if (exists) {
        return prev.map((ci) =>
          ci.id === data.id ? { ...ci, quantity: data.quantity } : ci,
        );
      }
      return [...prev, data];
    });
  };

  const updateCartQuantity = async (id, quantity) => {
    const { data } = await cartApi.updateCartItemQuantity(id, quantity);

    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: data.quantity } : item,
      ),
    );
  };

  const removeFromCart = async (id) => {
    await cartApi.removeCartItem(id);

    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = async () => {
    await cartApi.clearCart();
    setCartItems([]);
  };

  const createProduct = async (product) => {
    const { data } = await productsApi.addProduct(product);
    return data;
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        selectedProduct,
        setSelectedProduct,
        cartItems,
        setCartItems,
        cartCount,
        addToCart,
        loading,
        setLoading,
        productsCount,
        createProduct,
        updateCartQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
export { ProductsContext };
