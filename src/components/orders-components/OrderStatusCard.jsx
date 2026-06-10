import React from "react";
const OrderStatusCard = ({
  canceled,
  statuses,
  currentStep,
  estimatedDelivery,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-[#2F4156] mb-6">
        Order Status
      </h2>

      <div className="space-y-5">
        {canceled ? (
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold bg-red-500 text-white">
              X
            </div>
            <span className="font-medium text-red-500">Order Canceled</span>
          </div>
        ) : (
          statuses.map((status, index) => {
            const completed = index < currentStep;
            const active = index === currentStep;

            return (
              <div key={status} className="flex items-center gap-4">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold
                ${
                  completed
                    ? "bg-green-500 text-white"
                    : active
                      ? "bg-[#FD7E14] text-white"
                      : "bg-gray-200 text-gray-500"
                }`}
                >
                  {completed ? "✓" : index + 1}
                </div>
                <span
                  className={`capitalize font-medium ${
                    active
                      ? "text-[#FD7E14]"
                      : completed
                        ? "text-green-600"
                        : "text-gray-500"
                  }`}
                >
                  {status.replaceAll("_", " ")}
                </span>
              </div>
            );
          })
        )}
      </div>

      {!canceled && (
        <div className="mt-6 p-4 bg-orange-50 rounded-xl">
          <p className="text-sm text-[#2F4156]">
            Estimated Delivery:
            <span className="font-semibold ml-2">{estimatedDelivery}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default OrderStatusCard;
