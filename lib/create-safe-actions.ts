import { z } from "zod";

export const createSafeSignUpAction = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(3, { message: "a name should be more than 3" }),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Invalid email format please check the email",
    })
    .email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(3, { message: "password must be at least 8 characters" }),
  image: z.string(),
});

export const createSafeSignInUser = z.object({
  email: z
    .string({
      required_error: "email is required",
      invalid_type_error: "Invalid email address",
    })
    .email({ message: "Not a valid email address" }),
  password: z
    .string({
      required_error: "password is required",
      invalid_type_error: "Invalid password",
    })
    .min(8, { message: "password must be at least 8 characters" }),
});
