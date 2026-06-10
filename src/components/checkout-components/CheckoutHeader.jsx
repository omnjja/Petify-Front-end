import React from "react";
import Back from "../shared/ui/Back";

const CheckoutHeader = () => {
  return (
    <div className="mb-8">
      <Back to="/cart">Back to Cart</Back>
      <h1 className="text-2xl sm:text-3xl font-bold text-[#2F4156] mt-4">
        Checkout
      </h1>
      <p className="text-gray-500 mt-2">
        Complete your order details and payment.
      </p>
    </div>
  );
};

export default CheckoutHeader;
