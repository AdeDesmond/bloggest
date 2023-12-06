import { Category } from "@/models/cat-model";
import { connectDb } from "@/lib/db/dbConfig/connect-db";
import { NextRequest, NextResponse } from "next/server";

connectDb();
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await Category.deleteOne({ _id: params.id });
    return NextResponse.json(
      { message: "successfully deleted" },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message, message: "success" },
      { status: 500 }
    );
  }
}
