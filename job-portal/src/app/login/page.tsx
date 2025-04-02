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
import { RadioGroup,RadioGroupItem } from "@/components/ui/radio-group"

function LoginForm({
  className
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col h-screen gap-6", className)} >
      <Card className="w-[30%] m-auto ">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
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
                <Label htmlFor="role">Password</Label>
                <Input id="password" type="password" required />
              </div>

              <div className="grid gap-3">
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
              </div>


              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
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

export default LoginForm;
