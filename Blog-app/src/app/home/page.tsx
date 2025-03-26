"use client"
import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
import { signOut } from 'next-auth/react'
import axios from 'axios'
import { toast } from 'sonner'

const Home =  () => {

  const [blogs, setBlogs] = useState([]);
  
  useEffect( () => {
    (async() => {
      try {
        const res = await axios.get('/api/home');
        console.log(res);
        
        setBlogs(res.data.data.blogs);
      } catch (error:any) {
        toast.error(error.message);
        console.log("Blogs not fetch", error.message);
      }
    })();
  },[]);

  return (
    <div className='w-[90%] mt-3 mx-auto '>

      {/* Navbar */}
      <div className="flex items-center justify-between p-10 bg-amber-600 rounded-2xl ">
        <div className="font-bold text-2xl">Blogs...</div>
        <Button onClick={() => signOut({callbackUrl:"/", redirect: true})} className='p-7 text-xl'>Sign Out</Button>
      </div>


      <div className="flex justify-end gap-10 p-4">
        <div className="">Total Blogs: 10</div>
        <div className="">Grid view</div>
      </div>


      {/* Blogs */}

      <div>
      {
        blogs.map((blog: any) => { return (
            <div key={blog._id} className='w-full flex justify-between items-center border-2'>
              <div className="">{blog?.title}</div>

              <Button>Update</Button>
              <Button>Delete</Button>
            </div>
        )
        }
        )
      }
    </div>

      
    </div>
  )
}

export default Home