import { useFormContext } from "react-hook-form";

const CheckoutAddress = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">
      <h2 className="text-xl font-semibold text-[#2F4156] mb-4">
        Delivery Address
      </h2>

      <textarea
        rows="4"
        {...register("address")}
        placeholder="Enter your delivery address"
        className={`w-full px-4 py-3 border rounded-xl ${
          errors?.address ? "border-red-500" : "border-[#2f415677]"
        }`}
      />

      {errors?.address && (
        <p className="text-red-500 text-sm mt-2">{errors.address.message}</p>
      )}
    </div>
  );
};

export default CheckoutAddress;
