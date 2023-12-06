"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, ElementRef, useRef } from "react";
import { toast } from "sonner";

export const CatEditingForm = () => {
  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.select();
    });
  };
  const onBlur = () => {
    formRef.current?.requestSubmit();
  };
  if (isEditing) {
    return (
      <form ref={formRef} className="flex items-center gap-x-2">
        <Input
          ref={inputRef}
          id="title"
          onBlur={onBlur}
          defaultValue={"cat"}
          className="text-lg font-bold px-[7px] py-1 h-7 outline-none focus:ring focus:ring-slate-950 focus:ring-offset-1 transition-all duration-100"
        />
      </form>
    );
  }
  return (
    <Button
      onClick={enableEditing}
      variant={"secondary"}
      className="font-bold text-l h-auto w-auto px-2 p-1 "
    >
      edit
    </Button>
  );
};
