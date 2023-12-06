import { NextRequest, NextResponse } from "next/server";
import { uploadBlogImages } from "@/helpers/supabase/upload-blog-images";
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const blogImage = formData.get("file");
    const imageUrl = await uploadBlogImages(blogImage as File);

    return NextResponse.json(
      { message: "success", blogImageUrl: imageUrl },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message, message: "failed" },
      { status: 500 }
    );
  }
}
