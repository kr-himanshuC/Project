import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from "bcryptjs"
import toast from 'react-hot-toast'
import jwt from 'jsonwebtoken';

connect()


export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();
        const {email, password} = reqBody;

        console.log(reqBody);

        const user = await User.findOne({email});

        if(!user){
            console.log("User does not exist");
            
            return await NextResponse.json({
                error: "User does not exist",
              
            },{status: 400})
        }

        // check if password is correct
        const validPassword = await bcryptjs.compare(password, user.password);

        if(!validPassword){
            console.log("Incorrect Password");
            return NextResponse.json({error:"Incorrect Password"},{status:400});
        }


        //create token data
        const tokenData = {
            id: user._id,
            email: user.email,
            firstname : user.firstname,
            lastname: user.lastname,
        }

        //create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn:"1d"})

        const response = NextResponse.json({
            message: "Login Successfully",
            success: true,
        })
        response.cookies.set("token", token, {
            httpOnly: true,
        })

        return response
        
    } catch (error:any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}