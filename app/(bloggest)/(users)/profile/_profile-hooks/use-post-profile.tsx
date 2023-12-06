import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfile } from "../_profile-actions/update-profile";
import { toast } from "sonner";

export const usePostProfileUpdate = (id: string) => {
  const queryClient = useQueryClient();
  const { mutate, isPending, error } = useMutation({
    mutationFn: (data: any) => updateProfile(data, id),
    onSuccess: () => {
      toast.success("update successful");
      queryClient.invalidateQueries({
        queryKey: ["profile"],
      });
    },
  });
  return { mutate, isPending, error };
};
