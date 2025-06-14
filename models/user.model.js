import mongoose from "mongoose";
import { createHmac, randomBytes } from "node:crypto";
import { generateAuthToken } from "../utils/create_verify-token.js";

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
    },
    salt: {
        type: String,
    },

},{timestamps:true});


userSchema.pre("save",function(next){

    const user =  this;
    if(!user.isModified("password")) return next();

    const salt = randomBytes(16).toString('hex');
    const hashedPass = createHmac('sha256', salt)
        .update(user.password)
        .digest('hex');

    user.salt=salt;
    user.password = hashedPass;
    next();
    
})

userSchema.static("comparePasswordAndGenerateAuthToken", async function(email,password) {
    
    const user = await this.findOne({ email });
    if (!user) {
        return null;
    }

    const hashedPass = createHmac('sha256', user.salt).update(password). digest('hex');
    if (hashedPass !== user.password) {
        return null;
    }
    const authToken = generateAuthToken(user);
    return authToken;
}
);

const USER= mongoose.model("User", userSchema);

export default USER;