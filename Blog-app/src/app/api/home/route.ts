import {connect} from '@/lib/dbConfig'
import Blog from '@/models/blogModel';
import { error, log } from 'console';
import { NextRequest, NextResponse } from 'next/server';
import { toast } from 'sonner';


connect();

// get all Blogs
export async function GET(request: NextRequest){
    try {
        const {searchParams} = new URL(request.url)
        const query = searchParams.get("query") ?? "";
        // const blogs = await Blog.find({});
        const blogs = await Blog.find({
            title: { $regex: query, $options: 'i' }
          });
          

        if(!blogs){
            return NextResponse.json({message: "Please Create Blog",success:true})
        }

        return NextResponse.json({message:"Blogs",success:true, blogs })
        
    } catch (error:any) {
        return NextResponse.json({error: "Blogs are not find"}, {status: 500})
    }
}


//add blog
export async function POST(request:NextRequest) {
    try {
        const reqBody = await request.json();
        const {title, desc} = reqBody;

        if(title.trim() === ""){
            return NextResponse.json({error: "title is required"}, {status: 500})
        }
        if(desc.trim() === ""){
            return NextResponse.json({error: "description is required"}, {status: 500})
        }

        const newBlog = new Blog({
            title,
            desc
        })

        const savedBlog = await newBlog.save();
        console.log(savedBlog);

        return NextResponse.json({
            message: "Blog created successfully",
            success: true,
            savedBlog
        })
        
    } catch (error:any) {
        return NextResponse.json({error: "blog is not added successfully"}, {status: 500})
    }
}


// remove blog
export async function DELETE(request:NextRequest) {
    try {
        const {searchParams} = new URL(request.url)
        const id = searchParams.get("id");

        await Blog.findByIdAndDelete({_id:id});
        return NextResponse.json({
            message: "blogs deleted successfully",
            success: true,
        })

    } catch (error: any) {
        return NextResponse.json({error:"blog is not deleted"}, {status: 500})
    }
}

//update blog
export async function PUT(request: NextRequest) {
    try {
        console.log("🚀 ~ PUT ~ PUT:", PUT)
        const {searchParams} = new URL(request.url)
        const id = searchParams.get("id");

        if (!id) {
            return NextResponse.json({ error: "Blog ID is required" }, { status: 400 });
        }

        const reqBody = await request.json();
        const {title, desc} = reqBody;
        console.log(title);
        

        const blog = await Blog.updateOne({_id:id}, {title:title, desc:desc} )
        console.log("🚀 ~ PUT ~ blog:", blog)
        if(!blog){
            return NextResponse.json({error:"blog Error"}, {status: 500})
        }else{
            return NextResponse.json({Message: "Updated Blog",
                success: true,
            })
        }
        


    } catch (error:any) {
        return NextResponse.json({error:"blog updated"}, {status: 500})
    }
}