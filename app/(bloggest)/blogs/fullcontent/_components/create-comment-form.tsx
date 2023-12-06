"use client";

import { useGetUserProfile } from "@/app/(bloggest)/(users)/_actions/use-get-profile";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState, FormEvent } from "react";
import { useCreateComments } from "../_comment-mutations/use-post-comments";
import { Spinner } from "@/app/(bloggest)/_components/spinners";

interface CreateCommentProps {
  blogId: string;
  parentId?: string;
}

export const CreateCommentForm = ({ blogId, parentId }: CreateCommentProps) => {
  const { createCommentsPerBlog, isPending } = useCreateComments();
  const { profileData } = useGetUserProfile();
  const [comment, setComment] = useState("");
  const onSubmitNewComment = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userId = profileData?.userData?._id;
    const data = { comment, userId, blogId, parentId };
    if (userId && blogId) {
      createCommentsPerBlog(data);
    }
    setComment("");
  };
  return (
    <form action="" onSubmit={onSubmitNewComment} className="mt-4">
      <Textarea
        placeholder="Write your comment"
        name="comment"
        id="comment"
        className="placeholder:text-muted-foreground"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <Button disabled={isPending} className="mt-2" type="submit">
        {isPending ? "commenting..." : "Comment "}
      </Button>
    </form>
  );
};
