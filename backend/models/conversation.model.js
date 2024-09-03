import mongoose from "mongoose";

const conversationSchema = mongoose.Schema({
    participation:[{
        type:mongoose.Schema.type.objectId,
        ref:"User"
    }],
    message:[{
        type:mongoose.Schema.type.objectId,
        ref:"User",
        default:[],
    }]
},{timestamps:true})

const Conversation = mongoose.model("Conversation",conversationSchema);

export default Conversation; 