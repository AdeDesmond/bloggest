import axios from "axios";

export const getfullContentBlog = async (id: string) => {
  try {
    const res = await axios.get(`/api/blogs/${id}`);
    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
