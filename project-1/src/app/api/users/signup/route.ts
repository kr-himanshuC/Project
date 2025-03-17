import {connect} from '@/dbConfig/dbConfig'
import User from '@/models/userModel'
import { NextRequest, NextResponse } from 'next/server'
import bcryptjs from "bcryptjs"
import toast from 'react-hot-toast'



connect()


export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();
        const { firstname, lastname, email, password } = reqBody;

        console.log(reqBody);

        const user = await User.findOne({email});

        if(user){
            console.log("user exists");
            return NextResponse.json({error: "User already exists"},{status: 400})
        }
       
        // if user is not exists
        //encrypt password
        const salt = await bcryptjs.genSalt(10);
        const hashedPass = await bcryptjs.hash(password,salt);

        // new user
        const newUser = new User({
            firstname,
            lastname,
            email,
            password: hashedPass, 
        })

        const savedUser = await newUser.save();
        console.log(savedUser);

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })
        

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}