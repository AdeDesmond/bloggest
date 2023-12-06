import { User } from "@/models/user-model";
import { NextResponse, NextRequest } from "next/server";
import { connectDb } from "@/lib/db/dbConfig/connect-db";
import { getTokenAndVerify } from "@/helpers/getTokenAndVerify";

connectDb();
export async function GET(request: NextRequest) {
  try {
    const userId = getTokenAndVerify(request);
    const user = await User.findOne({ _id: userId }).select("-password");
    return NextResponse.json(
      { message: "success", userData: user },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message, message: "failed" },
      { status: 500 }
    );
  }
}
