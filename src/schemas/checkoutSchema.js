import { z } from "zod";

export const checkoutSchema = z
  .object({
    address: z.string().min(10, "Address is too short"),

    payment: z.string().min(1, "Please select a payment method"),

    cardNumber: z.string().optional(),

    meezaNumber: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.payment === "Card") {
      if (!/^\d{16}$/.test(data.cardNumber || "")) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["cardNumber"],
          message: "Card number must be 16 digits",
        });
      }
    }

    if (data.payment === "Meeza") {
      if (!/^\d{16}$/.test(data.meezaNumber || "")) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["meezaNumber"],
          message: "Meeza number must be 16 digits",
        });
      }
    }
  });

export const checkoutDefaultValues = {
  address: "",
  payment: "Card",
  cardNumber: "",
  meezaNumber: "",
};
