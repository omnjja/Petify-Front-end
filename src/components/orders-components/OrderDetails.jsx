import { OrdersContext } from "@/contexts/OrdersContext";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";
import OrderHeader from "./OrderHeader";
import OrderStatusCard from "./OrderStatusCard";
import OrderAddressCard from "./OrderAddressCard";
import OrderItemsCard from "./OrderItemsCard";
import OrderPaymentCard from "./OrderPaymentCard";
import OrderSummaryCard from "./OrderSummaryCard";
import OrderActionsCard from "./OrderActionsCard";

const OrderDetails = () => {
  const { id } = useParams();
  const { getOrderById } = useContext(OrdersContext);

  const statuses = ["processing", "packed", "out_for_delivery", "delivered"];
  const order = getOrderById(id);
  const currentStep = statuses.indexOf(order?.status);
  
  if (!order) return <LoadingSpinner />;
  console.log(order)
  return (
    <main className="min-h-screen bg-[#F8F9FA] py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <OrderHeader order={order} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <OrderStatusCard
              canceled={order.status === "canceled"}
              statuses={statuses}
              currentStep={currentStep}
              estimatedDelivery={order.estimatedDelivery}
            />

            <OrderAddressCard address={order.address} />

            <OrderItemsCard items={order.items} />
          </div>

          <div className="space-y-6">
            <OrderPaymentCard
              paymentMethod={order.paymentMethod}
              paymentStatus={order.paymentStatus}
            />

            <OrderSummaryCard
              subtotal={order.subtotal}
              shipping={order.shipping}
              total={order.total}
            />

            <OrderActionsCard status={order.status} id={order.id} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderDetails;
