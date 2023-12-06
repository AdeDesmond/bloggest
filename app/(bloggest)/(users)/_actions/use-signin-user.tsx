import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signInUser } from "@/actions/user-actions/signin-user";
import { toast } from "sonner";

export const useSignInUser = () => {
  const queryClient = useQueryClient();
  const {
    mutate: signInUserFunc,
    isPending,
    error,
  } = useMutation({
    mutationFn: (data: FormData) => signInUser(data),
    onSuccess: () => {
      toast.success("successfully login");
      queryClient.invalidateQueries({
        queryKey: ["profile"],
      });
    },
  });
  return { signInUserFunc, isPending, error };
};
