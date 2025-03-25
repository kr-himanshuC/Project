"use client"

import React , {useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {Separator} from "@/components/ui/separator"

import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import Link from 'next/link'
import {  useRouter } from 'next/navigation';
import {signIn} from "next-auth/react"
import { toast } from 'sonner';





function SignIn(p0: string, p1: unknown){

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    
      const res = await signIn("credentials", {
        redirect:false,
        email,
        password,
      });
      if(res?.ok){
        toast.success("login Successful")
        router.push("/");
      }else if(res?.status === 401){
        setError("Invalid credentials");
      }else{
        setError("something went wrong")
      }
  }

  const handleProvider = (
    event: React.MouseEvent<HTMLButtonElement>,
    value: "github" | "google"
  ) => {
    event.preventDefault();
    signIn(value, {callbackUrl: "/"})
  }

  return (
    <div className='h-full flex items-start justify-center mt-16'>
      <Card className='w-[40%] p-4'>
        <CardHeader>
          <CardTitle className='text-center'>
            Sign in
          </CardTitle>
          <CardDescription className='text-sm text-center text-accent-foreground'>
              Use email or service, to sign in
          </CardDescription>
        </CardHeader>
        <CardContent className='px-2'>
          <form onSubmit={onSubmit} className='space-y-3'>

            <Input 
              type="email"  
              name='email' 
              placeholder='Email'
              value={email}
              onChange={(e:any) => setEmail( e.target.value)}
              required
            />

            <Input 
              type="password"  
              name='password' 
              placeholder='password'
              value={password}
              onChange={(e:any) => setPassword(e.target.value)}
              required
            />

            <Button 
            className='w-full'
            size="lg"
            >
              continue
            </Button>
          </form>

          <Separator />
          <div className="flex my-2 justify-evenly mx-auto items-center">
            <Button
              onClick={(e) => handleProvider(e, "github")}
              variant="outline"
              size="lg"
              className='bg-slate-300 hover:bg-slate-400 scale-110 size-14 '
            >
              <FaGithub className='size-8 left-2.5 top-2.5'/>
            </Button>

            <Button
              onClick={() => {}}
              variant="outline"
              size="lg"
              className='bg-slate-300 hover:bg-slate-400 scale-110 size-14'
            >
              <FcGoogle className='size-8 left-2.5 top-2.5'/>
            </Button>
          </div>
          <p className='text-center text-sm mt-2 text-muted-foreground'>
            Create new account <Link  className='text-sky-700 ml-4 hover:underline' href={'/signup'}>Sign up</Link>
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default SignIn