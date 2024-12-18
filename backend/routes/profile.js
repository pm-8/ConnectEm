const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const User = require("../models/User");
router.use(authMiddleware);
router.get("/profile",async()=>{
    try{
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        //send user data
        res.status(200).json(user);
    }catch(err){
        console.error("Error fetching profile:",err.message);
        res.status(500).json({message:"Internal Server Error"});
    }
})
module.exports = router;