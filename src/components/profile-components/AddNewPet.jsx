import React, { useContext } from "react";
import toast from "react-hot-toast";
import PetFormFields from "./PetFormFields";
import PhotoInput from "../shared/ui/PhotoInput";
import VaccinationFields from "../shared/ui/VaccinationFields";
import FormActions from "../shared/ui/FormActions";
import { UserPetsContext } from "@/contexts/UserPetsContext";
import useCustomForm from "@/hooks/useCustomForm";
import { addPetSchema, defaultPetValues } from "@/schemas/petSchema";

const AddNewPet = ({ open, setOpen }) => {
  const { createPet } = useContext(UserPetsContext);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useCustomForm({
    defaultValues: defaultPetValues,
    schema: addPetSchema,
  });

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
      photo: formData.image ?? null,
    };
    try {
      await createPet(payload);
      toast.success("Pet added successfully!");
      close();
    } catch (error) {
      toast.error("Failed to add pet");
      console.error(error);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 overflow-y-auto">
      <div className="w-full max-w-3xl mx-4 my-6 bg-[#F8F9FA] shadow-lg rounded-2xl p-6">
        <h2 className="text-xl font-semibold text-[#FD7E14] mb-4 text-center">
          Add New Pet
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-2"
        >
          <PetFormFields register={register} errors={errors} />

          <div className="flex flex-col gap-2">
            <PhotoInput register={register} error={errors.photo?.message} />
            <VaccinationFields
              control={control}
              register={register}
              errors={errors}
            />
          </div>
          <FormActions
            onCancel={close}
            isSubmitting={isSubmitting}
            submitLabel="Add Pet"
          />
        </form>
      </div>
    </div>
  );
};

export default AddNewPet;
