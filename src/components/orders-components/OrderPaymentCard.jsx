const OrderPaymentCard = ({ paymentMethod, paymentStatus }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-xl font-semibold text-[#2F4156] mb-4">Payment</h2>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Method</span>
          <span>{paymentMethod}</span>
        </div>

        <div className="flex justify-between">
          <span>Status</span>

          <span className="text-green-600 font-medium">{paymentStatus}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderPaymentCard;
