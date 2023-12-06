"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useGetBlogData } from "../blogs/_blogmutations/use-get-blogs";
import { BlogCard } from "../blogs/_components/blog-card";

export const HomeDisplayBlogs = () => {
  const { data, isLoading, error } = useGetBlogData();
  const blogs = data?.blogData?.slice(1, 4);
  const renderedBlogData = blogs?.map((blog: any) => (
    <BlogCard key={blog._id} blog={blog} />
  ));
  return (
    <div className="w-full mt-10">
      {isLoading ? (
        <HomeDisplayBlogs.Skeleton />
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center w-[75%] mx-auto ">
          {renderedBlogData}
        </div>
      )}
    </div>
  );
};

HomeDisplayBlogs.Skeletons = function HomeDisplayBlogsSkeletons() {
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

HomeDisplayBlogs.Skeleton = function HomeDisplayBlogSkeleton() {
  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-4 place-items-center">
        <HomeDisplayBlogs.Skeletons />
        <HomeDisplayBlogs.Skeletons />
        <HomeDisplayBlogs.Skeletons />
      </div>
    </div>
  );
};
