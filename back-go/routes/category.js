import express from "express";
import { createCategory } from "../controller/category.js";

export const categoryRouter = express.Router();

categoryRouter.post("/create", createCategory);
