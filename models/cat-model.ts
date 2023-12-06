import mongoose from "mongoose";

const catSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: [true, "category is an important field"],
    },
    color: {
      type: String,
      default: "#111827",
    },
  },
  { timestamps: true }
);

export const Category =
  mongoose.models?.Category || mongoose.model("Category", catSchema);
