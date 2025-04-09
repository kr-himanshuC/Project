"use client"
import { fetchProfileData } from '@/actions/actions';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'

type User = {
  fullname: string,
  email: string,
  bio: string,
  resume: string,
  profileImg: string,
  skills: string[],
}

const UserProfile = () => {

  const { data: session, status } = useSession();

  const email = session?.user.email as string;
  const [user, setUser] = useState<User>({
    fullname: "",
    email: "",
    bio: "",
    resume: "",
    profileImg: "",
    skills: [],
  });
  useEffect(() => {
    const getProfile = async () => {
      try {
        if (!email) {
          return;
        }
        const userData = await fetchProfileData(email);
        setUser(userData);
      } catch (err: any) {
        console.log(err);
      }
    };

    getProfile();
  }, [session]);





  return (
    <div className='flex flex-col gap-5 bg-white p-7 rounded-2xl border-2'>

      <div className='py-4 font-bold text-xl'>Profile</div>

      <div className="flex gap-10 border-2  w-full p-6 rounded-2xl">
        <div className="w-30 h-30 relative ">
          <Image src={user.profileImg} alt='' fill objectFit='container' className=' rounded-full border-2  ' />
        </div>

        <div className="flex flex-col gap-3 justify-center ">
          <div className="font-bold">{user.fullname}</div>
          <div className="">{user.email}</div>
        </div>
      </div>


      <div className="grid grid-cols-2 gap-10 border-2  p-6 rounded-2xl">
        <div className="flex flex-col text-gray-500"> Bio <span className='font-bold text-black'>{user.bio} </span></div>
        <div className="flex flex-col text-gray-500">Resume {" "}
          <Link href={user.resume} className="underline text-blue-600 "> Resume.pdf </Link>
        </div>

        <div className="flex flex-col text-gray-500">skills {"   "}
          <span className='font-bold flex gap-2 text-black'>
            {user.skills.map((skill) => (
              <>
              <div key={skill} className='bg-gray-100 p-2 rounded-md' >{skill} </div>  
              <span>&nbsp;</span>
              </>
            ))}
          </span>
        </div>
      </div>
    </div>
  )
}

export default UserProfile