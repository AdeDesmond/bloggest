"use client";

import { useState } from "react";
import { uploadAvatarProfileImage } from "@/actions/user-actions/upload-avatar";
import { Popover } from "@/components/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { signUpUser } from "@/actions/user-actions/signup-user";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
//make sure to fixed the image upload so user can see what they uploaded
export default function SignUpPage() {
  const [avatar, setAvatar] = useState<string | undefined>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoadingAvatar, setIsLoadingAvatar] = useState(false);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const router = useRouter();

  const onSignUpNewUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsCreatingUser(true);
    const signupData = new FormData();
    signupData.append("name", name);
    signupData.append("email", email);
    signupData.append("password", password);

    const data = { signupData, avatar };
    const newlyCreatedUser = await signUpUser(data);
    if (newlyCreatedUser.message === "success") {
      setAvatar("");
      setEmail("");
      setName("");
      setPassword("");
      toast.success("Sign up successful");
      router.push("/sign-in");
      setIsCreatingUser(false);
    }
  };

  const uploadAvatar = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target?.files;
    const imageData = new FormData();
    setIsLoadingAvatar(true);
    if (files) {
      for (let i = 0; i < files?.length; i++) {
        imageData.append("file", files[i]);
      }
    }
    const avatarFromSupabase = await uploadAvatarProfileImage(imageData);
    //console.log(avatarFromSupabase.avatarImageUrl); imageUrl from the supabase
    if (avatarFromSupabase.message === "success") {
      setAvatar(avatarFromSupabase.avatarImageUrl);
      setIsLoadingAvatar(false);
    }
  };
  return (
    <Popover>
      <form
        action=""
        className="w-[100%] bg-white px-14 space-y-1 py-2"
        onSubmit={onSignUpNewUser}
      >
        <h2 className="text-xl font-bold mb-4 text-center">Sign up</h2>
        <p className="text-sm text-neutral-500 mb-10 text-center">
          Already have an account?{" "}
          <span className="text-sm text-sky-300">
            <Link href="/sign-in">Log in</Link>
          </span>{" "}
        </p>
        <label htmlFor="name">Name</label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          className="w-full"
        />
        <label htmlFor="email">Email</label>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <label htmlFor="password">Password</label>
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
        <label htmlFor="image">Image</label>
        <Input
          onChange={uploadAvatar}
          type="file"
          name="image"
          id="image"
          placeholder="Upload avatar"
        />
        {isLoadingAvatar ? (
          <SignUpPage.Skeleton />
        ) : (
          avatar !== undefined && <div className="h-10 w-10"></div>
        )}
        <Button className="flex justify-center w-full" size="sm">
          Sign-up
        </Button>
        <p className="mt-4 text-xs text-neutral-400">
          By clicking <span>Create Account</span> you acknowledge that you have
          read and accept the{" "}
          <span className="text-sky-300/90 font-semibold">
            {" "}
            <Link href={"/"}>Terms of Service</Link>{" "}
          </span>{" "}
          and{" "}
          <span className="text-sky-300/90 font-semibold">
            {" "}
            <Link href={"/"}>Privacy Policy</Link>{" "}
          </span>{" "}
        </p>
      </form>
    </Popover>
  );
}

SignUpPage.Skeleton = function ImageSkeleton() {
  return (
    <div className="h-10 w-10 rounded-full">
      <Skeleton className="w-full h-full" />
    </div>
  );
};
//<Image src={`${avatar}`} alt="profile image" fill />
