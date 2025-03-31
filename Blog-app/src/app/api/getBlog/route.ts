import {connect} from '@/lib/dbConfig'
import Blog from '@/models/blogModel';
import { error } from 'console';
import { NextRequest, NextResponse } from 'next/server';
import { toast } from 'sonner';

export async function GET(request: NextRequest){
    try {
        const {searchParams} = new URL(request.url)
        const id = searchParams.get("id");
        
        const blog = await Blog.findOne({_id:id});

        if(!blog){
            return NextResponse.json({message: "Please Create Blog",success:true})
        }
        return NextResponse.json({message:"Blogs",success:true, blog})
        
    } catch (error:any) { 
        return NextResponse.json({error: "Blogs are not find"}, {status: 500})
    }
}