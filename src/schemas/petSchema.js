import { z } from "zod";

export const defaultPetValues = {
  name: "",
  species: "",
  breed: "",
  gender: "",
  dateOfBirth: "",
  medicalHistory: "",
  vaccinations: [],
  image: null,
};

export const editPetSchema = z.object({
  name: z.string().min(1, "Name is required"),
  species: z.string().min(1, "Species is required"),
  breed: z.string().optional(),
  gender: z.string().min(1, "Gender is required"),

  dateOfBirth: z
    .string()
    .min(1, "Date of birth is required")
    .refine((val) => {
      const date = new Date(val);
      return !isNaN(date.getTime()) && date < new Date();
    }, "Date of birth must be in the past"),

  medicalHistory: z.string().optional(),

  vaccinations: z
    .array(
      z.object({
        date: z
          .string()
          .min(1, "Vaccination date is required")
          .refine((val) => {
            const date = new Date(val);
            return !isNaN(date.getTime());
          }, "Invalid date"),
      }),
    )
    .optional(),
});

export const addPetSchema = editPetSchema;
