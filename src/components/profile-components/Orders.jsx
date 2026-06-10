import React from "react";
import UseOrders from "@/hooks/UseOrders";
import Order from "./Order";

const Orders = () => {
  const orders = UseOrders();

  return (
    <div className="max-w-5xl mx-auto my-10 bg-[#F8F9FA] shadow-lg rounded-2xl p-6">
      <h2 className="text-2xl font-semibold text-[#2F4156] mb-6">
        Recent Orders
      </h2>

      <div className="hidden md:block overflow-x-auto rounded-lg">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#2f415677] text-white">
              <th className="p-3">Order ID</th>
              <th className="p-3">Status</th>
              <th className="p-3">Date</th>
              <th className="p-3">Total</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <Order key={order.id} order={order} variant="table" />
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {orders.map((order) => (
          <Order key={order.id} order={order} variant="card" />
        ))}
      </div>
    </div>
  );
};

export default Orders;
