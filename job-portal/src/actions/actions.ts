"use server"
import { v2 as cloudinary } from 'cloudinary';
import bcryptjs from 'bcryptjs';
import { prisma } from '@/lib/dbConfig';
import { z } from 'zod'
import { revalidatePath } from 'next/cache';
import { signIn } from 'next-auth/react';

// import { toast } from 'react-toastify';
// import { redirect } from 'next/dist/server/api-utils';
// import { RedirectType } from 'next/navigation';
import { redirect } from 'next/navigation'
// import { useRouter } from 'next/navigation';
// import { zodResolver } from '@hookform/resolvers/zod'

import { schema } from "@/lib/zodSchema"


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

interface CloudinaryUploadResult {
    public_id: string,
    [key: string]: any
}

type Inputs = z.infer<typeof schema>

export async function handleSignUpWithStudent(formData: FormData) {

    
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: formData.get("email") as string
            }
        })

        if (user) {
            console.log("user exists");
            return { message: "User exists", status: "ERROR" };
        } else {

            const salt = await bcryptjs.genSalt(10);
            const hashedPass = await bcryptjs.hash(formData.get("password") as string, salt);

            const profileImg = formData.get("profileImg") as File
            const resume = formData.get("resume") as File
            if (!profileImg || !resume) {
                console.log("File not Found");

                return { message: "File not Found", status: "ERROR" }
            }

            // Profile Image-cloudinary
            const bytes = await profileImg.arrayBuffer();
            const buffer = Buffer.from(bytes);
            await new Promise<CloudinaryUploadResult>((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { folder: "ProfileImage" },
                    (error, result) => {
                        if (error) throw new Error("image not uploded")
                        else {
                            resolve(result as CloudinaryUploadResult)
                            formData.set("profileImg", result?.url as string)
                        }
                    }
                )
                uploadStream.end(buffer);
            })

            //resume-cloudinary
            const bytesResume = await resume.arrayBuffer();
            const bufferResume = Buffer.from(bytesResume);
            await new Promise<CloudinaryUploadResult>((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { folder: "Resume" },
                    (error, result) => {
                        if (error) throw new Error("resume not uploded")
                        else {
                            resolve(result as CloudinaryUploadResult)
                            formData.set("resume", result?.url as string)
                        }
                    }
                )
                uploadStream.end(bufferResume);
            })


            let items: Array<string> = [];
            for (let a of (formData.get("skills") as String).split(/\s*,\s*/)) {
                items.push(a);
            }

            const newUser = await prisma.user.create({
                data: {
                    fullname: formData.get("fullname") as string,
                    email: formData.get("email") as string,
                    number: BigInt(formData.get("phoneNumber") as string),
                    password: hashedPass,
                    profile: {
                        bio: formData.get("bio") as string,
                        resume: formData.get("resume") as string,
                        profileImg: formData.get('profileImg') as string,
                        skills: items,
                    }
                }
            })

            console.log(newUser);
            
            return { message: "Sign Up successful", status: "SUCCESS" };
        }

    } catch (error: any) {
        console.log("Signup failed", error.message);
        return { message: "SignUp failed", status: "ERROR" };
    }

}

export async function handleSignUpWithAdmin(formData: FormData) {

    try {
        const admin = await prisma.admin.findUnique({
            where: {
                email: formData.get("email") as string
            }
        })

        if (admin) {
            console.log("Admin exists");
            return { message: "Admin exists", status: "ERROR" };
        }

        else {

            const salt = await bcryptjs.genSalt(10);
            const hashedPass = await bcryptjs.hash(formData.get("password") as string, salt);


            const logo = formData.get("logo") as File
            if (!logo) {
                console.log("File not Found");
                return { message: "logo not Found", status: "ERROR" };
            }

            // logo-cloudinary
            const bytes = await logo.arrayBuffer();
            const buffer = Buffer.from(bytes);
            await new Promise<CloudinaryUploadResult>((resolve, reject) => {
                const uploadStream = cloudinary.uploader.upload_stream(
                    { folder: "logo" },
                    (error, result) => {
                        if (error) throw new Error("logo not uploded")
                        else {
                            resolve(result as CloudinaryUploadResult)
                            formData.set("logo", result?.url as string)
                        }
                    }
                )
                uploadStream.end(buffer);
            })

            const newUser = await prisma.admin.create({
                data: {
                    fullname: formData.get("fullname") as string,
                    email: formData.get("email") as string,
                    number: BigInt(formData.get("phoneNumber") as string),
                    password: hashedPass,
                    company: {
                        name: formData.get("companyName") as string,
                        logo: formData.get("logo") as string,
                        desc: formData.get("Cdesc") as string,
                        website: formData.get("website") as string,
                    }
                }
            })

            console.log( "sign up successful",newUser);
            return { message: "signUp successful", status: "SUCCESS" };
        }
    } catch (error:any) {
        console.log("Signup failed", error.message);
        return { message: "SignUp failed", status: "ERROR" };
    }
}