import React from "react";
import { Link } from "react-router-dom";
import Back from "../shared/ui/Back";

const OrderHeader = ({ order }) => {
  return (
    <div className="mb-8">
      <Back to="/profile/orders">Back to Orders</Back>

      <h1 className="text-3xl font-bold text-[#2F4156] mt-4">
        Order #{order?.id}
      </h1>

      <p className="text-gray-500 mt-2">Placed on {order?.createdAt}</p>
    </div>
  );
};

export default OrderHeader;
