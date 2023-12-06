"use client";

import React, { useState } from "react";
import { useGetUserProfile } from "../_actions/use-get-profile";
import Image from "next/image";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { getLogOutUser } from "@/actions/user-actions/logout-user";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { upLoadProfilePhoto } from "./_profile-actions/upload-profile-photo";
import { usePostProfileUpdate } from "./_profile-hooks/use-post-profile";
export default function ProfilePage() {
  const { profileData, error, isPending } = useGetUserProfile();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();
  const onLogoutUser = async () => {
    await getLogOutUser();
    router.push("/");
  };
  const {
    mutate,
    isPending: isUpdating,
    error: isUpdateError,
  } = usePostProfileUpdate(profileData?.userData?._id);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { name, image };
    if (image !== "") {
      mutate(data);
    }
    setName("");
    setImage("");
  };
  const onUpLoadProfileImage = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;
    const imageData = new FormData();
    if (files) {
      for (let i = 0; i < files?.length; i++) {
        imageData.append("file", files[i]);
      }
    }
    const response = await upLoadProfilePhoto(imageData);
    if (response.message === "success") {
      setImage(response.imageUrl);
    }
  };
  if (isPending) {
    return <ProfilePage.Skeleton />;
  }
  return (
    <section className="w-full min-h-screen mt-[3.5rem] flex">
      <div className="basis-1/4 bg-white">
        <div className="flex flex-col items-center mt-[2rem]">
          <div className="w-[5rem] h-[5rem] relative mb-2">
            <Image
              src={profileData?.userData?.image}
              fill
              alt="profile image"
              className="rounded-full border-2 border-slate-500 object-cover"
            />
          </div>
          <p className="text-2xl font-bold uppercase ">
            {profileData?.userData?.name}
          </p>
          <p className="text-muted-foreground">
            {profileData?.userData?.email}
          </p>

          <div className="flex items-center gap-2 mt-5">
            <Facebook className="h-4 w-4 text-slate-700 cursor-pointer" />
            <Twitter className="h-4 w-4 text-slate-700 cursor-pointer" />
            <Linkedin className="h-4 w-4 text-slate-700 cursor-pointer" />
          </div>
        </div>
        <form action="" className="px-10" onSubmit={onSubmit}>
          <label htmlFor="name">Name</label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name="name"
            id="name"
            placeholder="Change name"
          />
          <label htmlFor="image">Image</label>
          <Input
            onChange={onUpLoadProfileImage}
            type="file"
            name="image"
            id="image"
            placeholder="Upload image"
            className="mb-2"
          />
          <Button disabled={isUpdating} size="sm" className="w-full">
            Update
          </Button>
        </form>
      </div>
      <div className="flex-grow bg-rose-200"></div>
    </section>
  );
}

ProfilePage.Skeleton = function ProfilePageSkeleton() {
  return (
    <div className="w-1/2 h-20rem relative">
      <Skeleton className="absolute top-1 right-1" />
      <div className="flex items-center justify-between">
        <div>
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-4" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-10 w-10" />
          <Skeleton className="w-full" />
        </div>
      </div>
    </div>
  );
};
