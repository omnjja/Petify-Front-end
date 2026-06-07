import React from "react";
import { useFieldArray } from "react-hook-form";
import Button from "./Button";
import InputField from "./InputField";

const VaccinationFields = ({ control, register, errors }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "vaccinations",
  });

  return (
    <div className="md:col-span-2">
      <label className="block text-[#2F4156] font-medium text-sm">
        Vaccination Dates
      </label>
      <div className="space-y-2">
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-3 items-center">
            <InputField
              id={`vaccinations.${index}.date`}
              type="date"
              register={register}
              error={errors?.vaccinations?.[index]?.date?.message}
            />
            <Button
              onClick={() => remove(index)}
              className="bg-[#ff383be0] text-white hover:bg-[#ff383b] mt-[-22px] rounded-xl"
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => append({ date: "" })}
        className="mt-1 text-sm text-[#FD7E14] hover:underline cursor-pointer"
      >
        + Add another date
      </button>
      {errors?.vaccinations?.message && (
        <p className="text-red-500 text-xs">{errors.vaccinations.message}</p>
      )}
    </div>
  );
};

export default VaccinationFields;
