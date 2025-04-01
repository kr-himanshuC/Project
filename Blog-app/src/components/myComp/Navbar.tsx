"use client"
import React from 'react'
import { Button } from '../ui/button'
import { signOut } from 'next-auth/react'
import { useSession } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
    const { data: session, status } = useSession()
    if (status === "authenticated") {
        return (
        <div className='w-full mt-3 mx-auto  bg-gray-600 '>
            {/* Navbar */}
            <div className=" w-[70%] mx-auto flex items-center justify-between py-10  ">
                <div className="font-bold text-2xl text-white">Blogs...</div>
                <Button onClick={() => signOut({ callbackUrl: "/", redirect: true })} className='p-7 text-xl'>Sign Out</Button>

            </div>
        </div>
        )
    }


    
    return(
    <div className='w-[90%] mt-3 mx-auto '>
        {/* Navbar */}
        <div className="flex items-center justify-between p-10 bg-gray-600 rounded-2xl ">
            <div className="font-bold text-2xl">Blogs...</div>
            <div className="">
            <Link
                href={'/signin'}
                type="button"
                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
                Sign in
            </Link>
            <Link
                href={'/signup'}
                type="button"
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
                Sign Up
            </Link>
            </div>
        </div>
    </div>
    )




}

export default Navbar