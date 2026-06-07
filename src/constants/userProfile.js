export const NAV_LINKS = [
  { to: "/profile/my-profile", label: "Profile" },
  { to: "/profile/my-pets", label: "Pets" },
  { to: "/profile/orders", label: "Orders" },
  { to: "/profile/appointments", label: "Appointments" },
];
export const USER_FIELDS = [
  { label: "Name", key: "name" },
  { label: "Email", key: "email" },
  { label: "Phone Number", key: "phoneNumber" },
  { label: "Address", key: "address" },
];

export const GENDER_OPTIONS = [
  { value: "", label: "Select" },
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
];

export const ADD_PET_FIELDS = [
  { name: "name", label: "Name", type: "text", placeholder: "Pet name" },
  {
    name: "species",
    label: "Species",
    type: "text",
    placeholder: "Dog, Cat, Rabbit...",
  },
  {
    name: "breed",
    label: "Breed",
    type: "text",
    placeholder: "Golden Retriever...",
  },
  {
    name: "dateOfBirth",
    label: "Date of Birth",
    type: "date",
    placeholder: "",
  },
];

export const EDIT_FIELDS = [
  { name: "name", label: "Name", type: "text" },
  { name: "phoneNumber", label: "Phone Number", type: "text" },
  { name: "address", label: "Address", type: "text" },
];

export const PET_FIELDS = [
  { label: "Species", key: "species", fallback: null },
  { label: "Breed", key: "breed", fallback: "No Breed" },
  { label: "Gender", key: "gender", fallback: null },
  { label: "Date of Birth", key: "dateOfBirth", fallback: null },
];
