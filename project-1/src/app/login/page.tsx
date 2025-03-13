"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const onLogin = async () => {};

  return (
    <div className="h-screen flex ">
      {/* <style tsx>{`
      .box {
        color: blue;
      }
    `}</style> */}

      {/* Left-side */}
      <div className="flex items-center justify-center w-[40%]">
        <img
          src="KnackrootLogo.png"
          alt="Knackroot Logo"
          className="h-[10rem]"
        />
      </div>

      

      {/* Right-side */}
      <div className="flex items-center justify-center w-[60%]">
        <form action="" className="bg-gray-200 w-[40rem]  p-10 rounded-2xl">
          <h1 className="text-center m-4 pb-8 font-bold text-3xl">Login</h1>

          <span className="flex flex-col gap-8 w-[100%]">
            {/* <span className="flex gap-4">
              <label htmlFor="firstname " className="w-[100%]">
                <input
                  className="p-5 bg-gray-50 rounded-2xl w-full text-xl"
                  type="text"
                  name="firstname"
                  id=""
                  placeholder="Firstname..."
                />
              </label>

              <label htmlFor="lastname" className="w-[100%]">
                <input
                  className="p-5 bg-gray-50 rounded-2xl w-full text-xl"
                  type="text"
                  name="lastname"
                  id=""
                  placeholder="Lastname..."
                />
              </label>
            </span> */}

            <span className="w-[100%]">
              <label htmlFor="email" className="w-[100%]">
                <input
                  className="p-5 bg-gray-50 rounded-2xl w-full text-xl"
                  type="email"
                  name="email"
                  id=""
                  placeholder="Email..."
                />
              </label>
            </span>

            <span className="flex gap-4">
              <label htmlFor="password" className="w-[100%]">
                <input
                  className="p-5 bg-gray-50 rounded-2xl w-full text-xl"
                  type="password"
                  name="password"
                  id=""
                  placeholder="Password..."
                />
              </label>

              {/* <label htmlFor="confirmPass" className="w-[100%]">
                <input
                  className="p-5 bg-gray-50 rounded-2xl w-full text-xl"
                  type="password"
                  name="confirmPass"
                  id=""
                  placeholder="Confirm Password..."
                />
              </label> */}
            </span>


            {/* button */}
            <span className="w-[100%] flex justify-end">
              <button className="p-5 px-7 bg-gray-50 rounded-2xl text-xl self-end" type="submit"> 
                Login
              </button>
            
            </span>

            <span>
            <span className="ml-4">Don’t you have an account?   <Link href='/signup' className="text-underline underline text-lg">  Sign up</Link></span>
            </span>

          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
