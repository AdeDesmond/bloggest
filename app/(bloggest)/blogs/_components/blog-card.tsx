import { Dot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const BlogCard = ({ blog }: any) => {
  return (
    <div className="w-[25rem] rounded-lg overflow-hidden z-0">
      <Link href={`/blogs/fullcontent/${blog._id}`}>
        <div className=" w-full mb-3 cursor-pointer hover:scale-105 hover:shadow-lg focus:shadow-sm transition-all duration-200">
          <Image
            src={blog.image}
            alt="blog photo"
            height={200}
            width={200}
            className="object-cover w-full h-[14rem]"
          />
        </div>
      </Link>
      <div className="w-full">
        <p
          className="text-sm flex items-center mb-2"
          style={{ color: blog.category.color }}
        >
          <span>{blog.category.category}</span> <Dot />{" "}
          <span>{blog.time} min read</span>
        </p>
        <h1 className="text-xl font-bold mb-1 cursor-pointer">{blog.title}</h1>
        <p className="text-muted-foreground">{blog.subtitle}</p>

        <div className="flex items-center mt-4">
          <div className="flex items-center gap-2">
            <Image
              src={blog.author.image}
              alt="blog author"
              width={20}
              height={20}
              className="object-cover w-4 h-4 rounded-full border-2 border-slate-500"
            />
            <p className="text-sm text-muted-foreground">{blog.author.name}</p>
          </div>
          <Dot className="text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            {new Date(blog.createdAt).toLocaleString().split(",")[0]}
          </p>
        </div>
      </div>
    </div>
  );
};
