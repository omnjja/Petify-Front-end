import React, { createContext, useContext, useEffect, useState } from "react";
// import * as userApi from "../APIs/userAPI";
import * as petsApi from "@/mockAPIs/mockPetsAPI";
import toast from "react-hot-toast";
import { confirmMessage } from "@/utils/confirmMessage";
import { toastPromise } from "@/utils/toastPromise";
import { AuthContext } from "./AuthContext";

const UserPetsContext = createContext();
const UserPetsProvider = ({ children }) => {
  const [pets, setPets] = useState([]);
  const [selectedPet, setSelectedPet] = useState(null);
  const { role } = useContext(AuthContext);

  useEffect(() => {
    if (role !== "PET_OWNER") return;
    const fetchPets = async () => {
      try {
        const { data } = await petsApi.getUserPets();
        setPets(data);
      } catch (error) {
        console.log("petsError", error);
      }
    };
    fetchPets();
  }, []);

  const getPetById = async (petId) => {
    try {
      const { data } = await petsApi.getPet(petId);
      return data;
    } catch (error) {
      console.log("get pet Error", error);
    }
  };

  const createPet = async (petData) => {
    try {
      const { data } = await petsApi.addNewPet(petData);
      setPets((prev) => [...prev, data]);
      return data;
    } catch (error) {
      console.log("petsError", error);
    }
  };

  const editPet = async (petId, petData) => {
    const willUpdate = await confirmMessage({
      text: "Are you sure you want to update pet data?",
      confirmText: "Yes",
      cancelText: "Cancel",
    });
    if (!willUpdate) return;

    try {
      const res = await toastPromise(petsApi.editPet(petId, petData), {
        loading: "Updating Pet Info... ⏳",
        success: "Pet Info Updated Successfully!",
        error: (error) =>
          error.response?.data?.errors?.[0]?.message ||
          error.response?.data?.message ||
          "Updating Pet Failed ❌",
      });
      const updatedPet = res.data;
      setPets((prev) =>
        prev.map((petItem) => (petItem.id === petId ? updatedPet : petItem)),
      );

      return res;
    } catch (error) {
      console.error(error);
    }
  };

  const deletePet = async (petId) => {
    const willDelete = await confirmMessage({
      text: "Are you sure you want to remove this pet?",
      confirmText: "Yes",
      cancelText: "Cancel",
    });
    if (!willDelete) return;

    try {
      const res = await toastPromise(petsApi.deletePet(petId), {
        loading: "Removing Pet... ⏳",
        success: "Pet Removed Successfully",
        error: (error) =>
          error.response?.data?.errors?.[0]?.message ||
          error.response?.data?.message ||
          "Removing Pet Failed ❌",
      });
      setPets((prev) => prev.filter((petItem) => petItem.id !== petId));

      return res;
    } catch (error) {
      console.error(error);
    }
  };

  const uploadPetPhoto = async (petId, file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("petId", petId);
      const { data } = await petsApi.addPetImage(petId, formData);

      setPets((prev) =>
        prev.map((petItem) =>
          petItem.id === petId
            ? {
                ...petItem,
                image: `data:${data.contentType};base64,${data.data}`,
              }
            : petItem,
        ),
      );
    } catch (err) {
      console.log("Image upload error:", err.response.message || err);
      toast.error("Failed to upload image");
    }
  };

  return (
    <UserPetsContext.Provider
      value={{
        pets,
        setPets,
        selectedPet,
        setSelectedPet,
        createPet,
        editPet,
        deletePet,
        uploadPetPhoto,
        getPetById,
      }}
    >
      {children}
    </UserPetsContext.Provider>
  );
};

export default UserPetsProvider;
export { UserPetsContext };

/*    {
      id: 1,
      name: "max",
      species: "Dog",
      breed: "Golden Retriever",
      gender: "Male",
      dob: "2020-05-14",
      medicalHistory: "No major issues. Regular check-ups and healthy.",
      vaccinations: ["2021-06-10", "2022-06-10", "2023-06-10"],
      photo: "https://placedog.net/400/300?id=1",
    },
    {
      id: 2,
      name: "Liky",
      species: "Cat",
      breed: "Golden Retriever",
      gender: "Male",
      dob: "2020-05-14",
      medicalHistory: "No major issues. Regular check-ups and healthy.",
      vaccinations: ["2021-06-10", "2022-06-10", "2023-06-10"],
      photo: "https://placedog.net/400/300?id=1",
    }, */
