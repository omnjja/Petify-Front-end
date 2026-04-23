import React from "react";

const Button = ({
  type = "button",
  onClick,
  style,
  className,
  fullWidth = false,
  disabled = false,
  primary,
  secondary,
  cover,
  children,
}) => {
  const btnType = primary
    ? `bg-[#2F4156] text-[#F5EFED] hover:bg-[#1f2c3d] rounded-xl`
    : secondary
      ? `bg-[#FD7E14] text-white hover:bg-[#e76c0a]/90 rounded-xl`
      : cover && `bg-[#F8F9FA] hover:bg-gray-200 rounded-3xl`;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-5 py-2
        active:scale-97
        transition-all duration-200
        align-middle
        ${fullWidth ? "w-full" : "w-fit"}
        ${disabled ? "opacity-50 " : "cursor-pointer"}
      ${className}
      ${btnType}`}
      disabled={disabled}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
