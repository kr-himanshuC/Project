"use client";
import { useSession } from "next-auth/react";
import { FaRegUser } from "react-icons/fa";
import { IoMale } from "react-icons/io5";
import { IoFemaleSharp } from "react-icons/io5";
import {connect} from '@/lib/dbConfig'
import User from "@/models/userModel";
import tokensData from "./data";
import { ReactNode } from "react";
import Token from "@/models/tokenModel";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";


export default async function Home() {

  const {data: session} = await useSession();
  // const session = await getServerSession();
  if (!session) {
    redirect("/");
  }
    const userEmail = session?.user?.email;
  

  await connect();

  const users = await User.find().countDocuments();
  const male = await User.find({gender: "male"}).countDocuments();
  const female = await User.find({gender: "female"}).countDocuments();

  const clickAddButton = async (id: any) => {
    const token:any = tokensData.filter((token) => token.id === id);
    const user = await User.findOne({userEmail});
    const isToken = user.tokens.filter((token: any) => token.id === id)
    if(isToken){
      isToken.count = isToken.count+1;
    }else{
      User.updateOne({userEmail}, 
        {
          $push: {
            tokens:{
              id: id,
              img: token.image ,
              name: token.name,
              Symbol: token.symbol,
              count: 1,
            }
          }
        }
      )
    }
  }

  return (
      <div className="flex h-[100%] gap-4">
        {/* Left side */}
        <div className="flex flex-col w-[50%] h-[100%] justify-between">
          {/* buttons */}
          <div className="flex justify-between h-[25%]">
            <div className="w-[30%] flex flex-col justify-center items-center rounded-4xl bg-linear-to-br from-gray-600 to-gray-800 text-white opacity-70">
              <div className="size-15 bg-pink-300 flex justify-center items-center rounded-full">
                <FaRegUser className="size-8"/>
              </div>
              <span>Total User</span>
              <span>{users}</span>
            </div>

            <div className="w-[30%] flex flex-col justify-center items-center bg-gray-600 rounded-4xl bg-linear-to-br from-gray-600 to-gray-800 text-white opacity-70">
              <div className="size-15 bg-pink-300 flex justify-center items-center rounded-full">
                <IoMale className="size-8"/>
              </div>
              <span>Male</span>
              <span>{male}</span>
            </div>

            <div className="w-[30%] flex flex-col justify-center items-center bg-gray-600 rounded-4xl bg-linear-to-br from-gray-600 to-gray-800 text-white opacity-70">
              <div className="size-15 bg-pink-300 flex justify-center items-center rounded-full">
                <IoFemaleSharp className="size-8"/>
              </div>
              <span>Female</span>
              <span>{female}</span>
            </div>
          </div>

          {/* token Count */}
          <div className="h-[70%] rounded-4xl bg-gray-600 flex justify-center items-center">
            token
          </div>
        </div>

        {/* Right Side */}
        <div className="w-[45%] h-[100%] bg-gray-600 rounded-4xl flex flex-col justify-start items-center p-6 gap-2">
          {tokensData.map((token:any) => (
            
            <div key={token.id} className=" h-14 w-[80%] bg-green-200 rounded-2xl flex justify-evenly items-center  ">
              <img src={token.image} alt="" className="size-9 rounded-full "/>
              <span className="">{token.name}</span>
              <span className="">{token.symbol}</span>
              <button onClick={() => clickAddButton(token.id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">Add</button>
            </div>
            
          ))}
        </div>
      </div>
  );
}
