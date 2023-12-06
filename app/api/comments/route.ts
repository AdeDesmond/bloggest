import { NextRequest, NextResponse } from "next/server";
import { connectDb } from "@/lib/db/dbConfig/connect-db";
import { Comment } from "@/models/comment-model";

connectDb();
export async function POST(request: NextRequest) {
  try {
    const jsonData = await request.json();
    const { comment, blogId, userId, parentId } = jsonData;
    await Comment.create({
      comment,
      commentor: userId,
      blog: blogId,
      Comment: parentId,
    });
    return NextResponse.json({ message: "success" }, { status: 201 });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    } else {
      return NextResponse.json(
        { message: "something went wrong" },
        { status: 500 }
      );
    }
  }
}
