import React, { createContext, useContext, useEffect, useState } from "react";
// import * as vetsApi from "../APIs/servicesAPI";
import * as vetsApi from "@/mockAPIs/mockVetsAPI";
import { AuthContext } from "./AuthContext";

const VetsContext = createContext();
const VetsProvider = ({ children }) => {
  const [vets, setVets] = useState();
  const [loading, setLoadig] = useState(false);
  const [selectedVet, setSelectedVet] = useState(null);
  const { role } = useContext(AuthContext);

  useEffect(() => {
    if (role !== "PET_OWNER" && role !== "ADMIN") return;
    const fetchVets = async () => {
      setLoadig(true);
      try {
        const { data } = await vetsApi.getAllVets();
        setVets(data.content);
      } catch (error) {
        console.log("services error", error);
      } finally {
        setLoadig(false);
      }
    };
    fetchVets();
  }, [role]);

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