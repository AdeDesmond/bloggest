import { NextResponse, NextRequest } from "next/server";
import { connectDb } from "@/lib/db/dbConfig/connect-db";
import { Comment } from "@/models/comment-model";

interface ParamsProps {
  params: {
    id: string;
  };
}

connectDb();
export async function GET(request: NextRequest, { params }: ParamsProps) {
  try {
    const { id: _id } = params;
    const commentData = await Comment.find({ blog: _id })
      .populate({
        path: "commentor",
        select: "name image",
      })
      .populate("Comment")
      .lean();
    return NextResponse.json(
      { message: "success", commentData },
      { status: 200 }
    );
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
