import mongoose from "mongoose";
import tokenSchema from "./tokenModel";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require: [true, "Please enter a username"]
    },
    gender:{
        type: String,
        require: [true, "Please enter gender"]
    },
    email:{
        type: String,
        require: [true, "Please enter an email"],
        unique: true,
    },
    password:{
        type: String,
        require: [true, "Please enter a password"],
    },
    tokens:{
        type: Array,
        "default": []
    }
    
})

const User = mongoose.models?.users || mongoose.model("users",userSchema);

export default User;