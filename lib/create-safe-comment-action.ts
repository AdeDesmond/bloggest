import { z } from "zod";

export const createSafeCommentAction = z.object({
  comment: z
    .string({
      required_error: "Comment should be a string",
      invalid_type_error: "Invalid string type",
    })
    .min(3, { message: "comment should be at least three characters" }),
  blogId: z.string({
    required_error: "blogId should be a string",
    invalid_type_error: "Invalid id type",
  }),
  userId: z.string({
    required_error: "userId should be a string",
    invalid_type_error: "Invalid id type",
  }),
});
