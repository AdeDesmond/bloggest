"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useDeleteCatData } from "../_catmutations/use-delete-catData";

interface DisplayCatDataProps {
  cat: {
    _id: string;
    category: string;
    color: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  };
}

export const DisplayCatData = (cat: DisplayCatDataProps) => {
  const { deleteCat, error, isPending } = useDeleteCatData();

  return (
    <div className="flex items-center justify-center">
      <div className="w-[15rem] h-8 flex items-center justify-between mb-2">
        <p className="mt-5" style={{ color: cat.cat.color }}>
          {cat.cat.category}
        </p>
        <Button
          disabled={isPending}
          onClick={() => deleteCat(cat.cat._id)}
          variant="destructive"
          size="sm"
          className="mt-5"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
