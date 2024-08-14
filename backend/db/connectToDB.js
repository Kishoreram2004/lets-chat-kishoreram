import mongoose from "mongoose";

const connectToDB= async()=>{
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("connected to mongoDB")
    }catch(err){
        console.log("error in connecting to mongoDB",error.message)
    }
}


export default connectToDB;