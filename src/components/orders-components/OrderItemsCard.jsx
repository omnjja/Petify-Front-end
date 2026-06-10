import React from 'react'
import OrderItem from "./OrderItem";

const OrderItemsCard = ({ items }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-[#2F4156] mb-6">Order Items</h2>

      <div className="space-y-4">
        {items?.map((item) => (
          <OrderItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OrderItemsCard;
