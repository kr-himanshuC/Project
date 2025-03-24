import React from "react";

function HeroLeft() {
  return (
    <div className="flex flex-col gap-12 @md:gap-18 ">
      <div className="flex flex-col gap-7 @md:gap-11 ">
        <div className="blue-text ">
          Get Vaccinated. Boost your Immune System
        </div>

        <div className="font-[800] text-2xl @md:text-5xl leading-[100%] tracking-normal text-secondaryColor">
          COVID-19 Vaccination <br /> Got Easier With,
          <br />
          <span className=" text-primaryColor">Vaccination.ng</span>
        </div>

        <div className="white-text !opacity-70">
          Vaccination.ng will help you find the nearest <br />
          centre for vaccination, in all 36 states in Nigeria.
        </div>
      </div>

      {/* Group 7 */}
      <div className=" flex gap-5 ">
        {/* Button 1 */}

        <button className="white-text px-6 py-5 @md:px-6 @md:py-5  bg-primaryColor rounded-[20px]">
          Get Vaccine
        </button>

        {/* Button 2 */}

        <button className="white-text px-6 py-5 rounded-[20px] light-background border-primaryColor border-2">
          Help Centre
        </button>
      </div>
    </div>
  );
}

export default HeroLeft;
