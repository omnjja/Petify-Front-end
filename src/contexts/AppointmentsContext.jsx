import React, { createContext, useContext, useEffect, useState } from "react";
// import * as appointmentsApi from "../APIs/appointmentsAPI";
import * as appointmentsApi from "@/mockAPIs/mockAppointmentsAPI";
import { confirmMessage } from "../utils/confirmMessage";
import { toastPromise } from "../utils/toastPromise";
import { AuthContext } from "./AuthContext";

const AppointmentsContext = createContext();
const AppointmentsProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState({});
  const [loading, setLoadig] = useState(false);
  const { role } = useContext(AuthContext);

  useEffect(() => {
    if (role !== "PET_OWNER") return;
    const fetchAppointments = async () => {
      setLoadig(true);
      try {
        const { data } = await appointmentsApi.getMyAppointments();
        setAppointments(data);
      } catch (error) {
        console.log("appointment error::", error);
      } finally {
        setLoadig(false);
      }
    };
    fetchAppointments();
  }, []);

  const bookService = async (payload) => {
    const willBook = await confirmMessage({
      text: "Are you sure you want to book?",
      confirmText: "Yes",
      cancelText: "Cancel",
    });
    if (!willBook) return;

    return await toastPromise(appointmentsApi.bookService(payload), {
      loading: "Booking Service... ⏳",
      success: "Service Booked successfully!",
      error: (error) =>
        error.response?.data?.errors?.[0]?.message ||
        error.response?.data?.message ||
        "Booking Service Failed ❌",
    });
  };

  const cancelAppointment = async (apptId) => {
    const willdelete = await confirmMessage({
      text: `Are you sure you want to cancel this appointment?`,
    });

    if (!willdelete) return;
    try {
      const res = await toastPromise(
        appointmentsApi.cancelAppointment(apptId),
        {
          loading: "Canceling Appointment... ⏳",
          success: "Appointment canceld successfully!",
          error: (error) =>
            error.response?.data?.errors?.[0]?.message ||
            error.response?.data?.message ||
            "Something went wrong!",
        }
      );
      setAppointments((prev) => prev.filter((a) => a.id !== apptId));
    } catch (err) {
      console.error("cancle appointment error:", err);
      toast.error("Failed to cancle appointment!");
    }
  };

  return (
    <AppointmentsContext.Provider
      value={{
        appointments,
        setAppointments,
        selectedAppointment,
        setSelectedAppointment,
        cancelAppointment,
        bookService,
        loading,
      }}
    >
      {children}
    </AppointmentsContext.Provider>
  );
};

export { AppointmentsContext };
export default AppointmentsProvider;
