"use client"
import Link from 'next/link'
import React from 'react'

const AuthNavbar = () => {
    return (
        <nav className="w-full max-w-screen px-4 py-4 mx-auto bg-white bg-opacity-90 top-3 shadow lg:px-8 backdrop-blur-lg backdrop-saturate-150 z-[9999]">
            <div className="container flex flex-wrap items-center justify-center mx-auto text-slate-800">
                <Link
                    href="/"
                    className="mr-4 block cursor-pointer py-1.5 text-gray-600 font-bold text-3xl"
                >
                    <span className="text-orangeColor">Job</span> Portal
                </Link>
            </div>
        </nav>
    )
}

export default AuthNavbar