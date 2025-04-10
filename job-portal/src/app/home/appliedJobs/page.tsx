"use client"
import { fetchUserData } from '@/actions/actions';
import { Application } from '@/app/types/type';
// import { User } from '@/app/types/type';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'

type User = {
  email:string;
  applications: Application
}

const AppliedJobs = () => {
  const { data: session } = useSession();
  const [user, setUser] = useState<User | null>();
  
  const getAppliedJobs = async () => {
    try {
      if (!session?.user.email) {
        return;

      }
      const userData = await fetchUserData(session.user.email);
      console.log("🚀 ~ getProfile ~ userData:", userData)

      setUser(userData);

      console.log("🚀 ~ AppliedJobs ~ user:", user)

    } catch (err: any) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAppliedJobs();
  }, [session]);


  return (
    <div>
      hello
      
    </div>
  )
}

export default AppliedJobs