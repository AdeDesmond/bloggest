import mongoose from "mongoose";
import { Blog } from "./blog-model";
import { User } from "./user-model";

const commentSchema = new mongoose.Schema(
  {
    comment: {
      type: String,
      required: [true, "comment field cannot be empty"],
      minlength: 3,
    },
    Comment: {
      type: mongoose.Types.ObjectId,
      ref: "Comment",
    },
    commentor: {
      type: mongoose.Types.ObjectId,
      ref: User,
    },
    blog: {
      type: mongoose.Types.ObjectId,
      ref: Blog,
    },
  },
  { timestamps: true }
);

export const Comment =
  mongoose.models?.Comment || mongoose.model("Comment", commentSchema);
