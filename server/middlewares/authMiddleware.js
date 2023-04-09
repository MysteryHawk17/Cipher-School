const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

const checkLogin=asyncHandler(async(req,res,next)=>{
    var token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token=req.headers.authorization.split(' ')[1];
            const decoded=jwt.verify(token,process.env.JWTSECRET);
            req.user=await User.findById(decoded.id);
            next();
        }catch(error){
            res.status(401).json({message: "Unauthorized, token failed"});
        }
    }else{
        res.status(401).json({message: "User not authorized"});
    }
})

module.exports={checkLogin};