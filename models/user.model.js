import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
    },
    profilePic:{
        type:String,
        default:"https://icons.iconarchive.com/icons/paomedia/small-n-flat/256/profile-icon.png",
    }

},{timestamps:true});


const USER= mongoose.model("User", userSchema);

export default USER;