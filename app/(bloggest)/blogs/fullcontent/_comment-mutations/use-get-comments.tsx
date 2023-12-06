import { useQuery } from "@tanstack/react-query";
import { getCommentsByBlogId } from "@/actions/comment-actions/get-comments";

export const useGetCommentsByBlogId = (id: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["comments"],
    queryFn: () => getCommentsByBlogId(id),
  });
  return { data, isLoading, error };
};
