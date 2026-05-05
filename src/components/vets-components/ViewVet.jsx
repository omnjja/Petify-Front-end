import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UseSelectedVet from "../../hooks/UseSelectedVet";
import UseVets from "../../hooks/UseVets";
import { VetsContext } from "../../contexts/VetsContext";
import Rating from "../Rating";
import LoadingSpinner from "../LoadingSpinner";
import UseLoggedUser from "../../hooks/UseLoggedUser";
import toast, { Toaster } from "react-hot-toast";
import ServiceBook from "../pet-services-components/ServiceBook";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { AppointmentsContext } from "../../contexts/AppointmentsContext";

const ViewVet = () => {
  const isLogged = UseLoggedUser();
  const [bookOpen, setBookOpen] = useState(false);
  const vet = UseSelectedVet();
  const { id } = useParams();
  const vets = UseVets();
  const { setSelectedVet, setVets } = useContext(VetsContext);
  const { setSelectedAppointment } = useContext(AppointmentsContext);
  const [userRating, setUserRating] = useState(0);
  useEffect(() => {
    const foundVet = vets.find((v) => v.id == id);
    setSelectedVet(foundVet);
  }, [id, vet, vets]);

  function updateRating(baseRating) {
    return (baseRating + userRating) / 2;
  }
  function handleRate(id) {
    setVets(
      vets.map((v) =>
        v.id === id ? { ...v, rating: updateRating(v.rating) } : v,
      ),
    );
    toast.success("Your Rate Is Saved");
    setUserRating(0);
  }

  function handleBook() {
    if (!isLogged) {
      toast.error("Please login to book an appointment");
      return;
    }
    setSelectedAppointment(vet);
    setBookOpen(true);
  }

  return (
    <div className="max-w-8xl my-5 mx-auto p-6">
      {!vet ? (
        <LoadingSpinner text="Vet is loading" />
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          {!vet?.image ? (
            <p className="text-gray-500 text-center">No vet photos available</p>
          ) : (
            <div className="w-full h-80 overflow-hidden rounded-2xl shadow-md mb-4 relative">
              <img
                src={vet.image}
                alt={vet.name}
                className="w-full h-80 object-cover rounded-xl"
              />
            </div>
          )}

          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-[#2F4156] mb-4">
              {vet?.name}
            </h2>
            <p className="text-sm text-gray-500">{vet?.clinicAddress}</p>
            <p className="text-gray-600 mb-4">{vet?.description}</p>
            {/* <span className="text-2xl font-semibold text-[#FD7E14] mb-6">
            ${vet?.price}
          </span> */}

            {/* Rating */}
            <div className="mb-6">
              <Rating
                value={userRating || vet?.rate}
                onChange={(val) => setUserRating(val)}
              />
            </div>

            <div className="flex gap-5">
              {" "}
              <button
                onClick={() => handleBook()}
                className="cursor-pointer flex items-center gap-2 bg-[#2f4156d6] text-white px-6 py-3 rounded-xl shadow-md hover:bg-[#2F4156] transition-colors w-fit"
              >
                Book Now
              </button>
              <button
                onClick={() => handleRate(vet?.id)}
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
      <ServiceBook open={bookOpen} setOpen={setBookOpen} />
    </div>
  );
};

export default ViewVet;
