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

function SignUp() {
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
      const res = await axios.post("/api/auth/signup", form);
      console.log(res);
      router.push("/signin");
    } catch (error: any) {
      console.log("Signup failed", error.message);
      // toast.error(error.message);
    }
  };

  return (
    <div className="h-full flex items-start justify-center mt-16">
      <Card className="w-[40%] p-4">
        <CardHeader>
          <CardTitle className="text-center">Sign up</CardTitle>
          <CardDescription className="text-sm text-center text-accent-foreground">
            Use email or service, to create account
          </CardDescription>
        </CardHeader>
        <CardContent className="px-2">
          <form onSubmit={onSubmit} className="space-y-3">
            <Input
              type="text"
              name="username"
              placeholder="Username"
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
              value={form.email}
              onChange={(e: any) => setForm({ ...form, email: e.target.value })}
              required
            />

            <div className="flex gap-3">
              <label htmlFor="">Gender: </label>

              <input
                type="radio"
                name="gender"
                value="male"
                id="male"
                checked={form.gender === "male"}
                onChange={onOptionChange}
              />
              <label htmlFor="male">Male</label>

              <input
                type="radio"
                name="gender"
                value="female"
                id="female"
                checked={form.gender === "female"}
                onChange={onOptionChange}
              />
              <label htmlFor="male">Female</label>
            </div>

            <Input
              type="password"
              name="password"
              placeholder="password"
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
          <div className="flex my-2 justify-evenly mx-auto items-center">
            <Button
              onClick={() => {}}
              variant="outline"
              size="lg"
              className="bg-slate-300 hover:bg-slate-400 scale-110 size-14 "
            >
              <FaGithub className="size-8 left-2.5 top-2.5" />
            </Button>

            <Button
              onClick={() => {}}
              variant="outline"
              size="lg"
              className="bg-slate-300 hover:bg-slate-400 scale-110 size-14"
            >
              <FcGoogle className="size-8 left-2.5 top-2.5" />
            </Button>
          </div>
          <p className="text-center text-sm mt-2 text-muted-foreground">
            Already have an account?{" "}
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
