import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className="flex justify-between items-center m text-[#FFFFFF] top-[41px] left-[70px]">
        {/* Logo */}
        <div className=" flex items-between  w-[251px] h-[44px] top-[50px] left-[70px]">
          <span className=' font-bold text-[32px] leading-[100%] tracking-normal'>Vaccination.ng</span>
          <hr className='w-[100px]  h-[0px] top-[94px] left-[70px] border-[#17C2EC] border-[3px]' />
        </div>


        {/* pages */}
        <div className="flex items-start gap-[25px]">
          <div className="w-[76px] h-[44px] flex flex-col justify-between items-center gap-1">
            <Link href={'#'} className='navbar-link !font-[700] !opacity-100'>Home</Link>
            <div className="w-[10px] h-[10px] bg-[#17C2EC] rounded-full"></div>
          </div>
          <Link href={'#'} className='navbar-link'>Services</Link>
          <Link href={'#'} className='navbar-link'>Schedule</Link>
          <Link href={'#'} className='navbar-link'>Contact us</Link>
        </div>

        {/* button */}
        <div className="bg-[#C4C4C41A] !bg-opacity-10 px-[26px] py-5 rounded-[20px]">
          <button><span className='navbar-link !opacity-100 !font-[700] text-[#17C2EC]'>Check Status</span></button>
        </div>
      </div>
  )
}

export default Navbar