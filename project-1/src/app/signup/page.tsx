"use client";
import Link from "next/link";
import React, { use, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import PasswordChecklist from "react-password-checklist"

const SignUp = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const onSignup = async () => {

  };

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
        <form onSubmit={onSignup} className="bg-gray-200 w-[50rem]  p-10 rounded-2xl">
          <h1 className="text-center m-4 pb-8 font-bold text-3xl">Sign up</h1>

          <span className="flex flex-col gap-8 w-[100%]">
            <span className="flex gap-4">
              <label htmlFor="firstname " className="w-[100%]">
                <input
                  className="p-5 bg-gray-50 rounded-2xl w-full text-xl"
                  type="text"
                  value={user.firstname}
                  onChange={(e) => setUser({...user, firstname: e.target.value})}
                  name="firstname"
                  id=""
                  placeholder="Firstname..."
                  required
                />
              </label>

              <label htmlFor="lastname" className="w-[100%]">
                <input
                  className="p-5 bg-gray-50 rounded-2xl w-full text-xl"
                  type="text"
                  value={user.lastname}
                  onChange={(e) => setUser({...user, lastname: e.target.value})}
                  name="lastname"
                  id=""
                  placeholder="Lastname..."
                  required
                />
              </label>
            </span>

            <span className="w-[100%]">
              <label htmlFor="email" className="w-[100%]">
                <input
                  className="p-5 bg-gray-50 rounded-2xl w-full text-xl"
                  type="email"
                  value={user.email}
                  onChange={(e) => setUser({...user, email: e.target.value})}
                  name="email"
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
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  value={user.password}
                  onChange={(e) => setUser({...user, password: e.target.value})}
                  name="password"
                  id=""
                  placeholder="Password..."
                  // oninvalid="this.setCustomValidity('User ID is a must')"
                  required
                />
              </label>

              <label htmlFor="confirmPass" className="w-[100%]">
                <input
                  className="p-5 bg-gray-50 rounded-2xl w-full text-xl"
                  type="password"
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  value={user.confirmPass}
                  onChange={(e) => setUser({...user, confirmPass: e.target.value})}
                  name="confirmPass"
                  id=""
                  placeholder="Confirm Password..."
                  required
                />
              </label>

              
            </span>


            {/* button */}
            <span className="w-[100%] flex justify-end">
              <button className="p-5 px-7 bg-gray-50 rounded-2xl text-xl self-end" type="submit"> 
                Sign up
              </button>
            
            </span>

            <span>
            <span className="ml-4">Already have an account?   <Link href='/login' className="text-underline underline text-lg">  Login</Link></span>
            </span>

          </span>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
