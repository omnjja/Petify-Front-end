import { OrdersContext } from "@/contexts/OrdersContext";
import { formatDate } from "@/utils/formatDate";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import Button from "../shared/ui/Button";

const Order = ({ order, variant = "table" }) => {
  const isCancelable =
    order?.status !== "delivered" && order?.status !== "canceled";
  const { cancelOrder } = useContext(OrdersContext);
  const navigate = useNavigate();

  function handleCancel() {
    swal({
      text: "Are you sure you want to cancel this order?",
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
    }).then((willCancel) => {
      if (willCancel) {
        cancelOrder(order?.id);
        toast("Canceled", {
          icon: "✅",
          duration: "300",
        });
      }
    });
  }

  if (variant === "table") {
    return (
      <tr className="border-b hover:bg-gray-50 transition">
        <td
          onClick={() => navigate(`/order-details/${order?.id}`)}
          className="p-3 font-medium text-[#2F4156] cursor-pointer"
        >
          {order?.id}
        </td>
        <td className="p-3">
          <span
            className={`px-2 py-1 rounded text-sm ${
              order?.status === "delivered"
                ? "bg-green-100 text-green-700"
                : order?.status === "canceled"
                  ? "bg-red-100 text-red-700"
                  : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {order?.status}
          </span>
        </td>
        <td className="p-3 text-gray-600">{formatDate(order?.createdAt)}</td>
        <td className="p-3 text-gray-600">${order?.total}</td>
        <td className="p-3">
          {isCancelable && (
            <Button
              onClick={() => handleCancel()}
              className="cursor-pointer px-3 py-1 text-sm rounded-lg bg-[#ff383be0] text-white hover:bg-[#ff383b] transition"
            >
              Cancel
            </Button>
          )}
        </td>
      </tr>
    );
  }

  // mobile card
  return (
    <div className="p-4 bg-white rounded-xl shadow flex flex-col gap-2">
      <div className="flex justify-between">
        <span
          onClick={() => navigate(`/order-details/${order?.id}`)}
          className="font-medium text-[#2F4156] cursor-pointer"
        >
          Order #{order?.id}
        </span>
        <span
          className={`px-2 py-1 rounded text-sm ${
            order?.status === "delivered"
              ? "bg-green-100 text-green-700"
              : order?.status === "canceled"
                ? "bg-red-100 text-red-700"
                : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {order?.status}
        </span>
      </div>
      <p className="text-gray-600 text-sm">
        Date: {formatDate(order?.createdAt)}
      </p>
      <p className="text-gray-600 text-sm">Total: ${order?.total}</p>

      {isCancelable && (
        <Button
          onClick={() => handleCancel()}
          className="self-end mt-2 px-3 py-1 text-sm rounded-lg bg-[#ff383be0] text-white hover:bg-[#ff383b] transition"
        >
          Cancel
        </Button>
      )}
    </div>
  );
};

export default Order;
