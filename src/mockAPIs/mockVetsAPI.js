import { mockVets } from "@/data/mockVets";

const delay = (ms = 600) => new Promise((res) => setTimeout(res, ms));

const getVets = () => {
  const stored = localStorage.getItem("mock_vets");
  if (stored) return JSON.parse(stored);
  localStorage.setItem("mock_vets", JSON.stringify(mockVets));
  return mockVets;
};

export const getAllVets = async () => {
  await delay();
  return { data: { content: getVets() } };
};

export const getVet = async (vetId) => {
  await delay();
  const vet = getVets().find((v) => v.id === vetId);
  if (!vet) {
    const error = new Error("Vet not found");
    error.response = { data: { message: "Vet not found" } };
    throw error;
  }
  return { data: vet };
};

export const addVet = async (vet) => {
  await delay();
  const vets = getVets();
  const newVet = { ...vet, id: crypto.randomUUID() };
  localStorage.setItem(
    "mock_vets",
    JSON.stringify([...vets, newVet]),
  );
  return { data: newVet };
};

export const updateVet = async (vetId, vet) => {
  await delay();
  const vets = getVets();
  const updated = vets.map((v) =>
    v.id === vetId ? { ...v, ...vet } : v,
  );
  localStorage.setItem("mock_vets", JSON.stringify(updated));
  return { data: updated.find((v) => v.id === vetId) };
};

export const deleteVet = async (vetId) => {
  await delay();
  const vets = getVets().filter((v) => v.id !== vetId);
  localStorage.setItem("mock_vets", JSON.stringify(vets));
  return { data: { message: "Vet deleted" } };
};