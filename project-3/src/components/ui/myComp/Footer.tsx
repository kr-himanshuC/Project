import React from 'react'
import { FaRegClock } from 'react-icons/fa6'
import { FiShield } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { SlCalender } from 'react-icons/sl'

function Footer() {
  return (
    <div className="">
      {/* Group 16 */}
      <div className="absolute w-[1299px] h-[220px] top-[804px] left-[70px]">
        {/* Group 6 */}
        <div className="absolute w-[405.68768310546875px] h-[50px]">
          {/* Group 5 */}
          <div className="absolute w-[49.96154022216797px] h-[50px]  ">
            <div className=" absolute w-[100%] h-[100%] bg-[#C4C4C41A] bg-opacity-10 rounded-[10px]">
              <FaRegClock className=' absolute h-[30px] w-[29.9769229888916px] top-2.5 left-2.5 text-[#17C2EC]' />;
            </div>
          </div>

          {/* Text */}
          <div className="absolute w-[335.7415466308594px] h-[29px] top-[12px] left-[70px] white-text"> Schedule your Vaccination </div>
        </div>

        {/* Group 15 */}
        <div className="absolute w-[1299px] h-[160px] top-[60px]">
          <div className="absolute w-[100%] h-[150px] top-[10px] rounded-tr-[20px] rounded-tl-[20px] bg-[#C4C4C41A] bg-opacity-10">
            {/* Group 14 */}
            <div className="absolute flex justify-between w-[940.276123046875px] h-[58px] top-[46px] left-[40px]">

              {/* Group 11  */}
              <div className="flex justify-between items-center h-[50px]">

                {/* Group 6 */}
                <div className="flex justify-center items-center w-[50px] h-[50px] bg-[#C4C4C41A] bg-opacity-10 rounded-[10px]">
                  <HiOutlineLocationMarker className='w-[30px] h-[30px] text-[#17C2EC]' />
                </div>

                {/* Group 10 */}
                <div className="flex flex-col">
                  <span className='white-text !font-[600] !opacity-50'>Location</span>
                  <span className='white-text'>Ikeja Lagos, Nigeria</span>
                </div>
              </div>

              {/* Group 12 */}
              <div className="flex justify-between items-center h-[50px]">

                {/* Group 6 */}
                <div className="flex justify-center items-center w-[50px] h-[50px] bg-[#C4C4C41A] bg-opacity-10 rounded-[10px]">
                  <SlCalender className='w-[30px] h-[30px] text-[#17C2EC]' />
                </div>

                {/* Group 10 */}
                <div className="flex flex-col">
                  <span className='white-text !font-[600] !opacity-50'>Date</span>
                  <span className='white-text'>29 February, 2022</span>
                </div>
              </div>

              {/* Group 13 */}
              <div className="flex justify-between items-center h-[50px]">

                {/* Group 6 */}
                <div className="flex justify-center items-center w-[50px] h-[50px] bg-[#C4C4C41A] bg-opacity-10 rounded-[10px]">
                  <FiShield className='w-[30px] h-[30px] text-[#17C2EC]' />
                </div>

                {/* Group 10 */}
                <div className="flex flex-col">
                  <span className='white-text !font-[600] !opacity-50'>Vaccine Type</span>
                  <span className='white-text'>Mordena</span>
                </div>
              </div>

            </div>

            {/* Button */}
              <div className="absolute px-[25px] py-[20px] bg-[#17C2EC] top-[50px] left-[1117px] rounded-[20px]">
                <button className='white-text  '>Submit</button>
              </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer