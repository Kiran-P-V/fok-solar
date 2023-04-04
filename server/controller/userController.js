const bcrypt = require("bcrypt");
const Users = require("../models/userModel");

const postSignup = async (req, res) => {
  try {
    const { name, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    if (hashedPassword) {
      const newUser = new Users({
        name,
        password: hashedPassword,
      });
      await newUser.save();
      res
        .status(200)
        .json({ status: "success", message: "Registration success " });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      status: "error",
      message: "Something went wrong while processing the request",
    });
  }
};

module.exports = {
  postSignup,
};
