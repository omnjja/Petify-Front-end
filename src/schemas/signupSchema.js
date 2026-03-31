import { z } from "zod";

const PASS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;
export const signupSchema = z
  .object({
    username: z
      .string()
      .min(3, "Username must be 3-15 characters")
      .max(15, "Username must be 3-15 characters")
      .regex(/^[a-zA-Z0-9_]+$/, {
        message: "Username can only contain letters, numbers, and underscores",
      }),

    email: z.string().email("Invalid email address"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        PASS_REGEX,
        "Password must contain at least one uppercase, number, and special character",
      ),

    confirmPassword: z.string().min(1, "Confirm password is required"),

    role: z.string().min(1, "Please select your role"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const signupDefaultValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "",
};

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),

  password: z.string().min(1, "Password is required"),
});

export const loginDefaultValues = {
  email: "",
  password: "",
};
