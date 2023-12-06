import axios from "axios";
import { toast } from "sonner";

export const uploadAvatarProfileImage = async (formData: FormData) => {
  try {
    const res = await axios.post("/api/users/sign-up/upload", formData);
    if (res.status === 201) {
      toast.success("successfully upload");
    }
    return res.data;
  } catch (err: any) {
    throw new Error("Failed to upload the avatar image");
  }
};
