import axios from "axios";

export const getCatData = async () => {
  try {
    const res = await axios.get("/api/category");
    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
