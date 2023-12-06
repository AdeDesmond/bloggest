"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { useGetBlogData } from "./_blogmutations/use-get-blogs";
import { BlogCard } from "./_components/blog-card";
import { Skeleton } from "@/components/ui/skeleton";

export default function BlogsPage() {
  const { data, isLoading, error } = useGetBlogData();
  return (
    <section className="w-full min-h-screen mt-[4rem] z-[-5rem] px-4 ">
      <Button asChild className="">
        <Link href="/blogs/new">Post New Blog</Link>
      </Button>

      {isLoading ? (
        <BlogsPage.Skeleton />
      ) : (
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 place-items-center mt-5">
          {data?.blogData?.map((blog: any) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      )}
    </section>
  );
}

BlogsPage.Skeletons = function BlogPageSkeletons() {
  return (
    <div className="w-[25rem] rounded-lg overflow-hidden">
      <div className="w-full h-[15rem] relative mb-2">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="w-full">
        <Skeleton className="w-1/2 h-5 " />
      </div>
      <div className="w-full">
        <Skeleton className="h-8 w-1/2 mb-2" />
        <Skeleton className="w-1/2 h-4 mb-2" />
        <Skeleton className="w-1/2 h-4" />
      </div>
      <div className="mt-4 w-full">
        <div className="flex items-center gap-5">
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="w-10 h-4" />
        </div>
      </div>
    </div>
  );
};

BlogsPage.Skeleton = function BlogsPageSkeleton() {
  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4 place-items-center">
        <BlogsPage.Skeletons />
        <BlogsPage.Skeletons />
        <BlogsPage.Skeletons />
        <BlogsPage.Skeletons />
        <BlogsPage.Skeletons />
      </div>
    </div>
  );
};
