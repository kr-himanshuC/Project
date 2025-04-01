"use client"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'
import AddBlog from '@/components/myComp/AddBlog'
import AllBlog from '@/components/myComp/AllBlog/AllBlog'
import { Toggle } from "@/components/ui/toggle"
import { BsFillGridFill } from "react-icons/bs";
import { Input } from '@/components/ui/input'

const Home = () => {


  const [blogs, setBlogs] = useState([]);
  const [searchQuary, setSearchQuery] = useState('');
  const [filterBlog, setFilterBlog] = useState([]);
  const [grid, setGrid] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('/api/home');
        console.log(res.data.blogs);
        setBlogs(res.data.blogs);

      } catch (error: any) {
        toast.error(error.message);
        console.log("Blogs not fetch", error.message);
      }
    })();
  }, []);

  const removeBlog = async () => {
    try {
      const res = await axios.delete('api/home');
      toast.message("Blog deleted successfully");
    } catch (error: any) {
      toast.error(error.message);
      console.log("Blogs not fetch", error.message);
    }
  }

  // Search 
  useEffect(() => {
    handleSearch(searchQuary)
  }, [searchQuary, blogs])

  const handleSearch = (query: string) => {
    let searchBlogs = blogs;

    if (query) {
      searchBlogs = searchBlogs.filter((blog: any) => blog.title.toLowerCase().includes(query.toLowerCase()))
    }
    setFilterBlog(searchBlogs);
  }



  return (
    <div className='w-[75%] mx-auto pb-50'>

      <div className="flex justify-between items-center gap-10 p-4 my-6">

        {/* Search */}
        <Input className='w-[50%] bg-orange-50 font-bold p-6 !text-black text-xl' placeholder='Search..' value={searchQuary} onChange={(e: any) => {
          setSearchQuery(e.target.value)
          handleSearch(e.target.value)
        }} />

        <div className="flex items-center gap-10">
          <div className="text-xl">Total Blogs: {filterBlog.length}</div>
          <Toggle aria-label="Toggle italic" onPressedChange={(pre) => setGrid(!pre)}>
            <BsFillGridFill className="h-4 w-4" />
          </Toggle>
          <AddBlog />
        </div>
      </div>


      {/* Blogs */}
      <AllBlog FilterBlog={filterBlog} grid={grid} />

    </div>
  )
}

export default Home