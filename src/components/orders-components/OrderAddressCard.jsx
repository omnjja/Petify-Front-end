import React from "react";
const OrderAddressCard = ({ address }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-[#2F4156] mb-4">
        Delivery Address
      </h2>

      <p>{address}</p>
    </div>
  );
};

export default OrderAddressCard;
