import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex h-screen w-screen   '>
        <div className=" flex w-[40%] m-auto justify-between">
            <Link href={'/signup'} className="p-7 border-2 rounded-xl">
                Student
            </Link>

            <Link href={'/adminsignup'} className="p-7 border-2 rounded-xl">
                Recruiter
            </Link>
        </div>
    </div>
  )
}

export default page