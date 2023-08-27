

const express=require("express");
const { userRegistred, userLogin } = require("../controller/userController");
const userRouter=express.Router();
userRouter.post("/register",userRegistred);
userRouter.post("/login",userLogin)
module.exports={
    userRouter
}