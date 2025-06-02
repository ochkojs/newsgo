import { CategoryModel } from "../model/category.js";

export const createCategory = async (req, res) => {
  const { categoryname, categoryImageUrl } = req.body;
  try {
    const category = await CategoryModel.create({
      categoryname: categoryname,
      categoryImageUrl: categoryImageUrl,
    });
    res.status(200).send({
      success: true,
      category: category,
    });
  } catch (error) {
    console.log(error, "Error");
    return res
      .status(400)
      .send({
        success: false,
        message: error,
      })
      .end();
  }
};
