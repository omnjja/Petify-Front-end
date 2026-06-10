import React, { createContext, useEffect, useState } from "react";
import * as ordersApi from "@/mockAPIs/mockOrdersAPI";

const OrdersContext = createContext();
const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await ordersApi.getUserOrders();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  const createOrder = async (orderData) => {
    const { data } = await ordersApi.createOrder(orderData);
    setOrders((prev) => [data, ...prev]);
    return data;
  };

  const getOrderById = (id) => {
    return orders.find((o) => o.id === id);
  };

  const cancelOrder = async (id) => {
    const { data } = await ordersApi.cancelOrder(id);

    setOrders((prev) => prev.map((order) => (order.id === id ? data : order)));
  };

  return (
    <OrdersContext.Provider
      value={{ orders, setOrders, createOrder, getOrderById, cancelOrder }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
export default OrdersProvider;
export { OrdersContext };
