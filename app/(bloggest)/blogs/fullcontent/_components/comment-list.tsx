import { useGetCommentsByBlogId } from "../_comment-mutations/use-get-comments";
import { CommentShow } from "./comment-show";

interface CommentsListProps {
  blogId: string;
}

export const CommentsList = ({ blogId }: CommentsListProps) => {
  const { data, isLoading, error } = useGetCommentsByBlogId(blogId);

  console.log(data);
  const renderedComments = data?.commentData?.map((comment: any) => (
    <CommentShow key={comment._id} comment={comment} blogId={blogId} />
  ));
  console.log(error?.message);
  return <div>{renderedComments}</div>;
};
