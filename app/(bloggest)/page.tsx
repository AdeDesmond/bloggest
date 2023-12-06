import React from "react";
import { SearchBlogs } from "./_components/search-blogs";
import { HightLightBlogPage } from "./_components/high-light-blog";
import { HomeDisplayBlogs } from "./_components/home-display-blogs";
import { Separator } from "@/components/ui/separator";
import { RestOfBlogs } from "./_components/rest-of-blogs";

export default function HomePage() {
  return (
    <main className="mt-[4rem]">
      <h1 className="text-xl font-bold text-center mt-[5rem] mb-4">
        Our Blogs
      </h1>
      <p className="text-center text-muted-foreground mb-5">
        A center for all resources & insights{" "}
      </p>
      <SearchBlogs />
      <HightLightBlogPage />
      <HomeDisplayBlogs />
      <Separator className="my-4" />
      <h3 className="text-black font-semibold ml-[16rem] mb-6">
        All blog posts
      </h3>
      <RestOfBlogs />
    </main>
  );
}
