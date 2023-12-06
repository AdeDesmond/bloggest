import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getLogOutUser } from "@/actions/user-actions/logout-user";
import { toast } from "sonner";

export const useLogoutUser = () => {
  const queryClient = useQueryClient();
  const {
    mutate: logOut,
    isPending,
    error,
  } = useMutation({
    mutationFn: () => getLogOutUser(),
    onSuccess: () => {
      toast.success("successfully logout");
      queryClient.invalidateQueries({
        queryKey: ["profile"],
      });
    },
  });
  return { logOut, isPending, error };
};
