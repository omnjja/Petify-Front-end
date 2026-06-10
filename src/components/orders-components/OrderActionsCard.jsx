import { useNavigate } from "react-router-dom";
import Button from "../shared/ui/Button";
import { OrdersContext } from "@/contexts/OrdersContext";
import { useContext } from "react";
import swal from "sweetalert";
import toast from "react-hot-toast";

const OrderActionsCard = ({ status, id }) => {
  const navigate = useNavigate();
  const { cancelOrder } = useContext(OrdersContext);
  function cancelHandler() {
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
    }).then((willDelete) => {
      if (willDelete) {
        cancelOrder(id);
        toast("Order canceled", {
          icon: "👍",
          duration: 300,
        });
        navigate("/profile/orders");
      }
    });
  }
  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <div className="space-y-3">
        {(status !== "delivered" && status !== "canceled") && (
          <Button
            className="w-full border border-red-500 text-red-500 py-3 rounded-xl hover:bg-red-50 transition"
            onClick={() => cancelHandler()}
          >
            Cancel Order
          </Button>
        )}

        <Button
          onClick={() => navigate("/shop")}
          primary
          className="w-full bg-[#FD7E14] text-white py-3 rounded-xl hover:bg-[#e96e07] transition"
        >
          Buy Again
        </Button>
      </div>
    </div>
  );
};

export default OrderActionsCard;
