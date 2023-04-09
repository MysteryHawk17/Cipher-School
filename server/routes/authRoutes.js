const {registerUser, loginUser, updatePassword } = require("../controllers/authcontroller");
const{checkLogin}=require("../middlewares/authMiddleware")
const router=require("express").Router();



router.post("/register",registerUser)
router.post("/login",loginUser)
router.post("/updatepassword",checkLogin,updatePassword)


module.exports=router;