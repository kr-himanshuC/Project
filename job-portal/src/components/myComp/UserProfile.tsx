"use client"
import { fetchProfileData } from '@/actions/actions';
import { StudentContext } from '@/app/context/StudentContext';
import { prisma } from '@/lib/dbConfig';
import { error } from 'console';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'

type Profile = {
  bio: string,
  resume: string,
  profileImg: string,
  skills: string[],
}

const UserProfile = () => {

  const { data: session, status } = useSession();

  const [profile, setProfile] = useState<Profile>({
    bio: "",
    resume: "",
    profileImg: "",
    skills: [],
  });
  useEffect(() => {
    const getProfile = async () => {
      try {
        if (!session) {
          return;
        }

        const data = await fetchProfileData(session);
        setProfile(data);
        console.log("🚀 ~ getProfile ~ data:", data)
      } catch (err: any) {
        console.log(err);

        // setError(err.message || "An error occurred");
      } finally {
        // setLoading(false);
      }
    };

    getProfile();
  }, [session]);



  return (
    <div>
      <div className="font-bold"> Bio: {profile.bio} </div>
      <div className="font-bold">Resume: {" "}
        <Link href={profile.resume} className="underline text-blue-600"> Resume </Link>
      </div>
      <div className="font-bold">Profile Image: {" "}
        <Link href={profile.profileImg} className='underline text-blue-600'>Profile Image</Link>
      </div>
      <div className="font-bold">
        skills: {"   "}
        {profile.skills.map((skill) => (
          <span key={skill} >{skill}</span>
        ))}
      </div>
    </div>
  )
}

export default UserProfile