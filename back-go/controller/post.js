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

export const getPostId = async (req, res) => {
  try {
    console.log("REQ.PARAMS.ID:", req.params.id); // 👀 log this
    const { id } = req.params;

    const post = await PostModel.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).json({ message: "Server error" });
  }
};
