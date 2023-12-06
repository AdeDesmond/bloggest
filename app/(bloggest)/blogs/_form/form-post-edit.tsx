"use client";
import Image from "next/image";
import { FormEvent, ChangeEvent } from "react";
import { usePostNewBlog } from "../_blogmutations/use-post-blog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { uploadBlogImages } from "@/actions/blog-actions/upload-blog-image";
import { Spinner } from "../../_components/spinners";
import { useGetCatData } from "../../category/_catmutations/use-get-catData";
import { useGetUserProfile } from "../../(users)/_actions/use-get-profile";

interface FormPostEdit {
  formTitle: string;
  buttonName: string;
}

export const FormPostEdit = ({ formTitle, buttonName }: FormPostEdit) => {
  const { data } = useGetCatData();
  const { profileData } = useGetUserProfile();
  const { postBlog, isPending } = usePostNewBlog();
  const [title, setTitle] = useState("");
  const [subtitle, setSubTitle] = useState("");
  const [image, setImage] = useState<string | undefined>();
  const [time, setTime] = useState<string>("");
  const [category, setCategory] = useState("");
  const [content, setContent] = useState("");
  const [isUpLoading, setisUpLoading] = useState(false);
  const onSubmitEditNewBlog = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("subtitle", subtitle);
    formData.append("time", time);
    formData.append("category", category);
    formData.append("content", content);
    const userId = profileData?.userData?._id;
    const data: any = { formData, image, userId };
    if (userId !== undefined) {
      postBlog(data);
    }
    setCategory("");
    setContent("");
    setTime("");
    setTitle("");
    setSubTitle("");
  };
  const onUploadBlogImage = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    const formData = new FormData();
    setisUpLoading(true);
    if (files) {
      for (let i = 0; i < files.length; i++) {
        formData.append("file", files[i]);
      }
    }
    const uploadedImage = await uploadBlogImages(formData);
    if (uploadedImage.message === "success" && uploadedImage !== undefined) {
      setImage(uploadedImage.blogImageUrl);
      setisUpLoading(false);
    }
  };
  return (
    <form
      action=""
      className="w-full px-4 py-4 space-y-3"
      onSubmit={onSubmitEditNewBlog}
    >
      <h2 className="text-center font-bold mb-4">{formTitle}</h2>
      <label htmlFor="title">Title</label>
      <Input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        name="title"
        id="title"
        placeholder="Enter the title"
      />
      <label htmlFor="subtitle">Subtitle</label>
      <Input
        value={subtitle}
        onChange={(e) => setSubTitle(e.target.value)}
        type="text"
        name="subtitle"
        id="subtitle"
        placeholder="Enter your subtitle"
      />
      <div className="flex items-center gap-3">
        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          name="time"
          id="time"
          className=" border border-slate-300 w-[10rem] h-10 outline-none focus:ring focus:ring-slate-950 focus:ring-offset-1 transition-all duration-200 rounded-lg bg-white"
        >
          <option value="5">5mins</option>
          <option value="10">10mins</option>
          <option value="20">20mins</option>
          <option value="25">25mins</option>
        </select>

        <select
          name="category"
          id="category"
          className="border border-slate-300 w-[10rem] h-10 outline-none focus:ring focus:ring-slate-950 focus:ring-offset-1 transition-all duration-200 rounded-lg bg-white"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {data?.catData?.length > 0 &&
            data?.catData?.map((cat: any) => (
              <option key={cat._id} value={cat._id}>
                {cat.category}
              </option>
            ))}
        </select>
      </div>
      <label htmlFor="content">Content</label>
      <Textarea
        placeholder="Enter the context"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Input
        onChange={onUploadBlogImage}
        type="file"
        id="image"
        name="image"
        placeholder="upload a blog image"
      />
      {isUpLoading ? (
        <Spinner />
      ) : (
        image?.length && (
          <div>
            {" "}
            <Image
              src={image}
              alt="blog image"
              width={50}
              height={50}
              className="object-cover cursor-pointer shadow-md"
            />{" "}
          </div>
        )
      )}
      <Button type="submit" className="w-full">
        {buttonName}
      </Button>
    </form>
  );
};
