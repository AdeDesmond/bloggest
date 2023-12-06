import { createSafeCommentAction } from "@/lib/create-safe-comment-action";
import axios from "axios";
import { toast } from "sonner";

interface CreateCommentProps {
  comment: string;
  blogId: string;
  userId: string;
  parentId?: string;
}

export const createComment = async ({
  comment,
  blogId,
  userId,
  parentId,
}: CreateCommentProps) => {
  console.log(parentId);
  console.log(blogId);
  console.log(userId);
  console.log(comment);
  const validatedFields = createSafeCommentAction.safeParse({
    comment: comment,
    blogId: blogId,
    userId: userId,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: toast.error("invalid input fields"),
    };
  }
  const commentString = validatedFields.data;

  console.log(commentString);

  try {
    const res = await axios.post("/api/comments", {
      ...commentString,
      parentId,
    });
    return res.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      return err.message;
    } else {
      return "Something went wrong";
    }
  }
};
