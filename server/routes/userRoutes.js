const router=require("express").Router();
const{test, getUser, updateUser, updateUserInterest, updateFollowers, getFollowers}=require("../controllers/usercontroller")
const upload=require("../utils/multer")

router.get("/test",test);
router.get("/getuser/:id",getUser);
router.put("/updateuser/:id",upload.single('image'),updateUser);
router.put("/updateuserinterest/:id",updateUserInterest);
router.put("/updatefollowers/:id",updateFollowers);
router.get("/getuserfollowers/:id",getFollowers);

module.exports=router