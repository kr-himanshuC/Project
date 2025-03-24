import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { FiShield } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { SlCalender } from "react-icons/sl";

function Footer() {
  return (
    <div className="@lg:max-w-[1300px] @md:max-w-[668px] @sm:max-w-[306px]  max-w-full mx-auto flex flex-col gap-2.5">
      {/* Group 6 */}
      <div className=" flex items-center gap-3 @max-lg:my-10 @lg:mt-0 @lg:pt-4  ">
        <div className=" flex justify-center items-center w-[50px] h-[50px] light-background rounded-[10px]">
          <FaRegClock className="h-[30px] w-[30px] text-primaryColor" />
        </div>

        <div className="white-text">Schedule your Vaccination</div>
      </div>

      {/* Group 15 */}

      <div className="grid grid-cols-1 gap-5 p-5 @lg:py-12 @md:grid-cols-2 @lg:grid-cols-7 rounded-tr-[20px] rounded-tl-[20px] light-background">
        <div className="flex items-center gap-4 h-[50px] @lg:col-span-2">
          <div className="flex justify-center items-center w-[50px] h-[50px] light-background rounded-[10px]">
            <HiOutlineLocationMarker className="w-[30px] h-[30px] text-primaryColor" />
          </div>
          <div className="white-text flex flex-col gap-1 @md:@max-lg:!text-[20px]">
            <span className=" !font-[600] !opacity-50">Location</span>
            Ikeja Lagos, Nigeria
          </div>
        </div>

        {/* Group 12 */}
        <div className="flex items-center gap-4 h-[50px] @lg:col-span-2">
          <div className="flex justify-center items-center w-[50px] h-[50px] light-background rounded-[10px]">
            <SlCalender className="w-[30px] h-[30px] text-primaryColor" />
          </div>
          <div className="white-text flex flex-col gap-1 @md:@max-lg:!text-[20px]">
            <span className="!font-[600] !opacity-50">Date</span>
            29 February, 2022
          </div>
        </div>

        {/* Group 13 */}
        <div className="flex items-center gap-4 h-[50px] @lg:col-span-2">
          <div className="flex justify-center items-center w-[50px] h-[50px] light-background rounded-[10px]">
            <FiShield className="w-[30px] h-[30px] text-primaryColor" />
          </div>
          <div className="white-text flex flex-col gap-1 @md:@max-lg:!text-[20px]">
            <span className=" !font-[600] !opacity-50">Vaccine Type</span>
            Mordena
          </div>
        </div>

        {/* Button */}
        <button className="white-text rounded-[10px] @lg:col-span-1 @max-md:w-[150px] @max-md:h-[50px] @md:px-[25px] @md:py-[20px] bg-primaryColor @md:rounded-[20px] ">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Footer;
