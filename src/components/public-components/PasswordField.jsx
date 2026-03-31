import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordField = ({ label, id, placeholder, error, register }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <label className="block text-[#2F4156] mb-1" htmlFor={id}>
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          type={show ? "text" : "password"}
          placeholder={placeholder}
          {...register(id)}
          className={`w-full px-4 py-2 pr-10 border ${
            error ? "border-red-500" : "border-[#2f415677]"
          } rounded-xl focus:outline-none focus:ring-1 focus:ring-[#FD7E14] focus:border-[#FD7E14]`}
        />
        <button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        >
          {show ? <Eye size={18} /> : <EyeOff size={18} />}
        </button>
      </div>

      {error ? (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      ) : (
        <p className="text-sm mt-1 min-h-[20px] invisible">" "</p>
      )}
    </div>
  );
};

export default PasswordField;
