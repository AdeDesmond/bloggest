"use client";

import { ArrowLeft, Dot } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useGetFullContent } from "../../_blogmutations/use-getfullcontent-blog";
import Image from "next/image";
import { Spinner } from "@/app/(bloggest)/_components/spinners";
import { CreateCommentForm } from "../_components/create-comment-form";
import { CommentsList } from "../_components/comment-list";

export default function FulllContentIdPage() {
  const router = useRouter();
  const params = useParams();
  const { data, isLoading, error } = useGetFullContent(params.blogId as string);
  const onGoBack = () => {
    router.push("/blogs");
  };

  if (isLoading) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <Spinner />
      </div>
    );
  }
  return (
    <section className="mt-[3.5rem] w-full min-h-screen">
      <div className="w-full h-14 bg-rose-200 flex items-center pl-10 gap-2 fixed mb-10 top-[3.5rem] z-9999">
        <ArrowLeft
          className="w-5 h-5 cursor-pointer hover:scale-110 hover:font-bold focus:text-muted-foreground transition-all duration-200 hover:text-slate-600"
          onClick={onGoBack}
        />
        <p className="text-sm ">Back to blogs</p>
      </div>

      <div className="mt-[8rem] w-full">
        <p
          className="text-center flex items-center justify-center mb-2"
          style={{ color: data?.blogfullContent?.category?.color }}
        >
          <span>{data?.blogfullContent?.category?.category}</span>{" "}
          <Dot className="h-5 w-5" />{" "}
          <span>{data?.blogfullContent?.time} min read</span>
        </p>
        <h1 className="text-center text-2xl font-bold mb-2">
          {data?.blogfullContent?.title}
        </h1>

        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center gap-2 ">
            <Image
              src={data?.blogfullContent?.author?.image}
              alt="blog author"
              width={20}
              height={20}
              className="object-cover w-4 h-4 rounded-full border-2 border-slate-500"
            />
            <p className="text-sm text-muted-foreground">
              {data?.blogfullContent?.author?.name}
            </p>
          </div>
          <Dot className="text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            {
              new Date(data?.blogfullContent?.createdAt)
                .toLocaleString()
                .split(",")[0]
            }
          </p>
        </div>

        <div className="w-full  mb-10 gap-5  flex items-center justify-center mx-auto">
          <Image
            src={data?.blogfullContent?.image}
            alt="blog full content"
            height={300}
            width={500}
            className="object-cover w-[50%] h-[40rem] rounded-lg "
          />
          <div className="w-[40%] self-start">
            <p className="">{data?.blogfullContent?.content}</p>
            <CreateCommentForm blogId={params.blogId as string} />
            <CommentsList blogId={params.blogId as string} />
          </div>
        </div>
      </div>
    </section>
  );
}
