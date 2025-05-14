import express from "express";
import { json } from "express";
import cors from "cors";
import { connectMongoDB } from "./connectDb.js";
import { postRouter } from "./routes/post.js";
import { userRouter } from "./routes/user.js";

// index.js
const newsgo = express();
const PORT = 3009;

newsgo.use(express.json());

connectMongoDB();

newsgo.use(cors());
newsgo.use(json());
newsgo.use("/post", postRouter);
newsgo.use("/user", userRouter);

// Үндсэн маршрут
newsgo.get("/", (req, res) => {
  res.send("Сайн байна уу! Node.js backend ажиллаж байна.");
});

// Жишээ API
newsgo.get("/api/hello", (req, res) => {
  res.json({ message: "Сайн уу, API!" });
});

// Серверээ асаах
newsgo.listen(PORT, () => {
  console.log(`Сервер http://localhost:${PORT} дээр ажиллаж байна`);
});
