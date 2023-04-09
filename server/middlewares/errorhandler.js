 require("dotenv").config(); 
const errorHandler=(error,req,res,next)=>{
    const statusCode=res.statusCode?res.statusCode:500
    res.status(statusCode)
    console.log(error)
    res.json({
        message:error.message,
        stack:process.env.NODE_ENV==='development'?error.stack:null,
        status:statusCode
    })
next();
}
module.exports=errorHandler