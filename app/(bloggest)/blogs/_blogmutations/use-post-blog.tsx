import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postNewBlog } from "@/actions/blog-actions/post-new-blog";
import { toast } from "sonner";

export const usePostNewBlog = () => {
  const queryClient = useQueryClient();
  const {
    mutate: postBlog,
    error,
    isPending,
  } = useMutation({
    mutationFn: (data: FormData) => postNewBlog(data),
    onSuccess: () => {
      toast.success("blog created successfully");
      queryClient.invalidateQueries({
        queryKey: ["blogs"],
      });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { postBlog, error, isPending };
};
