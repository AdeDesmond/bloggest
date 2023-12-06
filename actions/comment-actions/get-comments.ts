import axios from "axios";

export const getCommentsByBlogId = async (id: string) => {
  try {
    const res = await axios.get(`/api/comments/${id}`);
    return res.data;
  } catch (err: unknown) {
    if (err instanceof Error) {
      return err.message;
    } else {
      return "something went wrong with the server";
    }
  }
};
