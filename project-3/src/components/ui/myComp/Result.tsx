import React from 'react'
import { Input } from "@/components/ui/input"


function Result() {
    return (
        <div className='@lg:max-w-[1300px] @md:max-w-[668px] @sm:max-w-[307px] max-w-full mx-auto'>
            <div className="my-18 ">
                <div className="bg-lightBgColor/15 white-text @max-lg:text-[20px] p-11 rounded-tl-[20px] rounded-tr-[20px]">
                    Check your COVID-19 result on our Database
                </div>

                <div className="flex flex-col @max-lg:items-center justify-center gap-14  @max-lg:p-3 light-background white-text @lg:p-11 rounded-bl-[20px] rounded-br-[20px] ">
                    <div className="flex items-start justify-between gap-10 @md:gap-14 @max-lg:mt-10 @max-md:w-[280px] @max-lg:flex-col">
                        <Input  type="text" className='border-3 border-primaryColor rounded-[20px] white-text p-6 @md:p-8 w-full' placeholder='Okeowo' />
                        <Input type="text" className='border-3 border-secondaryColor/90 rounded-[20px] white-text p-6 @md:p-8 w-full opacity-50' placeholder='NIK Number' />
                        <button className=" white-text px-6 py-5 rounded-[20px] light-background bg-opacity-10 border-primaryColor border-2">
                            Check
                        </button>
                       
                    </div>

                    <div className="text-center text-[10px] @md:text-[14px] @lg:text-2xl w-full @max-lg:my-6 bg-lightBgColor/5 p-4 @md:p-7 text-primaryColor rounded-[20px]">
                        Need a certificate for your COVID-19 result? Please click&nbsp; <span className='underline'> here</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result