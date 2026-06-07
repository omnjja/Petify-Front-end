import { z } from "zod";

export const editUserSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phoneNumber: z
    .string()
    .regex(
      /^(\+20\d{10}|0\d{10})$/,
      "Phone must be +20XXXXXXXXXX or 0XXXXXXXXXX",
    ),
  address: z.string().optional(),
});
