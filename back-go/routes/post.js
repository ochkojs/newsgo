import express from "express";
import { createPost, getPostId, getPosts } from "../controller/post.js";

export const postRouter = express.Router();

postRouter
  .post("/createpost", createPost)
  .get("/posts", getPosts)
  .get("/:id", getPostId);
