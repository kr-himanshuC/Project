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

export default function AdminSignUpForm({
    className
}: React.ComponentProps<"div">) {

    const [student, setStudent] = useState(true)

    return (
        <div className={cn("flex flex-col h-screen gap-6", className)} >
            <Card className="w-[30%] m-auto ">
                <CardHeader>
                    <CardTitle className="text-center">SignUp to your account</CardTitle>
                    <CardDescription className="text-center">
                        Enter your detail to signup
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-4 mb-4">
                        <Button onClick={() => setStudent(true)}>Student</Button>
                        <Button onClick={() => setStudent(false)}>Reqruiter</Button>
                    </div>
                    <form className="grid gap-6">
                        <div className={`flex flex-col gap-6 ${student ? "" : "grid grid-cols-2 "}`}>
                            <div className="grid gap-3">
                                <Label htmlFor="fullname">Fullname</Label>
                                <Input
                                    id="fullname"
                                    type="text"
                                    placeholder="xxxxx"
                                    required
                                />
                            </div>

                            <div className="grid gap-3">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="m@example.com"
                                    required
                                />
                            </div>

                            <div className="grid gap-3">
                                <Label htmlFor="email">Phone number</Label>
                                <Input
                                    id="number"
                                    type="number"
                                    placeholder="9000000000"
                                    required
                                />
                            </div>

                            <div className="grid gap-3">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" placeholder="......." required />
                            </div>


                        </div>
                        {student && <div className="grid grid-cols-2 gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="website">Bio</Label>
                                <Input
                                    id="bio"
                                    type="text"
                                    placeholder="bio"
                                    required
                                />
                            </div>

                            <div className="grid gap-3">
                                <Label htmlFor="website">resume</Label>
                                <Input
                                    id="resume"
                                    type="file"
                                    required
                                />
                            </div>

                            <div className="grid gap-3">
                                <Label htmlFor="skills">Skills</Label>
                                <Input
                                    id="skills"
                                    type="text"
                                    required
                                />
                            </div>

                            <div className="grid gap-3">
                                <Label htmlFor="skills">Profile Image</Label>
                                <Input
                                    id="profileImg"
                                    type="text"
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
                                    placeholder="Google"
                                    required
                                />
                            </div>

                            <div className="grid gap-3">
                                <Label htmlFor="desc">Description</Label>
                                <Input
                                    id="desc"
                                    type="text"
                                    placeholder="abc"
                                />
                            </div>

                            <div className="grid gap-3">
                                <Label htmlFor="logo">Company logo</Label>
                                <Input
                                    id="logo"
                                    type="file"
                                    accept=".jpg, .jpeg, .png"
                                />
                            </div>

                            <div className="grid gap-3">
                                <Label htmlFor="website">Website</Label>
                                <Input
                                    id="website"
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
                            Don&apos;t have an account?{" "}
                            <a href="#" className="underline underline-offset-4">
                                Sign up
                            </a>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
