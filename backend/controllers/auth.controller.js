import User from "../models/user.model.js";
import bcrypt from "bcryptjs"


export const signup = async (req,res)=>{
    try{
        const {fullName, userName, password, confirmPassword, gender}= req.body;
        if (password !== confirmPassword){
            return res.status(400).json({error:"password dont match"})
        }

        const user = await User.findOne({userName});
        
        if (user){
            return res.status(400).json({error:"Username already exist"})
        }
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`

        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`

        const salt= await bcrypt.genSalt(10);

        const hashPassword= await bcrypt.hash(password,salt); 

        const newUser=  new User(
            {
                fullName, 
                userName,
                password:hashPassword,
                gender,
                profilePic:gender==="male"?boyProfilePic:girlProfilePic,
            }
        )
        if(newUser){
        await newUser.save();

        res.status(201).json({
            _id:newUser._id,
            fullName: newUser.fullName,
            userName:newUser.userName,
            profilePic:newUser.profilePic
        })}
        else{
            res.status(400).json({error:"invalid user data"})
        }

    }catch(error){
        console.log("error in signup controller", error.message)
        res.status(500).json({error:"Internal Server Error"})
    }
}


export const login = (req,res)=>{
    res.send("Login Route");
}


export const logout = (req,res)=>{
    res.send("logout route")
}