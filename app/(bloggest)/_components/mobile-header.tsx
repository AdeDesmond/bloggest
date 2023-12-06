"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { AlignRightIcon } from "lucide-react";
import { NavBar } from "./navbar";
import { MobileNavBar } from "./mobile-navbar";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const MobileHeader = () => {
  const [showNav, setShowNav] = useState(false);
  const onShowNav = () => {
    setShowNav((show) => !show);
  };
  return (
    <div
      className={cn(
        "lg:hidden md:hidden w-[40%] fixed top-0 right-[-30rem] bg-sky-200 min-h-screen transition-all duration-300",
        showNav && " right-0"
      )}
    >
      <AlignRightIcon
        className="fixed top-2 right-2 cursor-pointer"
        onClick={onShowNav}
      />
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="mr-10 mb-10">
          <Logo />
        </div>
        <MobileNavBar />
        <div className="flex flex-col items-center gap-5 mt-10 mr-2">
          <Button asChild>
            <Link href={"/"}>Sign-In</Link>
          </Button>
          <Button asChild>
            <Link href={"/"}>Sign-Up</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
