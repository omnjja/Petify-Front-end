import React from "react";
import { Link } from "react-router-dom";

const Back = ({ to = "/cart", children = "Back to Cart" }) => {
  return (
    <Link
      to={to}
      className="inline-flex items-center text-[#FD7E14] hover:underline"
    >
      ← {children}
    </Link>
  );
};

export default Back;
