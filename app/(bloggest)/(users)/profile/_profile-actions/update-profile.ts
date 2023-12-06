import axios from "axios";

export const updateProfile = async (data: any, id: string) => {
  try {
    const res = await axios.put(`/api/users/profile/${id}`, data);
    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
