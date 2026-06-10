import { useFormContext } from "react-hook-form";
import PaymentFields from "./PaymentFields";

const methods = ["Card", "Meeza", "Cash on Delivery"];

const CheckoutPayment = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const payment = watch("payment");

  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6 mt-6">
      <h2 className="text-xl font-semibold text-[#2F4156] mb-4">
        Payment Method
      </h2>

      {/* <input type="hidden" {...register("payment")} /> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {methods.map((method) => (
          <label
            key={method}
            onClick={() =>
              document
                .querySelector('input[name="payment"]')
                .setAttribute("value", method)
            }
            className={`border rounded-xl p-4 cursor-pointer transition ${
              payment === method
                ? "border-[#FD7E14] bg-orange-50"
                : "border-gray-200"
            }`}
          >
            <input
              type="radio"
              value={method}
              {...register("payment")}
              className="mr-2"
            />

            {method}
          </label>
        ))}
      </div>

      <div className="mt-6">
        <PaymentFields />
      </div>

      {errors.payment && (
        <p className="text-red-500 mt-2">{errors.payment.message}</p>
      )}
    </div>
  );
};

export default CheckoutPayment;
