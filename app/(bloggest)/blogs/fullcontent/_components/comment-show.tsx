import Image from "next/image";
import { CreateCommentForm } from "./create-comment-form";
import { useGetCommentsByBlogId } from "../_comment-mutations/use-get-comments";

export const CommentShow = ({ comment, blogId }: any) => {
  const { data } = useGetCommentsByBlogId(blogId);

  console.log(comment);
  console.log(comment?.Comment?.comment);
  return (
    <div className="p-4 border mt-2 mb-1">
      <div className="flex gap-3">
        <Image
          src={comment?.commentor?.image || ""}
          alt="user image"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1 space-y-3">
          <p className="text-sm font-medium text-gray-500">
            {comment?.commentor?.name}
          </p>
          <p className="text-gray-900">{comment?.comment}</p>
          {comment?.Comment?.comment ? (
            <div className="pl-6">
              <CommentShow comment={comment.Comment.comment} blogId={blogId} />
            </div>
          ) : null}
          <CreateCommentForm blogId={comment?.blog} parentId={comment?._id} />
        </div>
      </div>
    </div>
  );
};
