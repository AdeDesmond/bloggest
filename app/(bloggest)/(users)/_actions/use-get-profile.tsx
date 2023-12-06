import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "@/actions/user-actions/getuser-profile";
export const useGetUserProfile = () => {
  const {
    data: profileData,
    isPending,
    error,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: getUserProfile,
  });
  return { profileData, isPending, error };
};
