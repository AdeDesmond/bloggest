import axios from "axios";

export const upLoadProfilePhoto = async (data: FormData) => {
  try {
    const res = await axios.post("/api/users/profile/upload", data);
    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
