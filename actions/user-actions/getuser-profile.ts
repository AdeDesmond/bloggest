import axios from "axios";

export const getUserProfile = async () => {
  try {
    const res = await axios.get("/api/users/profile");
    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
