import { useFormContext } from "react-hook-form";

const PaymentFields = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const payment = watch("payment");

  if (payment === "Card") {
    return (
      <>
        <input
          {...register("cardNumber")}
          placeholder="Card Number"
          className="w-full px-4 py-3 border border-[#2f415677] rounded-xl"
        />

        {errors?.cardNumber && (
          <p className="text-red-500 text-sm mt-2">
            {errors?.cardNumber.message}
          </p>
        )}
      </>
    );
  }

  if (payment === "Meeza") {
    return (
      <>
        <input
          {...register("meezaNumber")}
          placeholder="Meeza Number"
          className="w-full px-4 py-3 border border-[#2f415677] rounded-xl"
        />

        {errors?.meezaNumber && (
          <p className="text-red-500 text-sm mt-2">
            {errors?.meezaNumber.message}
          </p>
        )}
      </>
    );
  }

  return (
    <p className="text-gray-500">You will pay when your order is delivered.</p>
  );
};

export default PaymentFields;
