"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useContext, useEffect, useState, useTransition } from "react"
import { handleSignUpWithAdmin, handleSignUpWithStudent } from "@/actions/actions"
import Link from "next/link"
import { SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from "next/image"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import AuthNavbar from "@/components/myComp/AuthNavbar"
import { schema } from "@/lib/zodSchema"
import { log } from "console"
import { StudentContext } from "../context/StudentContext"




export default function SignUpForm({ className }: React.ComponentProps<"div">) {
    const router = useRouter();
    // const [student, setStudent] = useState(true)
    const { student, setStudent } = useContext(StudentContext);
    const [isPending, startTransition] = useTransition();



    const onHandleSignup = async (formData: FormData) => {
        
        startTransition(async () => {
            
            if (student) {
                const result = await handleSignUpWithStudent(formData);

                if (result.message && result.status === "SUCCESS") {
                    toast.message(result.message);
                    router.push('/login')
                }
                if (result.message && result.status === "ERROR") {
                    toast.error(result.message);
                }
            }
            else {
                const result = await handleSignUpWithAdmin(formData);

                if (result.message && result.status === "SUCCESS") {
                    toast.message(result.message);
                    router.push('/dashboard');
                }
                if (result.message && result.status === "ERROR") {
                    toast.error(result.message);
                }
            }

        });
    }

    return (
        <div className={cn("flex flex-col h-screen gap-6", className)} >
            <AuthNavbar />
            <div className="flex justify-center gap-3   m-auto rounded-xl border p-6 shadow-sm w-[1200px] ">
                <Card className="p-4 border-none shadow-none w-[600px]">
                    <CardHeader>
                        <CardTitle className="text-center">SignUp to your account</CardTitle>
                        <CardDescription className="text-center">
                            Enter your detail to signup
                        </CardDescription>
                    </CardHeader>
                    <CardContent >
                        <div className="flex flex-col justify-center items-center gap-2 mb-4 py-3 bg-slate-100 rounded-xl">
                            <div className="text-sm text-gray-600">CREATE ACCOUNT AS A</div>
                            <div className="flex gap-5">
                                <Button className={` ${student ? "border-2 border-transparent" : "border-2 hover:bg-gray-200 hover:border-2 border-gray-300  bg-transparent text-black"}`} onClick={() => setStudent(true)}>Student</Button>
                                <Button className={` ${!student ? "border-2 border-transparent" : "border-2 hover:bg-gray-200 hover:border-2 border-gray-300  bg-transparent text-black"}`} onClick={() => setStudent(false)}>Reqruiter</Button>
                            </div>
                        </div>
                        <form action={onHandleSignup} className="grid gap-6">
                            <div className={` gap-6 grid grid-cols-2 `}>
                            <div className="grid gap-3">
                                    <Label htmlFor="fullname">Fullname</Label>
                                    <Input
                                        // {...register("fullname",{
                                        //     required: "fullname is required",
                                        //     min:{
                                        //         value: 4,
                                        //         message: 'fullname must have 4 letter'
                                        //     }
                                        // })}
                                        id="fullname"
                                        type="text"
                                        name="fullname"
                                        placeholder="xxxxx"
                                        required
                                    />
                                    {/* {errors.fullname && <p className="text-black">{errors.fullname.message}</p>} */}
                                </div>

                                <div className="grid gap-3">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="m@example.com"
                                        required
                                    />
                                </div>

                                <div className="grid gap-3">
                                    <Label htmlFor="number">Phone number</Label>
                                    <Input
                                        id="number"
                                        type="number"
                                        name="phoneNumber"
                                        placeholder="9000000000"
                                        required
                                    />
                                </div>

                                <div className="grid gap-3">
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="......."
                                        required
                                    />
                                </div>


                            </div>

                            {student && <div className="grid grid-cols-2 gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="bio">Bio</Label>
                                    <Input
                                        id="bio"
                                        type="text"
                                        name="bio"
                                        placeholder="bio"
                                        required
                                    />
                                </div>

                                <div className="grid gap-3">
                                    <Label htmlFor="resume">resume</Label>
                                    <Input
                                        id="resume"
                                        type="file"
                                        name="resume"
                                        accept=".pdf"
                                        required
                                    />
                                </div>

                                <div className="grid gap-3">
                                    <Label htmlFor="skills">Skills</Label>
                                    <Input
                                        id="skills"
                                        type="text"
                                        name="skills"
                                        required
                                    />
                                </div>

                                <div className="grid gap-3">
                                    <Label htmlFor="profileImg">Profile Image</Label>
                                    <Input
                                        id="profileImg"
                                        type="file"
                                        name="profileImg"
                                        accept=".jpg, .jpeg, .png"
                                        required
                                    />
                                </div>
                            </div>
                            }
                            {!student && <div className="grid grid-cols-2 gap-6">
                                <div className="grid gap-3">
                                    <Label htmlFor="companyName">Company name</Label>
                                    <Input
                                        id="companyName"
                                        type="text"
                                        name="companyName"
                                        placeholder="Google"
                                        required
                                    />
                                </div>

                                <div className="grid gap-3">
                                    <Label htmlFor="Cdesc">Description</Label>
                                    <Input
                                        id="desc"
                                        type="text"
                                        name="Cdesc"
                                        placeholder="abc"
                                    />
                                </div>

                                <div className="grid gap-3">
                                    <Label htmlFor="logo">Company logo</Label>
                                    <Input
                                        id="logo"
                                        name="logo"
                                        type="file"
                                        accept=".jpg, .jpeg, .png"
                                    />
                                </div>

                                <div className="grid gap-3">
                                    <Label htmlFor="website">Website</Label>
                                    <Input
                                        id="website"
                                        name="website"
                                        type="url"
                                        placeholder="Google.com"
                                        required
                                    />
                                </div>

                            </div>

                            }
                            <div className="flex flex-col gap-3">
                                <Button type="submit" disabled={isPending} className="w-full">
                                    {isPending ? "Loading..." : "Sign up"}
                                </Button>

                            </div>
                            <div className="mt-4 text-center text-sm">
                                Already have an account?{" "}
                                <Link href={'/login'} className="underline underline-offset-4">
                                    Log In
                                </Link>
                            </div>
                            {/* <p className="text-red-500">{state?.message}</p> */}
                        </form>
                    </CardContent>
                </Card>

                <div className="relative w-[600px]">
                    <Image src="/image.jpg" alt="" fill className="rounded-2xl" />
                </div>


            </div>
        </div>
    )
}
