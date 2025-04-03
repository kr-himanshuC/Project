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
import { useState } from "react"
import { handleSignUp } from "@/actions/actions"
import Link from "next/link"
import {useForm} from 'react-hook-form'
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'


// const formSchema = z.object({
//     fullname: z.string().min(4,"username must be more than 3 letter")
// })

// type FormData = z.infer<typeof formSchema>

export default function SignUpForm({
    className
}: React.ComponentProps<"div">) {

    // const { register, formState:{errors},handleSubmit } = useForm<FormData>({
    //     defaultValues:{
    //         fullname: "",
    //     },
    //     // resolver: zodResolver(formSchema)
    // })

    const [student, setStudent] = useState(true)

    return (
        <div className={cn("flex flex-col h-screen gap-6", className)} >
            <Card className="p-4 m-auto ">
                <CardHeader>
                    <CardTitle className="text-center">SignUp to your account</CardTitle>
                    <CardDescription className="text-center">
                        Enter your detail to signup
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col justify-center items-center gap-2 mb-4 py-3 bg-slate-100 rounded-xl">
                        <div className="text-sm text-gray-600">CREATE ACCOUNT AS A</div>
                        <div className="flex gap-5">
                            <Button className={` ${student ? "" : "hover:bg-transparent hover:border-2 bg-transparent text-black"}`} onClick={() => setStudent(true)}>Student</Button>
                            <Button className={` ${!student ? "": "hover:bg-transparent hover:border-2 bg-transparent text-black"}`} onClick={() => setStudent(false)}>Reqruiter</Button>
                        </div>
                    </div>
                    <form action={(e) => handleSignUp(student, e)} className="grid gap-6">
                        <div className={`flex flex-col gap-6 ${student ? "grid grid-cols-2 " : "grid grid-cols-2 "}`}>
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
                                    // required
                                />
                            </div>

                            <div className="grid gap-3">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    name="password"
                                    placeholder="......."
                                    // required
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
                                    // required
                                />
                            </div>

                            <div className="grid gap-3">
                                <Label htmlFor="resume">resume</Label>
                                <Input
                                    id="resume"
                                    type="file"
                                    name="resume"
                                    accept=".pdf"
                                    // required
                                />
                            </div>

                            <div className="grid gap-3">
                                <Label htmlFor="skills">Skills</Label>
                                <Input
                                    id="skills"
                                    type="text"
                                    name="skills"
                                    // required
                                />
                            </div>

                            <div className="grid gap-3">
                                <Label htmlFor="profileImg">Profile Image</Label>
                                <Input
                                    id="profileImg"
                                    type="file"
                                    name="profileImg"
                                    accept=".jpg, .jpeg, .png"
                                    // required
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
                            <Button type="submit" className="w-full">
                                Sign up
                            </Button>

                        </div>
                        <div className="mt-4 text-center text-sm">
                            Already have an account?{" "}
                            <Link href={'/login'} className="underline underline-offset-4">
                                Log In
                            </Link>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
