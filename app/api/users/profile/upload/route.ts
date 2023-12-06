import { NextRequest, NextResponse } from "next/server";
import { uploadAvatars } from "@/helpers/supabase/upload-avatars";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const image = formData.get("file");
    const imageUrl = await uploadAvatars(image as File);
    return NextResponse.json({ message: "success", imageUrl }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ message: "failed" }, { status: 500 });
  }
}
