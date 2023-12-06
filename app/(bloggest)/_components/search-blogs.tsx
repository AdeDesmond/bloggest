import { Input } from "@/components/ui/input";

export const SearchBlogs = () => {
  return (
    <div className="w-full">
      <Input
        className="w-1/4 mx-auto placeholder:text-sm placeholder:text-muted-foreground"
        placeholder="search our blogs by topics or keywords"
      />
    </div>
  );
};
