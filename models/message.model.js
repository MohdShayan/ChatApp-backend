import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({

    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
        trim:true
    },

    content:{
        type:String,
        required:true,
    },
    chat:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Chat",
        required:true,
        trim:true
    },

},{timestamps:true});

const MESSAGE = mongoose.model("Message",messageSchema);

export default MESSAGE;