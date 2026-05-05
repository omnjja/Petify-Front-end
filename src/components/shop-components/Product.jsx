import React, { useContext } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import UseLoggedUser from "../../hooks/UseLoggedUser";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../contexts/ProductsContext";
import Rating from "../Rating";
import UseCartItems from "../../hooks/UseCartItems";
import toast, { Toaster } from "react-hot-toast";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Product = ({ product }) => {
  const isLogged = UseLoggedUser();
  const { addToCart } = useContext(ProductsContext);

  async function handleAddToCart(product) {
    if (!isLogged) {
      toast.error("Login First!");
      return;
    }
    try {
      await addToCart(product);
      toast.success("Added To Cart");
    } catch (error) {
      toast.error(error || "Something Went wrong");
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col">
      <Link to={`/shop/view-product/${product.id}`}>
        {" "}
        <div className="w-full h-48 overflow-hidden rounded-xl mb-4 relative">
          {!product?.image ? (
            <p className="text-gray-500 text-center">
              No product photos available
            </p>
          ) : (
            <img
              src={product?.image}
              alt={product?.name}
              className="w-full h-full object-cover"
            />
          )}
        </div>
        <div className="flex flex-col flex-grow">
          <h3 className="text-lg font-semibold text-[#2F4156] mb-1 cursor-pointer">
            {product?.name}
          </h3>
          <p className="text-sm text-gray-500 mb-2">
            {product?.description || ""}
          </p>
        </div>
      </Link>

      {product.rating && <Rating value={product?.rating} readOnly={true} />}

      <div className="flex justify-between items-center mt-auto">
        <span className="text-lg font-bold text-[#FD7E14]">
          ${product?.price}
        </span>
        <button
          className="cursor-pointer text-[#FD7E14] hover:text-white p-2 rounded-full hover:bg-[#e76c0a] transition-colors"
          onClick={() => handleAddToCart(product)}
        >
          <MdAddShoppingCart size={20} />
        </button>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Product;
