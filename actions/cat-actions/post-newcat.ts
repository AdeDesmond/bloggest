import axios from "axios";
import { createSafeCategory } from "@/lib/create-safe-cat-action";
import { toast } from "sonner";
export const postNewCat = async (formData: FormData) => {
  try {
    const validatedFields = createSafeCategory.safeParse({
      category: formData.get("category"),
      color: formData.get("color"),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: toast.error("invalid fields"),
      };
    }

    const dataToSend = validatedFields.data;
    const res = await axios.post("/api/category", dataToSend);
    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
