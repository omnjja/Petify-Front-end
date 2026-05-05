import React, { createContext, useContext, useEffect, useState } from "react";
// import * as servicesApi from "../APIs/servicesAPI";
import * as servicesApi from "@/mockAPIs/mockServicesAPI";
import { AuthContext } from "./AuthContext";

const ServicesContext = createContext();

const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState();
  const [categories, setCategories] = useState();
  const [loading, setLoadig] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const servicesCount = services?.length || 0;
  const { role } = useContext(AuthContext);

  useEffect(() => {
    if (role !== "PET_OWNER" && role !== "ADMIN") return;
    const fetchServices = async () => {
      setLoadig(true);
      try {
        const { data } = await servicesApi.getAllServices();
        setServices(data);
      } catch (error) {
        console.log("services error", error.response);
      } finally {
        setLoadig(false);
      }
    };
    fetchServices();
  }, [role]);

  useEffect(() => {
    if (role !== "PET_OWNER" && role !== "ADMIN") return;
    const fetchServicesCategories = async () => {
      setLoadig(true);
      try {
        const { data } = await servicesApi.getServicesCategory();
        setCategories(data);
      } catch (error) {
        console.log("services error", error.response);
      } finally {
        setLoadig(false);
      }
    };
    fetchServicesCategories();
  }, [role]);

  return (
    <ServicesContext.Provider
      value={{
        services,
        setServices,
        selectedService,
        setSelectedService,
        loading,
        servicesCount,
        categories,
      }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export default ServicesProvider;
export { ServicesContext };
