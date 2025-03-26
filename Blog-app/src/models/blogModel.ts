import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    
    title: {
        type: String,
        require:[true, "Please Enter title"]
    },
    desc:{
        type:String,
        require:[true, "Please Enter description"]
    },
    
})


const Blog = mongoose.models?.blogs || mongoose.model("blogs",blogSchema)

export default Blog;