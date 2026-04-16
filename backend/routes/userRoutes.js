import express from "express";
import { loginUser,registerUser } from "../controllers/userController.js";

const userRouter = express.Router();

//user Register route
userRouter.post("/register",registerUser)

//user login route
userRouter.post("/login",loginUser)

export default userRouter;