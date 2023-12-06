import axios from "axios";
import { createSafeSignInUser } from "@/lib/create-safe-actions";
import { toast } from "sonner";

export const signInUser = async (data: FormData) => {
  const validatedFields = createSafeSignInUser.safeParse({
    email: data.get("email"),
    password: data.get("password"),
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: toast.error("invalid fields"),
    };
  }
  const dataToSend = validatedFields.data;
  try {
    const res = await axios.post("/api/users/sign-in", dataToSend);
    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
