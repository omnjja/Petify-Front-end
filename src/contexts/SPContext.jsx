import React, { createContext, useContext, useEffect, useState } from "react";
import * as servicesApi from "../APIs/servicesAPI";
import * as spApi from "../APIs/userAPI";
import { toastPromise } from "../utils/toastPromise";
import toast from "react-hot-toast";
import { confirmMessage } from "../utils/confirmMessage";
import { AuthContext } from "./AuthContext";

const SPContext = createContext();
const SPProvider = ({ children }) => {
  const [services, setServices] = useState([]);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Dog Shampoo",
      price: 120,
      discount: 10, // 10% discount
      description: "Gentle dog shampoo for healthy and shiny coat.",
      photos: [
        "public/pexels-tima-miroshnichenko-6131529.webp",
        "public/pexels-pixabay-220938.webp",
      ],
      stock: 12,
      note: "Suitable for puppies over 3 months old.",
    },
    {
      id: 2,
      name: "Cat Food",
      price: 200,
      discount: 0, // no discount
      description: "Nutritious dry food for adult cats.",
      photos: ["public/pexels-pixabay-220938.webp"],
      note: "Store in a cool and dry place.",
    },
    {
      id: 3,
      name: "Pet Toys",
      price: 75,
      discount: 15, // 15% discount
      description: "Durable chew toys for dogs and cats.",
      photos: ["public/pexels-pixabay-220938.webp"],
      stock: 20,
      note: "Available in multiple colors.",
    },
    {
      id: 4,
      name: "Bird Cage",
      price: 600,
      discount: 50, // flat discount
      description: "Spacious cage suitable for small to medium birds.",
      photos: ["public/pexels-pixabay-220938.webp"],
      stock: 5,
      note: "Comes with perches and a feeding tray.",
    },
    {
      id: 5,
      name: "Rabbit Hay",
      price: 90,
      discount: 5,
      description: "Premium quality hay for rabbits and guinea pigs.",
      photos: ["public/pexels-pixabay-220938.webp"],
      stock: 15,
      note: "100% natural and fresh.",
    },
  ]);
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      client: "Losy Andresown",
      service: "Grooming",
      date: "2025-10-12",
      time: "10:00 AM",
      done: false,
    },
    {
      id: 2,
      client: "Sarah Ali",
      service: "Vet Check",
      date: "2025-11-12",
      time: "2:00 PM",
      done: false,
    },
    {
      id: 3,
      client: "John Doe",
      service: "Grooming",
      date: "2025-10-30",
      time: "10:00 AM",
      done: true,
    },
    {
      id: 4,
      client: "Lisy Weasly",
      service: "Vet Check",
      date: "2025-10-12",
      time: "2:00 PM",
      done: false,
    },
  ]);
  const [serviceProvider, setServiceProvider] = useState();
  const [selectedService, setSelectedService] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [loading, setLoading] = useState(false);
  const { role } = useContext(AuthContext);

  useEffect(() => {
    if (role !== "SERVICE_PROVIDER") return;
    const fetchServices = async () => {
      setLoading(true);
      try {
        const { data } = await servicesApi.getAllServices();
        setServices(data);
        return data;
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  useEffect(() => {
    if (role !== "SERVICE_PROVIDER") return;
    const fetchSPprofile = async () => {
      setLoading(true);
      try {
        const res = await spApi.getUser();
        setServiceProvider(res.data);
        return res;
      } catch (error) {
        throw error;
      } finally {
        setLoading(false);
      }
    };
    fetchSPprofile();
  }, []);

  const createService = async (service) => {
    try {
      const res = await toastPromise(servicesApi.addService(service), {
        loading: "Adding Service... ⏳",
        success: "Service added successfully!",
        error: (error) =>
          error.response?.data?.errors?.[0]?.message ||
          error.response?.data?.message ||
          "Something went wrong!",
      });
      setServices((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("Add service error:", err);
      toast.error("Failed to add service!");
    }
  };

  const editService = async (serviceId, service) => {
    const willUpdate = await confirmMessage({
      text: `Are you sure you want to update this service?`,
    });

    if (!willUpdate) return;
    try {
      const res = await toastPromise(
        servicesApi.editService(serviceId, service),
        {
          loading: "Updating Service... ⏳",
          success: "Service updated successfully!",
          error: (error) =>
            error.response?.data?.errors?.[0]?.message ||
            error.response?.data?.message ||
            "Something went wrong!",
        }
      );
      setServices((prev) =>
        prev.map((s) => (s.id === serviceId ? { ...s, ...res.data } : s))
      );
    } catch (err) {
      console.error("Update service error:", err);
      toast.error("Failed to update service!");
    }
  };

  const removeService = async (serviceId) => {
    const willdelete = await confirmMessage({
      text: `Are you sure you want to remove this service?`,
    });

    if (!willdelete) return;
    try {
      const res = await toastPromise(servicesApi.deleteService(serviceId), {
        loading: "Removing Service... ⏳",
        success: "Service removed successfully!",
        error: (error) =>
          error.response?.data?.errors?.[0]?.message ||
          error.response?.data?.message ||
          "Something went wrong!",
      });
      setServices((prev) => prev.filter((s) => s.id !== serviceId));
    } catch (err) {
      console.error("delete service error:", err);
      toast.error("Failed to remove service!");
    }
  };

  return (
    <SPContext.Provider
      value={{
        services,
        setServices,
        selectedService,
        setSelectedService,
        products,
        setProducts,
        selectedProduct,
        setSelectedProduct,
        appointments,
        setAppointments,
        selectedAppointment,
        setSelectedAppointment,
        serviceProvider,
        setServiceProvider,
        createService,
        editService,
        removeService,
        loading,
      }}
    >
      {children}
    </SPContext.Provider>
  );
};

export default SPProvider;
export { SPContext };
