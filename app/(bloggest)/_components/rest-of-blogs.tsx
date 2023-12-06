"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useGetBlogData } from "../blogs/_blogmutations/use-get-blogs";
import { BlogCard } from "../blogs/_components/blog-card";

export const RestOfBlogs = () => {
  const { data, isLoading, error } = useGetBlogData();
  const blogs = data?.blogData?.slice(4, 10);
  const renderedRestOfBlogs = blogs?.map((blog: any) => (
    <BlogCard key={blog._id} blog={blog} />
  ));
  return (
    <div className="w-full px-[16rem]">
      {isLoading ? <RestOfBlogs.Skeletons /> : <div>{renderedRestOfBlogs}</div>}
    </div>
  );
};

RestOfBlogs.Skeletons = function RestOfBlogsSkeletons() {
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
