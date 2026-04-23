import React from "react";

const SelectField = ({ label, id, options, register, error, ...props }) => {
  return (
    <div>
      <label className="block text-[#2F4156] mb-1" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        {...register(id)}
        className={`w-full px-4 py-2 border 
         rounded-xl focus:outline-none focus:ring-1 focus:ring-[#FD7E14] focus:border-[#FD7E14] ${
           error ? "border-red-500" : "border-[#2f415677]"
         }`}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-[#2f4156]"
          >
            {option.label}
          </option>
        ))}
      </select>
      {error ? (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      ) : (
        <p className="text-sm mt-1 min-h-[20px] invisible">" "</p>
      )}
    </div>
  );
};

export default SelectField;
