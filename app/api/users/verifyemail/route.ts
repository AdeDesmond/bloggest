import { User } from "@/models/user-model";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const jsonBody = await request.json();
    const { token } = jsonBody;
    console.log(token);
    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return NextResponse.json({ error: "invalid token" }, { status: 400 });
    }
    console.log(user);

    user.isVerified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpiry = undefined;

    await user.save();
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: "failed to verify your email" },
      { status: 500 }
    );
  }
}
