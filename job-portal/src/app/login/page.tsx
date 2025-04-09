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
import Link from "next/link"
import { useContext, useEffect, useState, useTransition } from "react"
import { signIn } from "next-auth/react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import Image from "next/image"
import AuthNavbar from "@/components/myComp/AuthNavbar"
import { StudentContext, useUser } from "../context/StudentContext"



function LoginForm({
  className
}: React.ComponentProps<"div">) {

  const [isPending, startTransition] = useTransition();
  const router = useRouter();


  const onHandleLogin = async (formData: FormData) => {
    
    startTransition(async () => {
      try {
        console.log(formData);
        const res = await signIn("credentials", {
          redirect: false,
          email: formData.get("email") as string,
          password: formData.get("password") as string,
        });

  
        if (res?.ok) {
          toast.success("login Successful")
          console.log("login suvccess");

          router.push("/home")
  
        } else if (res?.status === 401) {
          toast.error("Invalid credentials")
          throw new Error("Invalid credentials");
        } else {
          toast.error("something went wrong")
          throw new Error("something went wrong")
        }
  
      } catch (error: any) {
        console.log("Login failed", error.message);
      }
    })
  }


  return (
    <div className={cn("flex flex-col h-screen gap-6", className)} >
      <AuthNavbar />
      <div className="flex justify-center gap-3 w-[1200px] rounded-xl border p-6 shadow-sm m-auto ">
        <Card className="p-4 w-[600px] border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-center">Login to your account</CardTitle>
            <CardDescription className="text-center">
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            
            <form action={onHandleLogin} className="grid gap-6">
              <div className={` gap-6 grid grid-cols-1`}>
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
                  <Label htmlFor="role">Password</Label>
                  <Input id="password" type="password" name="password" required />
                </div>
                
              </div>
              <div className="flex flex-col gap-3">
                  <Button type="submit" disabled={isPending} className="w-full">
                    { isPending ? "Loading..." : "Login"}
                  </Button>
                </div>
                
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <Link href={'/signup'} className="underline underline-offset-4">
                  Sign up
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="relative w-[600px] ">
          <Image src="/image.jpg" alt="" fill className="rounded-2xl" />
        </div>
      </div>
    </div>
  )
}

export default LoginForm;
