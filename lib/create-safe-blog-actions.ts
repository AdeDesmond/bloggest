import { z } from "zod";

export const createSafePostBlog = z.object({
  title: z
    .string({
      required_error: "title should be a string",
      invalid_type_error: "invalid string type",
    })
    .min(2, { message: "title must be at least more than 3 characters" }),
  subtitle: z.string().min(4, { message: "subtitle must describe the title" }),
  time: z.number({
    required_error: "time should number ",
    invalid_type_error: "invalid data type",
  }),
  category: z.string({
    required_error: "category should be string",
    invalid_type_error: "invalid category type",
  }),
  content: z.string({
    required_error: "content should be a string",
    invalid_type_error: "invalid content",
  }),
  image: z.string({
    required_error: "Image should be string",
    invalid_type_error: "invalid string",
  }),
  userId: z.string({
    required_error: "User is a required Field",
    invalid_type_error: "Invalid string type",
  }),
});
