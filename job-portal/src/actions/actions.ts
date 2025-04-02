"use server"

import { PrismaClient } from '@prisma/client'
import bcryptjs from 'bcryptjs';

const prisma = new PrismaClient();


export async function handleSignUp(formData: FormData): Promise<void> {

    // console.log(formData);
    try {

        const user = await prisma.user.findUnique({
            where: {
                email: formData.get("email") as string
            }
        })

        if (user) {
            console.log("user exists");
            Error("User already exists")
        } else {

            const salt = await bcryptjs.genSalt(10);
            const hashedPass = await bcryptjs.hash(formData.get("password") as string, salt);

            const newUser = await prisma.user.create({
                data: {
                    fullname: formData.get("fullname") as string,
                    email: formData.get("email") as string,
                    number: formData.get("number") as unknown as bigint,
                    password: hashedPass,
                    profile: {
                        bio:"",
                        resume:"",
                        profileImg:"",
                        skills:[""]
                    }
                    
                }
            })
            

            console.log(newUser);

        }



    } catch (error: any) {
        console.log("Signup failed", error.message);
    }
}