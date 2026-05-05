import React, { useContext, useEffect, useState } from "react";
import UseSelectedProduct from "../../hooks/UseSelectedProduct";
import { MdAddShoppingCart } from "react-icons/md";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useParams } from "react-router-dom";
import UseProducts from "../../hooks/UseProducts";
import { ProductsContext } from "../../contexts/ProductsContext";
import Rating from "../Rating";
import UseLoggedUser from "../../hooks/UseLoggedUser";
import LoadingSpinner from "../LoadingSpinner";
import toast from "react-hot-toast";

const ViewProduct = () => {
  const { id } = useParams();
  const products = UseProducts();
  const { setProducts } = useContext(ProductsContext);
  const { setSelectedProduct } = useContext(ProductsContext);
  const product = UseSelectedProduct();

  const { cartItems, setCartItems } = useContext(ProductsContext);

  useEffect(() => {
    const viewedProduct = products.find((p) => p.id == id);
    setSelectedProduct(viewedProduct);
  }, [id, products, setSelectedProduct, product]);

  const [userRating, setUserRating] = useState(0);

  const isLogged = UseLoggedUser();
  const [cartItem, setCartItem] = useState(null);

  useEffect(() => {
    product && setCartItem({ ...product, quantity: 1 });
  }, [product]);

  function increaseQuantity(id) {
    setCartItems(
      cartItems.map((item) =>
        item.id == id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }
  function handleAddToCart(id) {
    !isLogged && toast.error("Login First!");
    const thisCartItem = cartItems.find((ci) => ci.id == id);
    if (isLogged) {
      thisCartItem
        ? increaseQuantity(id)
        : setCartItems([...cartItems, cartItem]);
      toast.success("Added To Cart");
    }
  }

  function updateRating(baseRating) {
    return (baseRating + userRating) / 2;
  }
  function handleRate(id) {
    setProducts(
      products.map((p) =>
        p.id === id ? { ...p, rating: updateRating(p.rating) } : p,
      ),
    );
    toast.success("Your Rate Is Saved");
    setUserRating(0);
  }

  return (
    <div className="max-w-8xl my-5 mx-auto p-6">
      {!product ? (
        <LoadingSpinner text="Product is Loadig" />
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {!product?.image ? (
            <p className="text-gray-500 text-center">
              No product images available
            </p>
          ) : (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-80 object-cover rounded-xl"
            />
          )}

          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-[#2F4156] mb-4">
              {product?.name}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              {product?.description || "No description available."}
            </p>
            <span className="text-2xl font-semibold text-[#FD7E14] mb-6">
              ${product?.price}
            </span>

            {product?.rating && (
              <div className="mb-6">
                <Rating
                  value={userRating || product?.rating}
                  onChange={(val) => setUserRating(val)}
                />
              </div>
            )}

            <div className="flex gap-5">
              {/* Add to Cart */}
              <button
                onClick={() => handleAddToCart(product.id)}
                className="cursor-pointer flex items-center gap-2 bg-[#2f4156d6] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#2F4156] transition-colors w-fit"
              >
                <MdAddShoppingCart size={20} />
                Add to Cart
              </button>

              <button
                onClick={() => handleRate(product.id)}
                className={
                  !userRating
                    ? `invisible`
                    : `cursor-pointer flex items-center gap-2 bg-[#fd7d14eb] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#FD7E14] transition-colors w-fit`
                }
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewProduct;
