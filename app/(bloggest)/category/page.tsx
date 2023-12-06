"use client";

import React from "react";
import { CategoryForm } from "./_component/category-form";
import { useGetCatData } from "./_catmutations/use-get-catData";
import { DisplayCatData } from "./_component/display-catdata";
import { Skeleton } from "@/components/ui/skeleton";

export default function CategoryPage() {
  const { data, isLoading, error } = useGetCatData();
  return (
    <main className="mt-28 w-full min-h-screen">
      <CategoryForm />
      <div className="w-full">
        {isLoading ? (
          <CategoryPage.Skeleton />
        ) : (
          data?.catData?.map((cat: any) => (
            <DisplayCatData key={cat._id} cat={cat} />
          ))
        )}
        {error && <div>{error.message}</div>}
      </div>
    </main>
  );
}

CategoryPage.Skeleton = function CategoryPageSkeleton() {
  return (
    <div className="w-full">
      <div className="w-[15rem] h-8 mx-auto mt-5">
        <Skeleton className="w-full h-full mb-2" />
        <Skeleton className="w-full h-full mb-2" />
        <Skeleton className="w-full h-full" />
      </div>
    </div>
  );
};
