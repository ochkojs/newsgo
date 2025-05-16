import { PostModel } from "../model/post.js";

export const createPost = async (req, res) => {
  const { title, postImageUrl, content, category, author } = req.body;
  try {
    const post = await PostModel.create({
      title: title,
      postImageUrl: postImageUrl,
      content: content,
      category: category,
      author: author,
    });
    res.status(200).send({
      success: true,
      post: post,
    });
  } catch (error) {
    console.error(error, "error");
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};

export const getPosts = async (_, res) => {
  try {
    const posts = await PostModel.find();
    return res
      .status(200)
      .send({
        success: true,
        posts: posts,
      })
      .end();
  } catch (error) {
    console.error(error, "error");
  }
};

export const getPostId = async (_, res) => {
  const { _id } = req.body;
  try {
    const food = await FoodModel.find(_id);
    res.status(200).send({
      success: true,
      food: food,
    });
  } catch (error) {
    console.error(error, "Error");
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};
