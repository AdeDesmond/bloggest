import axios from "axios";

export const uploadBlogImages = async (formData: FormData) => {
  try {
    const res = await axios.post("/api/blogs/upload", formData);
    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
