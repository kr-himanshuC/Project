import React from 'react'

function Hero() {
  return (
    <>
        {/* Group 4 */}
              <div className="absolute w-[603px] h-[354px] top-[211px] left-[70px]">
                <div className="absolute w-[553px] h-[29px] top-[0px] left-[0px]">
                  <span className='blue-text'>Get Vaccinated. Boost your Immune System</span>
                </div>
        
                <div className="absolute w-[552px] h-[177px] top-[69px] left-[0px] font-[800] text-5xl leading-[100%] tracking-normal text-[#FFFFFF]">
                  COVID-19 Vaccination
                  Got Easier With,<br />
                  <span className='font-[800] text-5xl leading-[100%] tracking-normal text-[#17C2EC]'>Vaccination.ng</span>
                </div>
        
                <div className="absolute w-[603px] h-[58px] top-[296px] left-[0px]">
                  <span className='white-text !opacity-70'>Vaccination.ng will help you find the nearest <br />
                    centre for vaccination, in all 36 states in Nigeria.</span>
                </div>
              </div>
        
              {/* Group 7 */}
              <div className="absolute flex justify-between w-[420px] h-[69px] top-[615px] left-[70px]">
                {/* Button 1 */}
                <div className="px-[25px] py-[20px] bg-[#17C2EC] rounded-[20px]">
                  <button className='white-text w-[150px] h-[29px] '>Get Vaccine</button>
                </div>
        
                {/* Button 2 */}
                <div className="px-[25px] py-[20px] rounded-[20px] bg-[#C4C4C41A] bg-opacity-10 border-[#17C2EC]  border-2">
                  <button className='white-text w-[150px] h-[29px] '>Help Centre</button>
                </div>
              </div>
        
        
              {/* Group 22 */}
              <div className="absolute w-[622px] h-[617px] top-[210px] left-[747px]">
                {/* Image */}
                <img src="vaccine.png" className=' absolute w-[532.2px] h-[571px] left-[50px] bg-[#17C2EC] rounded-[43.19px]' />
        
                {/* Group 17 */}
                <div className="absolute flex justify-center items-center w-[100px] h-[100px] top-[236px] rounded-[20px] bg-[#FFFFFF]">
                  <img src="doctor.png" alt="" className='w-[80px] h-[65.39px]  object-cover' />
                </div>
        
                {/* Group 18 */}
                <div className="absolute flex justify-center items-center w-[100px] h-[100px] top-[236px] left-[522px] rounded-[20px] bg-[#FFFFFF]">
                  <img src="corona.png" alt="" className='w-[80px] h-[73.04px]  object-cover' />
                </div>
        
                {/* Group 21 */}
                <div className="absolute w-[374px] h-[100px] top-[517px] bg-[#C4C4C433] bg-opacity-20% rounded-[20px]">
                  {/* Group 20 */}
                  <div className="absolute flex w-[167px] h-[60px] top-[20px] left-[20px]">
                    <img src="doctor1.png" alt="" className="doctor-image" />
                    <img src="doctor2.png" alt="" className="doctor-image" />
                    <img src="doctor3.png" alt="" className="doctor-image" />
                  </div>
        
                  {/* Group 19 */}
                  <div className="">
                    <span className='absolute top-[26px] left-[208px] white-text'>20+</span>
                    <span className='absolute top-[48px] left-[208px] blue-text'>Specialists</span>
                  </div>
                </div>
              </div>
    </>
  )
}

export default Hero