import axios from "axios";
import { createSafePostBlog } from "@/lib/create-safe-blog-actions";
import { toast } from "sonner";

export const postNewBlog = async (blogData: any) => {
  const convertedTime = Number(blogData.formData.get("time"));
  try {
    const validatedFields = createSafePostBlog.safeParse({
      title: blogData.formData.get("title"),
      subtitle: blogData.formData.get("subtitle"),
      time: convertedTime,
      content: blogData.formData.get("content"),
      category: blogData.formData.get("category"),
      image: blogData.image,
      userId: blogData.userId,
    });
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: toast.error("fields are incomplete"),
      };
    }
    const dataToSend = validatedFields.data;
    const res = await axios.post("/api/blogs", dataToSend);
    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
