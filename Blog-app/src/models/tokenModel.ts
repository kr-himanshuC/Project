import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
    id: {
        type: String
    },
    img: {
        type: String
    },
    name: {
        type: String
    },
    symbol:{
        type:String,
    },
    count: {
        type :Number,
    }
})


export default tokenSchema;