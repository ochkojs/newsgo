import { UserModel } from "../model/user.js";

export const createUser = async (req, res) => {
  const { email, password, phoneNumber, bio, isVerified } = req.body;
  try {
    const user = await UserModel.create({
      email: email,
      password: password,
      phoneNumber: phoneNumber,
      bio: bio,
      isVerified: isVerified,
    });
    res.status(200).send({
      success: true,
      user: user,
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

export const getUsers = async (__, res) => {
  try {
    const users = await UserModel.find();
    return res
      .status(200)
      .send({
        success: true,
        users: users,
      })
      .end();
  } catch (error) {
    console.error(error);
  }
};
