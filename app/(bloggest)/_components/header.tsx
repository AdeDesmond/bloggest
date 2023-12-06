"use client";

import { Logo } from "@/components/logo";
import { NavBar } from "./navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useGetUserProfile } from "../(users)/_actions/use-get-profile";
import { redirect, useRouter } from "next/navigation";
import { useLogoutUser } from "../(users)/_actions/use-logout-user";
import Image from "next/image";

export const Header = () => {
  const { profileData, isPending, error } = useGetUserProfile();
  const { logOut } = useLogoutUser();
  const router = useRouter();
  const onLogoutUser = async () => {
    logOut();
    router.refresh();
  };
  return (
    <header className="w-full h-14 z-999999 fixed top-0 border-b border-b-neutral-300 lg:flex md:flex items-center justify-between px-6 hidden  bg-white">
      <Logo />
      <NavBar />
      <div className="flex items-center gap-2 ">
        {isPending ? null : profileData?.userData?._id ? (
          <div className="flex items-center gap-4">
            {" "}
            <Link href={"/profile"}>
              <Image
                src={profileData?.userData?.image}
                alt="image"
                height={40}
                width={40}
                className="rounded-full"
              />
            </Link>
            <Button size="sm" onClick={onLogoutUser}>
              Sign-Out
            </Button>{" "}
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Button asChild>
              <Link href={"/sign-in"}>Sign-In</Link>
            </Button>

            <Button asChild>
              <Link href={"/sign-up"}>Sign-Up</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};
