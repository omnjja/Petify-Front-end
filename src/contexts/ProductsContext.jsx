import React, { createContext, useEffect, useState } from "react";
// import * as productsApi from "../APIs/shopAPI";
import * as productsApi from "@/mockAPIs/mockShopAPI";

const ProductsContext = createContext();
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(false);
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
        loading,
        setLoading,
        productsCount,
        createProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
export { ProductsContext };
