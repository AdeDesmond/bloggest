import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment } from "@/actions/comment-actions/create-comment";
import { toast } from "sonner";

export const useCreateComments = () => {
  const queryClient = useQueryClient();
  const {
    mutate: createCommentsPerBlog,
    isPending,
    error,
  } = useMutation({
    mutationFn: (data: any) => createComment(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
      toast.success("comments posted");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { createCommentsPerBlog, isPending, error };
};
