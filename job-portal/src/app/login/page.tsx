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
// import { handleLogin } from "@/actions/actions"
import Link from "next/link"
import { useState } from "react"
import { signIn } from "next-auth/react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

function LoginForm({
  className
}: React.ComponentProps<"div">) {

  const [student, setStudent] = useState(true)
  const handleLoginWithStudent = handleLogin.bind(null, student);
  const router = useRouter();

  async function handleLogin(student: Boolean, e: React.FormEvent<HTMLFormElement>): Promise<void> {

    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      console.log(formData);

      const res = await signIn("credentials", {
        redirect: false,
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        student: student as boolean
      });

      if (res?.ok) {
        toast.success("login Successful")
        console.log("login suvccess");
        router.push("/dashboard")

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
  }


  return (
    <div className={cn("flex flex-col h-screen gap-6", className)} >
      <Card className="w-[30%] m-auto ">
        <CardHeader>
          <CardTitle className="text-center">Login to your account</CardTitle>
          <CardDescription className="text-center">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLoginWithStudent}>
            <div className="flex flex-col justify-center items-center gap-2 mb-4 py-3 bg-slate-100 rounded-xl">
              <div className="text-sm text-gray-600">CREATE ACCOUNT AS A</div>
              <div className="flex gap-5">
                <Button className={` ${student ? "" : "hover:bg-transparent hover:border-2 bg-transparent text-black"}`} onClick={() => setStudent(true)}>Student</Button>
                <Button className={` ${!student ? "" : "hover:bg-transparent hover:border-2 bg-transparent text-black"}`} onClick={() => setStudent(false)}>Reqruiter</Button>
              </div>
            </div>
            <div className="flex flex-col gap-6">
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

              {/* <div className="grid gap-3">
                <RadioGroup defaultValue="Student" className="flex">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Student" id="r1" />
                    <Label htmlFor="r1">Student</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Recruiter" id="r2" />
                    <Label htmlFor="r2">Recruiter</Label>
                  </div>
                </RadioGroup>
              </div> */}


              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
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
    </div>
  )
}

export default LoginForm;
