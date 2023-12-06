import { useQuery } from "@tanstack/react-query";
import { getfullContentBlog } from "@/actions/blog-actions/get-fullcontent-blog";

export const useGetFullContent = (id: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["fullcontent"],
    queryFn: () => getfullContentBlog(id),
  });
  return { data, isLoading, error };
};
