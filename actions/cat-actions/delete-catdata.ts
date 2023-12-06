import axios from "axios";

export const deleteCatData = async (id: string) => {
  try {
    const res = await axios.delete(`/api/category/${id}`);
    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
