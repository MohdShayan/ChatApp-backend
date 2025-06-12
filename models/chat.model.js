import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({

    chatName: {
        type: String,
        required: true,
        trim: true
    },
    isGroupChat: {
        type: Boolean,
        default: false
    },
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message"
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }],
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

},{ timestamps: true });

const CHAT = mongoose.model("Chat", chatSchema);
export default CHAT;