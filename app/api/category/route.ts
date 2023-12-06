import { NextResponse, NextRequest } from "next/server";
import { connectDb } from "@/lib/db/dbConfig/connect-db";
import { Category } from "@/models/cat-model";

connectDb();
export async function POST(request: NextRequest) {
  try {
    const jsonBody = await request.json();
    const { category, color } = jsonBody;
    await Category.create({ category, color });
    return NextResponse.json({ message: "success" }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json(
      { message: "failed", error: err.message },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const catData = await Category.find({}).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ message: "success", catData }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message, message: "failed" },
      { status: 500 }
    );
  }
}
