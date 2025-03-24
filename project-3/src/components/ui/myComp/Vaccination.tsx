import React from 'react'
import { LuShield } from "react-icons/lu";
import { Button } from '@/components/ui/button';
import { FaArrowRight } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { IoThermometer } from "react-icons/io5";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function Vaccination() {
  return (
    <div className='@lg:max-w-[1300px] @md:max-w-[668px] @sm:max-w-[307px] max-w-full flex flex-col mx-auto gap-10 p-[30px]'>
      <div className="flex flex-col gap-6 @lg:flex-row @lg:justify-between">
        {/* Left */}
        <div className="white-text !text-2xl">
          Why get vaccinated
          today?
        </div>

        {/* Right */}
        <div className="font-normal text-[14px] text-secondaryColor/50 leading-[100%] tracking-normal">
          Magna adipiscing at elit at ornare lectus nibh lorem. <br />
          Ac, sed ac lorem pellentesque vestibulum risus matti. <br />
          In molestie condimentum malesuada non.
        </div>

      </div>

      <div className=" flex flex-col gap-8 @lg:flex-row @lg:items-end">
        {/* Left */}
        <div className="light-background rounded-[20px] rounded-tr-[80px]  flex flex-col gap-7 p-[25px] @lg:w-1/3">
          {/* Icon */}
          <span className="size-[50px] light-background rounded-[10px]">
            <LuShield className='size-[30px] m-[10px] text-primaryColor' />
          </span>

          <span className='blue-text'>Protects your immune <br />
            system against viruses</span>

          <span className='white-text'>Velit ut consectetur mauris, orci amet,
            faucibus.
            Sit turpis fringilla ipsum pretium,
            dictum. Dolor eget vel nulla lorem ac.</span>

          <Button className='justify-start text-primaryColor bg-transparent'> Read More <FaArrowRight /> </Button>
        </div>


        {/* Right */}
        <div className="flex flex-col gap-10 @md:flex-row  @lg:h-min ">
          <Card className='bg-transparent w-3/4 @md:w-1/2  rounded-[20px] @lg-w-min'>
            <CardHeader>
              <CardTitle> <div className=" flex justify-center items-center rounded-[10px] light-background size-[50px]"> <LuUsers className='size-[30px] text-secondaryColor' /></div></CardTitle>
            </CardHeader>
            <CardContent className='white-text'>
              Minimize the spread
              of the Virus
            </CardContent>
            <CardFooter>
            <Button className='text-start text-secondaryColor/50 bg-transparent'> Read More <FaArrowRight /> </Button>
            </CardFooter>
          </Card>

          <Card className='bg-transparent w-3/4 @md:w-1/2  rounded-2xl @lg-w-min'>
            <CardHeader>
              <CardTitle> <div className=" flex justify-center items-center rounded-[10px] light-background size-[50px]"> <IoThermometer className='size-[30px] m-[10px] text-secondaryColor' /></div></CardTitle>
            </CardHeader>
            <CardContent className='white-text'>
            Protect yourself
            </CardContent>
            <CardFooter>
            <Button className='text-start text-secondaryColor/50 bg-transparent'>Read More <FaArrowRight /> </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Vaccination