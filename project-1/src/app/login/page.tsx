"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const onLogin = async (e:any) => {
    e.preventDefault()
    try {
      const response = await axios.post("/api/users/login", user);
      console.log("Login Success", response.data);
      await toast.success('login success');
      router.push('/profile');
      
      // Ab_-1234#

    } catch (error:any) {
      console.log("Login failed", error.message);
      alert(error.message)
    }
  };

  return (
    <div className="h-screen flex items-center justify-center ">

      {/* Left-side */}
      {/* <div className="flex items-center justify-center w-[40%]">
        <img
          src="KnackrootLogo.png"
          alt="Knackroot Logo"
          className="h-[10rem]"
        />
      </div> */}

      

      {/* Right-side */}
      <div className="flex items-center justify-center w-[60%]">
        <form onSubmit={onLogin} className="bg-gray-200 w-[40rem]  p-10 rounded-2xl">
          <h1 className="text-center m-4 pb-8 font-bold text-3xl">Login</h1>

          <span className="flex flex-col gap-8 w-[100%]">
            

            <span className="w-[100%]">
              <label htmlFor="email" className="w-[100%]">
                <input
                  className="p-5 bg-gray-50 rounded-2xl w-full text-xl"
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={(e)=>setUser({
                    ...user, email:e.target.value
                  })}
                  id=""
                  placeholder="Email..."
                  required
                />
              </label>
            </span>

            <span className="flex gap-4">
              <label htmlFor="password" className="w-[100%]">
                <input
                  className="p-5 bg-gray-50 rounded-2xl w-full text-xl"
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={(e) => setUser({...user, password: e.target.value})}
                  id=""
                  placeholder="Password..."
                  required
                />
              </label>

              
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
