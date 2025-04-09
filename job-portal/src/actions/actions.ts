"use server"
import { v2 as cloudinary } from 'cloudinary';
import bcryptjs from 'bcryptjs';
import { prisma } from '@/lib/dbConfig';
import { z } from 'zod'
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

export async function handleSignUp(formData: FormData) {
console.log("🚀 ~ handleSignUp ~ formData:", formData.get("role"))

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


            if (formData.get("role") == "USER") {
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

                console.log("🚀 ~ handleSignUp ~ formData:", formData.get("bio"))
                const newUser = await prisma.user.create({
                    data: {
                        fullname: formData.get("fullname") as string,
                        email: formData.get("email") as string,
                        number: BigInt(formData.get("phoneNumber") as string),
                        password: hashedPass,
                        role: formData.get("role") as string,
                        bio: formData.get("bio") as string,
                        resume: formData.get("resume") as string,
                        profileImg: formData.get('profileImg') as string,
                        skills: items,
                    }
                })

                console.log(newUser);

                return { message: "Sign Up successful as user", status: "SUCCESS", role: "USER"};

            }


            else {
                // const logo = formData.get("logo") as File
                // if (!logo) {
                //     console.log("File not Found");
                //     return { message: "logo not Found", status: "ERROR" };
                // }

                // // logo-cloudinary
                // const bytes = await logo.arrayBuffer();
                // const buffer = Buffer.from(bytes);
                // await new Promise<CloudinaryUploadResult>((resolve, reject) => {
                //     const uploadStream = cloudinary.uploader.upload_stream(
                //         { folder: "logo" },
                //         (error, result) => {
                //             if (error) throw new Error("logo not uploded")
                //             else {
                //                 resolve(result as CloudinaryUploadResult)
                //                 formData.set("logo", result?.url as string)
                //             }
                //         }
                //     )
                //     uploadStream.end(buffer);
                // })

                // const company = await prisma.company.create({
                //     data: {
                //         name: formData.get("companyName") as string,
                //             logo: formData.get("logo") as string,
                //             description: formData.get("Cdesc") as string,
                //             website: formData.get("website") as string,
                //             userId: 
                //     }
                // })

                const newUser = await prisma.user.create({
                    data: {
                        fullname: formData.get("fullname") as string,
                        email: formData.get("email") as string,
                        number: BigInt(formData.get("phoneNumber") as string),
                        password: hashedPass,
                        role: formData.get("role") as string
                    }
                })

                console.log("sign up successful as Admin", newUser);
                return { message: "signUp successful as admin", status: "SUCCESS", role:"ADMIN" };
            }
        }

    } catch (error: any) {
        console.log("Signup failed", error.message);
        return { message: "SignUp failed", status: "ERROR" };
    }

}

export const fetchProfileData: any = async (email: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email as string,
            },
        })
        console.log(user);
        return user;
    } catch (error) {
        console.log(error);
    }

}
