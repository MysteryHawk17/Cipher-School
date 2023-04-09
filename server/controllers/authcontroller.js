const userDB=require("../models/userModel")
const asynchandler=require('express-async-handler');
const bcrypt=require("bcryptjs");
const generateToken = require("../utils/jwt");



const registerUser=asynchandler(async(req,res)=>{
    const{firstName,lastName,email,phone,password}=req.body;
    if(!firstName||!lastName||!email||!phone||!password){
        res.status(400)
        throw new Error("Fill in all the required fields")
    }
    const findUser=await userDB.findOne({email:email})
    if(findUser){
        res.status(400)
        throw new Error("User already exists. Please login!")
    }
    else{
        const salt=await bcrypt.genSalt(10);
        const user=new userDB({
            firstName:firstName,
            lastName:lastName,
            email:email,
            phone:phone===undefined?"":phone,
            password:await bcrypt.hash(password,salt)
        })
        const savedUser=await user.save();
        if(savedUser){
            const token=generateToken(savedUser._id);
            const {password,createdAt,updatedAt,...other}=savedUser._doc;
            res.status(201).json({message:"saved user successfully",token,other});
        }
        else{
            res.status(400)
            throw new Error("Error in saving user")
        }
    }

})

const loginUser=asynchandler(async(req,res)=>{
    const{email,password}=req.body;
    if(!email||!password)
    {
        res.status(400)
        throw new Error ("Please enter your email and password properly")
    }
    else
    {
        const foundUser=await userDB.findOne({email:email})
        if(foundUser)
        {
            const verifyPassword=await bcrypt.compare(password,foundUser.password);
            if(verifyPassword)
            {
                const token=generateToken(foundUser._id)
                const{password,createdAt,updatedAt,...userData}=foundUser._doc
                res.status(200).json({message:"Valid user Login successful",userData,token})
            }
            else
            {
                res.status(400)
                throw new Error("Not a valid password. Reenter");
            }
        }
        else
        {
            res.status(400)
            throw new Error("User does not exist. Please Create an account")
        }
    }
})

const updatePassword=asynchandler(async(req,res)=>{
    const {oldPassword,newPassword}=req.body;
    const id=req.user._id;
    if(!oldPassword||!newPassword){
        res.status(400)
        throw new Error ("Please enter the old and new passwords correctly");   
    }
    else{
        const passwordCompare=await bcrypt.compare(oldPassword,req.user.password);
        if(passwordCompare){
            const salt=await bcrypt.genSalt(10);
            const updatedUser=await userDB.findByIdAndUpdate({_id:id},{
                password:await bcrypt.hash(newPassword,salt)
            },{new:true})
            res.status(200).json({message:"Password updated successfully"});
        }
        else{
            res.status(400)
            throw new Error("Old password is incorrect");
        }

    }
})

module.exports={registerUser,loginUser,updatePassword};