import Image from 'next/image'
import React from 'react'

function VaccineType() {
  return (
    <div className='flex justify-center items-center grayscale-100 overflow-hidden opacity-50 gap-4  @md:gap-8 @lg:max-w-[1300px] @md:max-w-[668px] @sm:max-w-[306px] mx-auto w-full h-10 @md:h-20 @lg:h-[150px] '>
        <div className="relative  w-[70%] h-[80%] ">
        <Image src="/moderna.png" layout='fill' objectFit='contain' alt="" />
        </div>

        <div className="relative w-[70%] h-[80%] ">
        <Image src="/pfizer.png" layout='fill' objectFit='contain'  alt="" />
        </div>

        <div className="relative flex items-center w-[70%] h-[80%] ">
        <Image src="/astraZeneca.png" layout='fill' objectFit='cover' alt="" />
        </div>

        <div className="relative w-[70%] h-[80%] ">
        <Image src="/sinovac.png" layout='fill' objectFit='cover' alt="" />
        </div>
    </div>
  )
}

export default VaccineType