


// registration of the user here
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const { UserModel } = require("../model/user");
require("dotenv").config();

const userRegistred=async(req,res)=>{
    let {name,email,password}=req.body;
  try {
    let existedUser=await UserModel.findOne({email});
    if(existedUser){
      return  res.status(200).json({msg:"User already registered!!"})
    } else{
        bcrypt.hash(password,5,async(err,hash)=>{
            if(err){
             return   res.status(400).json({msg:err.message})
            }else{
                let newUser=new UserModel({
                    name,email,password:hash
                })
                await newUser.save();
                res.status(200).json({msg:"You are registered",newUser})
            }
        })
    }
  } catch (error) {
      res.status(400).json({ msg: error.message })
  }
}


// login user 

const userLogin=async(req,res)=>{
    let {email,password}=req.body;
    try {
        let registedUser=await UserModel.findOne({email});
        if(registedUser){
          bcrypt.compare(password,registedUser.password,async(err,result)=>{
            if(result){
                let token=jwt.sign({data:"raj"},process.env.KEY,{
                    expiresIn :"7d"
                })
                res.status(200).json({msg:"You are logged In",token})
            }
          })
        }else{
            res.status(401).json({msg:"You are not registerd"})
        }
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
}

module.exports={
    userRegistred,userLogin
}