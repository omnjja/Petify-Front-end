import React from "react";
import Button from "../shared/ui/Button";

const CheckoutSummary = ({ cartItems, subtotal, shipping, total }) => {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-2xl shadow-sm p-6 lg:sticky lg:top-24">
        <h2 className="text-xl font-semibold text-[#2F4156] mb-6">
          Order Summary
        </h2>

        <div className="space-y-3 text-sm">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between">
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>EGP {(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>

        <hr className="my-6" />

        <div className="space-y-3">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>EGP {subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>EGP {shipping.toFixed(2)}</span>
          </div>

          <div className="flex justify-between text-lg font-bold text-[#2F4156] pt-3 border-t">
            <span>Total</span>
            <span>EGP {total.toFixed(2)}</span>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full mt-6 bg-[#FD7E14] text-white py-3 rounded-xl hover:bg-[#e76c0a] transition"
        >
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default CheckoutSummary;
