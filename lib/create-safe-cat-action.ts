import { z } from "zod";

export const createSafeCategory = z.object({
  category: z
    .string({
      required_error: "should be a string",
      invalid_type_error: "Invalid sting type",
    })
    .min(3, { message: "categories must be longer than 4 " }),
  color: z.string({
    required_error: "Should be a string",
    invalid_type_error: "Invalid string ",
  }),
});
