import React from "react";

const InputField = ({
  label,
  id,
  type = "text",
  placeholder,
  error,
  register,
  ...props
}) => {
  return (
    <div>
      <label className="block text-[#2F4156] mb-1" htmlFor={id}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        {...register(id)}
        className={`w-full px-4 py-2 border ${
          error ? "border-red-500" : "border-[#2f415677]"
        } rounded-xl focus:outline-none focus:ring-1 focus:ring-[#FD7E14] focus:border-[#FD7E14]`}
        {...props}
      />
      {error ? (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      ) : (
        <p className="text-sm mt-1 min-h-[20px] invisible">" "</p>
      )}
    </div>
  );
};

export default InputField;
