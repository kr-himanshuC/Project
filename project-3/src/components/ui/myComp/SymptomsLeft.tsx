import Image from 'next/image'
import React from 'react'

function SymptomsLeft() {
    return (
        <div className=" flex flex-col @lg:gap-15 @lg:justify-center justify-between @md:gap-10 gap-3 w-2/6 @md:w-2/5">
            <div className="relative h-25 flex items-center self-end">
                <div className="absolute @lg:top-0 top-8 -left-2 ">
                    <div className="relative @lg:w-25 @lg:h-25 @md:w-16 @md:h-16 w-8 h-8">
                        <Image src="/corona3.png" alt='' fill objectFit='cover'></Image>
                    </div>
                </div>
                <span className='symptoms-text'>  High Fever</span>
            </div>


            <div className="relative h-25 flex items-center self-center">
                <div className="absolute top-0 -left-2">
                    <div className="relative w-25 h-25">
                        <Image src="/corona3.png" alt='' fill objectFit='cover'></Image>
                    </div>
                </div>
                <span className=' symptoms-text'>  Loss sense of smell</span>
            </div>

            <div className="relative self-start">
                
                    <Image src="/corona3.png" width={200} height={200} alt='' objectFit='cover' className='absolute -top-9 -left-9' />
                    <span className='ml-20 px-7 py-4 bg-lightBgColor/10 text-primaryColor text-end rounded-[10px]  font-semibold text-[8.75px] @md:text-xl
'> Dry cough</span>

            </div>

        </div>
    )
}

export default SymptomsLeft