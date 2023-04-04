const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

router.route("/user/signup").post(userController.postSignup);

module.exports = router;
