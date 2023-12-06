import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCatData } from "@/actions/cat-actions/delete-catdata";
import { toast } from "sonner";

export const useDeleteCatData = () => {
  const queryClient = useQueryClient();
  const {
    mutate: deleteCat,
    isPending,
    error,
  } = useMutation({
    mutationFn: (id: string) => deleteCatData(id),
    onSuccess: () => {
      toast.success("successfully deleted");
      queryClient.invalidateQueries({
        queryKey: ["categories"],
      });
    },
  });

  return { deleteCat, isPending, error };
};
