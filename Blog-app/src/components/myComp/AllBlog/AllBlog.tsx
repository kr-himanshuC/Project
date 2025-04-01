"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from '../../ui/button'
import axios from 'axios'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'



const initialBlogList = 8;
const incrementInitialBlogList = 4;

const AllBlog = ({ FilterBlog, grid }: any) => {

  const [displayBlogs, setDisplayBlogs] = useState(initialBlogList);
  // const [blogsArray, setBlogsArray] = useState(blogs);

  const handleExpand = () => {
    setDisplayBlogs(displayBlogs + incrementInitialBlogList)
  }
  const handleCollapse = () => {
    setDisplayBlogs(initialBlogList)
  }


  const [open, setOpen] = useState(false)
  const [blog, setBlog] = useState();
  const getBlog = async (id: string) => {
    try {
        const res = await axios.get(`/api/getBlog/?id=` + id)
        const data = res.data.blog;

        setBlog({ ...blog, title: data.title, desc: data.desc });
        
    } catch (error: any) {
        toast.error(error.message);
        console.log("Blogs not fetch", error.message);
    }

}
useEffect(() => {
    getBlog(id);
}, [id])
  const handleSubmit = async (id:any ,e:React.FormEvent) => {
    e.preventDefault();
    try {
      
      await axios.delete(`/api/home?id=${id}`)
      toast.success("Blog added Successfuly");
      setOpen(false);
      location.reload();
    } catch (error:any) {
      toast.error(error.message);
      console.log("Added failed", error.message);
    }
  }

  return (

    <div className='flex flex-col justify-center gap-5'>
      <div className={grid ? 'w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5' : 'w-full flex flex-col justify-between gap-3 '}>
        {
          FilterBlog.slice(0, displayBlogs).map((blog: any) => {
            return (
              <div key={blog._id} >
                <div className={grid ? " w-full flex flex-col justify-center items-center gap-4 border rounded-xl py-4" : "w-full flex items-center justify-between gap-4 border-2 p-3 rounded-xl"}>
                  <Link className='w-[95%]' href={`/home/${blog._id}`}>{blog?.title}</Link>

                  <Button className='w-[5%]'onClick={() => setOpen(true)} >Delete</Button>


                  {/* delete dialog */}
                  <Dialog open={open} >
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Delete Blog</DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="title" className="text-right">
                          {blog.title} 
                          </Label>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="description" className="text-right">
                          {blog.desc}
                          </Label>
                          
                        </div>
                      </div>
                      <DialogFooter>
                        <Button type="submit" onClick={() => setOpen(false)}>Cancel</Button>
                        <Button type="submit" onClick={(e) => handleSubmit(blog._id,e)} >Delete</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            )
          })
        }



      </div>

      {displayBlogs < FilterBlog.length ? (
        <button onClick={handleExpand}>Expand...</button>
      ) : null}
    </div>
  )
}

export default AllBlog