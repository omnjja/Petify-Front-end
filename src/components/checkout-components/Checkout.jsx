import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import CheckoutHeader from "./CheckoutHeader";
import CheckoutAddress from "./CheckoutAddress";
import CheckoutPayment from "./CheckoutPayment";
import CheckoutSummary from "./CheckoutSummary";
import { CartContext } from "@/contexts/CartContext";
import { OrdersContext } from "@/contexts/OrdersContext";
import useCustomForm from "@/hooks/useCustomForm";
import {
  checkoutDefaultValues,
  checkoutSchema,
} from "@/schemas/checkoutSchema";
import { FormProvider } from "react-hook-form";

const Checkout = () => {
  const navigate = useNavigate();
  const { createOrder } = useContext(OrdersContext);
  const { cartItems, clearCart, subtotal, shipping, total } =
    useContext(CartContext);

  const methods = useCustomForm({
    defaultValues: checkoutDefaultValues,
    schema: checkoutSchema,
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      const order = await createOrder({
        items: cartItems,
        address: data.address,
        paymentMethod: data.payment,
        paymentStatus:
          data.payment === "Cash on Delivery"
            ? "will be paid on delivery"
            : "paid",
        subtotal,
        shipping,
        total,
      });
      await clearCart();
      toast.success("Order placed successfully!");
      navigate(`/order-details/${order.id}`);
    } catch (error) {
      toast.error("Failed to place order");
      console.log("checkout error: ", error);
    }
  };

  return (
    <FormProvider {...methods}>
      <form
        className="min-h-screen bg-[#F8F9FA] py-8 px-4"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <div className="max-w-7xl mx-auto">
          <CheckoutHeader />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CheckoutAddress />

              <CheckoutPayment />
            </div>

            <div className="lg:col-span-1">
              <CheckoutSummary
                cartItems={cartItems}
                subtotal={subtotal}
                shipping={shipping}
                total={total}
                onSubmit={onSubmit}
              />
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default Checkout;
