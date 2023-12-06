import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";
import { JwtPayload } from "jsonwebtoken";
export const getTokenAndVerify = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || " ";
    const decodedId: any | JwtPayload = jwt.verify(
      token,
      process.env.JWT_SECRET!
    );
    return decodedId.id;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
