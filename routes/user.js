const express = require("express");
const userController = require("../controllers/user");
const userRouter = express.Router();

userRouter.use("/postuser", userController.postUser);
userRouter.use("/reg", userController.addUser);
userRouter.use("/login", userController.preCheck);
userRouter.use("/check", userController.checkUser);

module.exports = userRouter;