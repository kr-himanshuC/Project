"use client"
import { fetchUserData, onHandleEditProfile } from '@/actions/actions';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type User = {
  fullname: string,
  email: string,
  bio: string,
  resume: string,
  profileImg: string,
  skills: string[],
}

// type Data = {
//   fullname: string,
//   bio:string,
//   email: string,
//   resume: string,
//   profileImg: string,
// }

const UserProfile = () => {

  const [open, setOpen] = useState(false);
  const [resume, setResume] = useState(null);
  const [profileImg, setProfileImg] = useState(null);
  
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
  // const [data, setData] = useState<Data>({
  //   fullname: "",
  //   bio: "",
  //   email:"",
  //   profileImg:"",
  //   resume:"",
  // });
  useEffect(() => {
    const getProfile = async () => {
      try {
        if (!email) {
          return;
        }
        const userData = await fetchUserData(email);
        console.log("🚀 ~ getProfile ~ userData:", userData)
        setUser(userData);
        console.log(user);
        
      } catch (err: any) {
        console.log(err);
      }
    };

    getProfile();
  }, [session]);


  const handleDialog = () => {
    setOpen(false)
  }


  const HandleEditProfile = async (formData: FormData) => {
    formData.set("email",user.email);
    const ans = await onHandleEditProfile(formData);
    console.log("🚀 ~ HandleEditProfile ~ ans:", ans)
    setOpen(false);
  }
  
  // const onProfileChange = (e:any) => {
  //   setProfileImg(e.target.files[0]);
  // };

  // const onResumeChange = (e:any) => {
  //   setResume(e.target.file[0]);
  // }

  return (
    <div className='flex flex-col gap-5 bg-white p-7 rounded-2xl border-2'>

      <div className="flex justify-between py-4 font-bold text-xl">
        Profile
        <FaEdit onClick={() => setOpen(true)}  className='w-12 h-12 mr-5 rounded-xl p-2 hover:cursor-pointer'/>
      </div>

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
                <div className='bg-gray-100 p-2 rounded-md' >{skill} </div>
                <span>&nbsp;</span>
              </>
            ))}
          </span>
        </div>
      </div>



      {/* Edit Dialog */}

      <Dialog open={open} onOpenChange={handleDialog}>
      {/* <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger> */}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
        <form action={HandleEditProfile} className="grid gap-6">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              fullname
            </Label>
            <Input id="name" name='fullname' value={user.fullname} onChange={(e) => setUser({...user, fullname:e.target.value})} className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bio" className="text-right">
              Bio
            </Label>
            <Input id="bio" name="bio" value={user.bio} onChange={(e) => setUser({...user, bio:e.target.value})} className="col-span-3" />
          </div>
          {/* <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="profile" className="text-right">
              Profile 
            </Label>
            <Input id="profile" onChange={onProfileChange} name='profileImg' type='file' accept=".jpg, .jpeg, .png" className="col-span-3" />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="resume" className="text-right">
              Resume
            </Label>
            <Input id="resume" onChange={onResumeChange} name="resume" type='file' accept='.pdf' className="col-span-3" />
          </div>        */}
        
        
          <Button type="submit">Save changes</Button>
          </form>
          </div>
      </DialogContent>
    </Dialog>
    </div>
  )
}

export default UserProfile