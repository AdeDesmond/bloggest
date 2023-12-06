import { supabase } from "./super-client";

async function uploadAvatars(file: File) {
  const imageName = `${Math.random()}-${file.name}`.replaceAll("-", "");
  const { error } = await supabase.storage
    .from("bloggest/avatars")
    .upload(imageName, file);
  if (error) {
    // Handle error
    console.log(error);
  } else {
    // Handle success
    const supabaseImage = `${process.env.SUPABASE_URL}/storage/v1/object/public/bloggest/avatars/${imageName}`;
    return supabaseImage;
  }
}

async function deleteImage() {
  const { data, error } = await supabase.storage
    .from("avatars")
    .remove(["folder/avatar1.png"]);
}

export { uploadAvatars, deleteImage };
