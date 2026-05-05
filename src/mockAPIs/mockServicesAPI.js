import { mockServices, mockServiceCategories } from "@/data/mockServices";

const delay = (ms = 600) => new Promise((res) => setTimeout(res, ms));

const getServices = () => {
  const stored = localStorage.getItem("mock_services");
  if (stored) return JSON.parse(stored);
  localStorage.setItem("mock_services", JSON.stringify(mockServices));
  return mockServices;
};

const getCategories = () => {
  const stored = localStorage.getItem("mock_service_categories");
  if (stored) return JSON.parse(stored);
  localStorage.setItem("mock_service_categories", JSON.stringify(mockServiceCategories));
  return mockServiceCategories;
};

export const getAllServices = async () => {
  await delay();
  return { data: getServices().filter((s) => s.category !== "VET") };
};

export const getServicesCategory = async () => {
  await delay();
  return { data: getCategories().filter((c) => c !== "VET") };
};

export const getAllVets = async () => {
  await delay();
  return { data: getServices().filter((s) => s.category === "VET") };
};

export const getService = async (serviceId) => {
  await delay();
  const service = getServices().find((s) => s.id === serviceId);
  if (!service) {
    const error = new Error("Service not found");
    error.response = { data: { message: "Service not found" } };
    throw error;
  }
  return { data: service };
};

export const addService = async (service) => {
  await delay();
  const services = getServices();
  const newService = { ...service, id: crypto.randomUUID() };
  localStorage.setItem(
    "mock_services",
    JSON.stringify([...services, newService]),
  );
  return { data: newService };
};

export const editService = async (serviceId, newService) => {
  await delay();
  const services = getServices();
  const updated = services.map((s) =>
    s.id === serviceId ? { ...s, ...newService } : s,
  );
  localStorage.setItem("mock_services", JSON.stringify(updated));
  return { data: updated.find((s) => s.id === serviceId) };
};

export const deleteService = async (serviceId) => {
  await delay();
  const services = getServices().filter((s) => s.id !== serviceId);
  localStorage.setItem("mock_services", JSON.stringify(services));
  return { data: { message: "Service deleted" } };
};