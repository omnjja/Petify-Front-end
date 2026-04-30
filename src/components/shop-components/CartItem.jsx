import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { ProductsContext } from "../../contexts/ProductsContext";
import swal from "sweetalert";
import toast, { Toaster } from "react-hot-toast";

const CartItem = ({ item }) => {
  const { products, removeFromCart, updateCartQuantity } =
    useContext(ProductsContext);

  const product = products.find((p) => p.id === item?.id);

  function removeItem(id) {
    swal({
      text: "Are you sure you want to remove this item from the cart?",
      buttons: {
        cancel: {
          text: "Cancel",
          value: false,
          visible: true,
          className:
            "bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded",
        },
        confirm: {
          text: "Yes",
          value: true,
          visible: true,
          className:
            "bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded",
        },
      },
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        removeFromCart(id);
        toast("Removed", {
          icon: "👍",
          duration: 300,
        });
      }
    });
  }

  function increaseQuantity(id) {
    if (item?.quantity < product?.stock) {
      updateCartQuantity(id, item?.quantity + 1);
    } else {
      toast.error("No enough items in stock!");
    }
  }

  function decreaseQuantity(id) {
    if (item?.quantity > 1) {
      updateCartQuantity(id, item?.quantity - 1);
    } else {
      removeItem(id);
    }
  }

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-3 border-b border-gray-200 pb-3">
      <div className="flex items-center gap-3 flex-1">
        <img
          src={item?.images[0]}
          alt={item?.name}
          className="w-14 h-14 md:w-20 md:h-20 object-cover rounded-lg order-2 md:order-1"
        />

        <div className="flex-1 order-1 md:order-2">
          <h3 className="font-medium text-sm md:text-base text-[#2F4156]">
            {item?.name}
          </h3>
          <p className="text-xs md:text-sm text-gray-500">
            ${item?.price.toFixed(2)} each
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-2 md:mt-0 gap-3 flex-1">
        <div className="flex items-center gap-0.5">
          <button
            onClick={() => decreaseQuantity(item?.id)}
            className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-md border text-sm md:text-lg text-[#2F4156] hover:bg-gray-100"
          >
            –
          </button>
          <span className="px-2 text-sm md:text-base">{item?.quantity}</span>
          <button
            onClick={() => increaseQuantity(item?.id)}
            className="w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-md border text-sm md:text-lg text-[#2F4156] hover:bg-gray-100"
          >
            +
          </button>
        </div>

        <div className="font-semibold text-sm md:text-base text-[#FD7E14]">
          ${(item?.price * item?.quantity).toFixed(2)}
        </div>

        <button
          className="text-red-500 hover:text-red-700 cursor-pointer"
          onClick={() => removeItem(item?.id)}
        >
          <MdDelete className="w-5 h-5" />
        </button>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default CartItem;
