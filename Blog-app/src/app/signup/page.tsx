"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { resolve } from "path";

function  SignUp() {

  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    email: "",
    gender: "",
    password: "",
    confirmPass: "",
  });

  const onOptionChange = (e: any) => {
    setForm({ ...form, gender: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/signup", form);
      console.log(res);
      toast.success("SignUp Successful")
      router.push("/signin");
    } catch (error: any) {
      toast.error("User already exists");
      console.log("Signup failed", error.message);
      
    }
  };

  const handleProvider = (
      event: React.MouseEvent<HTMLButtonElement>,
      value: "github" | "google"
    ) => {
      event.preventDefault();
      signIn(value, {callbackUrl: "/"})
    }

  return (
    <div className="flex items-center h-full w-full ">
      <Card className="  w-[80%] mx-auto md:p-6 p-3">
        <CardHeader>
          <CardTitle className="text-center md:text-2xl sm:text-xl">Sign up</CardTitle>
          <CardDescription className="@lg:text-[16px] @md:text-sm text-center text-accent-foreground">
            Use email or service, to create account
          </CardDescription>
        </CardHeader>
        <CardContent className="px-2">
          <form onSubmit={onSubmit} className="flex flex-col space-y-3 gap-2">
            <Input
              type="text"
              name="username"
              placeholder="Username"
              className=" sm:!text-[16px] md:!text-xl p-3 "
              value={form.username}
              onChange={(e: any) =>
                setForm({ ...form, username: e.target.value })
              }
              required
            />

            <Input
              type="email"
              name="email"
              placeholder="Email"
              className=" sm:!text-[16px] md:!text-xl p-3 "
              value={form.email}
              onChange={(e: any) => setForm({ ...form, email: e.target.value })}
              required
            />

            <div className="flex flex-col sm:flex-row md:gap-3 gap-2 ">
              <label htmlFor="" className=" sm:!text-[16px] md:!text-xl  ">Gender: </label>

              <div className="flex gap-4">
                <label htmlFor="male" className=" flex items-center sm:!text-[16px] md:!text-xl  gap-3">
              <input
                type="radio"
                name="gender"
                value="male"
                id="male"
                checked={form.gender === "male"}
                onChange={onOptionChange}
                required
              />
              Male</label>

              <label htmlFor="male" className=" flex items-center sm:!text-[16px] md:!text-xl  gap-3">
              <input
                type="radio"
                name="gender"
                className="!text-xl p-3"
                value="female"
                id="female"
                checked={form.gender === "female"}
                onChange={onOptionChange}
              />
              Female</label></div>
              
            </div>

            <Input
              type="password"
              name="password"
              placeholder="password"
              className=" sm:!text-[16px] md:!text-xl p-3 "
              value={form.password}
              onChange={(e: any) =>
                setForm({ ...form, password: e.target.value })
              }
              required
            />

            <Input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              className=" sm:!text-[16px] md:!text-xl p-3 "
              value={form.confirmPass}
              onChange={(e: any) =>
                setForm({ ...form, confirmPass: e.target.value })
              }
              required
            />

            <Button className="w-full" size="lg">
              continue
            </Button>
          </form>

          <Separator />
          
          <p className="text-center max-[375px]:flex max-[375px]:flex-col text-[16px] mt-4 text-muted-foreground">
            Already have an account?
            <Link
              className="text-sky-700 ml-4 hover:underline"
              href={"/signin"}
            >
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export default SignUp;
