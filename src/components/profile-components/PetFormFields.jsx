import React from "react";
import InputField from "../shared/ui/InputField";
import SelectField from "../shared/ui/SelectField";
import { ADD_PET_FIELDS, GENDER_OPTIONS } from "@/constants/userProfile";

const PetFormFields = ({ register, errors }) => (
  <>
    {ADD_PET_FIELDS.map(({ name, label, type, placeholder }) => (
      <InputField
        key={name}
        id={name}
        label={label}
        type={type}
        placeholder={placeholder}
        register={register}
        error={errors[name]?.message}
      />
    ))}

    <SelectField
      id="gender"
      label="Gender"
      options={GENDER_OPTIONS}
      register={register}
      error={errors.gender?.message}
    />

    <div className="md:col-span-2">
      <label className="block text-[#2F4156] font-medium text-sm">
        Medical History
      </label>
      <textarea
        rows="3"
        placeholder="Any previous illnesses, surgeries..."
        {...register("medicalHistory")}
        className="w-full rounded-lg text-[#2f415677] bg-white border px-3 py-2 focus:ring-2 focus:ring-[#FD7E14] outline-none"
      />
    </div>
  </>
);

export default PetFormFields;
