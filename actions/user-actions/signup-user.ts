import axios from "axios";
import { createSafeSignUpAction } from "@/lib/create-safe-actions";
import { toast } from "sonner";

export const signUpUser = async (data: any) => {
  const validatedFields = createSafeSignUpAction.safeParse({
    name: data.signupData.get("name"),
    email: data.signupData.get("email"),
    password: data.signupData.get("password"),
    image: data.avatar,
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: toast.error("invalid fields"),
    };
  }
  const dataToSend = validatedFields.data;
  try {
    const res = await axios.post("/api/users/sign-up", dataToSend);
    return res.data;
  } catch (err: any) {
    throw new Error("failed to create a new user");
  }
};
