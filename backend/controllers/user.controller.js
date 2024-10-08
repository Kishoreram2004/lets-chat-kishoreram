import User from "../models/user.model.js";

export const getUserSideBar = async (req,res)=>{
    try {
        const loggedInUserId= req.user._id;

        const filterId = await User.find({_id:{$ne:loggedInUserId}})

        res.status(200).json(filterId)

    } catch (error) {
        console.log("Error in the getUserSideBar:",error.message)
        return res.status(500).json({error:"Internal server error"})
    }
} 