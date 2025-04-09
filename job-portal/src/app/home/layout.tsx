"use client"
import AuthNavbar from '@/components/myComp/AuthNavbar'
import React, { useContext, useEffect, useState } from 'react'


import { useRouter } from 'next/navigation'
import Sidebar from '@/components/myComp/Sidebar'


const layout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    
    return (
        <div className="flex flex-col h-screen">
            <AuthNavbar />
            <div className='flex w-screen h-screen'>
                <Sidebar />
                <div className="p-8 w-[85%] bg-gray-100">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default layout