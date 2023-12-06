import { postNewCat } from "@/actions/cat-actions/post-newcat";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const usePostNewCat = () => {
  const queryClient = useQueryClient();
  const { mutate: postnewCategory, isPending } = useMutation({
    mutationFn: (data: FormData) => postNewCat(data),
    onSuccess: () => {
      toast.success("Category successfully created");
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });
  return { postnewCategory, isPending };
};
