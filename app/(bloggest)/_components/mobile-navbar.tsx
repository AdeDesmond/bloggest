"use client";

import Link from "next/link";

export const MobileNavBar = () => {
  return (
    <ul className="flex flex-col items-start gap-5">
      <Link href={"/"}>Home</Link>
      <Link href={"/"}>Blogs</Link>
      <Link href={"/"}>Category</Link>
      <Link href={"/"}>About Us</Link>
      <Link href={"/"}>Contact Us</Link>
    </ul>
  );
};
