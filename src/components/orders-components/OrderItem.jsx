import React from 'react'

const OrderItem = ({ item }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 border-b pb-4">
      <img
        src={item?.image}
        alt={item?.name}
        className="w-24 h-24 rounded-xl object-cover"
      />

      <div className="flex-1">
        <h3 className="font-semibold text-[#2F4156]">{item?.name}</h3>

        <p className="text-gray-500">Quantity: {item?.quantity}</p>

        <p className="text-[#FD7E14] font-semibold mt-1">EGP {item?.price}</p>
      </div>
    </div>
  );
};

export default OrderItem;
