import { NextResponse, NextRequest } from "next/server";
import { Blog } from "@/models/blog-model";
import { connectDb } from "@/lib/db/dbConfig/connect-db";

connectDb();
export async function GET(
  request: NextRequest,
  { params }: { params: { blogId: string } }
) {
  try {
    const blogfullContent = await Blog.findOne({ _id: params.blogId })
      .populate({
        path: "author",
        select: "name image",
      })
      .populate({
        path: "category",
        select: "category color",
      })
      .lean();
    return NextResponse.json(
      { message: "success", blogfullContent },
      { status: 200 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { message: "failed", error: err.message },
      { status: 500 }
    );
  }
}
