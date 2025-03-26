import {connect} from '@/lib/dbConfig'
import Blog from '@/models/blogModel';
import { NextRequest, NextResponse } from 'next/server';


connect();

export async function GET(request: NextRequest){
    try {
        const blog = await Blog.find({});

        if(!blog){
            return NextResponse.json({message: "Please Create Blog",success:true})
        }

        return NextResponse.json({message:"Blogs",success:true, blog })
        
    } catch (error:any) {
        return NextResponse.json({error: "Blogs are not find"}, {status: 500})
    }
}