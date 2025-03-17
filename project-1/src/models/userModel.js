import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        require: [true, "Please enter a firstname"],
    },
    lastname:{
        type: String,
        require: [true, "Please enter a lastname"],
    },
    email:{
        type: String,
        require: [true, "Please enter a email"],
        unique: true,
    },
    password:{
        type: String,
        require:[true, "Please enter a password"]
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    forgetPasswordToken: String,
    forgetPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User; 



