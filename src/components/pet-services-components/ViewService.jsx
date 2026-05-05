import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseServices from "../../hooks/UseServices";
import UseSelectedService from "../../hooks/UseSelectedService";
import { ServicesContext } from "../../contexts/ServicesContext";
import Rating from "../Rating";
import LoadingSpinner from "../LoadingSpinner";
import toast, { Toaster } from "react-hot-toast";
import ServiceBook from "./ServiceBook";
import UseLoggedUser from "../../hooks/UseLoggedUser";
import { AppointmentsContext } from "../../contexts/AppointmentsContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ViewService = () => {
  const isLogged = UseLoggedUser();
  const [openBook, setOpenBook] = useState(false);
  const service = UseSelectedService();
  const { setServices } = useContext(ServicesContext);
  const { setSelectedService } = useContext(ServicesContext);
  const { id } = useParams();
  const services = UseServices();
  const { setSelectedAppointment } = useContext(AppointmentsContext);

  const [userRating, setUserRating] = useState(0);

  useEffect(() => {
    const foundService = services.find((s) => s.id == id);
    setSelectedService(foundService);
  }, [id, services, service]);

  function updateRating(baseRating) {
    return (baseRating + userRating) / 2;
  }
  function handleRate(id) {
    setServices(
      services.map((s) =>
        s.id === id ? { ...s, rating: updateRating(s.rating) } : s,
      ),
    );
    toast.success("Your Rate Is Saved");
    setUserRating(0);
  }

  function handleBook() {
    !isLogged && toast.error("Login First!");
    const { id, name, description } = service;
    const neededData = { id, name, description };
    setSelectedAppointment(neededData);
    setOpenBook(true);
  }

  return (
    <div className="max-w-8xl my-5 mx-auto p-6">
      {!service ? (
        <LoadingSpinner text="Loading Service..." />
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {!service?.image ? (
            <p className="text-gray-500 text-center">
              No service photos available
            </p>
          ) : (
            <div className="w-full h-80 overflow-hidden rounded-2xl shadow-md mb-4 relative">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
          )}

          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-[#2F4156] mb-4">
              {service?.name}
            </h2>
            <p className="text-sm text-gray-500">
              {service?.description || "No description available."}
            </p>
            <p className="text-gray-600 mb-4">{service?.description}</p>
            <span className="text-2xl font-semibold text-[#FD7E14] mb-6">
              ${service?.price}
            </span>

            {/* Rating */}
            <div className="mb-6">
              <Rating
                value={userRating || service?.rating}
                onChange={(val) => setUserRating(val)}
              />
            </div>

            <div className="flex gap-5">
              {" "}
              <button
                onClick={() => setOpenBook(true)}
                className="cursor-pointer flex items-center gap-2 bg-[#2f4156d6] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#2F4156] transition-colors w-fit"
              >
                Book Now
              </button>
              <button
                onClick={() => handleRate(service?.id)}
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
      <Toaster position="top-center" reverseOrder={false} />
      <ServiceBook open={openBook} setOpen={setOpenBook} />
    </div>
  );
};

export default ViewService;
