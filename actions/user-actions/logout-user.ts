import axios from "axios";

export const getLogOutUser = async () => {
  try {
    const res = await axios.get("/api/users/sign-out");
    return res.data;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
