"use client";

import { Input } from "@/components/ui/input";
import { useState, FormEvent } from "react";
import { usePostNewCat } from "../_catmutations/use-post-newcat";
import { Button } from "@/components/ui/button";
import { CatEditingForm } from "./category-edit-form";

export const CategoryForm = () => {
  const { postnewCategory, isPending } = usePostNewCat();
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const onSubmitNewCategory = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("category", category);
    formData.append("color", color);
    postnewCategory(formData);
    setCategory("");
    setColor("");
  };
  return (
    <form
      action=""
      className="flex items-center  w-1/2 mx-auto gap-2"
      onSubmit={onSubmitNewCategory}
    >
      <div className="flex flex-col w-full">
        {" "}
        <label
          className="text-center font-semibold text-muted-foreground"
          htmlFor="category"
        >
          New Category
        </label>
        <Input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          name="category"
          id="category"
          placeholder="Create new category"
        />
      </div>
      <div className="flex flex-col w-[20rem]">
        <label
          className="text-center font-semibold text-muted-foreground"
          htmlFor="colors"
        >
          Select Colors
        </label>
        <select
          value={color}
          onChange={(e) => setColor(e.target.value)}
          name="colors"
          id="colors"
          className="w-[15rem] h-10 bg-white outline-none focus:ring focus:ring-slate-950 focus:ring-offset-1 rounded-lg transition-all duration-300 border border-slate-200"
        >
          <option value="#a855f7">Purple</option>
          <option value="#6366f1">Magenta</option>
          <option value="#3b82f6">Blue</option>
          <option value="#06b6d4">Sky blue</option>
          <option value="#10b981">Light Green</option>
          <option value="#84cc16">Green</option>
          <option value="#f87171">Soft Red</option>
          <option value="#f59e0b">Amber </option>
          <option value="#c026d3">Fuschia</option>
          <option value="#ec4899">Pink</option>
          <option value="#9f1239">Red </option>
        </select>
      </div>
      <Button className="mt-6" disabled={isPending} size="sm">
        Create Category
      </Button>
    </form>
  );
};
