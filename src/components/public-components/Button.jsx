import React from "react";

const Button = ({
  text,
  type = "button",
  onClick,
  fullWidth = false,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        bg-[#FD7E14] text-white
        px-5 py-2
        rounded-xl
        hover:bg-[#e76c0a]/90
        active:scale-97
        transition-all duration-200
        ${fullWidth ? "w-full" : "w-auto"}
        ${disabled ? "opacity-50 " : "cursor-pointer"}
      `}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
