import axios from "axios";

export const getBlogData = async () => {
  try {
    const res = await axios.get("/api/blogs");
    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
