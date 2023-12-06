import { getCatData } from "@/actions/cat-actions/get-catdata";
import { useQuery } from "@tanstack/react-query";

export const useGetCatData = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getCatData(),
  });
  return { data, error, isLoading };
};
