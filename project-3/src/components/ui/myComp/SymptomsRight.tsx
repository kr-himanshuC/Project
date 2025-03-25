import Image from 'next/image'
import React from 'react'

function SymptomsRight() {
    return (
        <div className=" flex flex-col gap-15 justify-between @md:gap-10 w-2/6 @md:w-2/5 ">
            <div className="relative h-25 flex items-center self-start">
                <div className="absolute top-0 -left-2">
                    <div className="relative w-25 h-25">
                        <Image src="/corona3.png" alt='' fill objectFit='cover'></Image>
                    </div>
                </div>
                <span className='symptoms-text'> Loss of sense of taste </span>
            </div>


            <div className="relative h-25 flex items-center self-center">
                <div className="absolute top-0 -left-2">
                    <div className="relative w-25 h-25">
                        <Image src="/corona3.png" alt='' fill objectFit='cover'></Image>
                    </div>
                </div>
                <span className=' symptoms-text '> Difficulty Breathing </span>
            </div>

            <div className="relative h-25 flex items-center self-end">
                <div className="absolute top-0 -left-2">
                    <div className="relative w-25 h-25">
                        <Image src="/corona3.png" alt='' fill objectFit='cover'></Image>
                    </div>
                </div>
                <span className=' symptoms-text '> Sore Throat </span>
            </div>

        </div>
    )
}

export default SymptomsRight