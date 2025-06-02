import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  categoryname: String,
  categoryImageUrl: String,
  createAtPost: {
    type: Date,
    default: Date.now,
  },
});

export const CategoryModel = mongoose.model("Category", categorySchema);
