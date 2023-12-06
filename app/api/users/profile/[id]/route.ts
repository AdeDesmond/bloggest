import { User } from "@/models/user-model";
import { connectDb } from "@/lib/db/dbConfig/connect-db";
import { NextResponse, NextRequest } from "next/server";

connectDb();
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const jsonBody = await request.json();
    await User.findByIdAndUpdate(
      { _id: params.id },
      { name: jsonBody.name, image: jsonBody.image },
      { new: true }
    );
    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ message: "failed" }, { status: 500 });
  }
}
