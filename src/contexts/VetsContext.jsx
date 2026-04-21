import React, { createContext, useContext, useEffect, useState } from "react";
import * as vetsApi from "../APIs/servicesAPI";
import { AuthContext } from "./AuthContext";

const VetsContext = createContext();
const VetsProvider = ({ children }) => {
  const [vets, setVets] = useState();
  const [loading, setLoadig] = useState(false);
  const [selectedVet, setSelectedVet] = useState(null);
  const { role } = useContext(AuthContext);

  useEffect(() => {
    if (role !== "PET_OWNER" || role !== "ADMIN") return;
    const fetchVets = async () => {
      setLoadig(true);
      try {
        const { data } = await vetsApi.getAllVets();
        setVets(data);
      } catch (error) {
        console.log("services error", error);
      } finally {
        setLoadig(false);
      }
    };
    fetchVets();
  }, []);

  return (
    <VetsContext.Provider
      value={{ vets, setVets, selectedVet, setSelectedVet, loading, setLoadig }}
    >
      {children}
    </VetsContext.Provider>
  );
};

export default VetsProvider;
export { VetsContext };

/*[
    {
      id: 1,
      name: "Aleet Vet Center",
      photo: "/public/vets-media/Screenshot_25.webp",
      clinicAddress: "El Nozha, Egypt",
      rate: 4.6,
      availability: [
        {
          day: "Monday",
          times: [
            "9:00 AM",
            "10:00 AM",
            "11:00 AM",
            "1:00 PM",
            "3:00 PM",
            "5:00 PM",
          ],
        },
        {
          day: "Tuesday",
          times: ["9:00 AM", "11:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
        },
        {
          day: "Wednesday",
          times: ["9:00 AM", "12:00 PM", "2:00 PM", "6:00 PM"],
        },
        {
          day: "Thursday",
          times: ["10:00 AM", "12:00 PM", "3:00 PM", "5:00 PM", "8:00 PM"],
        },
        {
          day: "Friday",
          times: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"],
        },
        {
          day: "Saturday",
          times: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"],
        },
        {
          day: "Sunday",
          times: ["10:00 AM", "12:00 PM", "2:00 PM", "6:00 PM"],
        },
      ],
    },
    {
      id: 2,
      name: "British Animal Hospital",
      photo: "/public/vets-media/pexels-annetnavi-792775.webp",
      clinicAddress: "Zamalek, Egypt",
      rate: 5.0,
      availability: [
        {
          day: "Monday",
          times: [
            "9:00 AM",
            "10:00 AM",
            "12:00 PM",
            "3:00 PM",
            "6:00 PM",
            "8:00 PM",
          ],
        },
        {
          day: "Tuesday",
          times: ["9:00 AM", "11:00 AM", "2:00 PM", "5:00 PM", "7:00 PM"],
        },
        {
          day: "Wednesday",
          times: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"],
        },
        {
          day: "Thursday",
          times: [
            "9:00 AM",
            "11:00 AM",
            "1:00 PM",
            "3:00 PM",
            "5:00 PM",
            "7:00 PM",
          ],
        },
        { day: "Friday", times: ["Closed"] },
        {
          day: "Saturday",
          times: ["10:00 AM", "12:00 PM", "2:00 PM", "5:00 PM"],
        },
        { day: "Sunday", times: ["Closed"] },
      ],
    },
    {
      id: 3,
      name: "Aleet Vet Center",
      photo: "/public/vets-media/Screenshot_25.webp",
      clinicAddress: "El Nozha, Egypt",
      rate: 4.6,
      availability: [
        {
          day: "Monday",
          times: [
            "9:00 AM",
            "10:00 AM",
            "11:00 AM",
            "1:00 PM",
            "3:00 PM",
            "5:00 PM",
          ],
        },
        {
          day: "Tuesday",
          times: ["9:00 AM", "11:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
        },
        {
          day: "Wednesday",
          times: ["9:00 AM", "12:00 PM", "2:00 PM", "6:00 PM"],
        },
        {
          day: "Thursday",
          times: ["10:00 AM", "12:00 PM", "3:00 PM", "5:00 PM", "8:00 PM"],
        },
        {
          day: "Friday",
          times: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"],
        },
        {
          day: "Saturday",
          times: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"],
        },
        {
          day: "Sunday",
          times: ["10:00 AM", "12:00 PM", "2:00 PM", "6:00 PM"],
        },
      ],
    },
    {
      id: 4,
      name: "British Animal Hospital",
      photo: "/public/vets-media/pexels-annetnavi-792775.webp",
      clinicAddress: "Zamalek, Egypt",
      rate: 5.0,
      availability: [
        {
          day: "Monday",
          times: [
            "9:00 AM",
            "10:00 AM",
            "12:00 PM",
            "3:00 PM",
            "6:00 PM",
            "8:00 PM",
          ],
        },
        {
          day: "Tuesday",
          times: ["9:00 AM", "11:00 AM", "2:00 PM", "5:00 PM", "7:00 PM"],
        },
        {
          day: "Wednesday",
          times: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"],
        },
        {
          day: "Thursday",
          times: [
            "9:00 AM",
            "11:00 AM",
            "1:00 PM",
            "3:00 PM",
            "5:00 PM",
            "7:00 PM",
          ],
        },
        { day: "Friday", times: ["Closed"] },
        {
          day: "Saturday",
          times: ["10:00 AM", "12:00 PM", "2:00 PM", "5:00 PM"],
        },
        { day: "Sunday", times: ["Closed"] },
      ],
    },
    {
      id: 5,
      name: "Aleet Vet Center",
      photo: "/public/vets-media/Screenshot_25.webp",
      clinicAddress: "El Nozha, Egypt",
      rate: 4.6,
      availability: [
        {
          day: "Monday",
          times: [
            "9:00 AM",
            "10:00 AM",
            "11:00 AM",
            "1:00 PM",
            "3:00 PM",
            "5:00 PM",
          ],
        },
        {
          day: "Tuesday",
          times: ["9:00 AM", "11:00 AM", "1:00 PM", "4:00 PM", "7:00 PM"],
        },
        {
          day: "Wednesday",
          times: ["9:00 AM", "12:00 PM", "2:00 PM", "6:00 PM"],
        },
        {
          day: "Thursday",
          times: ["10:00 AM", "12:00 PM", "3:00 PM", "5:00 PM", "8:00 PM"],
        },
        {
          day: "Friday",
          times: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"],
        },
        {
          day: "Saturday",
          times: ["9:00 AM", "11:00 AM", "1:00 PM", "3:00 PM"],
        },
        {
          day: "Sunday",
          times: ["10:00 AM", "12:00 PM", "2:00 PM", "6:00 PM"],
        },
      ],
    },
    {
      id: 6,
      name: "British Animal Hospital",
      photo: "/public/vets-media/pexels-annetnavi-792775.webp",
      clinicAddress: "Zamalek, Egypt",
      rate: 5.0,
      availability: [
        {
          day: "Monday",
          times: [
            "9:00 AM",
            "10:00 AM",
            "12:00 PM",
            "3:00 PM",
            "6:00 PM",
            "8:00 PM",
          ],
        },
        {
          day: "Tuesday",
          times: ["9:00 AM", "11:00 AM", "2:00 PM", "5:00 PM", "7:00 PM"],
        },
        {
          day: "Wednesday",
          times: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM"],
        },
        {
          day: "Thursday",
          times: [
            "9:00 AM",
            "11:00 AM",
            "1:00 PM",
            "3:00 PM",
            "5:00 PM",
            "7:00 PM",
          ],
        },
        { day: "Friday", times: ["Closed"] },
        {
          day: "Saturday",
          times: ["10:00 AM", "12:00 PM", "2:00 PM", "5:00 PM"],
        },
        { day: "Sunday", times: ["Closed"] },
      ],
    },
  ] */
