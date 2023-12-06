import { NextResponse, NextRequest } from "next/server";
import { connectDb } from "@/lib/db/dbConfig/connect-db";
import { Blog } from "@/models/blog-model";

connectDb();
export async function POST(request: NextRequest) {
  try {
    const jsonBody = await request.json();
    const { title, subtitle, content, image, time, category, userId } =
      jsonBody;
    await Blog.create({
      title,
      subtitle,
      content,
      image,
      time,
      category,
      author: userId,
    });
    return NextResponse.json({ message: "success" }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ message: "failed" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const blogData = await Blog.find({})
      .populate({
        path: "author",
        select: "name image",
      })
      .populate({
        path: "category",
        select: "category color",
      })
      .sort({ createdAt: -1 })
      .lean();
    return NextResponse.json({ message: "success", blogData }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      { message: "failed to de blogs", error: err.message },
      { status: 500 }
    );
  }
}
