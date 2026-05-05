import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import UseSelectedAppointment from "../../hooks/UseSelectedAppointment";
import { AppointmentsContext } from "../../contexts/AppointmentsContext";
import toast from "react-hot-toast";
import { ProfileContext } from "../../contexts/ProfileContext";

// Zod schema for validation
const bookingSchema = z.object({
  pet: z.string().min(1, "Please select a pet."),
  date: z.string().min(1, "Please select a date.").refine((date) => {
    const today = new Date();
    const selectedDate = new Date(date);
    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  }, "Date cannot be in the past."),
  time: z.string().min(1, "Please select a time."),
  emergency: z.boolean().default(false),
}).refine((data) => {
  if (!data.date || !data.time) return true; // Skip if date/time not set
  const now = new Date();
  const selectedDateTime = new Date(`${data.date}T${data.time}`);
  if (new Date(data.date).toDateString() === now.toDateString()) {
    return selectedDateTime > now;
  }
  return true;
}, {
  message: "Time cannot be in the past.",
  path: ["time"],
});

const ServiceBook = ({ open, setOpen }) => {
  const { userPets } = useContext(ProfileContext);
  const { bookService } = useContext(AppointmentsContext);
  const selectedAppointment = UseSelectedAppointment();
  const { setAppointments } = useContext(AppointmentsContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      pet: "",
      date: "",
      time: "",
      emergency: false,
    },
  });

  const selectedDate = watch("date");

  const handleClose = () => {
    reset();
    setOpen(false);
  };

  const onSubmit = async (data) => {
    const localDateTime = new Date(`${data.date}T${data.time}`);
    const timezoneOffset = localDateTime.getTimezoneOffset() * 60000;
    const requestedTime = new Date(
      localDateTime.getTime() - timezoneOffset
    ).toISOString();

    const payload = {
      petId: data.pet,
      serviceId: selectedAppointment.id,
      requestedTime: requestedTime,
      notes: data.emergency ? "Emergency service" : "",
    };

    try {
      const res = await bookService(payload);
      setAppointments((prev) => [...prev, res.data]);
      toast.success("Appointment booked successfully!");
    } catch (error) {
      console.error("Booking failed:", error);
      toast.error("Failed to book appointment. Please try again.");
    } finally {
      handleClose();
    }
  };

  return (
    open && (
      <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 px-3">
        <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl relative max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="text-center bg-[#41748137] py-5 px-4 rounded-t-2xl">
            <h2 className="text-xl md:text-2xl font-bold text-[#2F4156]">
              Book {selectedAppointment?.name || "Appointment"}
            </h2>
            <p className="text-sm text-[#2f415677] mt-1">
              Select your pet, date, and time for the appointment
            </p>
          </div>

          {/* Content */}
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-10 flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Pet */}
              <div className="flex flex-col w-full md:w-fit bg-[#F8F9FA] p-4 rounded-lg shadow-sm h-fit">
                <label className="mb-2 text-sm font-medium text-[#2F4156]">
                  Select Pet
                </label>
                <select
                  {...register("pet")}
                  className={`px-3 py-2 border ${
                    errors.pet ? "border-red-500" : "border-[#2f415677]"
                  } rounded-lg text-[#2F4156] focus:ring-2 focus:ring-[#FD7E14] focus:border-[#FD7E14] outline-none w-full`}
                >
                  <option value="">Choose a pet</option>
                  {userPets?.map((pet) => (
                    <option key={pet.id} value={pet.id}>
                      {pet.name}
                    </option>
                  ))}
                </select>
                <div className="h-6">
                  {errors.pet && (
                    <span className="text-red-500 text-sm">{errors.pet.message}</span>
                  )}
                </div>
              </div>

              {/* Date */}
              <div className="flex flex-col w-full md:w-fit bg-[#F8F9FA] p-4 rounded-lg shadow-sm h-fit">
                <label className="mb-2 text-sm font-medium text-[#2F4156]">
                  Select Date
                </label>
                <input
                  type="date"
                  {...register("date")}
                  className={`px-3 py-2 border ${
                    errors.date ? "border-red-500" : "border-[#2f415677]"
                  } rounded-lg text-[#2F4156] focus:ring-2 focus:ring-[#FD7E14] focus:border-[#FD7E14] outline-none w-full`}
                />
                <div className="h-6">
                  {errors.date && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.date.message}
                    </span>
                  )}
                </div>
              </div>

              {/* Time */}
              <div className="flex flex-col w-full md:w-fit bg-[#F8F9FA] p-4 rounded-lg shadow-sm h-fit">
                <label className="mb-2 text-sm font-medium text-[#2F4156]">
                  Select Time
                </label>
                <input
                  type="time"
                  {...register("time")}
                  className={`px-3 py-2 border ${
                    errors.time ? "border-red-500" : "border-[#2f415677]"
                  } rounded-lg text-[#2F4156] focus:ring-2 focus:ring-[#FD7E14] focus:border-[#FD7E14] outline-none w-full`}
                />
                <div className="h-6">
                  {errors.time && (
                    <span className="text-red-500 text-sm mt-1">
                      {errors.time.message}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Emergency */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="emergency"
                {...register("emergency")}
                className="w-4 h-4 accent-[#FD7E14] cursor-pointer"
              />
              <label
                htmlFor="emergency"
                className="text-sm md:text-base font-medium text-[#2F4156] cursor-pointer"
              >
                Emergency Service?
              </label>
            </div>

            {/* Actions */}
            <div className="flex flex-col-reverse md:flex-row justify-end gap-3 pt-2">
              <button
                type="button"
                className="cursor-pointer capitalize w-full md:w-auto px-6 py-3 rounded-xl bg-red-500 text-white font-medium hover:bg-red-600 transition"
                onClick={handleClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="cursor-pointer capitalize w-full md:w-auto px-6 py-3 rounded-xl bg-[#417481] text-white font-medium hover:bg-[#2F4156] transition"
              >
                Confirm Booking
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default ServiceBook;
