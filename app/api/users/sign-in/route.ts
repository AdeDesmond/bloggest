import { User } from "@/models/user-model";
import bcrypt from "bcryptjs";
import { connectDb } from "@/lib/db/dbConfig/connect-db";
import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

connectDb();
export async function POST(request: NextRequest) {
  try {
    const jsonBody = await request.json();
    const { email, password } = jsonBody;
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return NextResponse.json(
        { message: "no user exist with that email or password" },
        { status: 404 }
      );
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ message: "wrong password" }, { status: 401 });
    }
    const tokenData = {
      id: user._id,
      name: user.name,
      email: user.email,
    };
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET!, {
      expiresIn: "3d",
    });
    const response = NextResponse.json({ message: "success" }, { status: 201 });
    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message, message: "failed to sign from the backend" },
      { status: 500 }
    );
  }
}
