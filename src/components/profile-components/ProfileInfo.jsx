import React, { useContext, useState } from "react";
import EditProfile from "./EditProfile";
import { UserPetsContext } from "@/contexts/UserPetsContext";
import InfoField from "../shared/ui/InfoField";
import Button from "../shared/ui/Button";
import toast from "react-hot-toast";
import { PET_FIELDS } from "@/constants/userProfile";
import Photo from "./Photo";
import VaccinationList from "./VaccinationList";

const ProfileInfo = ({ pet }) => {
  const [open, setOpen] = useState(false);
  const { setSelectedPet, deletePet, uploadPetPhoto, deletePetPhoto } =
    useContext(UserPetsContext);

  const handlePhotoUpload = async (e) => {
    if (!e.target.files[0]) return;
    try {
      await uploadPetPhoto(pet.id, e.target.files[0]);
      toast.success("Pet photo uploaded successfully!");
    } catch {
      toast.error("Failed to upload pet photo");
    }
  };

  const handlePhotoDelete = async () => {
    try {
      await deletePetPhoto(pet.id);
      toast.success("Pet photo deleted successfully!");
    } catch {
      toast.error("Failed to delete pet photo");
    }
  };

  return (
    <div className="max-w-[95%] md:max-w-[90%] mx-auto my-10 bg-[#F8F9FA] shadow-lg rounded-2xl p-6 flex flex-col md:flex-row items-center gap-8">
      <Photo
        image={pet?.image}
        onUpload={handlePhotoUpload}
        onDelete={handlePhotoDelete}
      />

      <div className="flex-1 w-full">
        <h2 className="capitalize text-xl md:text-2xl font-semibold text-[#2F4156] mb-4 text-center md:text-left">
          {pet?.name}'s profile
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {PET_FIELDS.map(({ label, key, fallback }) => (
            <InfoField key={key} label={label} value={pet?.[key] ?? fallback} />
          ))}
        </div>

        <div className="mt-4">
          <h3 className="font-medium text-[#2F4156]">Medical History</h3>
          <p className="text-[#2f4156b0] mt-1 bg-white p-2 rounded-lg text-sm md:text-base">
            {pet?.medicalHistory || "No medical history"}
          </p>
        </div>

        <VaccinationList vaccinations={pet?.vaccinations} />

        <div className="mt-6 flex justify-center gap-3 md:justify-end">
          <Button onClick={() => deletePet(pet?.id)} cancel>
            Remove Pet
          </Button>
          <Button
            secondary
            onClick={() => {
              setOpen(true);
              setSelectedPet(pet);
            }}
          >
            Edit Profile
          </Button>
        </div>
      </div>

      <EditProfile open={open} setOpen={setOpen} />
    </div>
  );
};

export default ProfileInfo;
