"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from 'next/image'


function Registration() {

    return (
        <div className='flex @lg:max-w-[1300px] @md:max-w-[668px] @sm:max-w-[307px] max-w-full  mx-auto mt-9'>
            {/* Left */}
            <div className="">
                <div className="text-center m-4 @md:text-start font-[700] text-black text-2xl @md:text-4xl @lg:text-5xl leading-[100%] tracking-normal">Get your vaccine
                    registration today</div>

                <div className="@lg:hidden">
                    {/* Right */}
                    <div className=" relative w-min @lg:flex justify-end items-end ">
                        <div className="absolute z-20 white-text text-center top-1/12 left-2/5">COVID-19 <br />
                            Vaccine</div>


                        <div className='relative pt-10 mt-10 ml-10 flex  justify-end bg-backgroundColor rounded-[20px]'>
                            <div className="absolute -top-1/12 -left-1/12 ">
                                <div className="relative w-[75px] h-[75px] ">
                                    <Image src="/corona2.png" layout='fill' objectFit='cover' alt='' className='rounded-[20px]' />
                                </div>
                            </div>
                            <Button className="absolute bottom-1/8 left-1/5 z-20 light-background white-text">Verify Status</Button>
                            <div className="relative w-[286px] h-[365px] ">
                                <Image src="/vaccine2.png" layout='fill' alt='' className='rounded-[20px]'/>
                            </div>
                        </div>
                    </div>
                </div>

                <Card className='border-none shadow-none m-0 px-0'>
                    <CardContent className='p-0'>
                        <form action="" className=''>

                            <div>
                                <Label className='my-4 font-[700] text-[14px] @md:text-xl @lg:text-2xl leading-[100%] tracking-normal text-black'>Patient’s Full Name</Label>
                                <Input placeholder='Full name' className='bg-black/10 font-[500] text-[14px] p-5 @md:text-xl @md:p-7' />
                            </div>

                            <div>
                                <Label className='my-4 font-[700] text-[14px] @md:text-xl @lg:text-2xl leading-[100%] tracking-normal  text-black'>Mobile Number</Label>
                                <div className='my-3 font-[500] text-[12px] @md:text-xl leading-[100%] tracking-normal text-black/50'>
                                    Notifications for appointment and reminders will be sent to this
                                    provided number
                                </div>

                                <div className="flex flex-col gap-4">
                                    <Input placeholder='Phone number' className='bg-black/10 font-[500] text-[14px] p-5 @md:text-xl @md:p-7' />
                                    <Button className='w-36 bg-primaryColor white-text @md:py-7 rounded-[20px] @md:px-7'>Verify</Button>
                                </div>
                            </div>

                        </form>
                    </CardContent>
                    <CardFooter className='p-0'>
                        <Button type='submit' className='w-full bg-primaryColor white-text @md:py-7 rounded-[20px]'>Submit</Button>
                    </CardFooter>
                </Card>

                <div className='text-center font-[600] text-[14px] @md:text-xl my-7'>Already registered ? &ensp;&ensp;&ensp;  <span className='text-primaryColor'>Check your status</span> </div>
            </div>


            {/* Right */}
            <div className="hidden relative w-full @lg:flex justify-end items-center ">
                <div className="absolute z-20 white-text  @md:!text-xl text-center top-1/4 left-3/4">COVID-19 <br />
                    Vaccine</div>


                <div className='relative pt-10 mt-10 ml-10 flex justify-end bg-backgroundColor rounded-[20px]'>
                    <div className="absolute z-20 -top-1/12 -left-1/12">
                        <div className="relative w-[75px] h-[75px] ">
                            <Image src="/corona2.png" layout='fill' objectFit='cover' alt='' />
                        </div>
                    </div>
                    <Button className="absolute bottom-1/8 left-1/4 z-20 light-background white-text !text-[20px]">Verify Status</Button>
                    <div className="relative w-[286px] h-[365px]">
                        <Image src="/vaccine2.png" layout='fill' alt='' className='rounded-[20px]'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration