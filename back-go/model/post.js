import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: String,
    postImageUrl: String,
    content: String,
    category: String,
    author: String,
    createAtPost: {
        type: Date,
        default: Date.now,
    },
});

export const PostModel = mongoose.model("Post", postSchema);