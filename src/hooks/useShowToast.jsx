import React from "react";
import toast from "react-hot-toast";
import UseLoggedUser from "./UseLoggedUser";

const useShowToast = () => {
  const isLogged = UseLoggedUser();
  return function showToast() {
    if (!isLogged) {
      toast("Please Login First", {
        icon: "❗",
      });
    }
  };
};

export default useShowToast;
