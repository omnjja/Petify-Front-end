import React from "react";
import { Link } from "react-router-dom";

const FormFooter = ({ title, distnation, url }) => {
  return (
    <div className="text-center text-[#2f415677] mt-4 text-sm md:text-base">
      {title}
      <Link
        to={url}
        className="font-semibold text-[#FD7E14] border-b-[2px] pb-[1px] px-1"
      >
        {distnation}
      </Link>
    </div>
  );
};

export default FormFooter;
