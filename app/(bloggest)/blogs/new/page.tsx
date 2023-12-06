import { Popover } from "@/components/popover";
import React from "react";
import { FormPostEdit } from "../_form/form-post-edit";

export default function NewBlogsPage() {
  return (
    <Popover>
      <div className="w-[100%]">
        <FormPostEdit formTitle="Create New Blog" buttonName="Create blog" />
      </div>
    </Popover>
  );
}
