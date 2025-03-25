"use client"
import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

function Navbar() {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    console.log("click");
    setToggle(!toggle)
  }

  return (
    <div className="@lg:max-w-[1300px] @md:max-w-[668px] @sm:max-w-[307px] max-w-full  mx-auto flex justify-between items-center pb-16 py-10 text-secondaryColor ">
      {/* Logo */}
      <div className=" flex flex-col gap-2">
        <span className=" font-bold text-2xl @md:text-3xl leading-[100%] tracking-normal">
          Vaccination.ng
        </span>
        <hr className=" w-18 @md:w-24 border-primaryColor border-[3px]" />
      </div>

      {/* pages */}
      <div className={`hidden @lg:flex items-start gap-6 ${toggle ? 'toggleNavbar' : ''} `}>
        <div className="flex flex-col justify-between items-center gap-1">
          <Link href={"#"} className="navbar-link !font-[700] !opacity-100">
            Home
          </Link>
          <div className=" bg-primaryColor w-2.5 h-2.5 rounded-full"></div>
        </div>
        <Link href={"#"} className="navbar-link">
          Services
        </Link>
        <Link href={"#"} className="navbar-link">
          Schedule
        </Link>
        <Link href={"#"} className="navbar-link">
          Contact us
        </Link>
      </div>

      {/* button */}
      <div className="hidden @lg:block light-background px-7 py-5 rounded-[20px]">
        <button>
          <span className="navbar-link !opacity-100 !font-[700] text-primaryColor">
            Check Status
          </span>
        </button>
      </div>

      {/* Menu button */}
      <div className="@lg:hidden light-background rounded-[10px] p-2" onClick={handleToggle}>
        {toggle ?  <RxCross2  className="w-9 h-9" /> :
        <HiMenuAlt3 className="w-9 h-9 " /> 
}
      </div>
    </div>
  );
}

export default Navbar;
