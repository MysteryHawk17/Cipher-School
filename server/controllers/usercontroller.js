const userDB = require("../models/userModel")
const asynchandler = require("express-async-handler")
const cloudinary = require("../utils/cloudinary")


const test = asynchandler(async (req, res) => {
    res.status(200).json({ message: "User route working properly" })
})


const getUser = asynchandler(async (req, res) => {
    const id = req.params.id;
    const user = await userDB.findById({ _id: id }).populate("follows").populate("followedBy");
    if (user) {
        const { password, createdBy, updatedAt, ...other } = user._doc;
        res.status(200).json({ message: "User found", other });
    }
    else {
        res.status(404);
        throw new Error("User not found");
    }
})
const updateUser = asynchandler(async (req, res) => {
    const id = req.params.id;
    const { firstName, lastName, email, phone, image } = req.body;
    const updatedData = {};
    if (firstName) {
        updatedData.firstName = firstName;
    }
    if (lastName) {
        updatedData.lastName = lastName;
    }
    if (email) {
        updatedData.email = email;
    }
    if (phone) {
        updatedData.phone = phone;
    }
    let uploadedFile
    if (req.file) {
        console.log(req.file)
        uploadedFile = await cloudinary.uploader.upload(req.file.path, {
            folder: "CipherSchool",
            resource_type: "image"
        })
        console.log(uploadedFile)
        if (!uploadedFile) {
            res.status(400)
            throw new Error("Error in uploading image");
        }

        console.log(uploadedFile)
        updatedData.image = uploadedFile.secure_url
    }
    const updatedUser = await userDB.findByIdAndUpdate({ _id: id }, updatedData, { new: true });
    if (!updatedUser) {
        res.status(500);
        throw new Error("Error in updating user")
    }
    else {
        res.status(200).json({ message: "Updated user successfully", updatedUser });
    }

})
const updateUserInterest=asynchandler(async(req,res)=>{
    const id=req.params.id;
    const {interest}=req.body;
    console.log(interest);
    const updateData={
        interest:interest
    }
    const updatedUser=await userDB.findByIdAndUpdate({_id:id},updateData,{new:true})
    if(updatedUser){
        const{password,createdAt,updatedAt,...other}=updatedUser._doc;
        res.status(200).json({message:"User updated Successfully",updatedUser})

    }
    else{
        res.status(400)
        throw new Error("Error in updating user interest");
    }
})
const getFollowers=asynchandler(async(req,res)=>{
    const id=req.params.id;
    const findUser=await userDB.findById({_id:id}).populate('followedBy').populate('follows');
    if(findUser){
        const followers=findUser.followedBy;
        const page=parseInt(req.query.page);
        const limit=parseInt(req.query.limit)
        const startIndex=(page-1)*limit;
        const endIndex=page*limit;
        const result=followers.slice(startIndex,endIndex);
        res.status(200).json({message:"Followers:-",result});
    }
    else{
        res.status(404)
        throw new Error("User not found")
    }
})
//followers update API added apart from the given task
const updateFollowers=asynchandler(async(req,res)=>{
    const currentUser=req.params.id;
    const followedUser=req.body.id;
    const findUser=await userDB.findById({_id:currentUser});
    if(findUser){   
            const updatedCurrentUser=await userDB.findByIdAndUpdate({_id:currentUser},{
                $push: { follows:followedUser}
            },{new:true});
            const updatedFollowedUser=await userDB.findByIdAndUpdate({_id:followedUser},{
                $push: { followedBy:currentUser }
            },{new:true})

            if(updatedCurrentUser&&updatedFollowedUser){
                res.status(200).json({message:"Successfully followed the user",updatedCurrentUser,updatedFollowedUser})
            }
            else{
                res.status(500)
                throw new Error("Error in updating follows list")
            }
    }else{
        res.status(404)
        throw new Error("Error in finding user")
    }
})
module.exports = { test, getUser, updateUser ,updateUserInterest,updateFollowers,getFollowers};