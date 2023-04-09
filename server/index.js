const express=require('express')
const app=express();
const port=process.env.PORT||5000
const errorHandler=require("./middlewares/errorhandler")
const cors=require("cors")
const connect =require("./db/connect");
require("dotenv").config()


//Routes import
const authRoutes=require("./routes/authRoutes")
const userRoutes=require("./routes/userRoutes")

//Middlewares
app.use(cors({
    origin:["http://localhost:3000"]
}))
app.use(express.json({limit:"50mb"}));



//route middleware
app.use("/api/auth",authRoutes);
app.use("/api/users",userRoutes);
//Server test route
app.get("/",(req,res)=>{
    res.status(200).json({status:true,message:"Server is online and working!"})
})

//error handler
app.use(errorHandler)
//Connection to mongo db
connect(process.env.MONGO_URI)


//Server listening
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
