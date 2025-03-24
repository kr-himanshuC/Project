import Image from "next/image";
import React from "react";

function HeroRight() {
  return (
    <div className="relative flex justify-center w-[306px] h-[309px] @md:w-[622px] @md:h-[617px] ">
      {/* Image */}
      <div className="relative w-[256px] h-[275px] @md:w-[533px] @md:h-[571px] ">
        <Image
          src="/vaccine.png"
          layout="fill"
          alt=""
          className="bg-primaryColor rounded-[43.19px]"
        />
      </div>

      {/* Group 17 */}
      <div className="absolute flex justify-center items-center object-cover w-[50px] h-[50px] rounded-[10px] left-0 top-[135px] @md:w-[100px] @md:h-[100px] @md:top-[260px]  @md:rounded-[20px] bg-secondaryColor">
        <Image
          src="/doctor.png"
          width={80}
          height={80}
          alt=""
          objectFit="cover"
          className=""
        />
      </div>

      {/* Group 18 */}
      <div className="absolute flex justify-center items-center object-cover w-[50px] h-[50px] rounded-[10px] right-0 top-[135px] @md:w-[100px] @md:h-[100px] @md:top-[260px] @md:rounded-[20px] bg-[#FFFFFF]">
        <Image
          src="/corona.png"
          width={80}
          height={80}
          alt=""
          objectFit="cover"
          className=""
        />
      </div>

      {/* Group 21 */}
      <div className="absolute flex items-center gap-4  left-0 bottom-0 p-4 @md:p-8 light-background rounded-[20px]">
        {/* Group 20 */}
        <div className=" flex items-center">
          <div className="relative w-[38px] h-[38px] @md:w-[60px] @md:h-[60px]">
            <Image
              src="/doctor1.png"
              layout="fill"
              alt=""
              className="rounded-[10px]"
            />
          </div>
          <div className="relative w-[38px] h-[38px] @md:w-[60px] @md:h-[60px]">
            <Image
              src="/doctor2.png"
              layout="fill"
              alt=""
              className="rounded-[10px]"
            />
          </div>
          <div className="relative w-[38px] h-[38px] @md:w-[60px] @md:h-[60px]">
            <Image
              src="/doctor3.png"
              layout="fill"
              alt=""
              className="rounded-[10px]"
            />
          </div>
        </div>

        {/* Group 19 */}

        <span className=" white-text">
          20+ <br />
          <span className="blue-text">Specialists</span>
        </span>
      </div>
    </div>
  );
}

export default HeroRight;
