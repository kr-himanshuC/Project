import Image from 'next/image'
import React from 'react'
import SymptomsLeft from './SymptomsLeft'
import SymptomsRight from './SymptomsRight'

function Symptoms() {
    return (
        <div className="text-center text-white p-4">
            <div className='font-[700] text-[12px] @md:text-xl @lg:text-2xl text-secondaryColor m-4'>Covid-19 Prevention</div>
            <div className="font-[800] text-2xl @md:text-4xl @lg:text-5xl text-primaryColor m-5"> COVID-19 <span className='text-secondaryColor'> Symptoms</span></div>
            <div className="font-[500] text-[12px] @md:text-[18px] @lg:text-2xl opacity-50">Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit.
                Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.</div>

            <div className="relative mt-30 w-full flex justify-between py-10">
                
                <SymptomsLeft />
                <SymptomsRight />
                <div className="absolute -z-1 @lg:left-3/13 @md:left-4/14 left-3/13 bottom-4">
                    <div className="relative @lg:w-[710px] @lg:h-[530px] @md:w-[460px] @md:h-[345px] w-[220px] h-[167px]">
                        <Image src="/men.png" fill objectFit='contain' alt=''></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Symptoms