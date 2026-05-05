import React, { useContext, useState } from "react";
import Rating from "../Rating";
import { Link } from "react-router-dom";
import { VetsContext } from "../../contexts/VetsContext";
import { AppointmentsContext } from "../../contexts/AppointmentsContext";
import toast from "react-hot-toast";
import UseLoggedUser from "../../hooks/UseLoggedUser";
import ServiceBook from "../pet-services-components/ServiceBook";

const Vet = ({ vet }) => {
  const isLogged = UseLoggedUser();
  const [bookOpen, setBookOpen] = useState(false);
  const { setSelectedVet } = useContext(VetsContext);
  const { setSelectedAppointment } = useContext(AppointmentsContext);

  function handleSelectedVet() {
    !isLogged && toast.error("Login First!");
    setBookOpen(true);
    setSelectedVet(vet);
    setSelectedAppointment(vet);
  }
  return (
    <div className=" w-full sm:w-[400px] md:w-[600px] flex flex-1 flex-col sm:flex-row p-4 rounded-xl gap-5 bg-[#f3f3f4ba] shadow-lg hover:shadow-2xl">
      <div className="w-full h-[150px] md:w-[300px] md:h-full overflow-hidden flex items-center rounded-xl mx-auto sm:mx-0">
        <img
          src={vet.image}
          alt={vet.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-4 sm:gap-4 justify-center items-center sm:items-start text-center sm:text-left w-full">
        <Link to={`/vets/view-vet/${vet.id}`}>
          <p className="text-[#2F4156]  text-xl font-semibold">{vet.name}</p>
          <p className="text-[#2f415677] ">{vet.clinicAddress}</p>
        </Link>

        <Rating value={vet.rate} readOnly />
        <p className="text-[#2f415677] text-sm sm:text-base flex-1">
          {vet.description}
        </p>

        <button
          className="cursor-pointer w-full mt-3 px-4 py-2 bg-[#417481] hover:bg-[#2F4156] text-white rounded-lg shadow-md transition"
          onClick={() => handleSelectedVet()}
        >
          Book Now
        </button>
      </div>
      <ServiceBook open={bookOpen} setOpen={setBookOpen} />
    </div>
  );
};

export default Vet;
