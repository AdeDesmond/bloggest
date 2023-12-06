import { useQuery } from "@tanstack/react-query";
import { getBlogData } from "@/actions/blog-actions/get-blogs";

export const useGetBlogData = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: () => getBlogData(),
  });
  return { data, isLoading, error };
};
