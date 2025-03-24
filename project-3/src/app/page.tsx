import React from "react";
import Navbar from "@/components/ui/myComp/Navbar";
import Hero from "@/components/ui/myComp/Hero";
import Footer from "@/components/ui/myComp/Footer";
import VaccineType from "@/components/ui/myComp/VaccineType";
import Result from "@/components/ui/myComp/Result";
import Vaccination from "@/components/ui/myComp/Vaccination";

export default function Home() {
  return (
    <>
      <div className="w-full overflow-auto ">
        {/* Background Image */}
        

        {/* Content */}
        <div className="@container relative h-auto bg-backgroundColor ">
        <div className=" absolute bg-[url('/image.png')] h-full min-w-screen opacity-20 bg-cover"></div>
          <Navbar />
          <Hero />
          <Footer />
        </div>

        <div className="@container">
        <VaccineType />
        </div>
        
        <div className="@container relative h-auto bg-backgroundColor ">
        {/* <div className=" absolute bg-[url('/image.png')] h-full min-w-screen opacity-20 bg-cover"></div> */}
          <Result />
        </div>

        <div className="@container relative h-auto bg-backgroundColor ">
        {/* <div className=" absolute bg-[url('/image.png')] h-full min-w-screen opacity-20 bg-cover"></div> */}
          <Vaccination />
        </div>

      </div>
    </>
  );
}
