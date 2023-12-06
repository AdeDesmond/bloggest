import mongoose from "mongoose";
import { Category } from "./cat-model";
import { User } from "./user-model";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "a titled is required"],
    },
    subtitle: {
      type: String,
      required: [true, "A subtitle is required for every blog"],
    },
    content: {
      type: String,
      required: [true, "content is a required field"],
    },
    image: {
      type: String,
    },
    time: {
      type: Number,
      required: [true, "we need how long to read the article"],
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: Category,
    },
    author: {
      type: mongoose.Types.ObjectId,
      ref: User,
    },
  },
  { timestamps: true }
);

export const Blog = mongoose.models?.Blog || mongoose.model("Blog", blogSchema);
