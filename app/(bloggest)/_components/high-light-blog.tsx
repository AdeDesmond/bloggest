"use client";

import Image from "next/image";
import { useGetBlogData } from "../blogs/_blogmutations/use-get-blogs";
import { Dot } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export const HightLightBlogPage = () => {
  const { data, isLoading, error } = useGetBlogData();
  const dataToDisplay = data?.blogData?.slice(0, 1);
  return (
    <div className="w-full">
      {isLoading ? (
        <HightLightBlogPage.Skeleton />
      ) : (
        dataToDisplay?.length > 0 &&
        dataToDisplay?.map((blog: any) => (
          <div
            key={blog._id}
            className="flex items-center justify-center mt-5 gap-10 flex-col lg:flex-row md:flex-col"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              height={400}
              width={400}
              className="object-cover rounded-lg cursor-pointer hover:scale-105 focus:scale-95 transition hover:shadow-lg focus:shadow-sm"
            />

            <div>
              <p
                className="text-sm flex items-center mb-2"
                style={{ color: blog.category.color }}
              >
                <span>{blog.category.category}</span> <Dot />{" "}
                <span>{blog.time} min read</span>
              </p>
              <h1 className="text-xl font-bold mb-1 cursor-pointer">
                {blog.title}
              </h1>
              <p className="text-muted-foreground w-[20rem]">{blog.subtitle}</p>

              <div className="flex items-center mt-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={blog.author.image}
                    alt="blog author"
                    width={20}
                    height={20}
                    className="object-cover w-4 h-4 rounded-full border-2 border-slate-500"
                  />
                  <p className="text-sm text-muted-foreground">
                    {blog.author.name}
                  </p>
                </div>
                <Dot className="text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  {new Date(blog.createdAt).toLocaleString().split(",")[0]}
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

HightLightBlogPage.Skeleton = function HighLightSkeleton() {
  return (
    <div className="w-full mt-5">
      <div className="w-[60%] flex items-center justify-center mx-auto">
        <div className="w-[25rem] h-[20rem]">
          <Skeleton className="w-full h-full" />
        </div>
        <div>
          <div className="w-full h-10 mb-2">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="w-full h-14">
            <Skeleton className="w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
