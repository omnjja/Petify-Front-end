import React, { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import PetFormFields from "./PetFormFields";
import PhotoInput from "../shared/ui/PhotoInput";
import VaccinationFields from "../shared/ui/VaccinationFields";
import FormActions from "../shared/ui/FormActions";
import UseSelectedPet from "@/hooks/UseSelectedPet";
import { UserPetsContext } from "@/contexts/UserPetsContext";
import useCustomForm from "@/hooks/useCustomForm";
import { editPetSchema } from "@/schemas/petSchema";

const EditProfile = ({ open, setOpen }) => {
  const pet = UseSelectedPet();
  const { editPet } = useContext(UserPetsContext);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useCustomForm({
    defaultValues: {
      name: pet?.name || "",
      species: pet?.species || "",
      breed: pet?.breed || "",
      gender: pet?.gender || "",
      dateOfBirth: pet?.dateOfBirth || "",
      medicalHistory: pet?.medicalHistory || "",
      vaccinations: pet?.vaccinations?.map((date) => ({ date })) || [],
    },
    schema: editPetSchema,
  });

  useEffect(() => {
    if (pet) {
      reset({
        name: pet.name || "",
        species: pet.species || "",
        breed: pet.breed || "",
        gender: pet.gender || "",
        dateOfBirth: pet.dateOfBirth || "",
        medicalHistory: pet.medicalHistory || "",
        vaccinations: pet.vaccinations?.map((date) => ({ date })) || [],
      });
    }
  }, [pet]);

  const close = () => {
    reset();
    setOpen(false);
  };

  const onSubmit = async (formData) => {
    const payload = {
      name: formData.name,
      species: formData.species,
      breed: formData.breed,
      gender: formData.gender,
      dateOfBirth: formData.dateOfBirth,
      medicalHistory: formData.medicalHistory,
      vaccinations: formData.vaccinations.map((v) => v.date),
      ...(formData.image && { image: formData.image }),
    };
    try {
      await editPet(pet?.id, payload);
      toast.success("Pet updated successfully!");
      close();
    } catch (error) {
      toast.error("Failed to update pet");
      console.error(error);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 overflow-y-auto">
      <div className="w-full max-w-4xl mx-4 my-6 bg-[#F8F9FA] shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-[#2F4156] mb-4 text-center">
          Pet Information
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-4"
        >
          <PetFormFields register={register} errors={errors} />
          <PhotoInput register={register} error={errors.photo?.message} />
          <VaccinationFields
            control={control}
            register={register}
            errors={errors}
          />
          <FormActions
            onCancel={close}
            isSubmitting={isSubmitting}
            submitLabel="Save"
          />
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
