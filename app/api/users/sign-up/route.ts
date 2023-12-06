import { sendEmail } from "@/helpers/send-mail";
import { User } from "@/models/user-model";
import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "@/lib/db/dbConfig/connect-db";

connectDb();
export async function POST(request: NextRequest) {
  try {
    const jsonBody = await request.json();
    console.log(jsonBody);
    const { name, email, password, image } = jsonBody;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "user already exist with this email" },
        { status: 400 }
      );
    }
    const user = await User.create({ name, email, password, image });
    const emailType = "VERIFY";
    const userId = user._id;
    await sendEmail({ email, emailType, userId });
    return NextResponse.json({ message: "success" }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { error: "failed to create a user" },
      { status: 500 }
    );
  }
}
