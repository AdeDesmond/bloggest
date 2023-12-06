import { uploadAvatars } from "@/helpers/supabase/upload-avatars";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const image = formData.get("file");
    if (!image) {
      return NextResponse.json({ message: "no valid image" }, { status: 400 });
    }
    const imageUrl = await uploadAvatars(image as File);
    return NextResponse.json(
      { message: "success", avatarImageUrl: imageUrl },
      { status: 201 }
    );
  } catch (err: any) {
    return NextResponse.json({ error: "failed to upload" }, { status: 500 });
  }
}
